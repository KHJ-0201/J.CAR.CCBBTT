// [데이터 송신기 설치]
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { quizSets } from './05진단평가사문제.js';
window.quizSets = quizSets;

const firebaseConfig = {
  apiKey: "AIzaSyB3lciTRWoJ1aXQQJH6JgNC4aJnXj6Ewog",
  authDomain: "khj-cbtbase.firebaseapp.com",
  databaseURL: "https://khj-cbtbase-default-rtdb.firebaseio.com",
  projectId: "khj-cbtbase",
  storageBucket: "khj-cbtbase.firebasestorage.app",
  messagingSenderId: "430706982133",
  appId: "1:430706982133:web:d0bf4cb620f1c7d263d9bc"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 선생님 사물함으로 데이터를 쏘는 함수 (신규 배선)
function sendDataToTeacher(score, roundName, results) {
    const studentClass = localStorage.getItem('studentClass') || '미기재'; // 1. 교실 정보 먼저 챙기기
    const studentName = localStorage.getItem('studentName') || '익명학생';  // 2. 성함 정보 챙기기
    const now = new Date();
    const timeStr = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
    
    const postRef = ref(database, 'exam_results');
    const newPostRef = push(postRef);
    
    set(newPostRef, {
        class: studentClass,  // 서버 저장 1순위: 교실
        name: studentName,   // 서버 저장 2순위: 성함
        subject: "객관식",
        round: roundName,
        score: score.toFixed(2),
        date: timeStr,
        // 전체 문항 데이터 전송 (맞음/틀림/해설 포함)
        wrongList: results.map(r => ({
            q: r.q,
            user: r.user,
            correct: r.correct,
            isCorrect: r.isCorrect,
            explain: r.explain,
            options: r.options 
        }))
    });
}

// [보안 엔진] 내부 이동 중에 튕기지 않도록 'removeItem'을 제거했습니다.
(function() {
    if (sessionStorage.getItem('auth_status') !== 'verified') {
        window.location.replace('index.html');
    }
})();

// 앞으로 가기로 우회 접속할 때를 대비한 '새로고침' 센서
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
};
/* 통합랜덤.js - Ver 19.0 대규모 콕핏 개조 (1단계: 로직 분리) */

let questions = []; 
let userAnswers = {}; 
let currentIdx = 0;
let timeUpIdx = null;
let timerInterval = null;
let isMultiSelectMode = false;
let secretResetCount = 0;
let lastUsedExamData = []; 
let lastWrongAnswers = []; 

window.onload = () => {
    // [개조] 모바일 및 다양한 브라우저 환경에서도 작동하도록 로직 보강
    const autoFull = () => {
        // [센서 추가] Go Live(127.0.0.1) 작업 중일 때는 전체화면을 실행하지 않습니다.
        if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') return;

        if (!document.fullscreenElement && !document.webkitFullscreenElement) {
            const elem = document.documentElement;
            // 각 브라우저 엔진별 명령어 세트 (현대차, 기아차 공용 부품처럼 다 준비함)
            if (elem.requestFullscreen) { 
                elem.requestFullscreen().catch(err => console.log("전체화면 대기 중...")); 
            }
            else if (elem.webkitRequestFullscreen) { elem.webkitRequestFullscreen(); } // 사파리/크롬 모바일
            else if (elem.mozRequestFullScreen) { elem.mozRequestFullScreen(); }    // 파이어폭스
            else if (elem.msRequestFullscreen) { elem.msRequestFullscreen(); }      // IE/엣지 구버전
        }
    };

    // 모바일은 'click'보다 'touchstart'가 더 빠르고 확실하게 인식됩니다.
    // 'once: true'를 유지하여 한 번만 성공하면 더 이상 간섭하지 않게 합니다.
    document.addEventListener('click', autoFull, { once: true });
    document.addEventListener('touchstart', autoFull, { once: true });

   window.onpopstate = function(event) {
        const isQuiz = !document.getElementById('quiz-screen').classList.contains('hidden');
        const isResult = !document.getElementById('result-screen').classList.contains('hidden');
        
        if (isQuiz || isResult) {
            // 시험 중이거나 결과창일 때만 뒤로가기를 가로채서 메인으로 보냅니다.
            goBackToMain();
        } else {
            // 4번 메인 화면일 때는 이 함수가 개입하지 않아 즉시 3번으로 이동합니다.
            // 만약 브라우저가 반응하지 않으면 history.back()을 호출합니다.
            if (!event.state) {
                window.location.href = "../../01자격증선택.html"; // 또는 3번 화면의 정확한 경로
            }
        }
    };
};

function initApp() {
    renderRoundCards();
    updateStatsDashboard();
    renderWrongNoteArea();
    // [추가] 앱 시작 시 회차랜덤 시작 버튼을 무조건 숨깁니다.
    const startBtn = document.getElementById('btn-multi-start');
    if (startBtn) startBtn.classList.add('hidden');
    
    // updateFontSize 호출 시 'q'와 기본값을 넘겨 초기화합니다.
    const savedSize = localStorage.getItem('user-q-size') || '1.20';
    updateFontSize('q', savedSize);

    if (localStorage.getItem('cbt_theme') === 'dark') {
        toggleTheme();
    }
}

function renderRoundCards() {
    const grid = document.getElementById('round-grid-display');
    grid.innerHTML = '';
    const activeSets = window.quizSets.filter(set => set.repairData && set.repairData.length > 0);
    activeSets.forEach(set => {
        const card = document.createElement('div');
        card.className = 'round-card glass-card';
        card.innerHTML = `<strong>${set.roundName}</strong><small>${set.repairData.length} 문항</small>`;
        card.onclick = () => {
            if (isMultiSelectMode) {
                // 1. 카드 선택 상태 반전 (토글)
                card.classList.toggle('selected');
                
                // 2. 현재 선택된 카드가 몇 개인지 확인
                const selectedCards = document.querySelectorAll('.round-card.selected').length;
                const startBtn = document.getElementById('btn-multi-start');
                
                // 3. 선택된 게 1개 이상이면 버튼 표시, 아니면 숨김
                if (selectedCards > 0) {
                    startBtn.classList.remove('hidden');
                } else {
                    startBtn.classList.add('hidden');
                }
            } else {
                startExamProcess([set], false);
            }
        };
        grid.appendChild(card);
    });
}

