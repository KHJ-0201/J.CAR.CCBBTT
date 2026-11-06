# 주관식 AI 보조 채점 — Apps Script 배포 안내

학생은 아무것도 설정하지 않습니다. **운영자(당신)만** 아래를 한 번 하면 됩니다.

- API 키 → Apps Script **스크립트 속성**에만 저장 (깃·HTML·`통합랜덤.js`에 넣지 말 것)
- 브라우저는 웹앱 URL + `gate`만 보냄
- 엔드포인트는 주관식 채점 전용 (채팅·다른 용도 불가)

---

## A. AI Studio — 무료 프로젝트 + API 키

1. 브라우저에서 [Google AI Studio](https://aistudio.google.com) 접속 → **본인 Google 계정** 로그인  
2. 상단/왼쪽에서 **프로젝트(Project)** 선택 → **Create project**  
   - 이름 예: `codevCBT-채점-무료`  
3. **결제(Billing)를 연결하지 않음**  
   - 카드 등록·유료 업그레이드 하지 마세요  
   - 개인 Gemini / Google One Pro 채팅과 **프로젝트·키를 분리**합니다  
4. **Get API key** (API 키 가져오기)  
   - 방금 만든 `codevCBT-채점-무료` 프로젝트에 키 생성  
5. 키를 복사해 **안전한 곳에만** 잠시 보관  
   - 메신저·이메일·깃허브·채팅에 붙여넣지 말 것  
6. (확인) AI Studio에서 해당 프로젝트 **Rate limits / Usage** 화면으로  
   - 모델별 무료 일일·분당 한도와 **사용량**을 볼 수 있습니다  
   - Flash-Lite 무료 RPD는 대략 하루 수백~1000회대(시점에 따라 변동) → **화면 수치가 기준**

권장 모델 (2026-11): `gemini-3.5-flash-lite` 또는 `gemini-flash-latest`.  
신규 API 키에서는 `gemini-2.0-flash` / `2.5-flash` 가 **404** 나는 경우가 많습니다.  
에디터에서 `probeGeminiModels` 실행 → 로그의 `OK …` 이름이 자동으로 `GEMINI_MODEL`에 저장됩니다.

---

## B. Apps Script 웹앱 만들기

1. [script.google.com](https://script.google.com) → **새 프로젝트**  
2. 기본 `코드.gs` 내용을 이 폴더의 [`Code.gs`](./Code.gs) **전체**로 교체 후 저장  
3. 왼쪽 기어(프로젝트 설정) → 아래쪽으로 **스크립트 속성** → **속성 추가**

| 속성 | 값 |
|------|-----|
| `GEMINI_API_KEY` | AI Studio에서 복사한 API 키 |
| `GEMINI_API_KEY_2` | (나중에) 다른 구글 계정의 예비 키. **비워 두면 지금과 100% 동일** |
| `GATE_SECRET` | 직접 만든 짧은 비밀번호 (예: 랜덤 영문숫자 16자). 프론트와 **동일**해야 함 |
| `GEMINI_MODEL` | (선택) 예: `gemini-3.5-flash-lite` |

예비 키는 기본 키가 무료 한도(429)로 막힐 때만 사용합니다. 404·연결 실패·오답 판정에는 쓰지 않습니다.  
다른 계정 준비가 끝나면 속성만 추가하고 **배포 → 배포 관리 → 새 버전** 하면 됩니다. 웹앱 URL과 gate는 바꾸지 않습니다.  
그 전까지는 이 파일을 배포하지 않아도 지금 돌아가는 웹앱은 그대로입니다.

4. **배포** → **새 배포**  
   - 유형: **웹 앱**  
   - 실행 계정: **나**  
   - 액세스 권한: **모든 사용자** (학생 로그인 없이 호출)  
5. 배포 후 나오는 **웹 앱 URL** 복사  
   - 형태: `https://script.google.com/macros/s/……/exec`

### Apps Script에서 오늘 호출 수 보기

편집기에서 함수 `showTodayAiCallCount` 선택 → 실행 → **실행 로그**에 오늘 호출 횟수가 나옵니다.  
(AI Studio Usage와 별도로, 이 웹앱이 Gemini를 부른 횟수입니다.)

### 모델 캐시 초기화 (연결 실패·bad_model / 404 연속 시)

1. `Code.gs` 최신본 붙여넣기 → 저장  
2. 함수 `probeGeminiModels` 실행 → 실행 로그에 `OK gemini-…` 확인  
3. (선택) `clearGeminiModelCache` 후 다시 probe  
4. **배포 → 배포 관리 → 새 버전** (웹앱 URL은 그대로여도 됨)  
※ 속성 `GEMINI_MODEL`이 `gemini-2.5-flash-lite` 등으로 고정돼 있으면 404만 5번 돌고 끝날 수 있음 → probe가 바꿔 줌

### CBT 관리자 화면

교사/관리자로 통합랜덤 홈에 들어가면 **「AI 오늘 N회」** 버튼이 보입니다.  
클릭하면 상세 알림, 버튼 문구는 오늘 Gemini 채점 호출 수입니다. (`usage=1` API, gate 필요)

---

## C. CBT 사이트에 연결

[`start/문제모음/통합랜덤.js`](../../start/문제모음/통합랜덤.js) 상단 근처 상수:

```js
const SHORT_AI_GRADE_URL = 'https://script.google.com/macros/s/여기에배포URL/exec';
const SHORT_AI_GATE = 'GATE_SECRET와_같은_값';
```

- **API 키는 넣지 않습니다.** URL + gate만.  
- URL을 비우면 AI 호출 없이 **규칙 채점만** 동작합니다.

HTML 캐시 bump (`통합랜덤.html`의 `?v=`) 후 강력 새로고침.

---

## D. 동작 요약

1. 학생이 주관식 입력 → **확인**  
2. 로컬 규칙 정답이면 AI 안 씀  
3. `.`·기호만·빈 의미 입력은 AI 안 씀 (오답 확정)  
4. **애매한 서술 오답**만 웹앱 채점 (모바일 iframe postMessage 우선)  
5. 즉시보기 OFF: AI는 백그라운드, 제출 시 대기 후 결과 반영  
6. 실패·타임아웃·한도 초과 → **규칙 오답 유지** (시험 중단 없음)

### 동의어를 많이 등록하면 AI 호출↓

문항 JSON의 `answer` / `answers`에 허용 표기를 미리 넣으세요.  
`/` 로 동의어 분리 (예: `고체전해질/지르코니아/ZrO2`).  
규칙에 걸리면 AI를 부르지 않으므로 **공부한 학생은 빠르게 정답**, 할당량도 줄어듭니다.  
AI는 목록에 없는 표현만 보조합니다.

### AI 동의어 후보 (관리자)

1. AI가 **정답**으로 본 학생 답(공식 정답과 다른 표기) → Firebase 후보로 누적  
2. 관리자 **「AI 동의어 후보」** 탭에서 문항·등록정답·후보 확인  
3. **승인** → 즉시 학생 채점 동의어에 반영 (3회↑ 후보 우선 표시)  
4. **거절** → 다시 쌓이지 않음  

경로: `ranking_totals/__group_feedback__/__short_ai_synonym__`

용량 상한(문항당): 승인 동의어 40 · 승인 오답 40 · 대기 후보(각) 60.  
대기 초과 시 횟수 낮은 후보부터 자동 정리. 답 문구는 80자까지.

### 모바일 연결 (중요)

폰에서「연결 실패」가 나면 거의 항상 아래 중 하나입니다.

1. **Apps Script를 이 폴더 `Code.gs`로 다시 배포하지 않음**  
   - 배포 → **기존 배포 관리** → 연필(수정) → 새 버전 → 배포  
   - `features: ["embed"]` 가 ping 응답에 있어야 모바일 iframe 경로가 켜집니다  
2. 프론트만 올리고 스크립트는 구버전이면, 긴 한글 문항 JSONP GET이 폰 URL 한도에 걸립니다  

브라우저 전송: `start/문제모음/shortAnswerAiClient.js` (auto.bat 난독화 **제외**).

요청 필드(아래만 허용):

```json
{
  "gate": "…",
  "question": "문항 텍스트",
  "answers": ["모범1", "모범2"],
  "studentAnswer": "학생 입력"
}
```

- fetch: `Content-Type: text/plain` JSON body  
- 모바일: `embed=1` form POST → `parent.postMessage`  
- 폴백: JSONP GET  

다른 필드·긴 텍스트·채팅용 메시지는 서버가 거절합니다.

---

## E. 보안 체크리스트

- [ ] `GEMINI_API_KEY`가 깃·프론트·메신저에 없음  
- [ ] Billing 없는 채점 전용 프로젝트만 사용  
- [ ] `GATE_SECRET`이 충분히 길고 URL과 함께만 CBT에 설정됨  
- [ ] 웹앱이 주관식 채점 외에 다른 기능을 제공하지 않음  

키가 유출된 것 같으면 AI Studio에서 해당 키 **삭제/재발급** → 스크립트 속성만 갱신하면 됩니다.
