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
let timerInterval = null;
let isMultiSelectMode = false;
let secretResetCount = 0;
let lastUsedExamData = []; 
let lastWrongAnswers = []; 

window.onload = () => {
    // [개조] 모바일 및 다양한 브라우저 환경에서도 작동하도록 로직 보강
    const autoFull = () => {
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

    const dataCheck = setInterval(() => {
        if (window.quizSets) {
            clearInterval(dataCheck);
            initApp();
            loadSavedFontSize();
        }
    }, 100);

    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function() {
        const isQuiz = !document.getElementById('quiz-screen').classList.contains('hidden');
        const isResult = !document.getElementById('result-screen').classList.contains('hidden');
        
        if (isQuiz || isResult) {
            const msg = isResult ? "회차 선택 화면으로 가시겠습니까?" : "시험을 중지하고 메인으로 돌아가시겠습니까?";
            if (confirm(msg)) {
                location.reload();
            } else {
                window.history.pushState(null, null, window.location.href);
            }
        } else {
            window.history.pushState(null, null, window.location.href);
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
    updateFontSize(localStorage.getItem('cbt_font_size') || 'medium');
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
    
    const initialPool = pool.map(q => {
        const originalText = q.options[q.answer];
        return { ...q, correctAnswerText: originalText, originalRound: q.fromRound || q.originalRound };
    });

    lastUsedExamData = JSON.parse(JSON.stringify(initialPool));
    questions = initialPool.map(q => ({ ...q, options: shuffle([...q.options]) }));
    questions = shuffle(questions);
    launchQuiz();
}

function launchQuiz() {
    userAnswers = {};
    currentIdx = 0;
    
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
    window.history.pushState({ page: 'quiz' }, null, window.location.href);
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

function handleFinishSubmit() {
    // 인터넷 기본창 대신 커스텀 배너를 띄웁니다.
    const banner = document.getElementById('confirm-banner');
    if (banner) {
        banner.classList.remove('hidden');
        
        // 미풀이 문제가 있을 경우 배너 텍스트를 동적으로 변경해주는 센스!
        const unsolvedCount = questions.length - Object.keys(userAnswers).length;
        const msgText = unsolvedCount > 0 
            ? `<strong>미풀이 문제가 ${unsolvedCount}개 있습니다.</strong><br>그래도 제출하시겠습니까?` 
            : `<strong>모든 문제를 다 푸셨나요?</strong><br>제출 후에는 정답과 해설이 표시됩니다.`;
        
        banner.querySelector('.banner-body p').innerHTML = msgText;
    }
}

function finalizeExam() {
    if(timerInterval) clearInterval(timerInterval);
    let scoreCount = 0;
    const reviewContainer = document.getElementById('review-list-container');
    reviewContainer.innerHTML = '';
    const currentWrongs = [];
    const resultOmrGrid = document.getElementById('result-omr-buttons-grid');
    let resultOmrHtml = '';

    questions.forEach((q, i) => {
        const userPickText = q.options[userAnswers[i]];
        const isCorrect = userPickText === q.correctAnswerText;
        if (isCorrect) { scoreCount++; } 
        else { currentWrongs.push({...q, options: q.options}); }
        
        // 결과 리스트 카드 생성
        const card = document.createElement('div');
        card.className = `review-card glass-card ${isCorrect ? 'correct' : 'wrong'}`;
        card.id = `review-card-${i}`; // 이동을 위한 ID
        card.style.borderLeft = `10px solid ${isCorrect ? 'var(--success-green)' : 'var(--accent-red)'}`;
        card.style.padding = '20px'; card.style.marginBottom = '15px';
        card.innerHTML = `<h4>${isCorrect ? '✅' : '❌'} Q${i + 1}. ${q.question}</h4><p>나의 선택: ${userPickText || '미선택'}</p><p><strong>정답: ${q.correctAnswerText}</strong></p><p>해설: ${q.explain}</p>`;
        reviewContainer.appendChild(card);

        // 결과 화면 OMR HTML 생성
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
    lastUsedExamData = JSON.parse(JSON.stringify(questions)); 
    lastWrongAnswers = JSON.parse(JSON.stringify(currentWrongs));
    saveScoreToHistory(finalScore, questions[0].originalRound);
    saveWrongNotes(currentWrongs);
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('quiz-status-area').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('final-result-score').innerText = finalScore.toFixed(2);
    window.history.pushState(null, null, window.location.href);
    window.scrollTo(0, 0);
}

function handleOverlayClick(e) { if (e.target.id === 'modal-stats-overlay') closeStatsModal(); }

function retryCurrentExam(wrongOnly) {
    let targetList = [];
    if (wrongOnly) {
        if (lastWrongAnswers.length === 0) return alert("틀린 문제가 없습니다!");
        targetList = JSON.parse(JSON.stringify(lastWrongAnswers));
    } else {
        targetList = JSON.parse(JSON.stringify(lastUsedExamData));
    }
    questions = targetList.map(q => ({ ...q, options: shuffle([...q.options]) }));
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

function pushAllAnswers(answerIdx) {
    // 알림창 없이 즉시 미풀이 문제를 해당 번호로 채웁니다.
    questions.forEach((_, i) => { 
        if (userAnswers[i] === undefined) { 
            selectAnswer(i, answerIdx); 
        } 
    });
}

function moveQuestion(dir) {
    const next = currentIdx + dir;
    if (next >= 0 && next < questions.length) { 
        currentIdx = next; 
        renderQuestion(); 
        
        const openBtn = document.getElementById('btn-open-exp');
        const isOneByOne = document.getElementById('setting-one-by-one').checked;
        const isInstant = document.getElementById('setting-instant-feedback').checked; // [추가] 즉시 해설 체크

        // 일단 버튼을 숨기고 시작 (PC 유령 현상 차단)
        if (openBtn) openBtn.classList.add('hidden'); 
        
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
        time--; let m = Math.floor(time/60); let s = time%60; 
        const el = document.getElementById('timer-display');
        if(el) el.innerText = `${m}:${s<10?'0':''}${s}`; 
        if(time<=0) finalizeExam(); 
    }, 1000); 
}

function updateFontSize(size) {
    const body = document.getElementById('main-body');
    body.classList.remove('font-small', 'font-medium', 'font-large');
    body.classList.add(`font-${size}`);
    document.querySelectorAll('.btn-f-size').forEach(b => b.classList.remove('active'));
    document.getElementById(`fs-${size}`).classList.add('active');
    localStorage.setItem('cbt_font_size', size);
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
    if (confirm(`'${roundName}' 회차의 오답 기록을 삭제하시겠습니까?`)) {
        let data = JSON.parse(localStorage.getItem('cbt_wrong_v4') || '{}');
        delete data[roundName];
        localStorage.setItem('cbt_wrong_v4', JSON.stringify(data));
        renderWrongNoteArea();
    }
}

function startWrongReview(roundName) {
    const data = JSON.parse(localStorage.getItem('cbt_wrong_v4') || '{}');
    const wrongList = shuffle(data[roundName]).map(q => ({ ...q, options: shuffle([...q.options]) }));
    questions = wrongList;
    lastUsedExamData = JSON.parse(JSON.stringify(wrongList));
    launchQuiz();
}

function clearAllWrongs() { if(confirm("모든 오답 기록을 초기화하시겠습니까?")) { localStorage.removeItem('cbt_wrong_v4'); renderWrongNoteArea(); } }

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

// 3. 폰트 크기 업데이트 및 저장 (보기 저장 기능 정밀 수리)
function updateFontSize(type, val) {
    let numVal = parseFloat(val);
    
    // 값이 이상하면 각 타입에 맞는 기본값 할당
    if (isNaN(numVal)) {
        numVal = (type === 'q') ? 1.20 : 1.00;
    }
    
    const formattedVal = numVal.toFixed(2);

    if (type === 'q') {
        document.documentElement.style.setProperty('--q-font-size', formattedVal + 'rem');
        if (document.getElementById('val-q-size')) document.getElementById('val-q-size').innerText = formattedVal;
        localStorage.setItem('user-q-size', formattedVal); // 문제 크기 저장 키
    } else if (type === 'opt') {
        document.documentElement.style.setProperty('--opt-font-size', formattedVal + 'rem');
        if (document.getElementById('val-opt-size')) document.getElementById('val-opt-size').innerText = formattedVal;
        localStorage.setItem('user-opt-size', formattedVal); // 보기 크기 저장 키
    }
}

// 4. 저장된 설정 불러오기 (시동 시 메모리 호출)
function loadSavedFontSize() {
    // 로컬 스토리지에서 각각의 키로 값을 가져옴
    const savedQ = localStorage.getItem('user-q-size');
    const savedOpt = localStorage.getItem('user-opt-size');
    
    // 가져온 값이 있으면 그 값을 쓰고, 없으면 기본값(1.20 / 1.00) 사용
    const finalQ = (savedQ && savedQ !== "NaN") ? savedQ : '1.20';
    const finalOpt = (savedOpt && savedOpt !== "NaN") ? savedOpt : '1.00';
    
    // 화면에 적용 (배선 연결)
    updateFontSize('q', finalQ);
    updateFontSize('opt', finalOpt);
    
    // 슬라이더 조절 바 위치도 저장된 값으로 동기화
    const qSlider = document.getElementById('slider-q-size');
    const optSlider = document.getElementById('slider-opt-size');
    if (qSlider) qSlider.value = finalQ;
    if (optSlider) optSlider.value = finalOpt;
}

// [신규] 제출 확인 배너 닫기 (취소 버튼용)
function closeConfirmBanner() {
    const banner = document.getElementById('confirm-banner');
    if (banner) banner.classList.add('hidden');
}

// [신규] 진짜 제출 처리 (네, 제출합니다 버튼용)
function realSubmit() {
    closeConfirmBanner(); // 배너 닫기
    finalizeExam();      // 213행에 있는 실제 채점 엔진 가동
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