function toggleMultiMode() {
    // 1. 현재 회차랜덤 스위치가 켜졌는지 확인
    isMultiSelectMode = document.getElementById('multi-mode-chk').checked;
    
    // 2. 우리가 숨기고 싶은 '파란색 시작 버튼'만 가져오기
    const startBtn = document.getElementById('btn-multi-start');
    
    if (!isMultiSelectMode) {
        // 스위치를 끄면: 선택되었던 카드들의 불(selected)만 끄고, 시작 버튼은 숨깁니다.
        document.querySelectorAll('.round-card').forEach(c => c.classList.remove('selected'));
        if (startBtn) startBtn.classList.add('hidden');
    } else {
        // 스위치를 켰을 때: 
        // 선택된 카드가 있는지 확인하고, 없으면 시작 버튼을 계속 숨깁니다.
        const selectedCards = document.querySelectorAll('.round-card.selected').length;
        if (selectedCards === 0) {
            if (startBtn) startBtn.classList.add('hidden');
        }
    }
}

function startExam(type) {
    let sets = [];
    if (type === 'full') {
        sets = window.quizSets.filter(set => set.repairData && set.repairData.length > 0);
    } else {
        document.querySelectorAll('.round-card.selected').forEach(c => {
            const name = c.querySelector('strong').innerText;
            sets.push(window.quizSets.find(s => s.roundName === name));
        });
    }
    startExamProcess(sets, true);
}

function startExamProcess(sets, isBalanced) {
    let pool = [];
    if (isBalanced && sets.length > 0) {
        const targetTotal = 80;
        const perSet = Math.floor(targetTotal / sets.length);
        let extra = targetTotal % sets.length;
        sets.forEach(set => {
            let count = perSet + (extra > 0 ? 1 : 0);
            extra--;
            let shuffledSet = shuffle([...set.repairData]);
            pool.push(...shuffledSet.slice(0, count).map(q => ({ ...q, originalRound: set.roundName })));
        });
    } else {
        sets.forEach(set => {
            set.repairData.forEach(q => { pool.push({ ...q, originalRound: set.roundName }); });
        });
    }
    
    // [수정 후 - 배선 보강]
const initialPool = pool.map(q => {
    // 1. 현재 문제의 정답 텍스트를 미리 저장합니다.
    const originalText = q.options[q.answer];
    
    // 2. 새로운 객체를 만들 때 'options' 배열을 확실하게 포함시킵니다.
    return { 
        ...q, 
        options: [...q.options], // ★ 보기 배열을 복사해서 확실히 넣어줍니다.
        correctAnswerText: originalText, 
        originalRound: q.fromRound || q.originalRound 
    };
});

lastUsedExamData = JSON.parse(JSON.stringify(initialPool));

questions = initialPool.map(q => {
    // 1. 원본 보기 데이터를 백업용으로 따로 챙겨둡니다.
    const originalOptions = [...q.options]; 
    
    return { 
        ...q, 
        // 2. 학생에게 보여줄 보기는 여기서 섞고,
        options: shuffle([...q.options]), 
        // 3. 나중에 선생님께 보낼 원본 보기는 'rawOptions'라는 이름으로 하나 더 담아둡니다.
        rawOptions: originalOptions 
    };
});

questions = shuffle(questions);
launchQuiz();
}

function launchQuiz() {
    userAnswers = {};
    currentIdx = 0;
    timeUpIdx = null; // [추가] 시간 종료 시점 기록 초기화
    questions.forEach(q => delete q.isOverTime);
    // [추가] 이제 시험을 시작할 때만 '안전벨트'를 매서 뒤로가기를 1회 방어합니다.
    window.history.pushState({ page: 'quiz' }, null, window.location.href);
    // [추가 포인트] 새 시험 시 하단 패널과 열기 버튼을 리셋 (강제 숨김)
    const panel = document.getElementById('instant-exp-overlay');
    const openBtn = document.getElementById('btn-open-exp');
    if (panel) panel.classList.add('hidden');
    if (openBtn) openBtn.classList.add('hidden');

    const isInstant = document.getElementById('setting-instant-feedback').checked;
    const isOneByOne = document.getElementById('setting-one-by-one').checked;
    
    // [콕핏 개조 추가] 한문제씩 풀기 모드일 때 body에 클래스 부여 (CSS 연동용)
    if (isOneByOne) {
        document.body.classList.add('mode-one-by-one');
    } else {
        document.body.classList.remove('mode-one-by-one');
    }

    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('quiz-status-area').classList.remove('hidden');
    document.getElementById('quiz-nav-group').style.display = isOneByOne ? 'flex' : 'none';
    document.getElementById('left-hand-wrap').style.display = isOneByOne ? 'flex' : 'none';
    document.getElementById('auto-scroll-wrap').style.display = isInstant ? 'none' : 'flex';
    renderQuestion();
    renderOMR();
    if (!isInstant) startTimer();
}

function renderQuestion() {
    const display = document.getElementById('quiz-display-area');
    const isOneByOne = document.getElementById('setting-one-by-one').checked;
    const isInstant = document.getElementById('setting-instant-feedback').checked;
    if (isOneByOne) { display.innerHTML = generateQuestionHTML(questions[currentIdx], currentIdx, isInstant); }
    else { display.innerHTML = questions.map((q, i) => generateQuestionHTML(q, i, isInstant)).join(''); }
    
    updateExpButtonVisibility();
    updateProgressDisplay();
    highlightOMRRow();
    
    // [콕핏 개조] 문제를 새로 그릴 때마다 저장된 높이값으로 버튼들의 폰트 크기를 자동 최적화합니다.
    const savedHeight = localStorage.getItem('user-opt-height') || '55';
    updateOptHeight(savedHeight); 
}

/* [Section Name] 모드별 해설 노출 방식 분기 (수정 후 코드) */

