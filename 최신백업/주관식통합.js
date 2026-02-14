let questions = []; 
let userAnswers = {}; 
let currentIdx = 0; 
let timerInterval = null; 
let isMultiSelectMode = false; 
let lastUsedExamData = []; 
let lastWrongAnswers = []; 
let examMode = 'self';

// [수리] 뒤로가기 통합 제어 (내부 화면에서 뒤로가기 시 무조건 홈 섹션으로 복귀)
window.addEventListener('popstate', function(event) {
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    
    const isInternalPage = (quizScreen && !quizScreen.classList.contains('hidden')) || 
                           (resultScreen && !resultScreen.classList.contains('hidden'));
    
    if (isInternalPage) {
        // 내부 페이지(퀴즈/결과)에서 뒤로가기를 누르면 홈 화면만 보여주고 스택은 더 쌓지 않음
        goBackToMain();
    }
});

// [수리] 바로 제출 기능
window.confirmFinalize = function() {
    if (!questions || questions.length === 0) { alert("진행 중인 시험 데이터가 없습니다."); return; }
    if (confirm("시험을 종료하고 결과를 확인하시겠습니까?")) {
        if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
        // [수정] pushState 대신 replaceState를 사용하여 기록 중첩 방지
        try { finalizeExam(); } catch (e) { 
            console.error(e); 
            showSection('result-screen'); 
            history.replaceState({ page: 'result' }, '', ''); 
        }
    }
};

// [수리] 화면 전환 및 히스토리 관리 통합 (핵심 수정 구간)
function navigateTo(pageId, stateName) {
    showSection(pageId);
    // [수정] 문제를 풀러 들어가거나 결과를 볼 때 새로운 기록을 쌓지(push) 않고 
    // 현재 6번 화면의 기록을 해당 화면으로 교체(replace)합니다.
    // 이렇게 해야 브라우저는 '6번 내부'라고 인식하여 뒤로가기 한 번에 5번으로 갑니다.
    history.replaceState({ page: stateName }, '', '');
}

function showSection(id) {
    const sections = ['home-screen', 'quiz-screen', 'result-screen'];
    sections.forEach(sec => { const el = document.getElementById(sec); if (el) el.classList.add('hidden'); });
    const target = document.getElementById(id);
    if (target) {
        target.classList.remove('hidden');
        if (id === 'result-screen') window.scrollTo(0, 0);
    }
}

// [수리] 엔터 키 로직
window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const inputField = document.getElementById('answer-input');
        if (examMode === 'input' && inputField) {
            e.preventDefault();
            const feedback = document.getElementById('ans-feedback');
            const isVisible = feedback && !feedback.classList.contains('hidden');
            if (!isVisible) checkAnswer(); else nextQuestion();
        }
    }
});

// [최종 수리] 앱 시작 초기화 - 히스토리 점유 로직 수정 (뒤로가기 1회 보장)
window.onload = () => { 
    // 페이지 진입 시 5번에서 넘어온 기록을 '6번 홈'으로 교체합니다.
    if (!history.state || history.state.page !== 'home') {
        history.replaceState({ page: 'home' }, '', '');
    }

    const dataCheck = setInterval(() => { 
        if (window.quizSets) { 
            clearInterval(dataCheck); 
            initApp(); 
        } 
    }, 100); 
};

// [수리] 메인 복귀 로직 통합
function goBackToMain() {
    if(timerInterval) clearInterval(timerInterval);
    showSection('home-screen');
    // 복귀할 때도 기록을 새로 쌓지 않고 현재 자리를 유지합니다.
    history.replaceState({ page: 'home' }, '', '');
    initApp();
}

