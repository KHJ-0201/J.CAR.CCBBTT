import * as Data1 from './심화1회차/심화1회차.js';
import * as Data2 from './심화2회차/심화2회차.js';
import * as Data3 from './심화3회차/심화3회차.js';
import * as Data4 from './심화4회차/심화4회차.js';
import * as Data5 from './심화5회차/심화5회차.js';
import * as Data6 from './심화6회차/심화6회차.js';


const allSets = [Data1, Data2, Data3, Data4, Data5, Data6];
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
    let rawPool = [];
    allSets.forEach((mod, idx) => {
        if (mod.repairData) {
            const picked = shuffleArray(mod.repairData).slice(0, 10).map(q => ({...q, roundInfo: `${idx+1}회차`}));
            rawPool = rawPool.concat(picked);
        }
    });
    questions = prepareQuestions(shuffleArray(rawPool));
    answers = Array(questions.length).fill(-1);
    renderQuiz();
    renderOMR();
    updateRemaining();
    timerInterval = setInterval(updateTimer, 1000);
}

document.getElementById("submitBtn").onclick = () => submitQuiz(false);
document.getElementById("omrSubmitBtn").onclick = () => submitQuiz(false);
document.getElementById("quickSubmitBtn").onclick = () => submitQuiz(true);

initApp();

// 사용자가 페이지를 떠나려고 할 때 경고창을 띄우는 함수
function enableExitPrevention() {
    window.addEventListener('beforeunload', handleBeforeUnload);
}

// 경고창을 해제하는 함수 (제출 시에는 경고 없이 넘어가야 함)
function disableExitPrevention() {
    window.removeEventListener('beforeunload', handleBeforeUnload);
}

function handleBeforeUnload(e) {
    // 표준에 따라 기본 동작 방지 및 메시지 설정
    e.preventDefault();
    // 최신 브라우저에서는 보안상 사용자 지정 메시지보다 브라우저 기본 메시지가 출력됩니다.
    e.returnValue = '시험을 종료하시겠습니까? 작성 중인 답안이 저장되지 않습니다.';
}

// 1. 앱 초기화 시 이탈 방지 활성화
// initApp() 내부 혹은 파일 하단에 추가
enableExitPrevention();

// 2. 문제 제출 시에는 이탈 방지 해제
// submitQuiz 함수 시작 부분에 추가하거나, 기존 코드의 submitQuiz 호출 직전에 추가
const originalSubmitQuiz = submitQuiz;
window.submitQuiz = function(isQuick) {
    if (!isQuick && answers.includes(-1)) {
        // 미풀이 안내 로직은 유지
    } else {
        // 실제 제출 단계로 넘어갈 때 이탈 방지 해제
        disableExitPrevention();
    }
    originalSubmitQuiz(isQuick);
};