function generateQuestionHTML(q, idx, isInstant) {
    let feedbackContent = '';
    let feedbackHidden = 'hidden';
    
    // [보정] 즉시해설 모드일 때 정답 여부 판단
    if (isInstant && userAnswers[idx] !== undefined) {
        feedbackHidden = '';
        const isCorrect = q.options[userAnswers[idx]] === q.correctAnswerText;
        feedbackContent = isCorrect ? '<strong style="color:var(--success-green)">✅ 정답입니다!</strong>' : '<strong style="color:var(--accent-red)">❌ 틀렸습니다.</strong>';
    }
    
    const wrongBadge = q.wrongCount ? `<span style="color:var(--accent-red); margin-left:10px; font-weight:bold;">(누적 오답: ${q.wrongCount}회)</span>` : '';
    const isOneByOne = document.getElementById('setting-one-by-one').checked;
    const containerClass = isOneByOne ? "question-container fixed-layout" : "question-container";

    // [핵심 로직] 한문제씩 모드가 아닐 때만 기존 구형 해설창(feedback-box)을 생성함
    const feedbackHTML = (!isOneByOne && isInstant) ? `
            <div id="feedback-${idx}" class="feedback-box ${feedbackHidden}">
                <div class="instant-result-tag" id="instant-tag-${idx}">${feedbackContent}</div>
                <div class="explanation-content">
                    <span class="ans-label">정답: ${q.correctAnswerText}</span>
                    <p class="exp-text">해설: ${q.explain}</p>
                </div>
            </div>` : '';

    return `
        <div class="${containerClass}" id="q-block-${idx}">
            <div class="q-header">
                <span class="q-from">${q.originalRound}${wrongBadge}</span>
                <p class="q-text"><strong>Q${idx + 1}.</strong> ${q.question}</p>
            </div>
            <div class="options-fixed-area">
                <div class="options-list">
                
${q.options.map((opt, i) => {
    let shrinkClass = "";
    // 글자 수에 따라 폰트 크기 단계를 나눕니다 (테스트 후 숫자 조절 가능)
    if (opt.length > 50) shrinkClass = "font-shrink-xs";      /* 아주 긴 보기 */
    else if (opt.length > 35) shrinkClass = "font-shrink-sm"; /* 약간 긴 보기 */
    else if (opt.length > 20) shrinkClass = "font-shrink-md"; /* 보통 보기 */

    return `
        <button class="option-btn ${userAnswers[idx] === i ? 'selected' : ''} ${shrinkClass}" 
            id="opt-${idx}-${i}" onclick="selectAnswer(${idx}, ${i})">
            <span class="opt-num">${i + 1}.</span> 
            <span class="opt-txt">${opt}</span>
        </button>
    `;
}).join('')}
                </div>
            </div>
            ${feedbackHTML}
        </div>
    `;
}

