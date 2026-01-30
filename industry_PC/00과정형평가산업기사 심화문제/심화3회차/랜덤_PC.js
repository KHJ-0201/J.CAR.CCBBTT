/* [수정] 정적 import 대신 동적 로드 방식을 사용합니다. */
const filePaths = [
    './심화1회차.js',
    './심화2회차.js',
    './심화3회차.js',
    './심화4회차.js',
    './심화5회차.js',
    './심화6회차.js'
];

let allSets = [];
let questions = [];
let answers = [];
let totalSeconds = 60 * 60;
let timerInterval = null;
let isWrongMode = false;

/**
 * [핵심] 파일 존재 여부를 체크하며 데이터를 로드하는 함수
 */
async function loadDataAndInit() {
    // 1. 모든 파일을 동시에 불러오기 시도 (파일이 없어도 에러로 멈추지 않음)
    const results = await Promise.allSettled(
        filePaths.map(path => import(path))
    );

    // 2. 성공적으로 불러온 데이터만 추출
    allSets = results
        .filter(res => res.status === 'fulfilled')
        .map(res => res.value);

    if (allSets.length === 0) {
        alert("⚠️ 불러올 수 있는 문제 파일이 하나도 없습니다.\n파일 경로와 이름을 확인해 주세요.");
        return;
    }

    // 3. 앱 초기화 실행
    initApp();
}
/* ===========================
    1. 오답 세트 관리 및 삭제
=========================== */

function saveToWrongNote() {
    let wrongPool = JSON.parse(localStorage.getItem('wrong_pool') || "{}");
    let wrongSets = JSON.parse(localStorage.getItem('wrong_sets') || "[]");
    
    const currentWrongQs = questions.filter((q, i) => answers[i] !== q.answer);
    
    currentWrongQs.forEach(q => {
        const qKey = q.question;
        if (wrongPool[qKey]) {
            wrongPool[qKey].wrongCount++;
        } else {
            wrongPool[qKey] = { ...q, wrongCount: 1 };
            let placed = false;
            for (let set of wrongSets) {
                if (set.questions.length < 60) {
                    set.questions.push(qKey);
                    placed = true;
                    break;
                }
            }
            if (!placed) {
                wrongSets.push({
                    id: Date.now(), // 고유 ID로 변경 (삭제 시 식별 용이)
                    date: new Date().toLocaleDateString(),
                    questions: [qKey]
                });
            }
        }
    });
    
    localStorage.setItem('wrong_pool', JSON.stringify(wrongPool));
    localStorage.setItem('wrong_sets', JSON.stringify(wrongSets));
}

// 특정 세트 삭제 함수
window.deleteWrongSet = (setId, event) => {
    event.stopPropagation(); // 버튼 클릭 시 세트 시작 방지
    if (confirm("이 오답 세트를 삭제하시겠습니까?")) {
        let sets = JSON.parse(localStorage.getItem('wrong_sets') || "[]");
        sets = sets.filter(s => s.id !== setId);
        localStorage.setItem('wrong_sets', JSON.stringify(sets));
        startWrongNote(); // 모달 갱신
    }
};

window.resetWrongData = () => {
    if (confirm("모든 오답 세트와 누적 기록이 영구적으로 삭제됩니다. 계속하시겠습니까?")) {
        localStorage.removeItem('wrong_pool');
        localStorage.removeItem('wrong_sets');
        alert("오답 기록이 모두 초기화되었습니다.");
        closeModal();
    }
};

window.startWrongNote = () => {
    const sets = JSON.parse(localStorage.getItem('wrong_sets') || "[]");
    if (sets.length === 0) return alert("저장된 오답이 없습니다.");

    let html = `<h2 class="modal-title">📝 오답 세트 선택</h2>`;
    sets.forEach((set, i) => {
        html += `
            <div class="set-row">
                <button class="set-select-btn" onclick="loadWrongSet(${i})">
                    <div class="set-info">
                        <span class="set-name">세트 ${i + 1}</span>
                        <span class="set-date">${set.date}</span>
                    </div>
                    <span class="set-count">${set.questions.length}문항</span>
                </button>
                <button class="set-delete-btn" onclick="deleteWrongSet(${set.id}, event)">삭제</button>
            </div>`;
    });

    html += `
        <div style="margin-top: 25px; border-top: 1px dashed #ccc; padding-top: 15px;">
            <button onclick="resetWrongData()" class="reset-data-btn">🔥 전체 기록 초기화</button>
        </div>`;
    
    openModal(html);
};

