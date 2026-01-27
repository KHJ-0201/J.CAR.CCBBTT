/* ===========================
    1. 데이터 임포트 (심화1회차만 사용)
=========================== */
import * as Data1 from './심화1회차.js';

// 기존 6개 그룹 변수는 제거하거나 심화1회차만 할당
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
        if (!q.originalCorrectOptionText) q.originalCorrectOptionText = q.options[q.answer];
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
            <div class="q-header">
                <span class="round-tag">${q.roundInfo}</span>
                <span id="q-status-${i}" class="q-status"></span>
            </div>
            <strong class="q-title">${i + 1}. ${q.question}</strong>
            ${q.imagePath ? `<img src="${q.imagePath}" style="width:100%; max-width:400px; margin:10px 0;">` : ''}
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
                if (i < questions.length - 1) setTimeout(() => scrollToQuestion(i + 1), 400);
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
    renderGlobalBtns();
}

function renderGlobalBtns() {
    const container = document.getElementById("global-select-container");
    if(container) {
        container.innerHTML = [0,1,2,3].map(i => `<button class="omr-global-select-btn" onclick="globalSelect(${i})">${i+1}</button>`).join('');
    }
}

// 스크롤 보정 함수
window.scrollToQuestion = (i) => {
    const q = document.getElementsByClassName("question")[i];
    if (q) {
        const yOffset = -270; 
        const y = q.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
};

window.selectFromOMR = (qIdx, vIdx) => {
    const radio = document.querySelector(`input[name="q${qIdx}"][value="${vIdx}"]`);
    if (radio) { radio.checked = true; radio.dispatchEvent(new Event('change')); }
};

window.globalSelect = (vIdx) => {
    questions.forEach((_, i) => selectFromOMR(i, vIdx));
};

function updateRemaining() {
    const count = answers.filter(a => a >= 0).length;
    document.getElementById("remaining").textContent = `남은 문제: ${questions.length - count}/${questions.length}`;
    
    document.querySelectorAll('.omr-item').forEach((item, i) => {
        // 1. 해당 문제의 답이 선택되었는지 확인 (answers[i]가 -1이 아니면 푼 것)
        const isAnswered = answers[i] >= 0;
        
        // 2. 푼 문제라면 'answered' 클래스를 추가, 아니면 제거
        item.classList.toggle('answered', isAnswered);

        // 기존 코드: 각 옵션 동그라미 색칠 로직
        item.querySelectorAll('.omr-option').forEach((opt, j) => {
            opt.classList.toggle('selected', answers[i] === j);
        });
    });
}

function submitQuiz(isQuick = false) {
    if (!isQuick && answers.includes(-1)) {
        alert("미풀이 문제가 있습니다.");
        scrollToQuestion(answers.indexOf(-1));
        return;
    }
    clearInterval(timerInterval);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let score = 0;
    questions.forEach((q, i) => {
    const qDiv = document.getElementsByClassName("question")[i];
    const status = document.getElementById(`q-status-${i}`);
    
    // OMR 아이템 한 줄(부모)을 가져옵니다.
    const omrItem = document.querySelectorAll('.omr-item')[i];
    const omrOpts = omrItem.querySelectorAll('.omr-option');
    
    qDiv.querySelectorAll('label')[q.answer].style.background = "#d4edda";
    
    if (answers[i] === q.answer) {
        score++; 
        status.innerText = '⭕';
        
        // [추가] 정답일 때 OMR 번호가 포함된 부모에 correct 클래스 추가
        omrItem.classList.add('correct');
        
        status.style.cssText = `
            position: absolute; 
            left: -6px; 
            top: 28px; 
            font-size: 1rem; 
            font-weight: 700;
            z-index: 10;
        `;
        omrOpts[q.answer].classList.add('correct');
    } else {
        if (answers[i] >= 0) {
            qDiv.querySelectorAll('label')[answers[i]].style.background = "#f8d7da";
            omrOpts[answers[i]].classList.add('wrong');
        }
        status.innerText = '❌';

        // [추가] 오답일 때 OMR 번호가 포함된 부모에 wrong 클래스 추가
        omrItem.classList.add('wrong');

        status.style.cssText = `
            position: absolute; 
            left: -6px; 
            top: 28px; 
            font-size: 1rem; 
            font-weight: 700;
            z-index: 10;
        `;
        omrOpts[q.answer].classList.add('correct');
    }
    qDiv.querySelector(".explain").innerHTML = ` 정답: ${q.originalCorrectOptionText}<br>${q.explain || ''}`;
});

    const statusHeader = document.getElementById("status");
    statusHeader.classList.add("center");
    statusHeader.innerHTML = `<span>점수: ${score}/${questions.length}</span><button id="retryBtn" onclick="location.reload()">다시 풀기</button>`;
}

function updateTimer() {
    let m = Math.floor(totalSeconds / 60), s = totalSeconds % 60;
    const timerElem = document.getElementById("timer");
    if(timerElem) {
        timerElem.textContent = `${m}:${s < 10 ? '0'+s : s}`;
    }
    if (totalSeconds-- <= 0) submitQuiz(true);
}

/* ===========================
    4. 초기화 실행 (방식 변경 부분)
=========================== */
function initApp() {
    // Data1(심화1회차.js)의 repairData에서 모든 문제를 가져옴 (회차 정보 고정)
    if (Data1.repairData && Array.isArray(Data1.repairData)) {
        // 심화1회차 데이터 전체를 가져오되, roundInfo를 "심화1회차"로 설정
        const rawPool = Data1.repairData.map(q => ({
            ...q, 
            roundInfo: "심화1회차" 
        }));
        
        // 가져온 데이터 내에서 보기 셔플 및 문제 순서 셔플
        questions = prepareQuestions(shuffleArray(rawPool));
        answers = Array(questions.length).fill(-1);
        
        renderQuiz();
        renderOMR();
        updateRemaining();
        timerInterval = setInterval(updateTimer, 1000);
    } else {
        alert("심화1회차 데이터를 불러올 수 없습니다.");
    }
}

document.getElementById("submitBtn").onclick = () => submitQuiz(false);
document.getElementById("omrSubmitBtn").onclick = () => submitQuiz(false);
document.getElementById("quickSubmitBtn").onclick = () => submitQuiz(true);

initApp();