/* [Section Name] 문제 선택 및 해설 제어 엔진 (신규 설치) */
function selectAnswer(qIdx, aIdx, isMoving = false) {
    const isInstant = document.getElementById('setting-instant-feedback').checked;
    const isOneByOne = document.getElementById('setting-one-by-one').checked;
    
    // 이미 푼 문제인데 다시 누르는 경우 차단 (이동 중일 땐 허용)
    if (isInstant && userAnswers[qIdx] !== undefined && !isMoving) return;
    
    // 정답 기록
    userAnswers[qIdx] = aIdx;
    // [추가 로직] 만약 타이머가 종료된 상태(timeUpIdx가 기록됨)에서 푸는 문제라면?
    if (timeUpIdx !== null) {
    questions[qIdx].isOverTime = true;
}

    else {
    // 시간 안에 풀었다면 혹시 남아있을지 모를 꼬리표를 확실히 제거
    delete questions[qIdx].isOverTime; 
}
    
    // 화면상의 버튼 선택 효과 (파란색 불 들어오게 하기)
    const block = document.getElementById(`q-block-${qIdx}`);
    if (block) {
        block.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
        const target = block.querySelector(`#opt-${qIdx}-${aIdx}`);
        if(target) target.classList.add('selected');
        
        // [핵심 배선] 즉시 해설 + 한문제씩 모드일 때만 하단 패널 작동
        if (isInstant && isOneByOne) {
            const panel = document.getElementById('instant-exp-overlay');
            const content = document.getElementById('instant-exp-content');
            const openBtn = document.getElementById('btn-open-exp');
            const q = questions[qIdx];
            const isCorrect = q.options[aIdx] === q.correctAnswerText;

            content.innerHTML = `
                <div style="margin-bottom:12px; display:flex; align-items:center; gap:10px;">
                    ${isCorrect ? '<span style="background:var(--success-green); color:white; padding:4px 12px; border-radius:20px; font-weight:bold;">✅ 정답</span>' : '<span style="background:var(--accent-red); color:white; padding:4px 12px; border-radius:20px; font-weight:bold;">❌ 오답</span>'}
                    <span style="font-weight:bold; color:var(--text-primary);">Q${qIdx + 1}. 정답: ${q.correctAnswerText}</span>
                </div>
                <div style="background:rgba(37,99,235,0.05); padding:15px; border-radius:12px; border-left:4px solid var(--accent-blue);">
                    <div style="font-size:1rem; line-height:1.6; color:var(--text-primary); word-break:keep-all;">${q.explain}</div>
                </div>`;
            if (panel) panel.classList.remove('hidden');
            if (openBtn) openBtn.classList.add('hidden');
        } 
        // 즉시 해설만 켜져 있고 스크롤 모드일 때 (문제 바로 밑 해설)
        else if (isInstant && !isOneByOne) {
            const feedback = block.querySelector(`#feedback-${qIdx}`);
            const tag = block.querySelector(`#instant-tag-${qIdx}`);
            if (feedback && tag) {
                const isCorrect = questions[qIdx].options[aIdx] === questions[qIdx].correctAnswerText;
                feedback.classList.remove('hidden');
                tag.innerHTML = isCorrect ? '<strong style="color:var(--success-green)">✅ 정답입니다!</strong>' : '<strong style="color:var(--accent-red)">❌ 틀렸습니다.</strong>';
            }
        }
    }
    
    // OMR 카드 및 진행도 업데이트
    updateOMRMark(qIdx, aIdx);
    updateProgressDisplay();
    
    // 자동 이동 로직 (즉시해설 꺼져있을 때만)
    if (document.getElementById('setting-auto-scroll').checked && !isInstant && !isMoving) {
        setTimeout(() => {
            if (document.getElementById('setting-one-by-one').checked) { moveQuestion(1); }
            else {
                const nextBlock = document.getElementById(`q-block-${qIdx + 1}`);
                if (nextBlock) nextBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 300);
    }
}

function updateProgressDisplay() {
    const solved = Object.keys(userAnswers).length; 
    const total = questions.length;
    const solvedEl = document.getElementById('solved-count');
    const totalEl = document.getElementById('total-count');
    const displayEl = document.getElementById('progress-display');
    if (solvedEl && totalEl) { solvedEl.textContent = solved; totalEl.textContent = total; }
    else if (displayEl) { displayEl.textContent = solved + " / " + total; }
}

function finalizeExam() {
    console.log("채점 엔진 가동...");
    if(timerInterval) clearInterval(timerInterval);
    
    let scoreCount = 0;
    const reviewContainer = document.getElementById('review-list-container');
    reviewContainer.innerHTML = '';
    
    // [수리 1] 오답통 비우기 (잔유 제거) - 매 채점 시 초기화하여 중복 누적 방지
    lastWrongAnswers = []; 
    
    const allResultsForTeacher = []; // 선생님께 보낼 전체 리스트
    const currentWrongs = [];        // 오답노트 저장용
    
    const resultOmrGrid = document.getElementById('result-omr-buttons-grid');
    let resultOmrHtml = '';

    questions.forEach((q, i) => {
        const userPickText = q.options[userAnswers[i]] || '미선택';
        const isCorrect = (userPickText === q.correctAnswerText) && !q.isOverTime;

        if (isCorrect) { 
            scoreCount++; 
        } else { 
            // [수리 2] 데이터 격리 (순정 부품 복사)
            const deepCopyQ = JSON.parse(JSON.stringify(q));
            
            currentWrongs.push(deepCopyQ); 
            lastWrongAnswers.push(deepCopyQ); 
        }

        // [신규 배선] 선생님 DB용 데이터 패키징
        allResultsForTeacher.push({
            q: q.question,
            user: userPickText,
            correct: q.correctAnswerText,
            isCorrect: isCorrect,
            explain: q.explain,
            options: q.rawOptions || q.options 
        });
        
        // 결과 카드 생성 로직
        const card = document.createElement('div');
        card.className = `review-card glass-card ${isCorrect ? 'correct' : 'wrong'}`;
        card.id = `review-card-${i}`;
        card.style.borderLeft = `10px solid ${isCorrect ? 'var(--success-green)' : 'var(--accent-red)'}`;
        card.style.padding = '20px'; 
        card.style.marginBottom = '15px';

        const overTimeTag = q.isOverTime ? '<span style="color:var(--accent-red); font-weight:bold;">[시간초과]</span> ' : '';

        card.innerHTML = `
            <h4>${isCorrect ? '✅' : '❌'} ${overTimeTag}Q${i + 1}. ${q.question}</h4>
            <p>나의 선택: ${userPickText}</p>
            <p><strong>정답: ${q.correctAnswerText}</strong></p>
            <p>해설: ${q.explain}</p>
        `;
        reviewContainer.appendChild(card);

        // 결과 OMR 생성
        const num = (i + 1).toString().padStart(2, '0');
        resultOmrHtml += `
            <div class="omr-row-item ${isCorrect ? 'res-correct' : 'res-wrong'}" onclick="document.getElementById('review-card-${i}').scrollIntoView({behavior:'smooth', block:'center'})">
                <span class="omr-num">${num}번</span>
                <div class="omr-circles">
                    ${[0,1,2,3].map(v => `<span class="circle-dot ${userAnswers[i] === v ? 'filled' : ''}">${v+1}</span>`).join('')}
                </div>
            </div>
        `;
    });

    if(resultOmrGrid) resultOmrGrid.innerHTML = resultOmrHtml;
    const finalScore = (scoreCount / questions.length) * 100;

    // [데이터 저장 및 전송]
    saveScoreToHistory(finalScore, questions[0].originalRound); // 내 기록 저장
    saveWrongNotes(currentWrongs);                             // 오답 노트 저장
    
    // [보강] 전송 함수 1회만 호출 (중복 제거)
    sendDataToTeacher(finalScore, questions[0].originalRound, allResultsForTeacher);

    // 화면 전환 로직
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('quiz-status-area').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('final-result-score').innerText = finalScore.toFixed(2);
    window.history.pushState(null, null, window.location.href);
    window.scrollTo(0, 0);
}

function retryCurrentExam(wrongOnly) {
    let targetList = [];
    if (wrongOnly) {
        if (lastWrongAnswers.length === 0) return alert("틀린 문제가 없습니다!");
        // [수리 3] 목록 완전 교체 (독립된 복사본 사용)
        targetList = JSON.parse(JSON.stringify(lastWrongAnswers));
    } else {
        targetList = JSON.parse(JSON.stringify(lastUsedExamData));
    }
    
    // 문제를 다시 섞어서 새 판을 짭니다.
    questions = targetList.map(q => ({ 
        ...q, 
        options: shuffle([...q.options]) 
    }));
    questions = shuffle(questions);
    
    document.getElementById('result-screen').classList.add('hidden');
    launchQuiz();
}

function renderOMR() {
    const grid = document.getElementById('omr-buttons-grid');
    if (!grid || window.innerWidth <= 1024) return;
    grid.innerHTML = questions.map((_, i) => {
        const num = (i + 1).toString().padStart(2, '0');
        return `
            <div class="omr-row-item ${userAnswers[i] !== undefined ? 'solved' : ''}" id="omr-row-${i}" onclick="jumpTo(${i})">
                <span class="omr-num">${num}번</span>
                <div class="omr-circles">
                    ${[0,1,2,3].map(v => `<span class="circle-dot ${userAnswers[i] === v ? 'filled' : ''}" id="dot-${i}-${v}" onclick="event.stopPropagation(); selectAnswer(${i}, ${v});">${v+1}</span>`).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function updateOMRMark(qIdx, aIdx) {
    const row = document.getElementById(`omr-row-${qIdx}`);
    if (row) {
        row.classList.add('solved');
        row.querySelectorAll('.circle-dot').forEach((dot, i) => { dot.classList.toggle('filled', i === aIdx); });
    }
    const el = document.getElementById('omr-status-txt');
    if (el) { el.innerText = `${Object.keys(userAnswers).length} / ${questions.length}`; }
}

function moveQuestion(dir) {
    const next = currentIdx + dir;
    if (next >= 0 && next < questions.length) { 
        currentIdx = next; 

        // [추가] 문제를 넘기자마자 해설창과 버튼을 일단 완전히 소거 (PC 유령 현상 차단)
        const panel = document.getElementById('instant-exp-overlay');
        const openBtn = document.getElementById('btn-open-exp');
        if (panel) panel.classList.add('hidden');
        if (openBtn) openBtn.classList.add('hidden');

        renderQuestion(); 
        
        const isOneByOne = document.getElementById('setting-one-by-one').checked;
        const isInstant = document.getElementById('setting-instant-feedback').checked;

        if (userAnswers[currentIdx] !== undefined) {
            // [보정] 즉시 해설이 켜져 있을 때만 답안 상태와 해설을 복구함
            if (isInstant) {
                selectAnswer(currentIdx, userAnswers[currentIdx], true); 
            } else {
                // 즉시 해설이 꺼져 있으면 답만 표시하고 버튼은 숨김 유지
                const target = document.querySelector(`#opt-${currentIdx}-${userAnswers[currentIdx]}`);
                if(target) target.classList.add('selected');
            }
        } else {
            // 안 푼 문제라면 패널 닫기
            closeInstantExp(); 
        }
        window.scrollTo(0, 0); 
    }
}

// [신규 추가] 밀기 취소 엔진 (기존 풀이는 유지하고 밀기로 채워진 것만 삭제)
let pushedIndices = []; // 밀기로 채워진 문항 번호 저장소

// 기존 pushAllAnswers 함수를 아래와 같이 살짝 변경 (기록 기능 추가)
function pushAllAnswers(answerIdx) {
    pushedIndices = []; // 기록 초기화
    questions.forEach((_, i) => { 
        if (userAnswers[i] === undefined) { 
            pushedIndices.push(i); // 안 푼 문제 번호만 기록
            selectAnswer(i, answerIdx); 
        } 
    });
}

function undoPushAnswers() {
    // 되돌릴 기록이 없을 때만 간단히 안내 (이건 아주 짧은 예외라 배너까지 안 가도 되지만, 원하시면 배너로 통합 가능합니다)
    if (pushedIndices.length === 0) {
        return; 
    }

    // 실제 취소 로직 수행
    pushedIndices.forEach(idx => {
        delete userAnswers[idx]; 
        const row = document.getElementById(`omr-row-${idx}`);
        if (row) {
            row.classList.remove('solved');
            row.querySelectorAll('.circle-dot').forEach(dot => dot.classList.remove('filled'));
        }
    });

    pushedIndices = []; 
    updateProgressDisplay(); 
    renderQuestion(); 
}

function jumpTo(idx) {
    currentIdx = idx;
    if (document.getElementById('setting-one-by-one').checked) { renderQuestion(); }
    else {
        const targetBlock = document.getElementById(`q-block-${idx}`);
        if(targetBlock) targetBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }

function startTimer() { 
    let time = 3600;
    if(timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => { 
        time--; 
        let m = Math.floor(time/60); 
        let s = time%60; 
        const el = document.getElementById('timer-display');
        
        if(el) el.innerText = `${m}:${s < 10 ? '0' : ''}${s}`; 

        // [수정 포인트] 시간이 종료되었을 때 단 한 번만 실행되도록 깔끔하게 정리했습니다.
        if (time <= 0) {
            clearInterval(timerInterval); // 시계 멈춤
            timeUpIdx = "OVER";           // 시간 종료 스위치 ON
            openConfirmBanner("time_up"); // 안내 배너 호출
        } 
    }, 1000); 
}

function toggleTheme() {
    const body = document.getElementById('main-body');
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('cbt_theme', isDark ? 'dark' : 'light');
    document.getElementById('theme-btn').innerText = isDark ? '☀️ 라이트' : '🌙 다크';
}

function highlightOMRRow() {
    document.querySelectorAll('.omr-row-item').forEach(r => r.classList.remove('active'));
    const target = document.getElementById(`omr-row-${currentIdx}`);
    if (target) target.classList.add('active');
}

function applyLeftHand(isOn) { document.getElementById('quiz-nav-group').classList.toggle('left-hand-mode-active', isOn); }
function toggleViewMode() { if(questions.length > 0) launchQuiz(); }
function syncInstantMode(el) { 
    if(el.checked) document.getElementById('setting-one-by-one').checked = true; 
    
    if(questions.length > 0) {
        launchQuiz(); 
        // [추가] 설정을 바꾸자마자 유령 버튼이 있는지 즉시 검사해서 치웁니다.
        updateExpButtonVisibility(); 
    }
}
function toggleWrongAccordion() {
    const body = document.getElementById('wrong-content-area');
    body.classList.toggle('hidden');
    const arrow = document.getElementById('wrong-arrow-icon');
    if(arrow) arrow.innerText = body.classList.contains('hidden') ? '▼' : '▲';
}

function updateStatsDashboard() {
    let history = JSON.parse(localStorage.getItem('cbt_history_v4') || '[]');
    if (history.length > 0) {
        document.getElementById('stat-last').innerText = history[history.length-1].score.toFixed(2);
        document.getElementById('stat-avg').innerText = (history.reduce((a,b)=>a+b.score,0)/history.length).toFixed(2);
    }
}

function saveScoreToHistory(score, roundName) {
    let history = JSON.parse(localStorage.getItem('cbt_history_v4') || '[]');
    const now = new Date();
    const timeStr = `${now.getMonth() + 1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분`;
    history.push({ score, roundName, date: timeStr });
    localStorage.setItem('cbt_history_v4', JSON.stringify(history.slice(-10)));
    updateStatsDashboard();
}

function saveWrongNotes(wrongs) {
    if (wrongs.length === 0) return;
    let data = JSON.parse(localStorage.getItem('cbt_wrong_v4') || '{}');
    wrongs.forEach(q => {
        const round = q.originalRound || "기타";
        if (!data[round]) data[round] = [];
        const existingIdx = data[round].findIndex(e => e.question === q.question);
        if (existingIdx !== -1) { data[round][existingIdx].wrongCount = (data[round][existingIdx].wrongCount || 1) + 1; }
        else { q.wrongCount = 1; data[round].push(q); }
    });
    localStorage.setItem('cbt_wrong_v4', JSON.stringify(data));
    renderWrongNoteArea();
}

function renderWrongNoteArea() {
    const container = document.getElementById('wrong-list-display');
    const data = JSON.parse(localStorage.getItem('cbt_wrong_v4') || '{}');
    const rounds = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}));
    if (rounds.length === 0) {
        container.innerHTML = '<p style="padding:20px; text-align:center; color:var(--text-secondary);">기록 없음</p>';
        const multiBtn = document.getElementById('btn-wrong-multi-start');
        if(multiBtn) multiBtn.classList.add('hidden');
        return;
    }
    container.innerHTML = rounds.map(r => `
        <div class="wrong-item-row" id="wrong-row-${r}">
            <div style="display:flex; align-items:center; justify-content:space-between;">
                <div style="display:flex; align-items:center; gap:10px; cursor:pointer;" onclick="toggleWrongSelection('${r}')">
                    <input type="checkbox" class="wrong-chk" value="${r}" id="chk-${r}" onclick="event.stopPropagation(); updateWrongStartBtn();">
                    <span style="font-weight:700;">${r} <small style="color:var(--accent-red)">(${data[r].length})</small></span>
                </div>
                <div><button onclick="startWrongReview('${r}')" style="background:var(--accent-blue); color:white; padding:4px 8px; border-radius:6px; font-size:0.75rem;">단독 풀기</button><button class="btn-round-del" onclick="deleteWrongRound('${r}')">삭제</button></div>
            </div>
        </div>
    `).join('');
    updateWrongStartBtn();
}

