import * as Data from './2회차.js';

// 데이터 로드 방식 수정: 데이터를 가져오면서 roundInfo를 주입합니다.
const allQuestions = Object.values(Data).find(val => Array.isArray(val)) || [];
// [수정] 모든 문제 객체에 roundInfo: "2회차"를 추가함
let rawQuestions = allQuestions.slice(0, 80).map(q => ({
    ...q,
    roundInfo: "2회차"
}));

let questions = [];
let answers = [];
let totalSeconds = 60 * 60;
let timerInterval = null;

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function prepareQuestions(sourceArray) {
    const shuffled = shuffleArray(JSON.parse(JSON.stringify(sourceArray)));
    shuffled.forEach(q => {
        if (!q.originalCorrectOptionText) {
            q.originalCorrectOptionText = q.options[q.answer];
        }
        q.options = shuffleArray(q.options);
        q.answer = q.options.indexOf(q.originalCorrectOptionText);
    });
    return shuffled;
}

function renderQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `
            <div class="q-header">
                <span class="round-tag">${q.roundInfo}</span>
                <span id="q-status-${i}" class="q-status"></span>
            </div>
            <strong class="q-title">${i + 1}. ${q.question}</strong>
            ${q.imagePath ? `<img src="${q.imagePath}" alt="문제" style="width: 100%; max-width: 500px; height: auto; margin: 15px 0;">` : ''}
            <div class="options"></div>
            <div class="explain"></div>
        `;
        const optsDiv = div.querySelector(".options");
        q.options.forEach((opt, j) => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="q${i}" value="${j}"> ${opt}`;
            label.querySelector("input").onchange = () => {
                answers[i] = j;
                updateRemaining();
                optsDiv.querySelectorAll('label').forEach(l => l.classList.remove('selected'));
                label.classList.add('selected');
                if (i < questions.length - 1) setTimeout(() => scrollToQuestion(i + 1), 500);
            };
            optsDiv.appendChild(label);
        });
        quizDiv.appendChild(div);
    });
}

// --- 이 하 렌더링 및 로직 코드는 동일합니다 (생략 가능하지만 완성도를 위해 포함) ---

function renderOMR() {
    const omrListDiv = document.getElementById("omr-list");
    omrListDiv.innerHTML = "";
    questions.forEach((_, i) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "omr-item";
        itemDiv.innerHTML = `
            <span class="omr-q-num" onclick="scrollToQuestion(${i})">${i + 1}</span>
            <div class="omr-options-wrapper">
                ${[0, 1, 2, 3].map(v => `<span class="omr-option" onclick="selectFromOMR(${i}, ${v})">${v + 1}</span>`).join('')}
            </div>
        `;
        omrListDiv.appendChild(itemDiv);
    });
    updateRemaining();
    renderGlobalBtns();
}

function renderGlobalBtns() {
    const header = document.querySelector(".omr-header");
    let wrap = header.querySelector(".global-select-wrapper") || document.createElement("div");
    wrap.className = "global-select-wrapper";
    wrap.innerHTML = [0,1,2,3].map(i => `<button class="omr-global-select-btn" onclick="globalSelect(${i})">${i+1}</button>`).join('');
    const quickBtn = document.getElementById("quickSubmitBtn");
    header.insertBefore(wrap, quickBtn);
}

window.scrollToQuestion = (i) => {
    const q = document.getElementsByClassName("question")[i];
    if (q) q.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.selectFromOMR = (qIdx, vIdx) => {
    const radio = document.querySelector(`input[name="q${qIdx}"][value="${vIdx}"]`);
    if (radio) { radio.checked = true; radio.dispatchEvent(new Event('change')); }
};

window.globalSelect = (vIdx) => {
    questions.forEach((_, i) => {
        answers[i] = vIdx;
        const radio = document.querySelector(`input[name="q${i}"][value="${vIdx}"]`);
        if (radio) radio.checked = true;
    });
    updateRemaining();
};

function updateRemaining() {
    const count = answers.filter(a => a >= 0).length;
    const rem = document.getElementById("remaining");
    if (rem) rem.textContent = `남은 문제: ${questions.length - count}/${questions.length}`;
    document.querySelectorAll('.omr-item').forEach((item, i) => {
        const isAnswered = answers[i] >= 0;
        item.classList.toggle('answered', isAnswered);
        item.querySelectorAll('.omr-option').forEach((opt, j) => {
            opt.classList.toggle('selected', answers[i] === j);
        });
    });
}

function submitQuiz(isQuick = false) {
    if (!isQuick) {
        const unansweredIdx = answers.findIndex(a => a < 0);
        if (unansweredIdx !== -1) {
            alert("미풀이 문제가 있습니다. 해당 문제로 이동합니다.");
            scrollToQuestion(unansweredIdx);
            return; 
        }
    }
    clearInterval(timerInterval);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let score = 0;
    questions.forEach((q, i) => {
        const qDiv = document.getElementsByClassName("question")[i];
        const status = document.getElementById(`q-status-${i}`);
        const omrItem = document.querySelectorAll('.omr-item')[i];
        const omrOpts = omrItem.querySelectorAll('.omr-option');
        qDiv.querySelectorAll('label')[q.answer].style.backgroundColor = "#b6fcb6";
        if (answers[i] === q.answer) {
            score++; 
            status.innerHTML = '⭕';
            omrItem.classList.add('correct');
            omrOpts[q.answer].classList.add('correct');
        } else {
            if (answers[i] >= 0) {
                qDiv.querySelectorAll('label')[answers[i]].style.backgroundColor = "#fcb6b6";
                omrOpts[answers[i]].classList.add('wrong');
            }
            status.innerHTML = '❌';
            omrItem.classList.add('wrong');
            omrOpts[q.answer].classList.add('correct');
        }
        status.style.cssText = 'font-size: 2rem; font-weight: 700; position: absolute; left:-14px; top: 40px;';
        qDiv.querySelector(".explain").innerHTML = `<strong>정답: ${q.originalCorrectOptionText}</strong><br>${q.explain || '해설이 없습니다.'}`;
        qDiv.querySelectorAll('input').forEach(r => r.disabled = true);
    });
    const statusHeader = document.getElementById("status");
    statusHeader.classList.add("center");
    statusHeader.innerHTML = `<span id="scoreDisplay">결과: ${score}/${questions.length}</span><button id="retryBtn" onclick="location.reload()">다시 풀기</button>`;
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("omrSubmitBtn").style.display = "none";
    document.getElementById("quickSubmitBtn").style.display = "none";
}

function updateTimer() {
    let m = Math.floor(totalSeconds / 60), s = totalSeconds % 60;
    const timerElem = document.getElementById("timer");
    if (timerElem) timerElem.textContent = `남은 시간: ${m}:${s < 10 ? '0'+s : s}`;
    if (totalSeconds-- <= 0) submitQuiz(true);
}

function initApp() {
    if (timerInterval) clearInterval(timerInterval);
    questions = prepareQuestions(rawQuestions); 
    answers = Array(questions.length).fill(-1);
    totalSeconds = 60 * 60;
    const status = document.getElementById("status");
    status.classList.remove("center");
    status.innerHTML = `
        <h1 class="page-title">차체수리 2회차 전체랜덤</h1>
        <div class="status-info"><span id="timer"></span> <span id="remaining"></span></div>
    `;
    document.getElementById("submitBtn").style.display = "block";
    document.getElementById("omrSubmitBtn").style.display = "block";
    document.getElementById("quickSubmitBtn").style.display = "block";
    renderQuiz();
    renderOMR();
    timerInterval = setInterval(updateTimer, 1000);
}

document.getElementById("submitBtn").onclick = () => submitQuiz(false);
document.getElementById("omrSubmitBtn").onclick = () => submitQuiz(false);
document.getElementById("quickSubmitBtn").onclick = () => submitQuiz(true);

initApp();

// 1. 이탈 방지 핸들러
function handleBeforeUnload(e) {
    e.preventDefault();
    e.returnValue = ''; 
    return '';
}

// 2. [추가] 아이폰 Safari 전용 대응 (pagehide)
// Safari는 새로고침 시 beforeunload보다 pagehide가 더 안정적으로 호출됩니다.
function handlePageHide(e) {
    // 사용자가 답을 작성 중이었다면 로컬 스토리지에 임시 저장 (보험)
    localStorage.setItem('temp_answers', JSON.stringify(answers));
}

function enableExitPrevention() {
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pagehide', handlePageHide); // iOS 대응 추가
    
    // 뒤로가기 방지
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function() {
        if (confirm("시험을 종료하시겠습니까? 작성 중인 답안이 저장되지 않습니다.")) {
            disableExitPrevention();
            window.history.back();
        } else {
            window.history.pushState(null, null, window.location.href);
        }
    };
}

function disableExitPrevention() {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    window.removeEventListener('pagehide', handlePageHide);
    window.onpopstate = null;
    localStorage.removeItem('temp_answers'); // 정상 제출 시 임시 데이터 삭제
}

// 3. 앱 초기화 및 터치 권한
enableExitPrevention();
window.addEventListener('touchstart', () => {}, { once: true });

// 4. [보너스] 만약 새로고침 되어버렸을 때, 기존 답안 불러오기 (initApp 마지막에 추가 권장)
function restoreAnswers() {
    const saved = localStorage.getItem('temp_answers');
    if (saved) {
        const savedAnswers = JSON.parse(saved);
        savedAnswers.forEach((val, idx) => {
            if (val !== -1) {
                // 저장된 답이 있다면 OMR과 라디오 버튼에 적용
                selectFromOMR(idx, val);
            }
        });
    }
}

// 제출 로직 래핑
const originalSubmitQuiz = submitQuiz;
window.submitQuiz = function(isQuick) {
    if (isQuick || !answers.includes(-1)) {
        disableExitPrevention();
    }
    originalSubmitQuiz(isQuick);
};

// 페이지 로드 시 복구 실행 (코드 맨 끝에 추가)
window.onload = () => {
    restoreAnswers();
};