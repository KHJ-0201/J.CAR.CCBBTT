/* ===========================
    1. 데이터 및 초기 설정
=========================== */
import * as Data from './3회차.js';

const allQuestions = Object.values(Data).find(val => Array.isArray(val)) || [];
let rawQuestions = allQuestions.slice(0, 80); 

let questions = [];
let answers = [];
let totalSeconds = 60 * 60;
let timerInterval = null;

/* ===========================
    2. 유틸리티 함수
=========================== */
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

/* ===========================
    3. UI 렌더링 함수
=========================== */
function renderQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `
            <div class="q-header"><span id="q-status-${i}" class="q-status"></span></div>
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

/* ===========================
    4. 핵심 로직 함수
=========================== */
window.scrollToQuestion = (i) => {
    const q = document.getElementsByClassName("question")[i];
    if (q) q.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.selectFromOMR = (qIdx, vIdx) => {
    window.scrollToQuestion(qIdx);
    const radio = document.querySelector(`input[name="q${qIdx}"][value="${vIdx}"]`);
    if (radio) { radio.checked = true; radio.dispatchEvent(new Event('change')); }
};

window.globalSelect = (vIdx) => {
    answers = answers.map(() => vIdx);
    questions.forEach((_, i) => {
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
        item.querySelectorAll('.omr-option').forEach((opt, j) => {
            opt.classList.toggle('selected', answers[i] === j);
        });
    });
}

function scrollToQuestion(i) {
    const q = document.getElementsByClassName("question")[i];
    if (q) q.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ===========================
    5. 제출 및 채점 로직 (수정: 다 풀었을 때 즉시 제출)
=========================== */
function submitQuiz(isQuick = false) {
    // 1. 일반 제출 모드(isQuick: false)에서만 검사 수행
    if (!isQuick) {
        const unansweredIdx = answers.findIndex(a => a < 0);
        
        // 안 푼 문제가 있다면 안내 후 이동 (제출 중단)
        if (unansweredIdx !== -1) {
            alert("미풀이 문제가 있습니다. 해당 문제로 이동합니다.");
            scrollToQuestion(unansweredIdx);
            return; 
        }
        // 미풀이 문제가 없으면 alert나 confirm 없이 바로 하단 채점 로직으로 넘어감
    }

    // 2. 채점 프로세스 (바로제출 클릭 시 혹은 모든 문제 풀이 시 실행)
    clearInterval(timerInterval);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let score = 0;
    questions.forEach((q, i) => {
        const qDiv = document.getElementsByClassName("question")[i];
        const status = document.getElementById(`q-status-${i}`);
        const omrOpts = document.querySelectorAll('.omr-item')[i].querySelectorAll('.omr-option');
        
        qDiv.querySelectorAll('label')[q.answer].style.backgroundColor = "#b6fcb6";

        if (answers[i] === q.answer) {
            score++; 
            status.innerHTML = '⭕';
            omrOpts[q.answer].classList.add('correct');
        } else {
            if (answers[i] >= 0) {
                qDiv.querySelectorAll('label')[answers[i]].style.backgroundColor = "#fcb6b6";
                omrOpts[answers[i]].classList.add('wrong');
            }
            status.innerHTML = '❌';
            omrOpts[q.answer].classList.add('correct');
        }
        status.style.cssText = 'font-size: 2rem; font-weight: 700; position: absolute; left:-14px; top: -35px;';
        qDiv.querySelector(".explain").innerHTML = `<strong>정답: ${q.originalCorrectOptionText}</strong><br>${q.explain || '해설이 없습니다.'}`;
        qDiv.querySelectorAll('input').forEach(r => r.disabled = true);
    });

    // 3. 상단 결과 표시
    const statusHeader = document.getElementById("status");
    statusHeader.classList.add("center");
    statusHeader.innerHTML = `
        <span id="scoreDisplay">결과: ${score}/${questions.length}</span>
        <button id="retryBtn" onclick="location.reload()">다시 풀기</button>
    `;
    
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

/* ===========================
    6. 초기화 실행
=========================== */
function initApp() {
    if (timerInterval) clearInterval(timerInterval);
    questions = prepareQuestions(rawQuestions); 
    answers = Array(questions.length).fill(-1);
    totalSeconds = 60 * 60;

    const status = document.getElementById("status");
    status.classList.remove("center");
    status.innerHTML = `
        <h1 class="page-title">차체수리 1회차 전체랜덤</h1>
        <div class="status-info"><span id="timer"></span> <span id="remaining"></span></div>
    `;

    document.getElementById("submitBtn").style.display = "block";
    document.getElementById("omrSubmitBtn").style.display = "block";
    document.getElementById("quickSubmitBtn").style.display = "block";

    renderQuiz();
    renderOMR();
    timerInterval = setInterval(updateTimer, 1000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById("submitBtn").onclick = () => submitQuiz(false);
document.getElementById("omrSubmitBtn").onclick = () => submitQuiz(false);
document.getElementById("quickSubmitBtn").onclick = () => submitQuiz(true);

initApp();