function toggleWrongSelection(roundName) {
    const chk = document.getElementById(`chk-${roundName}`);
    const row = document.getElementById(`wrong-row-${roundName}`);
    if(chk) chk.checked = !chk.checked;
    if(row) row.classList.toggle('selected', chk ? chk.checked : false);
    updateWrongStartBtn();
}

function updateWrongStartBtn() {
    const selectedCount = document.querySelectorAll('.wrong-chk:checked').length;
    const btn = document.getElementById('btn-wrong-multi-start');
    if (btn) { if (selectedCount > 0) { btn.classList.remove('hidden'); btn.innerText = `🚀 선택 ${selectedCount}개 모아풀기`; } else { btn.classList.add('hidden'); } }
}

function startMultiWrongReview() {
    const data = JSON.parse(localStorage.getItem('cbt_wrong_v4') || '{}');
    const selectedRounds = Array.from(document.querySelectorAll('.wrong-chk:checked')).map(chk => chk.value);
    if (selectedRounds.length === 0) return;
    let pool = [];
    const targetTotal = 80;
    const perSet = Math.floor(targetTotal / selectedRounds.length);
    let extra = targetTotal % selectedRounds.length;
    selectedRounds.forEach(roundName => {
        if (data[roundName]) {
            let count = perSet + (extra > 0 ? 1 : 0);
            extra--;
            let shuffledWrongSet = shuffle([...data[roundName]]);
            pool.push(...shuffledWrongSet.slice(0, count));
        }
    });
    if (pool.length === 0) return;
    const finalPool = shuffle(pool).map(q => ({ ...q, options: shuffle([...q.options]) }));
    questions = finalPool;
    lastUsedExamData = JSON.parse(JSON.stringify(finalPool));
    launchQuiz();
}

