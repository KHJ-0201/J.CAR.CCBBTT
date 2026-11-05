/**
 * codevCBT — 주관식 보조 채점 (Apps Script 웹앱)
 *
 * 역할: 규칙 오답만 Gemini로 「정답 / 정답오타 / 오답」판정.
 * API 키는 스크립트 속성에만 두고, 이 파일·깃·프론트에 넣지 말 것.
 *
 * 스크립트 속성:
 *   GEMINI_API_KEY  — AI Studio API 키
 *   GATE_SECRET     — 프론트 SHORT_AI_GATE 와 동일
 *   GEMINI_MODEL    — (선택) 예: gemini-3.5-flash-lite
 *
 * 브라우저:
 *   - doGet + JSONP (짧은 ping/usage)
 *   - doPost JSON (fetch text/plain)
 *   - doPost form + embed=1 → iframe postMessage (모바일·긴 문항)
 */

var MAX_QUESTION = 800;
var MAX_STUDENT = 120;
var MAX_ANSWER_ITEM = 120;
var MAX_ANSWERS = 20;
var POST_MESSAGE_SOURCE = 'codevCBT-short-answer-grade';

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};
    var body = parseBody_(e);
    if (!body) body = bodyFromParams_(p);
    if (!body) {
      return respond_(p, { ok: false, error: 'bad_json' });
    }
    // ping via POST (모바일 연결 확인)
    if (String(p.ping || body.ping || '') === '1') {
      return respond_(p, pingPayload_());
    }
    if (String(p.usage || body.usage || '') === '1') {
      return respond_(p, readUsageStats_(body.gate || p.gate));
    }
    return respond_(p, gradePayload_(body));
  } catch (err) {
    var fail = { ok: false, error: 'server', message: String(err && err.message || err) };
    return respond_((e && e.parameter) || {}, fail);
  }
}

/**
 * JSONP: ?gate=&question=&answers=[...]&studentAnswer=&callback=fn
 * answers 는 JSON 배열 문자열
 */
