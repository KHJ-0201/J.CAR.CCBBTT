/* 통합랜덤.js - Ver 18.5 순정 규격 기반 최종 수리 */

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
    grid.innerHTML = '';
    const activeSets = window.quizSets.filter(set => set.repairData && set.repairData.length > 0);
    activeSets.forEach(set => {
        const card = document.createElement('div');
        card.className = 'round-card glass-card';
        card.innerHTML = `<strong>${set.roundName}</strong><small>${set.repairData.length} 문항</small>`;
        card.onclick = () => {
            if (isMultiSelectMode) {
                card.classList.toggle('selected');
                document.getElementById('btn-multi-start').classList.toggle('hidden', document.querySelectorAll('.round-card.selected').length === 0);
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
        document.getElementById('btn-multi-start').classList.add('hidden');
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
    const wrongBadge = q.wrongCount ? `<span style="color:var(--accent-red); margin-left:10px; font-weight:bold;">(누적 오답: ${q.wrongCount}회)</span>` : '';
    return `
        <div class="question-container" id="q-block-${idx}">
            <div class="q-header">
                <span class="q-from">${q.originalRound}${wrongBadge}</span>
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
    if (document.getElementById('setting-auto-scroll').checked && !isInstant) {
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
    const unsolvedCount = questions.length - Object.keys(userAnswers).length;
    if (unsolvedCount > 0) {
        if (confirm(`미풀이 문제가 ${unsolvedCount}개 있습니다. 제출하시겠습니까?`)) { finalizeExam(); }
        else {
            const firstUnsolved = questions.findIndex((_, i) => userAnswers[i] === undefined);
            if (firstUnsolved !== -1) jumpTo(firstUnsolved);
        }
    } else { finalizeExam(); }
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
    if(!confirm(`${answerIdx + 1}번으로 모든 미풀이 문제를 밀겠습니까?`)) return;
    questions.forEach((_, i) => { if (userAnswers[i] === undefined) { selectAnswer(i, answerIdx); } });
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
function syncInstantMode(el) { if(el.checked) document.getElementById('setting-one-by-one').checked = true; if(questions.length > 0) launchQuiz(); }

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