function deleteWrongRound(roundName) {
    openConfirmBanner("delete_item", roundName); // 배너를 먼저 띄웁니다.
}

function confirmDeleteRound() {
    let data = JSON.parse(localStorage.getItem('cbt_wrong_v4') || '{}');
    delete data[pendingDeleteRound]; // 보관해둔 회차명을 삭제
    localStorage.setItem('cbt_wrong_v4', JSON.stringify(data));
    renderWrongNoteArea(); // 화면 갱신
    console.log(pendingDeleteRound + " 삭제 완료");
}

function startWrongReview(roundName) {
    const data = JSON.parse(localStorage.getItem('cbt_wrong_v4') || '{}');
    const wrongList = shuffle(data[roundName]).map(q => ({ ...q, options: shuffle([...q.options]) }));
    questions = wrongList;
    lastUsedExamData = JSON.parse(JSON.stringify(wrongList));
    launchQuiz();
}

/* 수정 후: 배너에서 승인받았으므로 즉시 실행 */
function clearAllWrongs() { 
    // 1. 저장소에서 오답 데이터를 즉시 삭제 (데이터 초기화)
    localStorage.removeItem('cbt_wrong_v4'); 
    
    // 2. 화면의 오답 영역을 다시 그려서 비워줌 (화면 갱신)
    if (typeof renderWrongNoteArea === 'function') {
        renderWrongNoteArea(); 
    }
    
    // 3. 메인 화면의 통계 수치도 0으로 갱신 (선택 사항)
    if (typeof updateStatsDashboard === 'function') {
        updateStatsDashboard();
    }

    console.log("오답 기록 초기화 완료");
}

function openStatsModal() {
    document.getElementById('modal-stats-overlay').classList.remove('hidden');
    let history = JSON.parse(localStorage.getItem('cbt_history_v4') || '[]');
    const container = document.getElementById('chart-canvas-area');
    if (history.length === 0) { container.innerHTML = '<p style="padding:50px;">데이터가 없습니다.</p>'; return; }
    container.innerHTML = history.map(h => `<div class="chart-bar" style="height: ${h.score}%"><span class="bar-score">${h.score.toFixed(2)}점</span><span class="bar-label">${h.roundName}<br><small style="font-size:0.6rem; color:#888;">${h.date || ''}</small></span></div>`).join('');
    const scrollBox = document.getElementById('chart-scroll-box');
    setTimeout(() => { if(scrollBox) scrollBox.scrollLeft = scrollBox.scrollWidth; }, 50);
}

function closeStatsModal() { document.getElementById('modal-stats-overlay').classList.add('hidden'); }

function handleSecretReset() { if (++secretResetCount >= 5) { if (confirm("초기화하시겠습니까?")) { localStorage.removeItem('cbt_history_v4'); location.reload(); } secretResetCount = 0; } }

function closeInstantExp() { 
    const panel = document.getElementById('instant-exp-overlay'); 
    const openBtn = document.getElementById('btn-open-exp');
    
    // 1. 현재 설정 상태를 모두 체크합니다.
    const isOneByOne = document.getElementById('setting-one-by-one').checked;
    const isInstant = document.getElementById('setting-instant-feedback').checked;
    
    // 2. 패널은 무조건 닫습니다.
    if (panel) panel.classList.add('hidden'); 
    
    // 3. [완벽 배선] 모든 조건이 맞을 때만 버튼을 노출합니다.
    // - 즉시 해설이 켜져 있고(isInstant)
    // - 한문제씩 풀기 모드이며(isOneByOne)
    // - 현재 문제를 이미 풀었을 때(userAnswers[currentIdx] !== undefined)
    if (isInstant && isOneByOne && openBtn && userAnswers[currentIdx] !== undefined) {
        openBtn.classList.remove('hidden'); 
    } else {
        // 위 조건 중 하나라도 맞지 않으면 유령 버튼이 생기지 않도록 확실히 숨깁니다.
        if (openBtn) openBtn.classList.add('hidden');
    }
}

function openInstantExp() {
    const panel = document.getElementById('instant-exp-overlay');
    const openBtn = document.getElementById('btn-open-exp');
    const isOneByOne = document.getElementById('setting-one-by-one').checked;
    
    // [방어 코드] 스크롤 모드이거나 안 푼 문제에서 열기 시도 시 원천 차단
    if (!isOneByOne || userAnswers[currentIdx] === undefined) {
        if (openBtn) openBtn.classList.add('hidden');
        if (panel) panel.classList.add('hidden');
        return;
    }

    if (panel) panel.classList.remove('hidden');
    if (openBtn) openBtn.classList.add('hidden');
}

/* [Section Name] 해설 버튼 가시성 정밀 제어 엔진 (PC 유령 방지용) */
function updateExpButtonVisibility() {
    const openBtn = document.getElementById('btn-open-exp');
    // 현재 설정 상태를 실시간으로 읽어옵니다.
    const isInstant = document.getElementById('setting-instant-feedback').checked;
    const isOneByOne = document.getElementById('setting-one-by-one').checked;
    const hasAnswer = (userAnswers[currentIdx] !== undefined);

    if (openBtn) {
        // [조건] 즉시해설 ON + 한문제씩 ON + 현재 문제 답을 골랐음
        if (isInstant && isOneByOne && hasAnswer) {
            // 이 조건일 때는 버튼이 보일 '자격'이 생깁니다. 
            // 단, 패널이 닫혔을 때만 보여야 하므로 closeInstantExp()에게 판단을 맡깁니다.
        } else {
            // 그 외 모든 상황(즉시해설 OFF 등)에서는 유령이 생기지 않게 '즉시 소거' 합니다.
            openBtn.classList.add('hidden');
        }
    }
}

// [신규] 글자 크기 조절 시스템