function doGet(e) {
  try {
    var p = (e && e.parameter) || {};
    var cb = String(p.callback || '').replace(/[^\w.$]/g, '');

    // 연결 확인만 (채점 아님)
    if (String(p.ping || '') === '1') {
      var ping = pingPayload_();
      if (isEmbed_(p)) return htmlPostMessage_(ping);
      if (cb) {
        return ContentService
          .createTextOutput(cb + '(' + JSON.stringify(ping) + ')')
          .setMimeType(ContentService.MimeType.JAVASCRIPT);
      }
      return jsonOut_(ping);
    }

    // 오늘 AI 호출 수 (관리자 화면용, gate 필요)
    if (String(p.usage || '') === '1') {
      var usage = readUsageStats_(p.gate);
      if (isEmbed_(p)) return htmlPostMessage_(usage);
      if (cb) {
        return ContentService
          .createTextOutput(cb + '(' + JSON.stringify(usage) + ')')
          .setMimeType(ContentService.MimeType.JAVASCRIPT);
      }
      return jsonOut_(usage);
    }

    if (!p.studentAnswer && !cb) {
      return jsonOut_({
        ok: true,
        service: 'codevCBT-short-answer-grade',
        hint: 'GET JSONP: gate,question,answers,studentAnswer,callback | ping=1'
      });
    }

    var answers = [];
    try {
      answers = JSON.parse(String(p.answers || '[]'));
    } catch (err2) {
      answers = [];
    }

    var result = gradePayload_({
      gate: p.gate,
      question: p.question,
      answers: answers,
      studentAnswer: p.studentAnswer
    });

    if (cb) {
      return ContentService
        .createTextOutput(cb + '(' + JSON.stringify(result) + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return jsonOut_(result);
  } catch (err) {
    var fail = { ok: false, error: 'server', message: String(err && err.message || err) };
    var cb2 = String((e && e.parameter && e.parameter.callback) || '').replace(/[^\w.$]/g, '');
    if (cb2) {
      return ContentService
        .createTextOutput(cb2 + '(' + JSON.stringify(fail) + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return jsonOut_(fail);
  }
}

function gradePayload_(body) {
  body = body || {};
  var props = PropertiesService.getScriptProperties();
  var gateExpected = String(props.getProperty('GATE_SECRET') || '');
  var gateGot = String(body.gate || '');
  if (!gateExpected || gateGot !== gateExpected) {
    return { ok: false, error: 'forbidden' };
  }

  var apiKey = String(props.getProperty('GEMINI_API_KEY') || '');
  if (!apiKey) return { ok: false, error: 'no_api_key' };

  var question = String(body.question || '').trim();
  var studentAnswer = String(body.studentAnswer || '').trim();
  var answers = normalizeAnswers_(body.answers);

  if (!question || question.length > MAX_QUESTION) return { ok: false, error: 'bad_question' };
  if (!studentAnswer || studentAnswer.length > MAX_STUDENT) return { ok: false, error: 'bad_student' };
  if (!answers.length || answers.length > MAX_ANSWERS) return { ok: false, error: 'bad_answers' };
  for (var i = 0; i < answers.length; i++) {
    if (answers[i].length > MAX_ANSWER_ITEM) return { ok: false, error: 'bad_answers' };
  }

  // "." · 기호만 등 의미 토큰 없음 → Gemini 호출 없이 오답 (할당량·오판 방지)
  if (!hasMeaningfulToken_(studentAnswer)) {
    return { ok: true, correct: false, typo: false, source: 'rule' };
  }

  var preferred = String(props.getProperty('GEMINI_MODEL') || '').trim();
  var verdict = callGeminiWithFallback_(apiKey, preferred, question, answers, studentAnswer);
  // 간헐적 빈 응답 → 1회 재호출 (연속 채점 2번째 실패 완화)
  if (!verdict || typeof verdict.correct !== 'boolean') {
    Utilities.sleep(200);
    verdict = callGeminiWithFallback_(apiKey, preferred, question, answers, studentAnswer);
  }
  bumpDailyCounter_();

  if (!verdict || typeof verdict.correct !== 'boolean') {
    return { ok: false, error: 'bad_model', source: 'ai' };
  }
  return {
    ok: true,
    correct: verdict.correct,
    typo: !!verdict.typo,
    source: 'ai'
  };
}

function parseBody_(e) {
  if (!e || !e.postData || !e.postData.contents) return null;
  var raw = String(e.postData.contents || '').trim();
  if (!raw) return null;
  // application/x-www-form-urlencoded 는 parameter 쪽이 우선
  var ctype = String((e.postData && e.postData.type) || '').toLowerCase();
  if (ctype.indexOf('application/x-www-form-urlencoded') !== -1) return null;
  try {
    return JSON.parse(raw);
  } catch (err) {
    return null;
  }
}

/** form POST / 쿼리 파라미터 → 채점 body */
function bodyFromParams_(p) {
  p = p || {};
  if (!p.studentAnswer && !p.question && String(p.ping || '') !== '1' && String(p.usage || '') !== '1') {
    return null;
  }
  var answers = [];
  try {
    answers = JSON.parse(String(p.answers || '[]'));
  } catch (err) {
    answers = [];
  }
  return {
    gate: p.gate,
    question: p.question,
    answers: answers,
    studentAnswer: p.studentAnswer,
    ping: p.ping,
    usage: p.usage,
    embed: p.embed
  };
}

function isEmbed_(p) {
  return String((p && p.embed) || '') === '1';
}

/** 클라이언트가 iframe POST 지원 여부를 알 수 있게 features 포함 */
function pingPayload_() {
  return {
    ok: true,
    ping: true,
    service: POST_MESSAGE_SOURCE,
    features: ['embed']
  };
}

function respond_(p, obj) {
  var reqId = String((p && p.reqId) || '').slice(0, 64);
  if (isEmbed_(p)) return htmlPostMessage_(obj, reqId);
  return jsonOut_(obj);
}

/**
 * 숨은 iframe + form POST 용.
 * parent.postMessage 로 결과 전달 (모바일 URL 길이·CORS 회피).
 * reqId: 연속 채점 시 이전 iframe 응답이 섞이지 않게.
 */
function htmlPostMessage_(obj, reqId) {
  var envelope = {
    source: POST_MESSAGE_SOURCE,
    reqId: String(reqId || ''),
    data: obj || { ok: false, error: 'empty' }
  };
  var json = JSON.stringify(envelope)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  var html = '<!doctype html><html><head><meta charset="utf-8"></head><body>'
    + '<script>'
    + 'try{parent.postMessage(' + json + ',"*");}catch(e){}'
    + '</script></body></html>';
  return HtmlService
    .createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function normalizeAnswers_(raw) {
  if (!Array.isArray(raw)) return [];
  var out = [];
  for (var i = 0; i < raw.length; i++) {
    var s = String(raw[i] == null ? '' : raw[i]).trim();
    if (s) out.push(s);
  }
  return out;
}

/** 한글·영문·숫자가 하나라도 있으면 true (프론트 isAmbiguousShortWrong 와 동일 취지) */
function hasMeaningfulToken_(s) {
  return /[0-9A-Za-z\uAC00-\uD7A3]/.test(String(s || ''));
}

function modelCandidates_(preferred) {
  var list = [];
  var props = PropertiesService.getScriptProperties();
  var cached = String(props.getProperty('GEMINI_MODEL_OK') || '').trim();
  // 성공했던 모델을 맨 앞에 → 404 연쇄 폴백으로 수 초 낭비 방지
  if (cached) list.push(cached);
  if (preferred && list.indexOf(preferred) === -1) list.push(preferred);
  var fallbacks = [
    'gemini-3.5-flash-lite',
    'gemini-3.1-flash-lite',
    'gemini-2.5-flash-lite',
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-2.0-flash-001',
    'gemini-flash-latest',
    'gemini-1.5-flash',
    'gemini-1.5-flash-latest',
    'gemini-1.5-flash-8b'
  ];
  for (var i = 0; i < fallbacks.length; i++) {
    if (list.indexOf(fallbacks[i]) === -1) list.push(fallbacks[i]);
  }
  return list;
}

function rememberWorkingModel_(model) {
  if (!model) return;
  try {
    PropertiesService.getScriptProperties().setProperty('GEMINI_MODEL_OK', String(model));
  } catch (err) {}
}

function shouldTryNextModel_(errMsg) {
  var s = String(errMsg || '');
  return s.indexOf('gemini_http_404') !== -1
    || s.indexOf('gemini_http_400') !== -1
    || s.indexOf('gemini_http_503') !== -1
    || s.indexOf('gemini_http_429') !== -1
    || s.indexOf('gemini_http_500') !== -1;
}

function callGeminiWithFallback_(apiKey, preferred, question, answers, studentAnswer) {
  var models = modelCandidates_(preferred);
  var lastErr = '';
  var tried = [];
  for (var i = 0; i < models.length; i++) {
    try {
      var verdict = callGemini_(apiKey, models[i], question, answers, studentAnswer);
      rememberWorkingModel_(models[i]);
      return verdict;
    } catch (err) {
      lastErr = String(err && err.message || err);
      tried.push(lastErr);
      if (!shouldTryNextModel_(lastErr)) throw err;
    }
  }
  throw new Error((tried.join('|') || lastErr || 'gemini_no_model').slice(0, 300));
}

function callGemini_(apiKey, model, question, answers, studentAnswer) {
  var url = 'https://generativelanguage.googleapis.com/v1beta/models/'
    + encodeURIComponent(model)
    + ':generateContent?key='
    + encodeURIComponent(apiKey);

  // 짧은 프롬프트 (한 단어 출력 강제)
  var userText =
    'CBT주관식채점. 반드시 한 단어만: 정답 / 정답오타 / 오답\n'
    + '학생답에 한글·영문·숫자 의미 내용이 없거나(.,?! 등 기호만)면 무조건 오답.\n'
    + '학생답이 문항이 묻는 내용과 같으면 정답(동의어·약어 OK). 철자만 틀리면 정답오타.\n'
    + '참고답은 힌트일 뿐이며, 참고답과 글자만 비슷하고 의미가 다르면 오답.\n'
    + '문항:' + question + '\n'
    + '힌트:' + answers.join(' / ') + '\n'
    + '학생답:' + studentAnswer + '\n'
    + '판정:';

  // thinkingConfig 넣지 않음 — flash-lite에서 400으로 전체 채점 실패했음
  var res = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: userText }] }],
      generationConfig: {
        temperature: 0,
        maxOutputTokens: 16,
        candidateCount: 1
      }
    }),
    muteHttpExceptions: true
  });

  var code = res.getResponseCode();
  var text = res.getContentText() || '';
  if (code < 200 || code >= 300) {
    throw new Error('gemini_http_' + code + '_' + model);
  }

  var data = JSON.parse(text);
  var raw = (((data.candidates || [])[0] || {}).content || {}).parts || [];
  var joined = raw.map(function (p) { return String(p.text || ''); }).join('').trim();
  return parseVerdict_(joined);
}

