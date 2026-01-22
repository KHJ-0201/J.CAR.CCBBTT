/* ===========================
    1. 데이터 임포트
=========================== */
import * as Data1 from './1회차/1회차.js';
import * as Data2 from './2회차/2회차.js';
import * as Data3 from './3회차/3회차.js';
import * as Data4 from './4회차/4회차.js';
import * as Data5 from './5회차/5회차.js';
import * as Data6 from './6회차/6회차.js';

// 각 회차 모듈을 배열로 관리
const allSets = [Data1, Data2, Data3, Data4, Data5, Data6];

let questions = [];
let answers = [];
let totalSeconds = 100 * 60;
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
    if (!quizDiv) return;
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
    if (!omrListDiv) return;
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
    if (!header) return;
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

/* ===========================
    5. 제출 및 채점 로직
=========================== */
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

    const statusHeader = document.getElementById("status");
    if (statusHeader) {
        statusHeader.classList.add("center");
        statusHeader.innerHTML = `
            <span id="scoreDisplay">결과: ${score}/${questions.length}</span>
            <button id="retryBtn" onclick="location.reload()">다시 풀기</button>
        `;
    }
    
    ["submitBtn", "omrSubmitBtn", "quickSubmitBtn"].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.style.display = "none";
    });
}

function updateTimer() {
    let m = Math.floor(totalSeconds / 60), s = totalSeconds % 60;
    const timerElem = document.getElementById("timer");
    if (timerElem) timerElem.textContent = `남은 시간: ${m}:${s < 10 ? '0'+s : s}`;
    if (totalSeconds-- <= 0) submitQuiz(true);
}

/* ===========================
    6. 초기화 실행 (가장 중요한 부분)
=========================== */
function initApp() {
    if (timerInterval) clearInterval(timerInterval);

    let rawPool = [];

    // 1~6회차 파일에서 10문제씩 추출
    allSets.forEach((dataModule, index) => {
        // export const repairData 로 되어 있으므로 dataModule.repairData를 직접 참조
        const setQuestions = dataModule.repairData; 
        
        if (setQuestions && Array.isArray(setQuestions)) {
            const picked = shuffleArray(setQuestions).slice(0, 10);
            rawPool = rawPool.concat(picked);
        } else {
            console.error(`${index + 1}회차 데이터를 찾지 못했습니다. 변수명 'repairData'를 확인하세요.`);
        }
    });

    if (rawPool.length === 0) {
        alert("문제가 로드되지 않았습니다. 파일 경로와 export 변수명을 확인해주세요.");
        return;
    }

    // 최종 60문제를 다시 섞고 준비
    questions = prepareQuestions(shuffleArray(rawPool)); 
    answers = Array(questions.length).fill(-1);
    totalSeconds = 100 * 60;

    const status = document.getElementById("status");
    if (status) {
        status.classList.remove("center");
        status.innerHTML = `
            <h1 class="page-title">차체수리 통합 랜덤 (60문항)</h1>
            <div class="status-info"><span id="timer"></span> <span id="remaining"></span></div>
        `;
    }

    ["submitBtn", "omrSubmitBtn", "quickSubmitBtn"].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.style.display = "block";
    });

    renderQuiz();
    renderOMR();
    timerInterval = setInterval(updateTimer, 1000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 이벤트 바인딩
const sBtn = document.getElementById("submitBtn");
const oBtn = document.getElementById("omrSubmitBtn");
const qBtn = document.getElementById("quickSubmitBtn");

if (sBtn) sBtn.onclick = () => submitQuiz(false);
if (oBtn) oBtn.onclick = () => submitQuiz(false);
if (qBtn) qBtn.onclick = () => submitQuiz(true);

initApp();