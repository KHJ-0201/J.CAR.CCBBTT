// -----------------------------
// 회차 파라미터 가져오기 (통합 모드에서는 사용하지 않음)
const params = new URLSearchParams(window.location.search);
const round = params.get('round'); 

let questions = [];

// -----------------------------
// 동적 import
async function loadQuestions() {
  try {
    // 1. 필요한 모든 문제 파일 동적 로드
    const engineModule = await import('./0201엔진본체정비/industry_엔진본체문제.js');
    const coolingModule = await import('./0202냉각장치정비/industry_냉각장치문제.js');
    const lubModule = await import('./0203윤활장치정비/industry_윤활장치문제.js');
    const fuelModule = await import('./0204연료장치정비/industry_연료장치문제.js');
    const ignitionModule = await import('./0205엔진점화장치정비/industry_엔진점화장치문제.js');
    const vvtModule = await import('./0206흡배기제어장치정비/industry_흡배기제어장치문제.js');
    const forcedModule = await import('./0207과급장치정비/industry_과급장치문제.js');
    const gecuModule = await import('./0208가솔린전자제어장치정비/industry_가솔린전자문제.js');
    const decuModule = await import('./0210디젤전자제어장치정비/industry_디젤전자문제.js');
    const emissionModule = await import('./0212배출가스제어장치정비/industry_배출가스문제.js');

    // 2. 모든 회차의 문제 데이터를 단일 배열로 병합
    const allQuestions = [
        // 엔진본체 (industry020101 ~ industry020105)
        ...(engineModule.industry020101 || []).map(q => ({ ...q, module: '엔진본체정비' })),
        ...(engineModule.industry020102 || []).map(q => ({ ...q, module: '엔진본체정비' })),
        ...(engineModule.industry020103 || []).map(q => ({ ...q, module: '엔진본체정비' })),
        ...(engineModule.industry020104 || []).map(q => ({ ...q, module: '엔진본체정비' })),
        ...(engineModule.industry020105 || []).map(q => ({ ...q, module: '엔진본체정비' })),
        // 냉각장치 (industry020201 ~ industry020205)
        ...(coolingModule.industry020201 || []).map(q => ({ ...q, module: '냉각장치정비' })),
        ...(coolingModule.industry020202 || []).map(q => ({ ...q, module: '냉각장치정비' })),
        ...(coolingModule.industry020203 || []).map(q => ({ ...q, module: '냉각장치정비' })),
        ...(coolingModule.industry020204 || []).map(q => ({ ...q, module: '냉각장치정비' })),
        ...(coolingModule.industry020205 || []).map(q => ({ ...q, module: '냉각장치정비' })),
        // 윤활장치 (industry020301 ~ industry020305)
        ...(lubModule.industry020301 || []).map(q => ({ ...q, module: '윤활장치정비' })),
        ...(lubModule.industry020302 || []).map(q => ({ ...q, module: '윤활장치정비' })),
        ...(lubModule.industry020303 || []).map(q => ({ ...q, module: '윤활장치정비' })),
        ...(lubModule.industry020304 || []).map(q => ({ ...q, module: '윤활장치정비' })),
        ...(lubModule.industry020305 || []).map(q => ({ ...q, module: '윤활장치정비' })),
        // 연료장치 (industry020401 ~ industry020405)
        ...(fuelModule.industry020401 || []).map(q => ({ ...q, module: '연료장치정비' })),
        ...(fuelModule.industry020402 || []).map(q => ({ ...q, module: '연료장치정비' })),
        ...(fuelModule.industry020403 || []).map(q => ({ ...q, module: '연료장치정비' })),
        ...(fuelModule.industry020404 || []).map(q => ({ ...q, module: '연료장치정비' })),
        ...(fuelModule.industry020405 || []).map(q => ({ ...q, module: '연료장치정비' })),
        // 엔진점화장치 (industry020501 ~ industry020505)
        ...(ignitionModule.industry020501 || []).map(q => ({ ...q, module: '엔진점화장치정비' })),
        ...(ignitionModule.industry020502 || []).map(q => ({ ...q, module: '엔진점화장치정비' })),
        ...(ignitionModule.industry020503 || []).map(q => ({ ...q, module: '엔진점화장치정비' })),
        ...(ignitionModule.industry020504 || []).map(q => ({ ...q, module: '엔진점화장치정비' })),
        ...(ignitionModule.industry020505 || []).map(q => ({ ...q, module: '엔진점화장치정비' })),
        // 흡배기제어장치 (industry020601 ~ industry020605)
        ...(vvtModule.industry020601 || []).map(q => ({ ...q, module: '흡배기제어장치정비' })),
        ...(vvtModule.industry020602 || []).map(q => ({ ...q, module: '흡배기제어장치정비' })),
        ...(vvtModule.industry020603 || []).map(q => ({ ...q, module: '흡배기제어장치정비' })),
        ...(vvtModule.industry020604 || []).map(q => ({ ...q, module: '흡배기제어장치정비' })),
        ...(vvtModule.industry020605 || []).map(q => ({ ...q, module: '흡배기제어장치정비' })),
        // 과급장치 (industry020701 ~ industry020705)
        ...(forcedModule.industry020701 || []).map(q => ({ ...q, module: '과급장치정비' })),
        ...(forcedModule.industry020702 || []).map(q => ({ ...q, module: '과급장치정비' })),
        ...(forcedModule.industry020703 || []).map(q => ({ ...q, module: '과급장치정비' })),
        ...(forcedModule.industry020704 || []).map(q => ({ ...q, module: '과급장치정비' })),
        ...(forcedModule.industry020705 || []).map(q => ({ ...q, module: '과급장치정비' })),
        // 가솔린전자제어장치 (industry020801 ~ industry020805)
        ...(gecuModule.industry020801 || []).map(q => ({ ...q, module: '가솔린전자제어장치정비' })),
        ...(gecuModule.industry020802 || []).map(q => ({ ...q, module: '가솔린전자제어장치정비' })),
        ...(gecuModule.industry020803 || []).map(q => ({ ...q, module: '가솔린전자제어장치정비' })),
        ...(gecuModule.industry020804 || []).map(q => ({ ...q, module: '가솔린전자제어장치정비' })),
        ...(gecuModule.industry020805 || []).map(q => ({ ...q, module: '가솔린전자제어장치정비' })),
        // 디젤전자제어장치 (industry021001 ~ industry021005)
        ...(decuModule.industry021001 || []).map(q => ({ ...q, module: '디젤전자제어장치정비' })),
        ...(decuModule.industry021002 || []).map(q => ({ ...q, module: '디젤전자제어장치정비' })),
        ...(decuModule.industry021003 || []).map(q => ({ ...q, module: '디젤전자제어장치정비' })),
        ...(decuModule.industry021004 || []).map(q => ({ ...q, module: '디젤전자제어장치정비' })),
        ...(decuModule.industry021005 || []).map(q => ({ ...q, module: '디젤전자제어장치정비' })),
        // 배출가스제어장치 (industry021201 ~ industry021205)
        ...(emissionModule.industry021201 || []).map(q => ({ ...q, module: '배출가스제어장치정비' })),
        ...(emissionModule.industry021202 || []).map(q => ({ ...q, module: '배출가스제어장치정비' })),
        ...(emissionModule.industry021203 || []).map(q => ({ ...q, module: '배출가스제어장치정비' })),
        ...(emissionModule.industry021204 || []).map(q => ({ ...q, module: '배출가스제어장치정비' })),
        ...(emissionModule.industry021205 || []).map(q => ({ ...q, module: '배출가스제어장치정비' })),
    ];

        if (allQuestions.length < 60) {
        // 통합 문제 수가 60개 미만일 경우 처리
        questions = allQuestions; 
        console.warn(`총 문제가 60개 미만입니다. 총 ${allQuestions.length}문제를 로드합니다.`);
        document.getElementById("roundTitle").textContent = `엔진 정비`;
    } else {
        // 3. 전체 문제 중 60문제만 랜덤으로 추출
        questions = shuffleArray(allQuestions).slice(0, 60);
        document.getElementById("roundTitle").textContent = `엔진 정비`;
    }

    if (questions.length === 0) throw new Error('로드할 문제가 없습니다.');
    

    // 4. 문제의 선택지 순서 섞기 및 정답 인덱스 재설정
    questions.forEach((q) => {
        let combined = q.options.map((opt, idx) => ({ opt, idx }));
        combined = shuffleArray(combined);
        q.answer = combined.findIndex((c) => c.idx === q.answer);
        q.options = combined.map((c) => c.opt);
    });

    renderQuiz();
  } catch (err) {
        console.error("문제 로딩 오류:", err);
        document.getElementById("quiz").innerHTML = `<p>문제를 불러오지 못했습니다. (${err.message})</p>`;
  }
}