/** @return {{correct:boolean, typo:boolean}|null} */
function parseVerdict_(raw) {
  var s = String(raw || '')
    .replace(/["'`]/g, '')
    .replace(/\s+/g, '')
    .trim();

  if (s.indexOf('정답오타') === 0 || s.indexOf('오타정답') === 0) {
    return { correct: true, typo: true };
  }
  if (s === '정답' || (s.indexOf('정답') === 0 && s.length <= 4)) {
    return { correct: true, typo: false };
  }
  if (s === '오답' || (s.indexOf('오답') === 0 && s.length <= 4)) {
    return { correct: false, typo: false };
  }

  var low = s.toLowerCase();
  if (low.indexOf('typo') !== -1 && (low.indexOf('correct') !== -1 || low.indexOf('right') !== -1)) {
    return { correct: true, typo: true };
  }
  if (low === 'correct' || low === 'yes' || low === 'true') return { correct: true, typo: false };
  if (low === 'incorrect' || low === 'wrong' || low === 'no' || low === 'false') {
    return { correct: false, typo: false };
  }
  return null;
}

function bumpDailyCounter_() {
  var props = PropertiesService.getScriptProperties();
  var day = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd');
  var key = 'AI_CALLS_' + day;
  var n = Number(props.getProperty(key) || '0') || 0;
  props.setProperty(key, String(n + 1));
  props.setProperty('AI_CALLS_LAST_DAY', day);
}

function readUsageStats_(gateGot) {
  var props = PropertiesService.getScriptProperties();
  var gateExpected = String(props.getProperty('GATE_SECRET') || '');
  if (!gateExpected || String(gateGot || '') !== gateExpected) {
    return { ok: false, error: 'forbidden' };
  }
  var day = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd');
  var count = Number(props.getProperty('AI_CALLS_' + day) || '0') || 0;
  var lastDay = String(props.getProperty('AI_CALLS_LAST_DAY') || '');
  return {
    ok: true,
    usage: true,
    day: day,
    count: count,
    lastDay: lastDay,
    service: 'codevCBT-short-answer-grade'
  };
}

function showTodayAiCallCount() {
  var props = PropertiesService.getScriptProperties();
  var day = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd');
  var n = props.getProperty('AI_CALLS_' + day) || '0';
  Logger.log('오늘(' + day + ') AI 호출: ' + n);
  return Number(n) || 0;
}

function jsonOut_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
