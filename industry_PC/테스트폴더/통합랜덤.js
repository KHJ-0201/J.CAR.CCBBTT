import { quizSets } from './통합문제.js';

let questions = [];
let answers = [];
let totalSeconds = 60 * 60;
let timerInterval = null;
let isWrongMode = false;

// 초기화 실행
function init() {
    if (localStorage.getItem('dark-mode') === 'true') document.body.classList.add('dark-mode');
    renderMenu();
}

// 1. 메인 메뉴 렌더링 (문제가 들어있는 회차만 버튼 생성)
function renderMenu() {
    isWrongMode = false;
    const quizDiv = document.getElementById("quiz");
    const omrCard = document.getElementById("omr-card");
    const submitBtn = document.getElementById("submitBtn");

    if(omrCard) omrCard.style.display = "none";
    if(submitBtn) submitBtn.style.display = "none";
    document.querySelector(".page-title").textContent = "학습 회차 선택";

    // 실제 문제가 있는 회차만 필터링
    const activeSets = quizSets.filter(set => set.repairData && set.repairData.length > 0);

    let html = `
        <div style="text-align:center; padding: 20px;">
            <h2 style="margin-bottom:20px;">학습하실 회차를 선택해 주세요</h2>
            <div class="menu-grid">
    `;

    // 문제가 하나라도 있다면 '전체 랜덤' 버튼 표시
    if (activeSets.length > 0) {
        html += `<button class="set-select-btn all-random-btn" onclick="startByMode('all')">🔄 전체 회차 랜덤 (최대 80문항)</button>`;
    }

    // 필터링된 회차들만 버튼 생성
    activeSets.forEach(set => {
        html += `
            <button class="set-select-btn" onclick="startByMode('${set.id}')">
                📖 ${set.roundName} <br>
                <span style="font-size:0.8rem; font-weight:normal;">(${set.repairData.length}문항 준비됨)</span>
            </button>
        `;
    });

    // 만약 문제가 하나도 없다면 안내 메시지
    if (activeSets.length === 0) {
        html += `<p style="grid-column: 1/-1; padding: 50px; color: #888;">현재 준비된 문제가 없습니다. <br>data.js에 문제를 추가해 주세요.</p>`;
    }

    html += `</div></div>`;
    quizDiv.innerHTML = html;
}

// 2. 문제 선택 및 시작 모드
window.startByMode = (id) => {
    let pool = [];
    const activeSets = quizSets.filter(set => set.repairData.length > 0);

    if (id === 'all') {
        // 모든 회차에서 골고루 섞어 최대 80문제 추출
        let allProblems = [];
        activeSets.forEach(set => {
            const problemsWithInfo = set.repairData.map(q => ({ ...q, roundInfo: set.roundName }));
            allProblems = allProblems.concat(problemsWithInfo);
        });
        pool = shuffleArray(allProblems).slice(0, 80);
        document.querySelector(".page-title").textContent = "전체 랜덤 풀이";
    } else {
        const target = quizSets.find(s => s.id === id);
        pool = target.repairData.map(q => ({ ...q, roundInfo: target.roundName }));
        document.querySelector(".page-title").textContent = target.roundName;
    }
    
    questions = prepareQuestions(pool);
    startQuiz();
};

// 3. 문제 셔플 및 데이터 가공 (보안 및 랜덤성)
function prepareQuestions(source) {
    const shuffled = shuffleArray(JSON.parse(JSON.stringify(source)));
    shuffled.forEach(q => {
        q.originalCorrect = q.options[q.answer]; // 실제 정답 텍스트 보관
        q.options = shuffleArray(q.options); // 보기 섞기
        q.answer = q.options.indexOf(q.originalCorrect); // 섞인 보기 중 정답 인덱스 재설정
    });
    return shuffled;
}

