// 1. 창고(통합문제.js)에서 데이터를 가져옵니다.
import { quizSets } from './통합문제.js';

// 변수 설정
let currentQuestions = []; 
let userAnswers = [];      
let timerInterval; 
let timeLeft = 3600; 

// [유틸리티] 문제와 보기를 무작위로 섞어주는 공통 함수
function shuffleLogic(questions) {
    // 1. 문제 순서 무작위 섞기
    questions.sort(() => Math.random() - 0.5);

    // 2. 각 문제 내부의 보기 섞기 및 정답 번호 재설정
    questions.forEach(q => {
        const correctOption = q.options[q.answer]; 
        for (let i = q.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
        }
        q.answer = q.options.indexOf(correctOption);
    });
    return questions;
}

// [실행] 페이지 시작 시 메뉴 렌더링
function init() {
    renderMenu();
}

// [메뉴] 회차 선택 버튼 만들기
function renderMenu() {
    const menuGrid = document.getElementById("menu-grid");
    const activeSets = quizSets.filter(set => set.repairData && set.repairData.length > 0);

    // --- [통합 랜덤 버튼] ---
    let html = `
        <button class="set-select-btn" onclick="startIntegratedRandom()" style="grid-column: 1 / -1; background: #1f3b73; color: white; margin-bottom: 15px;">
            🎲 모든 회차 통합 랜덤 (80문제) <br>
            <span style="font-size:0.8rem; font-weight:normal; opacity: 0.9;">(전체 문제 중 무작위 추출)</span>
        </button>
    `;

    activeSets.forEach(set => {
        html += `
            <button class="set-select-btn" onclick="startQuiz('${set.id}')">
                📖 ${set.roundName} <br>
                <span style="font-size:0.8rem; font-weight:normal;">(${set.repairData.length}문항)</span>
            </button>
        `;
    });
    menuGrid.innerHTML = html;
}

// [시작] 특정 회차 버튼 클릭 시
window.startQuiz = (id) => {
    const selectedSet = quizSets.find(set => set.id === id);
    if (!selectedSet) return;

    let data = JSON.parse(JSON.stringify(selectedSet.repairData));
    // 각 문제 객체에 출처(roundName) 정보를 추가합니다.
    data.forEach(q => q.fromRound = selectedSet.roundName); 
    
    currentQuestions = shuffleLogic(data); 
    startQuizProcess(selectedSet.roundName);
};

// [시작] 모든 회차 통합 랜덤 클릭 시
window.startIntegratedRandom = () => {
    // 합치기 전 각 회차의 문제들에 roundName 정보를 미리 심어줍니다.
    const allQuestions = quizSets.flatMap(set => 
        (set.repairData || []).map(q => ({ ...q, fromRound: set.roundName }))
    );

    if (allQuestions.length === 0) {
        alert("데이터가 없습니다.");
        return;
    }

    let combined = JSON.parse(JSON.stringify(allQuestions));
    combined = shuffleLogic(combined); 
    currentQuestions = combined.slice(0, 80); 

    startQuizProcess("🎲 통합 랜덤 (80문항)");
};

// [공통] 퀴즈 시작 화면 전환 로직
function startQuizProcess(title) {
    document.getElementById("quiz-menu").style.display = "none";
    document.getElementById("quiz-wrapper").style.display = "block";
    document.getElementById("omr-card").style.display = "block";
    document.getElementById("main-title").textContent = title;

    renderQuiz();
    startTimer();
}

// [퀴즈] 진짜 문제를 화면에 그리는 함수
function renderQuiz() {
    const container = document.getElementById("quiz");
    
    container.innerHTML = currentQuestions.map((q, i) => `
        <div class="question" id="q-${i}" style="margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
            <div class="q-source" style="font-size: 0.75rem; color: #888; margin-bottom: 5px;">[${q.fromRound || '출처 미상'}]</div>
            
            <div class="q-title"><strong>${i + 1}. ${q.question}</strong></div>
            <div class="options" style="margin-top:15px;">
                ${q.options.map((opt, j) => `
                    <label id="label-${i}-${j}" style="display:block; margin-bottom:8px; padding:12px; border:1px solid #ddd; border-radius:8px; cursor:pointer; background: #fff;">
                        <input type="radio" name="q${i}" value="${j}" onchange="selectAnswer(${i}, ${j})" style="margin-right:8px;"> ${opt}
                    </label>
                `).join('')}
            </div>
            <div class="explain" id="explain-${i}" style="display:none; margin-top:15px; padding:15px; background:#f0f8ff; border-left:5px solid #1f3b73;">
                <strong>정답: ${q.options[q.answer]}</strong><br>
                <small>${q.explain || '해설이 없습니다.'}</small>
            </div>
        </div>
    `).join('');

    userAnswers = Array(currentQuestions.length).fill(-1);
    window.scrollTo(0, 0);
    renderOMR(); 
    updateStatus();
}