// 1. 조절 베너 열기/닫기
function toggleFontControl() {
    const banner = document.getElementById('font-control-banner');
    if (banner) banner.classList.toggle('hidden');
}

// 2. 조작 중 베너 투명도 제어
function setBannerTransparent(isTransparent) {
    const banner = document.getElementById('font-control-banner');
    if (!banner) return;
    if (isTransparent) {
        banner.classList.add('is-adjusting');
    } else {
        banner.classList.remove('is-adjusting');
    }
}

// [정상화] 1. 문제 글자 크기 조절 및 투명화 엔진
function updateFontSize(type, val) {
    // 조절 시작 시 배너 투명화
    setBannerTransparent(true); 
    
    let numVal = parseFloat(val);
    if (isNaN(numVal)) numVal = (type === 'q') ? 1.20 : 1.00;
    const formattedVal = numVal.toFixed(2); // 소수점 2자리 정밀도

    if (type === 'q') {
        document.documentElement.style.setProperty('--q-font-size', formattedVal + 'rem');
        if (document.getElementById('val-q-size')) {
            document.getElementById('val-q-size').innerText = formattedVal;
        }
        localStorage.setItem('user-q-size', formattedVal);
    }
    
    // 조작 중단 0.5초 후 복구
    clearTimeout(window.fontOpacityTimer);
    window.fontOpacityTimer = setTimeout(() => setBannerTransparent(false), 500);
}

// [정상화] 보기 창 높이 조절 엔진 (투명화 신호 강화 버전)
function updateOptHeight(val) {
    // 1. 배너를 즉시 투명하게 만듦 (범인 검거 포인트)
    setBannerTransparent(true); 
    
    const heightVal = val + 'px';
    document.documentElement.style.setProperty('--opt-height', heightVal);
    
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(btn => {
        const txt = btn.querySelector('.opt-txt');
        if (txt) {
            const charCount = txt.innerText.length;
            let fontSize;
            // 높이 대비 글자수 최적화 수식
            if (charCount > 40) fontSize = (val * 0.28); 
            else if (charCount > 20) fontSize = (val * 0.35); 
            else fontSize = (val * 0.45); 

            fontSize = Math.max(12, Math.min(fontSize, 24));
            txt.style.fontSize = fontSize + 'px';
            
            // 버튼 높이 강제 동기화
            btn.style.height = heightVal;
        }
    });

    if (document.getElementById('val-opt-height')) {
        document.getElementById('val-opt-height').innerText = val;
    }
    localStorage.setItem('user-opt-height', val);

    // 2. 조작 중단 0.5초 후 복구 (타이머 이름 통일)
    clearTimeout(window.fontOpacityTimer);
    window.fontOpacityTimer = setTimeout(() => {
        setBannerTransparent(false);
    }, 500);
}

// 4. 저장된 설정 불러오기 (시동 시 메모리 호출)
function loadSavedFontSize() {
    const savedQ = localStorage.getItem('user-q-size') || '1.20';
    const savedHeight = localStorage.getItem('user-opt-height') || '55'; // 기본값 55px

    updateFontSize('q', savedQ);
    updateOptHeight(savedHeight); // 저장된 높이 불러오기

    if (document.getElementById('slider-q-size')) document.getElementById('slider-q-size').value = savedQ;
    if (document.getElementById('slider-opt-height')) document.getElementById('slider-opt-height').value = savedHeight;
}

// [신규] 제출 확인 배너 닫기 (취소 버튼용)
function closeConfirmBanner() {
    const banner = document.getElementById('confirm-banner');
    if (banner) banner.classList.add('hidden');
}

// [신규] 진짜 제출 처리 (네, 제출합니다 버튼용)
function realSubmit() {
    console.log("실제 제출 프로세스 시작"); // 작동 확인용 로그
    closeConfirmBanner(); // 배너 닫기
    finalizeExam();       // 실제 채점 함수 호출
}

// [신규] 전체화면 유지하며 메인으로 리셋하여 복귀
function goBackToMain() {
    // 1. 엔진 세척 (변수 초기화)
    questions = []; 
    userAnswers = {}; 
    currentIdx = 0;
    if(timerInterval) clearInterval(timerInterval);

    // 2. 화면 전환 (섹션 제어)
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('quiz-status-area').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');

    // 3. 앱 재시동 (메인 화면 요소들 다시 그리기)
    initApp(); 

    // 4. 위치 리셋
    window.scrollTo(0, 0);
}

/* [Section Name] 단계별 뒤로가기 내비게이션 엔진 (최종형) */
function handleTitleClick() {
    // 1. 현재 화면 상태를 감지하는 센서 (5번인지 6번인지 확인)
    const isQuiz = !document.getElementById('quiz-screen').classList.contains('hidden');     // 5번 문제풀이
    const isResult = !document.getElementById('result-screen').classList.contains('hidden'); // 6번 해설화면

    // 2. 5번 화면(시험 중)일 때
    if (isQuiz) {
        // [수정] goBackToMain()을 부르지 않고, 배너를 부릅니다!
        openConfirmBanner("quit"); 
    } 
    // 3. 6번 화면(해설 중)일 때
    else if (isResult) {
        // [수정] 해설 종료 배너를 부릅니다!
        openConfirmBanner("quit_result");
    } 
    // 4. 4번 화면(회차 선택)일 때
    else {
        // 3번 화면(자격증 선택)으로 완전히 탈출
        window.location.href = "../../01자격증선택.html"; 
    }
}

// 2. 시험 제출 버튼 클릭 시 실행 (제출 확인용)
function handleFinishSubmit() {
    // 제출 버튼을 눌렀을 때는 "제출 모드"로 배너 호출
    openConfirmBanner("submit");
}

let pendingDeleteRound = ""; // [추가] 삭제할 회차명을 잠시 보관하는 장착대

