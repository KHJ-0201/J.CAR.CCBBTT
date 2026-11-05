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
  var verdict = null;
  var gradeErr = '';
  try {
    verdict = callGeminiWithFallback_(apiKey, preferred, question, answers, studentAnswer);
  } catch (err1) {
    gradeErr = String(err1 && err1.message || err1);
  }
  // 간헐적 빈 응답/429 → 짧게 쉬고 1회 재호출
  if (!verdict || typeof verdict.correct !== 'boolean') {
    Utilities.sleep(450);
    try {
      verdict = callGeminiWithFallback_(apiKey, preferred, question, answers, studentAnswer);
      gradeErr = '';
    } catch (err2) {
      gradeErr = String(err2 && err2.message || err2);
    }
  }
  bumpDailyCounter_();

  if (!verdict || typeof verdict.correct !== 'boolean') {
    return {
      ok: false,
      error: 'bad_model',
      source: 'ai',
      message: String(gradeErr || '').slice(0, 180)
    };
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

function isLikelyRetiredFlash_(name) {
  // 신규 키에서 generateContent 404 가 잦은 구형 id (목록에 남아 있어도 실패)
  // preferred/cache 선두에서만 제외 — fallbacks 목록에는 그대로 둠
  return /^(gemini-1\.5-|gemini-2\.0-|gemini-2\.5-)/.test(String(name || ''));
}

function modelCandidates_(preferred) {
  var list = [];
  var props = PropertiesService.getScriptProperties();
  var cached = String(props.getProperty('GEMINI_MODEL_OK') || '').trim();
  // 성공했던 모델을 맨 앞에 → 404 연쇄 폴백으로 수 초 낭비 방지
  if (cached && !isLikelyRetiredFlash_(cached)) list.push(cached);
  if (preferred && list.indexOf(preferred) === -1 && !isLikelyRetiredFlash_(preferred)) {
    list.push(preferred);
  }
  // 2026-11 기준: 신규 키에서 2.0/2.5 generateContent 가 404 나는 사례 다수 → 3.x·latest 우선
  var fallbacks = [
    'gemini-3.5-flash-lite',
    'gemini-3.1-flash-lite',
    'gemini-3.0-flash',
    'gemini-flash-latest',
    'gemini-flash-lite-latest',
    'gemini-2.5-flash-lite',
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-2.0-flash-001',
    'gemini-2.0-flash-lite',
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
    || s.indexOf('gemini_http_500') !== -1
    || s.indexOf('gemini_empty_') !== -1
    || s.indexOf('gemini_parse_') !== -1;
}

function callGeminiWithFallback_(apiKey, preferred, question, answers, studentAnswer) {
  var models = modelCandidates_(preferred);
  var lastErr = '';
  var tried = [];
  // 모델 많이 돌리면 Apps Script 시간 초과 → 폰「연결 실패」. 최대 8개.
  var maxTry = Math.min(models.length, 8);
  for (var i = 0; i < maxTry; i++) {
    try {
      var verdict = callGemini_(apiKey, models[i], question, answers, studentAnswer);
      if (!verdict || typeof verdict.correct !== 'boolean') {
        throw new Error('gemini_empty_' + models[i]);
      }
      rememberWorkingModel_(models[i]);
      return verdict;
    } catch (err) {
      lastErr = String(err && err.message || err);
      tried.push(lastErr);
      // 404/400 만 캐시 삭제 (429·빈응답은 일시적이라 캐시 유지)
      if (lastErr.indexOf('gemini_http_404') !== -1 || lastErr.indexOf('gemini_http_400') !== -1) {
        clearCachedModelIf_(models[i]);
      }
      if (!shouldTryNextModel_(lastErr)) throw err;
    }
  }
  throw new Error((tried.join('|') || lastErr || 'gemini_no_model').slice(0, 300));
}

function clearCachedModelIf_(model) {
  try {
    var props = PropertiesService.getScriptProperties();
    var cached = String(props.getProperty('GEMINI_MODEL_OK') || '').trim();
    if (cached && cached === String(model || '')) {
      props.deleteProperty('GEMINI_MODEL_OK');
    }
  } catch (err) {}
}

/** 에디터에서 1회 실행: 죽은 모델 캐시 비우기 */
function clearGeminiModelCache() {
  PropertiesService.getScriptProperties().deleteProperty('GEMINI_MODEL_OK');
  Logger.log('GEMINI_MODEL_OK cleared');
}

/**
 * 에디터에서 실행: ListModels + generateContent 프로브.
 * 로그에 OK 나온 이름을 GEMINI_MODEL 에 넣고 새 배포.
 */
function probeGeminiModels() {
  var props = PropertiesService.getScriptProperties();
  var apiKey = String(props.getProperty('GEMINI_API_KEY') || '');
  if (!apiKey) {
    Logger.log('no GEMINI_API_KEY');
    return '';
  }

  var listed = listGeminiGenerateModels_(apiKey);
  Logger.log('ListModels generateContent 후보: ' + (listed.length ? listed.join(', ') : '(없음/실패)'));

  var preferred = String(props.getProperty('GEMINI_MODEL') || '').trim();
  var models = [];
  // 목록 API가 준 최신 flash/lite 를 맨 앞
  for (var li = 0; li < listed.length; li++) {
    if (models.indexOf(listed[li]) === -1) models.push(listed[li]);
  }
  var fallbacks = modelCandidates_(preferred);
  for (var fi = 0; fi < fallbacks.length; fi++) {
    if (models.indexOf(fallbacks[fi]) === -1) models.push(fallbacks[fi]);
  }

  for (var i = 0; i < models.length; i++) {
    var m = models[i];
    try {
      var v = callGemini_(apiKey, m, 'probe', ['ok'], 'ok');
      if (v && typeof v.correct === 'boolean') {
        Logger.log('OK  ' + m + ' → ' + JSON.stringify(v));
        rememberWorkingModel_(m);
        props.setProperty('GEMINI_MODEL', m);
        Logger.log('GEMINI_MODEL / GEMINI_MODEL_OK = ' + m);
        return m;
      }
      Logger.log('EMPTY ' + m);
    } catch (err) {
      Logger.log('FAIL ' + m + ' :: ' + String(err && err.message || err));
    }
  }
  Logger.log('no working model — AI Studio에서 키·프로젝트 확인');
  return '';
}

/** 이 키로 generateContent 가능한 모델 id 목록 (models/ 접두 제거) */
function listGeminiGenerateModels_(apiKey) {
  var out = [];
  try {
    var url = 'https://generativelanguage.googleapis.com/v1beta/models?pageSize=100&key='
      + encodeURIComponent(apiKey);
    var res = UrlFetchApp.fetch(url, {
      method: 'get',
      muteHttpExceptions: true,
      headers: { 'x-goog-api-key': apiKey }
    });
    if (res.getResponseCode() < 200 || res.getResponseCode() >= 300) {
      Logger.log('ListModels http ' + res.getResponseCode() + ' ' + String(res.getContentText() || '').slice(0, 160));
      return out;
    }
    var data = JSON.parse(res.getContentText() || '{}');
    var arr = data.models || [];
    for (var i = 0; i < arr.length; i++) {
      var name = String(arr[i].name || '').replace(/^models\//, '');
      var methods = arr[i].supportedGenerationMethods || [];
      if (!name || methods.indexOf('generateContent') === -1) continue;
      // flash / lite 계열만 (채점용)
      if (/flash|lite/i.test(name) && !/embed|tts|image|audio|robotics/i.test(name)) {
        out.push(name);
      }
    }
    // 이름 역순 ≈ 최신 쪽 우선 시도
    out.sort();
    out.reverse();
  } catch (err) {
    Logger.log('ListModels err ' + String(err && err.message || err));
  }
  return out;
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

  // thinking 모델은 사유 토큰이 maxOutputTokens에 포함됨 → 16~64면 본문 없이 MAX_TOKENS
  // 256이면 한 단어 판정 + 소량 thinking 여유. thinkingConfig는 모델마다 400이라 넣지 않음.
  var genConfig = {
    temperature: 0,
    maxOutputTokens: 256,
    candidateCount: 1
  };
  var res = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: userText }] }],
      generationConfig: genConfig
    }),
    muteHttpExceptions: true,
    headers: { 'x-goog-api-key': apiKey }
  });

  var code = res.getResponseCode();
  var text = res.getContentText() || '';
  if (code < 200 || code >= 300) {
    throw new Error('gemini_http_' + code + '_' + model);
  }

  var data = JSON.parse(text);
  var cand0 = (data.candidates || [])[0] || {};
  // safety/MAX_TOKENS 등으로 content 비는 경우
  if (!cand0 || !cand0.content) {
    throw new Error('gemini_empty_' + model + '_' + String(cand0.finishReason || 'nocand'));
  }
  var raw = (cand0.content.parts || []);
  var joined = raw.map(function (p) { return String(p.text || ''); }).join('').trim();
  if (!joined) {
    throw new Error('gemini_empty_' + model);
  }
  var verdict = parseVerdict_(joined);
  if (!verdict || typeof verdict.correct !== 'boolean') {
    throw new Error('gemini_parse_' + model + '_' + joined.slice(0, 40));
  }
  return verdict;
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
