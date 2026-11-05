/**
 * 주관식 AI 채점 — 브라우저 전송층 (난독화 제외 권장)
 *
 * 모바일에서 JSONP GET URL이 길어지거나 Apps Script 리다이렉트가 막히는 경우를 대비:
 * 1) fetch POST (text/plain)
 * 2) 숨은 iframe + form POST + postMessage  (긴 문항·모바일 주력)
 * 3) JSONP GET 폴백 (ping/usage·짧은 요청)
 */
(function (global) {
  'use strict';

  var MSG_SOURCE = 'codevCBT-short-answer-grade';
  var DEFAULT_TIMEOUT_MS = 22000;
  var PING_TIMEOUT_MS = 10000;

  function trimUrl(url) {
    return String(url || '').trim();
  }

  function withTimeout(promise, ms, label) {
    return new Promise(function (resolve, reject) {
      var done = false;
      var timer = setTimeout(function () {
        if (done) return;
        done = true;
        reject(new Error(label || 'timeout'));
      }, ms);
      promise.then(
        function (v) {
          if (done) return;
          done = true;
          clearTimeout(timer);
          resolve(v);
        },
        function (err) {
          if (done) return;
          done = true;
          clearTimeout(timer);
          reject(err);
        }
      );
    });
  }

  function sleep(ms) {
    return new Promise(function (r) {
      setTimeout(r, ms);
    });
  }

  /** fetch POST — CORS가 되는 환경에서 가장 단순 */
  function viaFetchPost(url, payload, timeoutMs) {
    return withTimeout(
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload || {}),
        redirect: 'follow',
        credentials: 'omit',
        mode: 'cors',
      }).then(function (res) {
        if (!res || !res.ok) throw new Error('http_' + (res && res.status));
        return res.json();
      }),
      timeoutMs,
      'fetch_timeout'
    );
  }

  /**
   * iframe form POST → Apps Script HtmlService postMessage
   * (긴 한글 문항·모바일 URL 한도·JSONP 리다이렉트 이슈 회피)
   */
  function viaIframePost(url, fields, timeoutMs) {
    return new Promise(function (resolve, reject) {
      var settled = false;
      var reqId = 'r' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
      var frameName = 'sai_f_' + reqId;
      var iframe = document.createElement('iframe');
      iframe.name = frameName;
      iframe.setAttribute('aria-hidden', 'true');
      iframe.style.cssText = 'position:absolute;width:0;height:0;border:0;left:-9999px;top:-9999px;';

      var form = document.createElement('form');
      form.method = 'POST';
      // 캐시·연속 POST 충돌 완화
      form.action = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_sai=' + encodeURIComponent(reqId);
      form.target = frameName;
      form.acceptCharset = 'UTF-8';
      form.style.display = 'none';

      var data = Object.assign({}, fields || {}, { embed: '1', reqId: reqId });
      Object.keys(data).forEach(function (key) {
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = data[key] == null ? '' : String(data[key]);
        form.appendChild(input);
      });

      function cleanup() {
        global.removeEventListener('message', onMsg, false);
        clearTimeout(timer);
        try {
          if (form.parentNode) form.parentNode.removeChild(form);
        } catch (_) {}
        try {
          if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
        } catch (_) {}
      }

      function finish(ok, value) {
        if (settled) return;
        settled = true;
        cleanup();
        if (ok) resolve(value);
        else reject(value || new Error('iframe_fail'));
      }

      function onMsg(ev) {
        var msg = ev && ev.data;
        if (!msg || typeof msg !== 'object') return;
        if (msg.source !== MSG_SOURCE) return;
        // 이전 요청 postMessage 무시 (연속 채점 2번째 실패 핵심)
        if (String(msg.reqId || '') !== reqId) return;
        finish(true, msg.data || null);
      }

      var timer = setTimeout(function () {
        finish(false, new Error('iframe_timeout'));
      }, timeoutMs);

      global.addEventListener('message', onMsg, false);
      document.body.appendChild(iframe);
      // iframe name 등록 후 submit (모바일에서 target 유실 방지)
      setTimeout(function () {
        if (settled) return;
        document.body.appendChild(form);
        try {
          form.submit();
        } catch (err) {
          finish(false, err);
        }
      }, 0);
    });
  }

  /** JSONP — 짧은 요청용 폴백 */
  function viaJsonp(url, query, timeoutMs) {
    return new Promise(function (resolve) {
      var cbName = 'saiCb_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
      var settled = false;
      var script = document.createElement('script');

      function finish(data) {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        try {
          delete global[cbName];
        } catch (_) {
          global[cbName] = undefined;
        }
        if (script.parentNode) script.parentNode.removeChild(script);
        resolve(data || null);
      }

      var timer = setTimeout(function () {
        finish(null);
      }, timeoutMs);

      global[cbName] = function (data) {
        finish(data);
      };
      script.onerror = function () {
        finish(null);
      };

      var q = new URLSearchParams(query || {});
      q.set('callback', cbName);
      script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + q.toString();
      (document.head || document.documentElement).appendChild(script);
    });
  }

  function toFormFields(payload) {
    var p = payload || {};
    var fields = {
      embed: '1',
      gate: p.gate == null ? '' : String(p.gate),
    };
    if (p.ping) fields.ping = '1';
    if (p.usage) fields.usage = '1';
    if (p.question != null) fields.question = String(p.question);
    if (p.studentAnswer != null) fields.studentAnswer = String(p.studentAnswer);
    if (p.answers != null) {
      fields.answers = typeof p.answers === 'string'
        ? p.answers
        : JSON.stringify(p.answers);
    }
    return fields;
  }

  /**
   * 채점/ping/usage 공통.
   * @returns {Promise<object|null>}
   */
  async function request(url, payload, options) {
    url = trimUrl(url);
    if (!url) return null;

    var opts = options || {};
    var timeoutMs = Number(opts.timeoutMs) > 0 ? Number(opts.timeoutMs) : DEFAULT_TIMEOUT_MS;
    var retries = Number(opts.retries) >= 0 ? Number(opts.retries) : 1;
    var prefer = opts.prefer || 'auto'; // auto | fetch | iframe | jsonp
    var isShort = !!(payload && (payload.ping || payload.usage));

    var attempt = 0;
    var last = null;
    // grade: iframe(긴 문항·모바일) → fetch → JSONP
    // auto: 짧은 요청은 JSONP 우선, 나머지는 fetch → iframe → JSONP
    var order;
    if (prefer === 'grade' || prefer === 'iframe') {
      // 재배포(embed) 서버: iframe 주력
      order = ['iframe', 'fetch', 'jsonp'];
    } else if (prefer === 'fetch') {
      // 구버전 서버: iframe 대기 금지 (postMessage 없음)
      order = ['fetch', 'jsonp'];
    } else if (prefer === 'jsonp') {
      order = ['jsonp'];
    } else if (isShort) {
      order = ['jsonp', 'fetch'];
    } else {
      order = ['fetch', 'jsonp'];
    }

    while (attempt <= retries) {
      attempt += 1;
      try {
        for (var i = 0; i < order.length; i++) {
          var mode = order[i];
          // 채널마다 독립 예산 — iframe 타임아웃이 fetch/jsonp를 굶기지 않게
          var channelMs;
          if (mode === 'iframe') {
            channelMs = Math.max(14000, timeoutMs);
          } else if (isShort) {
            channelMs = PING_TIMEOUT_MS;
          } else {
            channelMs = Math.min(12000, Math.max(8000, Math.floor(timeoutMs * 0.55)));
          }
          try {
            if (mode === 'jsonp') {
              last = await viaJsonp(url, flattenQuery(payload), channelMs);
            } else if (mode === 'fetch') {
              last = await viaFetchPost(url, payload, channelMs);
            } else if (mode === 'iframe') {
              last = await viaIframePost(url, toFormFields(payload), channelMs);
            }
            // ok:true 만 성공. ok:false 는 서버 확정 실패 → 다른 채널도 동일 결과라 종료
            if (last && typeof last === 'object') {
              if (last.ok === true) return last;
              if (last.ok === false) return last;
            }
          } catch (_) {
            last = null;
          }
        }
      } catch (_) {
        last = null;
      }

      if (attempt <= retries) await sleep(350 * attempt);
      else break;
    }
    return last && typeof last === 'object' ? last : null;
  }

  function flattenQuery(payload) {
    var p = payload || {};
    var q = {};
    if (p.gate != null) q.gate = String(p.gate);
    if (p.ping) q.ping = '1';
    if (p.usage) q.usage = '1';
    if (p.question != null) q.question = String(p.question);
    if (p.studentAnswer != null) q.studentAnswer = String(p.studentAnswer);
    if (p.answers != null) {
      q.answers = typeof p.answers === 'string' ? p.answers : JSON.stringify(p.answers);
    }
    return q;
  }

  function ping(url, timeoutMs) {
    return request(url, { ping: '1' }, {
      timeoutMs: timeoutMs || PING_TIMEOUT_MS,
      retries: 1,
      prefer: 'auto',
    });
  }

  function usage(url, gate, timeoutMs) {
    return request(url, { usage: '1', gate: gate }, {
      timeoutMs: timeoutMs || PING_TIMEOUT_MS,
      retries: 1,
      prefer: 'auto',
    });
  }

  function grade(url, payload, timeoutMs, prefer) {
    return request(url, payload, {
      timeoutMs: timeoutMs || DEFAULT_TIMEOUT_MS,
      // 연속 2번째 채점 끊김 완화 (채널 실패 시 1회 재시도)
      retries: 1,
      prefer: prefer || 'grade',
    });
  }

  function supportsEmbed(pingData) {
    return !!(
      pingData
      && pingData.ok === true
      && Array.isArray(pingData.features)
      && pingData.features.indexOf('embed') !== -1
    );
  }

  global.ShortAnswerAi = {
    request: request,
    ping: ping,
    usage: usage,
    grade: grade,
    supportsEmbed: supportsEmbed,
    DEFAULT_TIMEOUT_MS: DEFAULT_TIMEOUT_MS,
    PING_TIMEOUT_MS: PING_TIMEOUT_MS,
    MSG_SOURCE: MSG_SOURCE,
  };
})(typeof window !== 'undefined' ? window : globalThis);