// 4. 시험 시작 로직
function startQuiz() {
    answers = Array(questions.length).fill(-1);
    document.getElementById("omr-card").style.display = "block";
    document.getElementById("submitBtn").style.display = "block";
    
    renderQuiz();
    renderOMR();
    updateRemaining();
    
    // 타이머 리셋 (1시간)
    totalSeconds = 3600;
    if(timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

// --- 유틸리티 및 렌더링 함수들 ---

function shuffleArray(arr) { return [...arr].sort(() => Math.random() - 0.5); }

function renderQuiz() {
    const container = document.getElementById("quiz");
    container.innerHTML = questions.map((q, i) => `
        <div class="question" id="q-${i}">
            <div style="margin-bottom:10px;"><span class="round-tag" style="background:#eee; padding:2px 8px; border-radius:4px; font-size:0.8rem;">${q.roundInfo}</span> <span id="status-${i}"></span></div>
            <div class="q-title"><strong>${i+1}. ${q.question}</strong></div>
            <div class="options" style="margin-top:15px;">
                ${q.options.map((opt, j) => `
                    <label id="label-${i}-${j}" style="display:block; margin-bottom:8px; padding:10px; border:1px solid #ddd; border-radius:8px; cursor:pointer;">
                        <input type="radio" name="q${i}" value="${j}" onchange="selectAnswer(${i}, ${j})" style="margin-right:8px;"> ${opt}
                    </label>
                `).join('')}
            </div>
            <div class="explain" id="explain-${i}" style="display:none; margin-top:15px; padding:15px; background:#f0f8ff; border-left:5px solid #1f3b73;"></div>
        </div>
    `).join('');
}

window.selectAnswer = (qIdx, aIdx) => {
    answers[qIdx] = aIdx;
    updateRemaining();
    // 보기 선택 시각 효과
    document.querySelectorAll(`#q-${qIdx} label`).forEach(l => l.style.background = 'var(--option-bg)');
    document.getElementById(`label-${qIdx}-${aIdx}`).style.background = '#e0f7ff';
    
    // OMR 동기화
    const omrOpts = document.querySelectorAll(`#omr-item-${qIdx} .omr-option`);
    omrOpts.forEach((opt, idx) => {
        opt.classList.toggle('selected', idx === aIdx);
    });
};

function renderOMR() {
    const list = document.getElementById("omr-list");
    list.innerHTML = questions.map((_, i) => `
        <div class="omr-item" id="omr-item-${i}" style="display:flex; align-items:center; margin-bottom:5px;">
            <span class="omr-q-num" onclick="scrollToQ(${i})" style="width:30px; cursor:pointer; background:#f0f0f0; text-align:center; border-radius:4px; margin-right:10px;">${i+1}</span>
            ${[0,1,2,3].map(v => `<span class="omr-option" onclick="selectAnswer(${i}, ${v}); syncRadio(${i},${v})" style="width:25px; height:25px; border:1px solid #ccc; border-radius:50%; display:inline-block; text-align:center; margin-right:5px; cursor:pointer; font-size:0.8rem; line-height:23px;">${v+1}</span>`).join('')}
        </div>
    `).join('');
}

window.syncRadio = (q, v) => {
    const radio = document.querySelector(`input[name="q${q}"][value="${v}"]`);
    if(radio) radio.checked = true;
};

window.scrollToQ = (i) => {
    document.getElementById(`q-${i}`).scrollIntoView({ behavior: 'smooth' });
};

function updateRemaining() {
    const done = answers.filter(a => a !== -1).length;
    document.getElementById("remaining").textContent = `남은 문제: ${questions.length - done}/${questions.length}`;
}

function updateTimer() {
    let m = Math.floor(totalSeconds / 60), s = totalSeconds % 60;
    document.getElementById("timer").textContent = `남은 시간: ${m}:${s<10?'0'+s:s}`;
    if(totalSeconds-- <= 0) {
        clearInterval(timerInterval);
        alert("시간이 종료되었습니다. 자동 제출합니다.");
        submitQuiz();
    }
}

// 5. 제출 및 결과 확인
window.submitQuiz = () => {
    if(!confirm("시험을 종료하고 답안지를 제출하시겠습니까?")) return;
    clearInterval(timerInterval);
    
    let score = 0;
    questions.forEach((q, i) => {
        const isCorrect = answers[i] === q.answer;
        if(isCorrect) score++;
        
        document.getElementById(`status-${i}`).textContent = isCorrect ? "✅ 정답" : "❌ 오답";
        document.getElementById(`status-${i}`).style.color = isCorrect ? "green" : "red";
        
        const expDiv = document.getElementById(`explain-${i}`);
        expDiv.style.display = "block";
        expDiv.innerHTML = `<strong>정답: ${q.originalCorrect}</strong><br><small>${q.explain}</small>`;
    });
    
    alert(`제출 완료! \n당신의 점수: ${score} / ${questions.length} (${Math.round(score/questions.length*100)}점)`);
    window.scrollTo(0,0);
}

// 이벤트 리스너 연결
document.getElementById("submitBtn").onclick = submitQuiz;
document.getElementById("omrSubmitBtn").onclick = submitQuiz;
document.getElementById("quickSubmitBtn").onclick = submitQuiz;

// 기타 보조 함수
window.toggleDarkMode = () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', isDark);
};
window.showStats = () => alert("통계 서비스 준비 중입니다.");
window.startWrongNote = () => alert("오답 노트 서비스 준비 중입니다.");
window.closeModal = () => document.getElementById('modal-overlay').classList.add('hidden');

// 초기 실행
init();