// -----------------------------
// 배열 섞기
function shuffleArray(array) {
    // Math.random() - 0.5를 사용하여 배열을 무작위로 섞습니다.
    return array.sort(() => Math.random() - 0.5);
}

// -----------------------------
// 답안 저장 (나머지 퀴즈 로직은 기존과 동일)
let answers = [];

function updateRemaining() {
    const remainingDiv = document.getElementById("remaining");
    let answered = answers.filter((a) => a >= 0).length;
    remainingDiv.textContent = `남은 문제: ${questions.length - answered}/${questions.length}`;
}

function renderQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    answers = Array(questions.length).fill(-1);

    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.className = "question";
        //수정
        div.innerHTML = `
            <span id="q-status-${i}" class="q-status"></span>
            <strong class="q-title">${i + 1}. ${q.question}</strong>
            <p class="module-title">[${q.module}]</p>
        `;

        if (q.imagePath) {
            div.innerHTML += `<img src="${q.imagePath}" alt="문제 그림"
                style="width: 500px; height: auto; margin: 15px 0;">`;
        }

        const optsDiv = document.createElement("div");
        optsDiv.className = "options";
        q.options.forEach((opt, j) => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="q${i}" value="${j}"> ${opt}`;
            const radioInput = label.querySelector("input");

            radioInput.addEventListener("change", () => {
                answers[i] = j;
                updateRemaining();

                optsDiv.querySelectorAll('label').forEach(l => l.classList.remove('selected'));
                label.classList.add('selected');

                // --- [추가 기능 1] 다음 문제로 자동 스크롤 ---
                const nextQuestion = div.nextElementSibling;
                
                if (nextQuestion && nextQuestion.classList.contains('question')) {
                    nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                // ------------------------------------------------
            });
            optsDiv.appendChild(label);
        });
        div.appendChild(optsDiv);

        const explainDiv = document.createElement("div");
        explainDiv.className = "explain";
        div.appendChild(explainDiv);

        quizDiv.appendChild(div);
    });

    updateRemaining();
}

// -----------------------------
// 제출 및 채점
function submitQuiz() {
    const firstUnansweredIndex = answers.findIndex((a) => a < 0);
    const unansweredCount = answers.filter((a) => a < 0).length;

    if (unansweredCount > 0 && totalSeconds > 0) {
        const confirmSubmit = confirm(
        `아직 ${unansweredCount}개의 문제를 풀지 않았습니다.\n계속 제출하시겠습니까?`
        );

    if (!confirmSubmit) {
        if (firstUnansweredIndex !== -1) {
            document.getElementsByClassName("question")[firstUnansweredIndex]
              .scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
        }
    }

    clearInterval(timerInterval);
    document.getElementById("timer").textContent = ""; // 타이머 비움

    let score = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    questions.forEach((q, i) => {
        const questionDiv = document.getElementsByClassName("question")[i];
        const explainDiv = questionDiv.querySelector(".explain");
        const labels = questionDiv.querySelectorAll('label');
        const statusSpan = document.getElementById(`q-status-${i}`);

        statusSpan.classList.remove('status-wrong');

        if (answers[i] == q.answer) {
            score++;
            labels[q.answer].style.backgroundColor = "#b6fcb6";
            statusSpan.innerHTML = '⭕';
        } else if (answers[i] >= 0) {
            labels[q.answer].style.backgroundColor = "#b6fcb6";
            labels[answers[i]].style.backgroundColor = "#fcb6b6";
            statusSpan.innerHTML = '❌';
            statusSpan.style.color = '#dc3545';
            statusSpan.classList.add('status-wrong');
        } else {
            labels[q.answer].style.backgroundColor = "#b6fcb6";
            statusSpan.innerHTML = '';
            statusSpan.style.color = '';
        }

        explainDiv.innerHTML = `
            <p style="color:#1f3b73;font-weight:700;">정답: ${q.options[q.answer]}</p>
            <p>${q.explain}</p>
        `;

        questionDiv.querySelectorAll('input[type="radio"]').forEach((r) => (r.disabled = true));
    });

    const status = document.getElementById("status");
    status.classList.add("center");
    status.innerHTML = `<span id="scoreDisplay">엔진 정비 전체랜덤 총점: ${score}/${questions.length}</span>
                        <button id="retryBtn">다시 풀기</button>`;

    const retryBtn = document.getElementById("retryBtn");
    if (retryBtn) {
        retryBtn.addEventListener("click", resetQuiz);
    }

    document.getElementById("submitBtn").style.display = "none";
    
    // --- [추가] 플로팅 버튼 숨기기 ---
    const floatingSubmitBtn = document.getElementById("floatingSubmitBtn");
    if (floatingSubmitBtn) {
        floatingSubmitBtn.classList.add('hidden');
    }
    // ---------------------------------

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>엔진 정비 전체랜덤 총점: ${score}/${questions.length}</h2>`;
}