window.loadWrongSet = (index) => {
    const sets = JSON.parse(localStorage.getItem('wrong_sets') || "[]");
    const pool = JSON.parse(localStorage.getItem('wrong_pool') || "{}");
    const selectedSet = sets[index];
    
    if (confirm(`해당 세트를 푸시겠습니까?`)) {
        isWrongMode = true;
        closeModal();
        const setQuestions = selectedSet.questions.map(key => pool[key]);
        questions = prepareQuestions(setQuestions);
        startNewQuiz();
    }
};

/* ===========================
    2. 핵심 로직 (OMR, 퀴즈)
=========================== */
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
    const pool = JSON.parse(localStorage.getItem('wrong_pool') || "{}");

    questions.forEach((q, i) => {
        const wrongData = pool[q.question];
        const countBadge = (wrongData && wrongData.wrongCount > 1) 
            ? `<span class="wrong-badge">누적 오답 ${wrongData.wrongCount}회</span>` 
            : '';

        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `
            <div class="q-header">
                <span class="round-tag">${q.roundInfo || '오답노트'}</span>
                ${countBadge}
                <span id="q-status-${i}" class="q-status"></span>
            </div>
            <strong class="q-title">${i + 1}. ${q.question}</strong>
            ${q.imagePath ? `<img src="${q.imagePath}" class="q-image">` : ''}
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
    renderGlobalBtns();
}

function renderGlobalBtns() {
    const header = document.querySelector(".omr-header");
    let wrap = header.querySelector(".global-select-wrapper") || document.createElement("div");
    wrap.className = "global-select-wrapper";
    wrap.innerHTML = [0,1,2,3].map(i => `<button class="omr-global-select-btn" onclick="globalSelect(${i})">${i+1}</button>`).join('');
    header.insertBefore(wrap, document.getElementById("quickSubmitBtn"));
}

window.scrollToQuestion = (i) => {
    const q = document.getElementsByClassName("question")[i];
    if (q) {
        const offset = 110; // 상단바 높이 고려
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = q.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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
        item.classList.toggle('answered', answers[i] >= 0);
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
    disableExitPrevention();
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
            score++; status.innerHTML = '⭕';
            omrItem.classList.add('correct');
        } else {
            if (answers[i] >= 0) {
                qDiv.querySelectorAll('label')[answers[i]].style.backgroundColor = "#fcb6b6";
                omrOpts[answers[i]].classList.add('wrong');
            }
            status.innerHTML = '❌';
            omrItem.classList.add('wrong');
        }
        status.style.cssText = 'font-size: 2rem; font-weight: 700; position: absolute; left:-0px; top: 40px;';
        omrOpts[q.answer].classList.add('correct');
        qDiv.querySelector(".explain").style.display = "block";
        qDiv.querySelector(".explain").innerHTML = `<strong>정답: ${q.originalCorrectOptionText}</strong><br>${q.explain || '해설이 없습니다.'}`;
        qDiv.querySelectorAll('input').forEach(r => r.disabled = true);
    });

    saveQuizResult(score, questions.length);
    saveToWrongNote();
    
    document.getElementById("status").innerHTML = `<span id="scoreDisplay">결과: ${score}/${questions.length}</span><button id="retryBtn" onclick="location.reload()">다시 풀기</button>`;
    document.getElementById("submitBtn").style.display = "none";
}

/* ===========================
    3. 초기화 및 유틸리티
=========================== */
function updateTimer() {
    let m = Math.floor(totalSeconds / 60), s = totalSeconds % 60;
    document.getElementById("timer").textContent = `남은 시간: ${m}:${s < 10 ? '0'+s : s}`;
    if (totalSeconds-- <= 0) submitQuiz(true);
}

function startNewQuiz() {
    answers = Array(questions.length).fill(-1);
    renderQuiz();
    renderOMR();
    updateRemaining();
    if(timerInterval) clearInterval(timerInterval);
    totalSeconds = 60 * 60;
    timerInterval = setInterval(updateTimer, 1000);
}

function initApp() {
    if (localStorage.getItem('dark-mode') === 'true') document.body.classList.add('dark-mode');
    
    let rawPool = [];
    const activeSets = allSets.filter(mod => mod && mod.repairData);

    // --- [추가] 제목 동적 변경 로직 ---
    const titleElement = document.querySelector(".page-title");
    if (activeSets.length === 1) {
        // 1개 회차만 불러왔을 때 (예: "심화 1회차")
        const currentName = activeSets[0].roundName || "심화 문제풀이";
        if (titleElement) titleElement.textContent = currentName; // 화면 제목 변경
        document.title = currentName; // 브라우저 탭 제목 변경
    } else {
        // 여러 회차가 섞였을 때
        const combinedName = "심화문제 전체 랜덤";
        if (titleElement) titleElement.textContent = combinedName;
        document.title = combinedName;
    }
    // --------------------------------

    if (activeSets.length === 1) {
        const mod = activeSets[0];
        rawPool = mod.repairData.map(q => ({
            ...q, 
            roundInfo: mod.roundName || "학습 회차"
        }));
    } else {
        const totalTarget = 80;
        const questionsPerSet = Math.floor(totalTarget / activeSets.length);
        
        activeSets.forEach(mod => {
            const picked = shuffleArray(mod.repairData)
                .slice(0, questionsPerSet)
                .map(q => ({
                    ...q, 
                    roundInfo: mod.roundName || "미분류" 
                }));
            rawPool = rawPool.concat(picked);
        });

        if (rawPool.length < totalTarget) {
            const extraNeeded = totalTarget - rawPool.length;
            const allRemaining = activeSets.flatMap(mod => mod.repairData)
                .filter(q => !rawPool.some(p => p.question === q.question));
            rawPool = rawPool.concat(shuffleArray(allRemaining).slice(0, extraNeeded));
        }
    }

    questions = prepareQuestions(rawPool);
    startNewQuiz();
}

/* [수정] JS 데이터의 roundName을 사용하여 시험 명칭 저장 */
function saveQuizResult(score, total) {
    const history = JSON.parse(localStorage.getItem('quiz_history') || "[]");
    
    // 1. 현재 로드된 문제들의 모든 회차 이름을 중복 없이 가져옴
    const rounds = [...new Set(questions.map(q => q.roundInfo))];
    let examName = "";
    
    if (isWrongMode) {
        examName = "오답노트 세트";
    } else if (rounds.length > 1) {
        // [케이스 2] 여러 회차가 섞여있을 때: "통합 (1회차, 2회차...)"
        // 만약 이름이 너무 길어지는게 싫다면 "통합 모의고사"로 고정하셔도 됩니다.
        examName = "통합 랜덤 풀이";
    } else {
        // [케이스 1] 단일 회차일 때: 해당 회차 이름 그대로 사용
        // 예: "1회차" 또는 "심화 2회차" 등 (roundName에 적힌 값)
        examName = rounds[0] || "일반 풀이";
    }

    history.push({ 
        date: new Date().toLocaleDateString(), 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        examName: examName, // 이제 HTML 제목 대신 JS의 roundName이 저장됩니다.
        score: score, 
        total: total, 
        percent: Math.round((score / total) * 100) 
    });
    
    localStorage.setItem('quiz_history', JSON.stringify(history.slice(-20)));
}

/* [수정] 성적 통계: 선생님 전용 비밀 초기화 기능 추가 */
window.showStats = () => {
    const history = JSON.parse(localStorage.getItem('quiz_history') || "[]");
    const isDark = document.body.classList.contains('dark-mode');
    
    // 비밀 클릭 카운터 변수
    let secretClickCount = 0;

    // 제목 부분을 클릭하면 카운트가 올라가는 HTML 구조
    let html = `
        <h2 class="modal-title" 
            id="secret-title" 
            style="margin-bottom: 20px; cursor: default; user-select: none;" 
            onclick="window.handleSecretReset()">
            📊 성적 기록
        </h2>`;
    
    if (!history.length) {
        html += "<p style='text-align:center; padding:20px;'>기록이 없습니다.</p>";
    } else {
        const reversedHistory = [...history].reverse();
        const recentCount = 5;

        html += `<div id="stats-scroll-container" style="max-height: 60vh; overflow-y: auto; padding-right: 10px;">`;

        reversedHistory.forEach((h, i) => {
            const calculatedScore = ((h.score / h.total) * 100).toFixed(2);
            const isHidden = i >= recentCount ? 'display: none;' : '';
            const hiddenClass = i >= recentCount ? 'class="hidden-stats"' : '';
            
            const scoreColor = isDark ? '#8ab4f8' : '#1f3b73';
            const badgeBg = isDark ? '#444' : '#e9ecef';
            const badgeColor = isDark ? '#ddd' : '#495057';
            const borderColor = isDark ? '#333' : '#eee';
            const textColor = isDark ? '#bbb' : '#666';

            html += `
                <div ${hiddenClass} style="margin-bottom: 15px; border-bottom: 1px solid ${borderColor}; padding-bottom: 12px; ${isHidden}">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                        <div>
                            <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; background: ${badgeBg}; color: ${badgeColor}; font-size: 0.75rem; font-weight: bold; margin-bottom: 4px;">
                                ${h.examName || '미분류'}
                            </span>
                            <div style="font-size: 0.85rem; color: ${textColor};">📅 ${h.date} ${h.time || ''}</div>
                        </div>
                        <strong style="font-size: 1.2rem; color: ${scoreColor};">${calculatedScore}점</strong>
                    </div>
                    <div style="font-size: 0.8rem; margin-bottom: 5px; text-align: right; opacity: 0.8; color: ${isDark ? '#fff' : '#000'};">
                        정답: ${h.score} / ${h.total}
                    </div>
                    <div class="stat-bar" style="background: ${isDark ? '#333' : '#eee'}; height: 10px; border-radius: 5px; overflow: hidden;">
                        <div style="width: ${calculatedScore}%; background: #4caf50; height: 100%; transition: width 0.6s ease;"></div>
                    </div>
                </div>`;
        });

        if (reversedHistory.length > recentCount) {
            html += `<button id="show-more-stats" onclick="window.toggleMoreStats()" style="width:100%; padding:12px; background:transparent; border:1px solid #888; border-radius:6px; cursor:pointer; color:inherit; margin: 10px 0;">▼ 이전 기록 더보기</button>`;
        }
        html += `</div>`;
    }
    openModal(html);
};

/* [신규] 선생님 전용 비밀 초기화 로직 */
let secretCount = 0;
let secretTimer = null;

window.handleSecretReset = () => {
    secretCount++;
    
    // 3초 동안 입력이 없으면 카운트 초기화
    clearTimeout(secretTimer);
    secretTimer = setTimeout(() => { secretCount = 0; }, 3000);

    // 5번 연속 클릭 시 실행
    if (secretCount === 5) {
        if (confirm("🚨 [선생님 전용] 모든 성적 기록을 초기화하시겠습니까?")) {
            localStorage.removeItem('quiz_history');
            alert("성적 기록이 모두 삭제되었습니다.");
            closeModal();
        }
        secretCount = 0;
    }
};

/* 2. 테마 변경 함수 (모달 갱신 로직 추가) */
window.toggleDarkMode = () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', isDark);

    // [핵심] 모달이 열려있는 경우, 통계 창 내용을 새 테마에 맞춰 다시 그림
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay && !modalOverlay.classList.contains('hidden')) {
        // 현재 모달 제목을 확인하여 성적 기록 창일 때만 갱신
        if (document.querySelector('.modal-title')?.innerText.includes('성적')) {
            window.showStats();
        }
    }
};

/* 3. 더보기 기능 전역 등록 */
window.toggleMoreStats = () => {
    document.querySelectorAll('.hidden-stats').forEach(item => item.style.display = 'block');
    const btn = document.getElementById('show-more-stats');
    if (btn) btn.style.display = 'none';
};

function handleBeforeUnload(e) { e.preventDefault(); e.returnValue = ''; return ''; }
function handlePageHide() { localStorage.setItem('temp_answers', JSON.stringify(answers)); }
function disableExitPrevention() { window.removeEventListener('beforeunload', handleBeforeUnload); window.removeEventListener('pagehide', handlePageHide); }
function enableExitPrevention() { window.addEventListener('beforeunload', handleBeforeUnload); window.addEventListener('pagehide', handlePageHide); }

function openModal(content) {
    document.getElementById('modal-body').innerHTML = content;
    document.getElementById('modal-overlay').classList.remove('hidden');
}
window.closeModal = () => document.getElementById('modal-overlay').classList.add('hidden');

// 실행부
document.getElementById("submitBtn").onclick = () => submitQuiz(false);
document.getElementById("omrSubmitBtn").onclick = () => submitQuiz(false);
document.getElementById("quickSubmitBtn").onclick = () => submitQuiz(true);
enableExitPrevention();

// [중요] 일반 initApp() 대신 동적 로드 함수를 호출합니다.
loadDataAndInit();