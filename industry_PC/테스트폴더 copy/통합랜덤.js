// 1. 창고(통합문제.js)에서 데이터를 가져옵니다.
import { quizSets } from './통합문제.js';

// 변수 설정
let currentQuestions = []; 
let userAnswers = [];      
let timerInterval; // 타이머를 멈추기 위한 변수
let timeLeft = 3600; // 60분 (초 단위)

// [실행] 페이지 시작 시 메뉴 렌더링
function init() {
    renderMenu();
}

// [메뉴] 회차 선택 버튼 만들기
function renderMenu() {
    const menuGrid = document.getElementById("menu-grid");
    const activeSets = quizSets.filter(set => set.repairData && set.repairData.length > 0);

    let html = "";
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

// [시작] 버튼 클릭 시 퀴즈 화면으로 전환
window.startQuiz = (id) => {
    const selectedSet = quizSets.find(set => set.id === id);
    if (!selectedSet) return;

    // 1. 문제 복사
    currentQuestions = JSON.parse(JSON.stringify(selectedSet.repairData));
    
    // 2. 문제 순서 섞기
    currentQuestions.sort(() => Math.random() - 0.5);

    // 3. [추가] 각 문제의 보기 섞기 및 정답 번호 재설정
    currentQuestions.forEach(q => {
        const correctOption = q.options[q.answer]; // 기존 정답 내용 저장
        
        // 보기 섞기
        for (let i = q.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
        }
        
        // 섞인 보기 중에서 새로운 정답 번호 찾기
        q.answer = q.options.indexOf(correctOption);
    });
    
    // 4. 화면 전환 및 시작 (기존 코드)
    document.getElementById("quiz-menu").style.display = "none";
    document.getElementById("quiz-wrapper").style.display = "block";
    document.getElementById("omr-card").style.display = "block";
    document.getElementById("main-title").textContent = selectedSet.roundName;

    renderQuiz();
    startTimer();
};

// [퀴즈] 진짜 문제를 화면에 그리는 함수
function renderQuiz() {
    const container = document.getElementById("quiz");
    
    container.innerHTML = currentQuestions.map((q, i) => `
        <div class="question" id="q-${i}" style="margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
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
    renderOMR(); // <--- 이 줄을 맨 마지막(updateStatus 위)에 추가하세요!
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
    
    // 배경색 강조 효과
    document.querySelectorAll(`#q-${qIdx} label`).forEach(l => l.style.background = '#fff');
    const targetLabel = document.getElementById(`label-${qIdx}-${aIdx}`);
    if(targetLabel) targetLabel.style.background = '#e0f7ff';

    // OMR 카드 번호 강조 효과 추가
    document.querySelectorAll(`#omr-item-${qIdx} .omr-option`).forEach(opt => {
        opt.style.background = 'white';
        opt.style.color = 'black';
    });
    const selectedOpt = document.getElementById(`omr-opt-${qIdx}-${aIdx}`);
    if (selectedOpt) {
        selectedOpt.style.background = '#1f3b73';
        selectedOpt.style.color = 'white';
    }
};

// [OMR] OMR 카드를 화면에 그리는 함수
function renderOMR() {
    const omrList = document.getElementById("omr-list");
    
    // 문제 개수만큼 번호 버튼을 만듭니다.
    omrList.innerHTML = currentQuestions.map((_, i) => `
        <div class="omr-item" id="omr-item-${i}" style="display:flex; align-items:center; margin-bottom:5px;">
            <span class="omr-q-num" onclick="scrollToQ(${i})" style="width:30px; cursor:pointer; background:#eee; text-align:center; border-radius:4px; margin-right:10px;">${i + 1}</span>
            ${[0, 1, 2, 3].map(v => `
                <span class="omr-option" id="omr-opt-${i}-${v}" onclick="selectAnswer(${i}, ${v}); syncRadio(${i}, ${v})" style="width:25px; height:25px; border:1px solid #ccc; border-radius:50%; display:inline-block; text-align:center; margin-right:5px; cursor:pointer; font-size:0.8rem; line-height:23px;">${v + 1}</span>
            `).join('')}
        </div>
    `).join('');
}

// [이동] OMR 번호 클릭 시 해당 문제로 스크롤
window.scrollToQ = (i) => {
    const qElement = document.getElementById(`q-${i}`);
    if (qElement) {
        qElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};

// [동기화] OMR 클릭 시 문제지의 라디오 버튼도 체크됨
window.syncRadio = (q, v) => {
    const radio = document.querySelector(`input[name="q${q}"][value="${v}"]`);
    if (radio) radio.checked = true;
};

// [제출] 시험 종료 및 결과 확인
window.submitQuiz = () => {
    clearInterval(timerInterval); // <--- 제출 버튼 누르자마자 시간 멈추기!
    // 1. 모든 문제를 풀었는지 확인 (선택 사항)
    const unsolved = userAnswers.indexOf(-1);
    if (unsolved !== -1) {
        if (!confirm("아직 풀지 않은 문제가 있습니다. 정말 제출하시겠습니까?")) return;
    } else {
        if (!confirm("시험을 종료하고 답안지를 제출하시겠습니까?")) return;
    }

    let score = 0;
    
    // [제출] 함수 내부의 채점 로직 수정
currentQuestions.forEach((q, i) => {
    const isCorrect = userAnswers[i] === q.answer;
    if (isCorrect) score++;

    // 1. 문제지 옆에 줄 긋기
    const qElement = document.getElementById(`q-${i}`);
    qElement.style.borderLeft = isCorrect ? "5px solid green" : "5px solid red";

    // 2. [수정] OMR 번호 색상 변경 (클릭 기능 유지)
    const omrNumElement = document.querySelector(`#omr-item-${i} .omr-q-num`);
    if (omrNumElement) {
        // 배경색과 글자색만 바꿉니다. (innerHTML을 건드리지 않아 클릭 이벤트가 유지됨)
        omrNumElement.style.backgroundColor = isCorrect ? "#e6ffed" : "#ffeeee"; 
        omrNumElement.style.color = isCorrect ? "green" : "red";               
        omrNumElement.style.border = `2px solid ${isCorrect ? "green" : "red"}`;
        omrNumElement.style.fontWeight = "bold";
    }

    // 3. 해설 박스 보여주기
    const explainBox = document.getElementById(`explain-${i}`);
    if (explainBox) explainBox.style.display = "block";
});

    // 3. 결과 알림
    const total = currentQuestions.length;
    const percent = Math.round((score / total) * 100);
    alert(`제출 완료!\n점수: ${score} / ${total} (${percent}점)`);

    // 4. 화면 맨 위로 이동하여 복습 시작
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// [이벤트 연결] HTML의 제출 버튼들과 함수 연결
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("submitBtn");
    if (btn) btn.onclick = window.submitQuiz;
});

// 시간을 화면에 예쁘게 보여주는 함수
function updateTimerDisplay() {
    const timerElement = document.getElementById("timer");
    if (!timerElement) return;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    // 두 자리 숫자로 표시 (예: 05:09)
    timerElement.textContent = `남은 시간: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// 타이머 시작 함수
function startTimer() {
    // 혹시 이미 돌아가는 타이머가 있다면 끄기
    if (timerInterval) clearInterval(timerInterval);
    
    timeLeft = 3600; // 60분으로 초기화
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("시간이 종료되었습니다! 자동으로 제출됩니다.");
            window.submitQuiz(); // 시간 다 되면 강제 제출
        }
    }, 1000); // 1초마다 실행
}

// 초기화 실행
init();