/* ===========================
    ✨ [신규 함수] 다시 풀기 로직 (순서/보기 셔플 포함)
=========================== */
function resetQuiz() {
    if (!confirm("현재 풀었던 60문제를 다시 푸시겠습니까? (문제 순서 및 보기 순서도 다시 섞입니다.)")) {
        return;
    }

    // 1. 문제 순서 및 보기 순서 재셔플
    questions = shuffleArray(questions); 
    
    // 2. 답안 초기화
    answers = Array(questions.length).fill(-1);
    
    // 3. 타이머 재시작 (1시간 설정)
    clearInterval(timerInterval);
    totalSeconds = 60 * 60; 
    timerInterval = setInterval(updateTimer, 1000);
    
    // 4. UI 초기화 및 재렌더링
    
    // Status Bar 복원 및 타이머 표시
    const status = document.getElementById("status");
    status.classList.remove("center");
    status.innerHTML = `
            <span id="timer">남은 시간: 60:00</span>
            <span id="roundTitle">엔진 정비</span>
            <span id="remaining">남은 문제: ${questions.length}/${questions.length}</span>`;
    
    // 제출 버튼 복원 (두 개 모두)
    document.getElementById("submitBtn").style.display = "block";
    
    // --- [추가] 플로팅 버튼 복원 ---
    const floatingSubmitBtn = document.getElementById("floatingSubmitBtn");
    if (floatingSubmitBtn) {
        floatingSubmitBtn.classList.remove('hidden');
    }
    // ---------------------------------
    
    // 결과창 숨김
    document.getElementById("result").innerHTML = "";

    // 퀴즈 영역 재렌더링 (순서가 바뀌었으므로 DOM을 새로 만듭니다)
    renderQuiz();
    
    // 화면 최상단으로 이동
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// -----------------------------
// 타이머
let totalSeconds = 60 * 60;
function updateTimer() {
    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;
    document.getElementById("timer").textContent =
        `남은 시간: ${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

    if (totalSeconds <= 0) submitQuiz(true);
    else totalSeconds--;
}

let timerInterval = setInterval(updateTimer, 1000);

// -----------------------------
// 초기화
document.getElementById("submitBtn").addEventListener("click", submitQuiz);

// --- [추가 기능 2] 플로팅 버튼 연결 ---
const floatingSubmitBtn = document.getElementById("floatingSubmitBtn");
if (floatingSubmitBtn) {
    floatingSubmitBtn.addEventListener("click", submitQuiz);
}
// ------------------------------------

loadQuestions();