// [상태] 진행도 업데이트
function updateStatus() {
    const done = userAnswers.filter(a => a !== -1).length;
    const total = currentQuestions.length;
    const remainingElement = document.getElementById("remaining");
    if(remainingElement) {
        remainingElement.textContent = `진행도: ${done} / ${total}`;
    }
}

// [클릭] 보기 선택 시 처리
window.selectAnswer = (qIdx, aIdx) => {
    userAnswers[qIdx] = aIdx;
    updateStatus();
    
    document.querySelectorAll(`#q-${qIdx} label`).forEach(l => l.style.background = '#fff');
    const targetLabel = document.getElementById(`label-${qIdx}-${aIdx}`);
    if(targetLabel) targetLabel.style.background = '#e0f7ff';

    // OMR 강조
    document.querySelectorAll(`#omr-item-${qIdx} .omr-option`).forEach(opt => {
        opt.style.background = 'white';
        opt.style.color = 'black';
    });
    const selectedOpt = document.getElementById(`omr-opt-${qIdx}-${aIdx}`);
    if (selectedOpt) {
        selectedOpt.style.background = '#1f3b73';
        selectedOpt.style.color = 'white';
    }

    // 다음 문제로 자동 스크롤
    if (qIdx < currentQuestions.length - 1) {
        setTimeout(() => {
            const nextQ = document.getElementById(`q-${qIdx + 1}`);
            if (nextQ) {
                nextQ.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 500);
    }
};

// [OMR] OMR 카드를 화면에 그리는 함수
function renderOMR() {
    const omrList = document.getElementById("omr-list");
    
    omrList.innerHTML = currentQuestions.map((_, i) => `
        <div class="omr-item" id="omr-item-${i}">
            <span class="omr-q-num" onclick="scrollToQ(${i})">${i + 1}</span>
            <div class="omr-options-wrapper">
                ${[0, 1, 2, 3].map(v => `
                    <span class="omr-option" 
                          id="omr-opt-${i}-${v}" 
                          onclick="selectAnswer(${i}, ${v}); syncRadio(${i}, ${v})">
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// [이동] OMR 번호 클릭 시 스크롤
window.scrollToQ = (i) => {
    const qElement = document.getElementById(`q-${i}`);
    if (qElement) qElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

// [동기화] OMR 클릭 시 라디오 체크
window.syncRadio = (q, v) => {
    const radio = document.querySelector(`input[name="q${q}"][value="${v}"]`);
    if (radio) radio.checked = true;
};

// [제출] 시험 종료 및 결과 확인
window.submitQuiz = () => {
    clearInterval(timerInterval);
    const unsolved = userAnswers.indexOf(-1);
    if (unsolved !== -1) {
        if (!confirm("아직 풀지 않은 문제가 있습니다. 정말 제출하시겠습니까?")) {
            startTimer(); // 다시 타이머 시작
            return;
        }
    } else {
        if (!confirm("시험을 종료하고 답안지를 제출하시겠습니까?")) {
            startTimer();
            return;
        }
    }

    let score = 0;
    currentQuestions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.answer;
        if (isCorrect) score++;

        const qElement = document.getElementById(`q-${i}`);
        qElement.style.borderLeft = isCorrect ? "5px solid green" : "5px solid red";

        const omrNumElement = document.querySelector(`#omr-item-${i} .omr-q-num`);
        if (omrNumElement) {
            omrNumElement.style.backgroundColor = isCorrect ? "#e6ffed" : "#ffeeee"; 
            omrNumElement.style.color = isCorrect ? "green" : "red";               
            omrNumElement.style.border = `2px solid ${isCorrect ? "green" : "red"}`;
            omrNumElement.style.fontWeight = "bold";
        }

        const explainBox = document.getElementById(`explain-${i}`);
        if (explainBox) explainBox.style.display = "block";
    });

    const total = currentQuestions.length;
    const percent = Math.round((score / total) * 100);
    alert(`제출 완료!\n점수: ${score} / ${total} (${percent}점)`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// [이벤트] 제출 버튼 연결
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("submitBtn");
    if (btn) btn.onclick = window.submitQuiz;
});

// 타이머 관련
function updateTimerDisplay() {
    const timerElement = document.getElementById("timer");
    if (!timerElement) return;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `남은 시간: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("시간 종료!");
            window.submitQuiz();
        }
    }, 1000);
}

// 초기화 실행
init();