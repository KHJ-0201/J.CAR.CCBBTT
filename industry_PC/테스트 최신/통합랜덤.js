let questions = []; 
let userAnswers = {}; 
let currentIdx = 0;
let timerInterval = null;
let isMultiSelectMode = false;
let secretResetCount = 0;
let lastUsedExamData = []; 
let lastWrongAnswers = []; 

window.onload = () => {
    const dataCheck = setInterval(() => {
        if (window.quizSets) {
            clearInterval(dataCheck);
            initApp();
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
    updateFontSize(localStorage.getItem('cbt_font_size') || 'medium');
    if (localStorage.getItem('cbt_theme') === 'dark') {
        toggleTheme();
    }
}

function renderRoundCards() {
    const grid = document.getElementById('round-grid-display');
    if(!grid) return;
    grid.innerHTML = '';
    const activeSets = window.quizSets.filter(set => set.repairData && set.repairData.length > 0);
    activeSets.forEach(set => {
        const card = document.createElement('div');
        card.className = 'round-card glass-card';
        card.innerHTML = `<strong>${set.roundName}</strong><small>${set.repairData.length}문항</small>`;
        card.onclick = () => {
            if (isMultiSelectMode) {
                card.classList.toggle('selected');
                const startBtn = document.getElementById('btn-multi-start');
                if(startBtn) startBtn.classList.toggle('hidden', document.querySelectorAll('.round-card.selected').length === 0);
            } else {
                startExamProcess([set], false);
            }
        };
        grid.appendChild(card);
    });
}

function toggleMultiMode() {
    isMultiSelectMode = document.getElementById('multi-mode-chk').checked;
    if (!isMultiSelectMode) {
        document.querySelectorAll('.round-card').forEach(c => c.classList.remove('selected'));
        const startBtn = document.getElementById('btn-multi-start');
        if(startBtn) startBtn.classList.add('hidden');
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
    const isInstant = document.getElementById('setting-instant-feedback').checked;
    const isOneByOne = document.getElementById('setting-one-by-one').checked;
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('quiz-status-area').classList.remove('hidden');
    
    document.getElementById('quiz-nav-group').style.display = isOneByOne ? 'flex' : 'none';
    const autoScroll = document.getElementById('auto-scroll-wrap');
    if(autoScroll) autoScroll.style.display = isInstant ? 'none' : 'flex';
    
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
    updateProgressDisplay();
    highlightOMRRow();
}

function generateQuestionHTML(q, idx, isInstant) {
    let feedbackContent = '';
    let feedbackHidden = 'hidden';
    if (isInstant && userAnswers[idx] !== undefined) {
        feedbackHidden = '';
        const isCorrect = q.options[userAnswers[idx]] === q.correctAnswerText;
        feedbackContent = isCorrect ? '<strong style="color:var(--success-green)">✅ 정답입니다!</strong>' : '<strong style="color:var(--accent-red)">❌ 틀렸습니다.</strong>';
    }
    return `
        <div class="question-container" id="q-block-${idx}">
            <div class="q-header">
                <span class="q-from">${q.originalRound}</span>
                <p class="q-text"><strong>Q${idx + 1}.</strong> ${q.question}</p>
            </div>
            <div class="options-list">
                ${q.options.map((opt, i) => `
                    <button class="option-btn ${userAnswers[idx] === i ? 'selected' : ''}" id="opt-${idx}-${i}" onclick="selectAnswer(${idx}, ${i})">${i + 1}. ${opt}</button>
                `).join('')}
            </div>
            <div id="feedback-${idx}" class="feedback-box ${feedbackHidden}">
                <div class="instant-result-tag" id="instant-tag-${idx}">${feedbackContent}</div>
                <span class="ans-label">정답: ${q.correctAnswerText}</span>
                <p class="exp-text">해설: ${q.explain}</p>
            </div>
        </div>
    `;
}

function selectAnswer(qIdx, aIdx) {
    const isInstant = document.getElementById('setting-instant-feedback').checked;
    if (isInstant && userAnswers[qIdx] !== undefined) return;
    userAnswers[qIdx] = aIdx;
    const block = document.getElementById(`q-block-${qIdx}`);
    if (block) {
        block.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
        const target = block.querySelector(`#opt-${qIdx}-${aIdx}`);
        if(target) target.classList.add('selected');
        if (isInstant) {
            const feedback = block.querySelector(`#feedback-${qIdx}`);
            const tag = block.querySelector(`#instant-tag-${qIdx}`);
            const isCorrect = questions[qIdx].options[aIdx] === questions[qIdx].correctAnswerText;
            feedback.classList.remove('hidden');
            tag.innerHTML = isCorrect ? '<strong style="color:var(--success-green)">✅ 정답입니다!</strong>' : '<strong style="color:var(--accent-red)">❌ 틀렸습니다.</strong>';
        }
    }
    updateOMRMark(qIdx, aIdx);
    updateProgressDisplay();
    const autoScrollChk = document.getElementById('setting-auto-scroll');
    if (autoScrollChk && autoScrollChk.checked && !isInstant) {
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
    if (solvedEl && totalEl) { solvedEl.textContent = solved; totalEl.textContent = total; }
}

function handleFinishSubmit() {
    const unsolvedCount = questions.length - Object.keys(userAnswers).length;
    if (unsolvedCount > 0) {
        if (confirm(`미풀이 문제가 ${unsolvedCount}개 있습니다. 제출하시겠습니까?`)) { finalizeExam(); }
    } else { finalizeExam(); }
}

function finalizeExam() {
    if(timerInterval) clearInterval(timerInterval);
    let scoreCount = 0;
    const reviewContainer = document.getElementById('review-list-container');
    reviewContainer.innerHTML = '';
    const currentWrongs = [];

    questions.forEach((q, i) => {
        const userPickText = q.options[userAnswers[i]];
        const isCorrect = userPickText === q.correctAnswerText;
        if (isCorrect) { scoreCount++; } 
        else { currentWrongs.push({...q, options: q.options}); }
        
        const card = document.createElement('div');
        card.className = `review-card glass-card ${isCorrect ? 'correct' : 'wrong'}`;
        card.innerHTML = `<h4>${isCorrect ? '✅' : '❌'} Q${i + 1}. ${q.question}</h4><p>나의 선택: ${userPickText || '미선택'}</p><p><strong>정답: ${q.correctAnswerText}</strong></p><p>해설: ${q.explain}</p>`;
        reviewContainer.appendChild(card);
    });

    const finalScore = (scoreCount / questions.length) * 100;
    saveScoreToHistory(finalScore, questions[0].originalRound);
    saveWrongNotes(currentWrongs);
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('quiz-status-area').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('final-result-score').innerText = finalScore.toFixed(2);
    window.scrollTo(0, 0);
}

function renderOMR() {
    const grid = document.getElementById('omr-buttons-grid');
    if (!grid) return;
    grid.innerHTML = questions.map((_, i) => {
        return `<div class="omr-row" id="omr-row-${i}" onclick="jumpTo(${i})"><span>${i + 1}</span></div>`;
    }).join('');
}

function updateOMRMark(qIdx, aIdx) {
    const row = document.getElementById(`omr-row-${qIdx}`);
    if (row) row.classList.add('solved');
}

function moveQuestion(dir) {
    const next = currentIdx + dir;
    if (next >= 0 && next < questions.length) { currentIdx = next; renderQuestion(); window.scrollTo(0, 0); }
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
    localStorage.setItem('cbt_font_size', size);
}

function toggleTheme() {
    const body = document.getElementById('main-body');
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('cbt_theme', isDark ? 'dark' : 'light');
    const themeBtn = document.getElementById('theme-btn');
    if(themeBtn) themeBtn.innerText = isDark ? '☀️ 라이트' : '🌙 다크';
}

function highlightOMRRow() {
    document.querySelectorAll('.omr-row').forEach(r => r.classList.remove('active'));
    const target = document.getElementById(`omr-row-${currentIdx}`);
    if (target) target.classList.add('active');
}

function toggleWrongAccordion() {
    const body = document.getElementById('wrong-content-area');
    if(!body) return;
    body.classList.toggle('hidden');
    const arrow = document.getElementById('wrong-arrow-icon');
    if(arrow) arrow.innerText = body.classList.contains('hidden') ? '▼' : '▲';
}

function updateStatsDashboard() {
    let history = JSON.parse(localStorage.getItem('cbt_history_v4') || '[]');
    if (history.length > 0) {
        const lastScore = document.getElementById('stat-last');
        const avgScore = document.getElementById('stat-avg');
        if(lastScore) lastScore.innerText = history[history.length-1].score.toFixed(2);
        if(avgScore) avgScore.innerText = (history.reduce((a,b)=>a+b.score,0)/history.length).toFixed(2);
    }
}

function saveScoreToHistory(score, roundName) {
    let history = JSON.parse(localStorage.getItem('cbt_history_v4') || '[]');
    const now = new Date();
    const timeStr = `${now.getMonth() + 1}/${now.getDate()}`;
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
        data[round].push(q);
    });
    localStorage.setItem('cbt_wrong_v4', JSON.stringify(data));
    renderWrongNoteArea();
}

function renderWrongNoteArea() {
    const container = document.getElementById('wrong-list-display');
    if(!container) return;
    const data = JSON.parse(localStorage.getItem('cbt_wrong_v4') || '{}');
    const rounds = Object.keys(data);
    if (rounds.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:var(--text-secondary);">기록 없음</p>';
        return;
    }
    container.innerHTML = rounds.map(r => `<div><strong>${r}</strong> (${data[r].length})</div>`).join('');
}

function openStatsModal() { document.getElementById('modal-stats-overlay').classList.remove('hidden'); }
function closeStatsModal() { document.getElementById('modal-stats-overlay').classList.add('hidden'); }
function handleOverlayClick(e) { if (e.target.id === 'modal-stats-overlay') closeStatsModal(); }