// [수정 포인트] openConfirmBanner 함수 내부의 if-else 문에 아래 조건을 추가하세요.
function openConfirmBanner(mode, param) {
    const banner = document.getElementById('confirm-banner');
    if (!banner) return;
    const pTag = banner.querySelector('.banner-body p');
    const submitBtn = banner.querySelector('.btn-banner-submit');
    const closeBtn = banner.querySelector('.btn-banner-close');

    if (mode === "quit") {
    pTag.innerHTML = `<strong style="color:var(--accent-red)">시험이 아직 진행 중입니다!</strong><br>정말 중단하고 메인으로 돌아가시겠습니까?`;
    submitBtn.innerText = "네, 중단합니다";
    submitBtn.onclick = function() { closeConfirmBanner(); goBackToMain(); };
    closeBtn.innerText = "계속 풀기";
} 
// ★ [신규 추가] 6번 결과 화면 전용 멘트
else if (mode === "quit_result") {
    pTag.innerHTML = `<strong style="color:var(--accent-blue)">해설 보기를 종료할까요?</strong><br>메인 화면(회차 선택)으로 돌아갑니다.`;
    submitBtn.innerText = "네, 종료합니다";
    submitBtn.onclick = function() { closeConfirmBanner(); goBackToMain(); };
    closeBtn.innerText = "더 볼래요";
} 
   else if (mode === "reset") {
        pTag.innerHTML = `<strong style="color:var(--accent-red)">주의: 전체 오답 기록이 삭제됩니다!</strong><br>정말 모든 데이터를 초기화하시겠습니까?`;
        submitBtn.innerText = "네, 초기화합니다";
        
        // [수정 포인트] 선생님의 실제 삭제 함수 이름인 clearAllWrongs를 여기에 넣습니다.
        submitBtn.onclick = function() { 
            closeConfirmBanner(); 
            clearAllWrongs(); // 이 부분이 엔진의 실제 스위치입니다.
        };
        closeBtn.innerText = "취소";
    }
// ★ [신규] 개별 회차 삭제 모드 추가 ★
    else if (mode === "delete_item") {
        pendingDeleteRound = param; 
        pTag.innerHTML = `<strong style="color:var(--accent-red)">'${param}' 기록을 삭제할까요?</strong><br>삭제된 오답은 복구할 수 없습니다.`;
        submitBtn.innerText = "네, 삭제합니다";
        submitBtn.onclick = function() { 
            closeConfirmBanner(); 
            confirmDeleteRound(); // 아래에서 새로 만들 실제 삭제 함수
        };
        closeBtn.innerText = "취소";
    }

    // ★ [신규 추가] 번호 밀기 취소 모드 ★
    else if (mode === "undo_push") {
        pTag.innerHTML = `<strong style="color:var(--accent-blue)">번호 밀기를 취소하시겠습니까?</strong><br>직접 푸신 문제는 유지되고, 밀기로 채워진 답안만 삭제됩니다.`;
        submitBtn.innerText = "네, 취소합니다";
        submitBtn.style.background = "var(--accent-blue)"; // 파란색 버튼으로 강조
        submitBtn.onclick = function() { 
            closeConfirmBanner(); 
            undoPushAnswers(); // 실제 취소 로직 실행
        };
        closeBtn.innerText = "유지하기";
    }

    // ★ [신규 추가] 타이머 종료(시간 초과) 모드 ★
    else if (mode === "time_up") {
        pTag.innerHTML = `<strong style="color:var(--accent-red)">⏰ 시간초과. 계속 푸시겠습니까?</strong><br>시간 초과된 문제는 채점에서 제외됩니다.`;
        
        // [계속 풀기] 버튼 설정
        submitBtn.innerText = "계속 풀기";
        submitBtn.style.background = "var(--accent-blue)"; // 파란색으로 변경
        submitBtn.onclick = function() { 
            closeConfirmBanner(); 
            // 닫기만 함. 이미 timeUpIdx가 기록되어 이후 마킹은 '시간초과' 꼬리표가 붙음
        };

        // [채점 확인] 버튼 설정
        closeBtn.innerText = "채점 확인";
        closeBtn.style.display = "block"; // 혹시 숨겨져 있다면 다시 보이게 함
        closeBtn.onclick = function() {
            closeConfirmBanner();
            finalizeExam(); // 즉시 6번 화면으로 이동
        };
    }

    else {
        // [제출 모드]
        const unsolvedCount = questions.length - Object.keys(userAnswers).length;
        pTag.innerHTML = unsolvedCount > 0 
            ? `<strong style="color:var(--accent-red)">미풀이 문제가 ${unsolvedCount}개 있습니다.</strong><br>그래도 제출하시겠습니까?` 
            : `<strong>모든 문제를 다 푸셨나요?</strong><br>제출 후에는 정답과 해설이 표시됩니다.`;
        
        // 버튼 텍스트 및 시각 효과 리셋
        submitBtn.innerText = "네, 제출합니다";
        submitBtn.style.background = "var(--accent-blue)";
        
        // [중요] 함수 연결 방식을 '직접 할당'으로 명확히 합니다.
        submitBtn.onclick = function() {
            realSubmit(); 
        };

        closeBtn.innerText = "취소";
        closeBtn.style.display = "block";
        closeBtn.onclick = function() {
            closeConfirmBanner();
        };
    }

    banner.classList.remove('hidden');
}

// [01정비산업기사통합.js 맨 아래에 추가/교체]

// 1. 시스템 초기화 및 화면 그리기 함수 노출
window.initApp = initApp;
window.renderRoundCards = renderRoundCards;

// 2. 메인 화면 버튼들 연결
window.startExam = startExam;
window.toggleMultiMode = toggleMultiMode;
window.handleFinishSubmit = handleFinishSubmit;
window.toggleTheme = toggleTheme;

// 3. 모달 및 배너 제어
window.openStatsModal = openStatsModal;
window.closeStatsModal = closeStatsModal;
window.openConfirmBanner = openConfirmBanner;
window.closeConfirmBanner = closeConfirmBanner;
window.realSubmit = realSubmit;

// 4. 오답노트 관련
window.toggleWrongAccordion = toggleWrongAccordion;
window.startMultiWrongReview = startMultiWrongReview;
window.clearAllWrongs = clearAllWrongs;
window.deleteWrongRound = deleteWrongRound;
window.startWrongReview = startWrongReview;

// 5. 문제 풀이 및 설정 관련
window.selectAnswer = selectAnswer;
window.moveQuestion = moveQuestion;
window.jumpTo = jumpTo;
window.pushAllAnswers = pushAllAnswers;
window.undoPushAnswers = undoPushAnswers;
window.toggleViewMode = toggleViewMode;
window.syncInstantMode = syncInstantMode;
window.applyLeftHand = applyLeftHand;

// 6. 설정(글자 크기 등)
window.toggleFontControl = toggleFontControl;
window.updateFontSize = updateFontSize;
window.updateOptHeight = updateOptHeight;

// 7. 시스템 내비게이션
window.goBackToMain = goBackToMain;
window.handleTitleClick = handleTitleClick;
window.retryCurrentExam = retryCurrentExam;

// [그 자리에 아래 코드를 새로 붙여넣으세요]
function forceStart() {
    if (window.quizSets && window.quizSets.length > 0) {
        console.log("데이터 확인 완료! 엔진 시동 합니다.");
        initApp();
        if (typeof loadSavedFontSize === 'function') loadSavedFontSize();
    } else {
        console.log("데이터 기다리는 중...");
        setTimeout(forceStart, 100); // 데이터 올 때까지 계속 시도
    }
}
forceStart(); // 시동 스위치 On