function initApp() { loadSavedSettings(); renderRoundCards(); updateStatsDashboard(); renderWrongNoteArea(); setupSliderEvents(); }
function changeExamMode(mode) {
    examMode = mode;
    document.querySelectorAll('.btn-mode-select').forEach(btn => btn.classList.remove('active'));
    if (mode === 'self') document.getElementById('btn-mode-self').classList.add('active');
    else document.getElementById('btn-mode-input').classList.add('active');
}
function loadSavedSettings() {
    const savedQ = localStorage.getItem('subj_q_size') || '1.2';
    const savedExp = localStorage.getItem('subj_exp_size') || '1.0';
    updateFontSize('q', savedQ); updateFontSize('exp', savedExp);
}
function setupSliderEvents() {
    const sliders = document.querySelectorAll('.control-item input[type="range"]');
    sliders.forEach(slider => {
        slider.addEventListener('input', () => setBannerOpacity(true));
        slider.addEventListener('change', () => setBannerOpacity(false));
    });
}
function setBannerOpacity(isAdjusting) {
    const banner = document.querySelector('.banner-body');
    if (banner) {
        if (isAdjusting) banner.classList.add('is-adjusting');
        else banner.classList.remove('is-adjusting');
    }
}
function updateFontSize(type, val) {
    if (type === 'q') {
        document.documentElement.style.setProperty('--q-font-size', val + 'rem');
        if(document.getElementById('val-q-size')) document.getElementById('val-q-size').innerText = val;
        localStorage.setItem('subj_q_size', val);
    } else {
        document.documentElement.style.setProperty('--exp-font-size', val + 'rem');
        if(document.getElementById('val-exp-size')) document.getElementById('val-exp-size').innerText = val;
        localStorage.setItem('subj_exp_size', val);
    }
}
function renderRoundCards() {
    const grid = document.getElementById('round-grid-display');
    if (!grid) return;
    grid.innerHTML = '';
    const isWrongNoteOpen = !document.getElementById('wrong-content-area').classList.contains('hidden');
    window.quizSets.forEach(set => {
        const card = document.createElement('div');
        card.className = 'round-card glass-card';
        const checkBoxHTML = (isMultiSelectMode && !isWrongNoteOpen) ? `<div class="card-check-box"><input type="checkbox" class="round-check" style="pointer-events:none;"></div>` : '';
        card.innerHTML = `${checkBoxHTML}<div class="card-content"><strong>${set.roundName}</strong><br><small>${set.repairData.length} 문항</small></div>`;
        card.onclick = () => {
            if (isMultiSelectMode && !isWrongNoteOpen) {
                card.classList.toggle('selected');
                const chk = card.querySelector('.round-check');
                if (chk) chk.checked = card.classList.contains('selected');
                const sel = document.querySelectorAll('.round-card.selected').length;
                document.getElementById('multi-start-controls').classList.toggle('hidden', sel === 0);
            } else if (!isMultiSelectMode) {
                startExamProcessFromPool(set.repairData.map(q => ({ ...q, originalRound: set.roundName })));
            }
        };
        grid.appendChild(card);
    });
}
function clickMultiToggle() {
    const chk = document.getElementById('multi-mode-chk');
    chk.checked = !chk.checked; isMultiSelectMode = chk.checked;
    document.getElementById('btn-toggle-multi').classList.toggle('active-control', isMultiSelectMode);
    document.querySelectorAll('.round-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('multi-start-controls').classList.add('hidden');
    renderRoundCards(); renderWrongNoteArea(); updateWrongMultiButtonVisibility();
}
function updateWrongMultiButtonVisibility() {
    const isWrongNoteOpen = !document.getElementById('wrong-content-area').classList.contains('hidden');
    const wrongControls = document.getElementById('wrong-multi-controls');
    const multiStartBtn = document.getElementById('multi-start-controls');
    const selectedWrongs = document.querySelectorAll('.wrong-item-row.selected').length;
    if (wrongControls) wrongControls.classList.toggle('hidden', !(isMultiSelectMode && selectedWrongs > 0));
    if (isWrongNoteOpen && multiStartBtn) multiStartBtn.classList.add('hidden');
}
function adjustCount(event, inputId, delta) {
    event.stopPropagation();
    const input = document.getElementById(inputId);
    if (input) { let val = (parseInt(input.value) || 0) + delta; input.value = Math.max(1, Math.min(100, val)); }
}
function validateCount(input) { let val = parseInt(input.value); if (isNaN(val) || val < 1) input.value = 1; if (val > 100) input.value = 100; }
function startExam() {
    const selectedCards = document.querySelectorAll('.round-card.selected');
    const selectedRounds = Array.from(selectedCards).map(card => card.querySelector('strong').innerText);
    if (selectedRounds.length === 0) return alert("선택된 회차가 없습니다.");
    const maxTotal = parseInt(document.getElementById('multi-max-count').value) || 25;
    let totalPool = [];
    const countPerRound = Math.floor(maxTotal / selectedRounds.length);
    let extraCount = maxTotal % selectedRounds.length;
    selectedRounds.forEach(roundName => {
        const targetSet = window.quizSets.find(s => s.roundName === roundName);
        if (targetSet) {
            let shuffled = targetSet.repairData.map(q => ({ ...q, originalRound: targetSet.roundName })).sort(() => Math.random() - 0.5);
            let take = countPerRound + (extraCount-- > 0 ? 1 : 0);
            totalPool.push(...shuffled.slice(0, Math.min(take, shuffled.length)));
        }
    });
    startExamProcessFromPool(totalPool.sort(() => Math.random() - 0.5));
}
function startExamProcessFromPool(pool) {
    if(!pool || pool.length === 0) return alert("문제가 없습니다.");
    questions = pool; lastUsedExamData = JSON.parse(JSON.stringify(questions));
    currentIdx = 0; userAnswers = {};
    navigateTo('quiz-screen', 'quiz');
    renderQuestion(); startTimer();
}
function renderQuestion() {
    const q = questions[currentIdx];
    const display = document.getElementById('quiz-display-area');
    let contentHTML = `<div class="question-container glass-card"><div class="q-header"><span class="badge">${q.originalRound}</span></div><div class="q-text">Q${currentIdx + 1}. ${q.question}</div><div id="ans-feedback" class="feedback-box hidden"><div id="result-tag"></div><p class="ans-line"><strong>정답: ${q.answer}</strong></p><p class="exp-text">${q.explain}</p></div></div>`;
    if (examMode === 'input') contentHTML += `<div class="input-container"><input type="text" id="answer-input" class="short-input" placeholder="답안 입력 후 엔터" autocomplete="off"></div>`;
    let navHTML = `<div class="bottom-nav"><div class="nav-container"><button onclick="prevQuestion()" class="btn-nav-prev" ${currentIdx === 0 ? 'disabled' : ''}>이전</button><div class="nav-center">${examMode === 'self' ? `<button id="btn-reveal" onclick="revealAnswer()" class="btn-nav-main">정답 확인</button><div id="self-btns" class="hidden nav-split"><button onclick="submitSelf('wrong')" class="btn-wrong">오답</button><button onclick="submitSelf('correct')" class="btn-correct">정답</button></div>` : `<button onclick="checkAnswer()" id="btn-input-check" class="btn-nav-main">확인</button><button id="btn-input-next" onclick="nextQuestion()" class="btn-nav-main hidden" style="background:var(--success-green)">다음 ▶</button>`}</div></div></div>`;
    display.innerHTML = contentHTML + navHTML;
    if (examMode === 'input') { const ipt = document.getElementById('answer-input'); if(ipt) ipt.focus(); }
    updateProgressDisplay();
}
function revealAnswer() { document.getElementById('ans-feedback').classList.remove('hidden'); document.getElementById('btn-reveal').classList.add('hidden'); document.getElementById('self-btns').classList.remove('hidden'); }
function checkAnswer() {
    const input = document.getElementById('answer-input'); if(!input || input.disabled) return;
    const sim = calcSim(input.value.trim().replace(/\s/g, ''), questions[currentIdx].answer.replace(/\s/g, ''));
    const isCorrect = sim >= 0.8; userAnswers[currentIdx] = input.value; input.disabled = true;
    document.getElementById('result-tag').innerHTML = isCorrect ? `<h3 style="color:var(--success-green)">✅ 정답! (${Math.round(sim*100)}%)</h3>` : `<h3 style="color:var(--accent-red)">❌ 오답! (${Math.round(sim*100)}%)</h3>`;
    document.getElementById('ans-feedback').classList.remove('hidden'); document.getElementById('btn-input-check').classList.add('hidden'); document.getElementById('btn-input-next').classList.remove('hidden');
}
function submitSelf(res) { userAnswers[currentIdx] = res; nextQuestion(); }
function nextQuestion() { if (currentIdx < questions.length - 1) { currentIdx++; renderQuestion(); window.scrollTo(0,0); } else finalizeExam(); }
function prevQuestion() { if (currentIdx > 0) { currentIdx--; renderQuestion(); window.scrollTo(0,0); } }
function finalizeExam() {
    const container = document.getElementById('review-list-container'); if(!container) return;
    container.innerHTML = ''; let score = 0; let wrongs = [];
    questions.forEach((q, i) => {
        let isCorrect = (examMode === 'input') ? calcSim(String(userAnswers[i]||"").replace(/\s/g,''), q.answer.replace(/\s/g,'')) >= 0.8 : userAnswers[i] === 'correct';
        if(isCorrect) score++; else wrongs.push(q);
        container.innerHTML += `<div class="review-card glass-card" style="border-left:8px solid ${isCorrect?'var(--success-green)':'var(--accent-red)'}"><h4>Q${i+1}. ${q.question}</h4><p class="ans-line">내 답변: ${userAnswers[i]||'미입력'}</p><p class="ans-line"><strong>정답: ${q.answer}</strong></p><p class="exp-text">${q.explain}</p></div>`;
    });
    const final = (score / questions.length) * 100; document.getElementById('final-result-score').innerText = final.toFixed(1);
    lastWrongAnswers = wrongs; saveScore(final, questions[0].originalRound); saveWrongNotes(wrongs);
    navigateTo('result-screen', 'result'); window.scrollTo(0,0);
}
function saveScore(s, r) {
    let h = JSON.parse(localStorage.getItem('subj_history_v1') || '[]'); const now = new Date();
    const timeStr = `${now.getFullYear()}. ${now.getMonth() + 1}. ${now.getDate()}. ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    h.push({ score: s, roundName: r, date: timeStr }); if (h.length > 10) h.shift();
    localStorage.setItem('subj_history_v1', JSON.stringify(h)); updateStatsDashboard();
}
function updateStatsDashboard() {
    let h = JSON.parse(localStorage.getItem('subj_history_v1') || '[]'); const recentList = document.getElementById('stat-recent-list'); const avgDisplay = document.getElementById('stat-avg');
    if(h.length > 0) { const avg = (h.reduce((a, b) => a + b.score, 0) / h.length).toFixed(1); if(avgDisplay) avgDisplay.innerText = avg; }
    if(recentList) { recentList.innerHTML = h.length === 0 ? '<div style="font-size:0.8rem; color:#999;">기록 없음</div>' : h.map(item => `<div class="recent-score-card"><div class="r-score">${item.score.toFixed(0)}<span>점</span></div><div class="r-info"><strong>${item.roundName}</strong><small>${item.date}</small></div></div>`).join(''); setTimeout(() => { recentList.scrollLeft = recentList.scrollWidth; }, 100); }
}
function renderWrongNoteArea() {
    const container = document.getElementById('wrong-list-display'); const badge = document.getElementById('wrong-count-badge'); const data = JSON.parse(localStorage.getItem('subj_wrong_v1') || '{}');
    const sorted = Object.keys(data).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
    let total = 0; sorted.forEach(r => total += data[r].length); if(badge) badge.innerText = total;
    if (sorted.length === 0) { container.innerHTML = '<p style="text-align:center;">기록 없음</p>'; return; }
    let html = `<div style="display:flex;justify-content:flex-end;margin-bottom:10px;"><button onclick="clearAllWrongs()" style="background:none;border:none;color:var(--accent-red);cursor:pointer;font-size:0.85rem;">🗑️ 전체 삭제</button></div>`;
    html += sorted.map(r => `<div class="wrong-item-row glass-card" data-round="${r}" onclick="handleWrongCardClick(this)" style="display:flex;align-items:center;padding:10px;margin-bottom:10px;cursor:pointer;"><div style="display:flex;align-items:center;gap:10px;flex:1;">${isMultiSelectMode ? `<input type="checkbox" class="wrong-check" style="pointer-events:none;">` : ''}<div style="display:flex;flex-direction:column;"><span style="font-weight:bold;">${r}</span><small style="color:#666;">${data[r].length}개 오답</small></div></div><div style="display:flex;gap:8px;align-items:center;"><button onclick="startWrongReviewDirect(event, '${r}')" class="btn-res-nav" style="padding:5px 10px;font-size:0.75rem;">다시풀기</button><button onclick="deleteWrongRound(event, '${r}')" style="background:#eee;border:none;border-radius:5px;padding:5px 8px;cursor:pointer;">❌</button></div></div>`).join('');
    container.innerHTML = html;
}
function handleWrongCardClick(el) { if (isMultiSelectMode) { el.classList.toggle('selected'); const chk = el.querySelector('.wrong-check'); if (chk) chk.checked = el.classList.contains('selected'); updateWrongMultiButtonVisibility(); } }
function startWrongReviewDirect(event, r) { event.stopPropagation(); startWrongReview(r); }
function startSelectedWrongReview() {
    const selected = document.querySelectorAll('.wrong-item-row.selected'); if (selected.length === 0) return;
    const data = JSON.parse(localStorage.getItem('subj_wrong_v1') || '{}'); const max = parseInt(document.getElementById('wrong-max-count').value) || 20;
    let pool = []; selected.forEach(el => { const r = el.getAttribute('data-round'); if (data[r]) pool.push(...data[r]); });
    startExamProcessFromPool(pool.sort(()=>Math.random()-0.5).slice(0, max));
}
function deleteWrongRound(event, r) { event.stopPropagation(); if(!confirm(`${r} 삭제?`)) return; let d = JSON.parse(localStorage.getItem('subj_wrong_v1') || '{}'); delete d[r]; localStorage.setItem('subj_wrong_v1', JSON.stringify(d)); renderWrongNoteArea(); updateWrongMultiButtonVisibility(); }
function clearAllWrongs() { if(!confirm("전체 삭제?")) return; localStorage.removeItem('subj_wrong_v1'); renderWrongNoteArea(); updateWrongMultiButtonVisibility(); }
function startWrongReview(r) { const d = JSON.parse(localStorage.getItem('subj_wrong_v1') || '{}'); if (d[r]) startExamProcessFromPool([...d[r]].sort(()=>Math.random()-0.5).slice(0, 20)); }
function calcSim(s1, s2) {
    let longer = s1.length < s2.length ? s2 : s1, shorter = s1.length < s2.length ? s1 : s2; if (longer.length === 0) return 1.0;
    const costs = []; for (let i = 0; i <= longer.length; i++) { let last = i; for (let j = 0; j <= shorter.length; j++) { if (i === 0) costs[j] = j; else if (j > 0) { let n = costs[j - 1]; if (longer.charAt(i - 1) !== shorter.charAt(j - 1)) n = Math.min(Math.min(n, last), costs[j]) + 1; costs[j - 1] = last; last = n; } } if (i > 0) costs[shorter.length] = last; }
    return (longer.length - costs[shorter.length]) / longer.length;
}
function startTimer() {
    let t = 3600; if(timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => { t--; let m = Math.floor(t/60), s = t%60; const display = document.getElementById('timer-display'); if (display) display.innerText = `${m}:${s<10?'0':''}${s}`; if(t <= 0) { clearInterval(timerInterval); finalizeExam(); } }, 1000);
}
function updateProgressDisplay() { const pd = document.getElementById('progress-display'); if(pd) pd.innerText = `문항: ${currentIdx + 1} / ${questions.length}`; }
function retryCurrentExam(wrongOnly) { startExamProcessFromPool(wrongOnly ? lastWrongAnswers : lastUsedExamData); }
function toggleTheme() { const isDark = document.body.classList.toggle('dark-mode'); document.getElementById('theme-btn').innerText = isDark ? '☀️ 라이트' : '🌙 다크'; }
function toggleFontControl() { document.getElementById('font-control-banner').classList.toggle('hidden'); }

// [핵심 수정] 타이틀 클릭 시 히스토리를 덮어쓰며 이동 (5번에서 뒤로가면 4번으로 가게 함)
function handleTitleClick() {
    window.location.replace('01정비산업기사통합.html');
}

function toggleWrongAccordion() { document.getElementById('wrong-content-area').classList.toggle('hidden'); renderRoundCards(); updateWrongMultiButtonVisibility(); }
function saveWrongNotes(wrongs) {
    if(!wrongs || wrongs.length === 0) return; let d = JSON.parse(localStorage.getItem('subj_wrong_v1') || '{}');
    wrongs.forEach(q => { const r = q.originalRound; if(!d[r]) d[r] = []; if(!d[r].some(item => item.question === q.question)) d[r].push(q); });
    localStorage.setItem('subj_wrong_v1', JSON.stringify(d));
}