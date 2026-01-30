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

function shuffleArray(array) { return [...array].sort(() => Math.random() - 0.5); }

function prepareQuestions(sourceArray) {
    const shuffled = shuffleArray(JSON.parse(JSON.stringify(sourceArray)));
    shuffled.forEach(q => {
        if (!q.originalCorrectOptionText) q.originalCorrectOptionText = q.options[q.answer];
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
    container.innerHTML = [0,1,2,3].map(i => `<button class="omr-global-select-btn" onclick="globalSelect(${i})">${i+1}</button>`).join('');
}

// 스크롤 보정 함수 (OMR 카드 높이를 고려)
window.scrollToQuestion = (i) => {
    const q = document.getElementsByClassName("question")[i];
    if (q) {
        const yOffset = -270; // 상단바 + OMR 영역 높이만큼 띄움
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
    document.getElementById("timer").textContent = `${m}:${s < 10 ? '0'+s : s}`;
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