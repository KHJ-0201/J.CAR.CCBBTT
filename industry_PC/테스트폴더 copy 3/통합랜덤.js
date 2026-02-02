// 1. 창고(통합문제.js)에서 데이터를 가져옵니다.
import { quizSets } from './통합문제.js';

// 변수 설정
let currentQuestions = []; 
let userAnswers = [];      
let timerInterval; 
let timeLeft = 3600; 
let lastQuizTitle = ""; 

let adminClickCount = 0;
let adminClickTimer = null;

// [유틸리티] 문제와 보기를 무작위로 섞어주는 공통 함수
function shuffleLogic(questions) {
    const newQuestions = JSON.parse(JSON.stringify(questions)); 
    newQuestions.sort(() => Math.random() - 0.5);
    newQuestions.forEach(q => {
        const correctOption = q.options[q.answer]; 
        for (let i = q.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
        }
        q.answer = q.options.indexOf(correctOption);
    });
    return newQuestions;
}

// [실행] 페이지 시작 시 설정
function init() {
    renderMenu();
    
    // 브라우저 뒤로가기 감지 및 이탈 방지
    window.addEventListener('popstate', (event) => {
        if (document.getElementById("quiz-wrapper").style.display === "block") {
            if (confirm("시험을 중단하고 나가시겠습니까? 작성 중인 답안이 사라집니다.")) {
                clearQuizInterface(false); 
            } else {
                history.pushState({ page: 'quiz' }, null, "");
            }
        }
    });

    window.onbeforeunload = function (e) {
        if (document.getElementById("quiz-wrapper").style.display === "block") {
            const msg = "변경사항이 저장되지 않을 수 있습니다.";
            e = e || window.event;
            if (e) e.returnValue = msg;
            return msg;
        }
    };
}

/// [메뉴] 렌더링 - 대시보드 및 상세 목록 복구
function renderMenu() {
    const menuGrid = document.getElementById("menu-grid");
    const activeSets = quizSets.filter(set => set.repairData && set.repairData.length > 0);
    const allWrongNotes = JSON.parse(localStorage.getItem("myWrongNotesV2")) || {};
    const studyHistory = JSON.parse(localStorage.getItem("studyHistory")) || [];
    
    // 오답노트 회차 정렬
    const roundKeys = Object.keys(allWrongNotes)
        .filter(key => allWrongNotes[key].length > 0)
        .sort((a, b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}));

    // 대시보드용 데이터 계산
    const recent5 = studyHistory.slice(0, 5);
    const avgScore5 = studyHistory.length > 0 ? Math.round(recent5.reduce((acc, cur) => acc + cur.percent, 0) / recent5.length) : 0;
    const lastScore = studyHistory.length > 0 ? studyHistory[0].percent : 0;

    let html = "";

    // --- [1. 학습 성취도 대시보드 & 상세 목록 복구] ---
    html += `
        <div style="grid-column: 1 / -1; margin-bottom: 25px; user-select: none;">
            <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                <div style="flex: 1; background: #f0f4f8; padding: 15px; border-radius: 12px; text-align: center; border: 1px solid #d1d9e6;">
                    <div style="font-size: 0.75rem; color: #5c6b89; margin-bottom: 5px; font-weight: bold;">📈 최근 5회 평균</div>
                    <div style="font-size: 1.6rem; font-weight: bold; color: #1f3b73;">${avgScore5}<span style="font-size: 0.9rem; margin-left:2px;">점</span></div>
                </div>
                <div style="flex: 1; background: #fff5f5; padding: 15px; border-radius: 12px; text-align: center; border: 1px solid #f8d7da;">
                    <div style="font-size: 0.75rem; color: #856404; margin-bottom: 5px; font-weight: bold;">
                        🎯 최근 점수 
                        <span onclick="showStatsChart()" style="color: #d9534f; cursor: pointer; text-decoration: underline; margin-left:5px; font-size: 0.7rem;">[성적통계]</span>
                    </div>
                    <div style="font-size: 1.6rem; font-weight: bold; color: #d9534f;">${lastScore}<span style="font-size: 0.9rem; margin-left:2px;">점</span></div>
                </div>
            </div>

            <div id="history-section" style="background: white; border: 1px solid #eee; border-radius: 12px; padding: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.02);">
                <div onclick="toggleHistoryList()" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center; font-size:0.85rem; padding:8px 10px;">
                    <span style="font-weight:bold; color:#666;">📝 최근 학습 기록 (최대 30개)</span>
                    <span id="history-arrow" style="color:#aaa;">▼</span>
                </div>
                <div id="history-list" style="display:none; max-height: 250px; overflow-y: auto; margin-top: 10px; border-top: 1px solid #f5f5f5;">
                    ${studyHistory.length > 0 ? studyHistory.map(h => `
                        <div style="display:flex; justify-content:space-between; align-items:center; padding: 10px; border-bottom: 1px solid #f9f9f9; font-size: 0.8rem;">
                            <div style="display:flex; flex-direction:column;">
                                <span style="color:#333; font-weight:500;">${h.roundName}</span>
                                <span style="color:#999; font-size:0.7rem;">${h.date} ${h.time || ''}</span>
                            </div>
                            <span style="font-weight:bold; font-size:0.9rem; color:${h.percent >= 60 ? '#28a745' : '#dc3545'};">${h.percent}점</span>
                        </div>
                    `).join('') : '<div style="text-align:center; padding:30px; color:#ccc; font-size:0.8rem;">아직 기록이 없습니다.</div>'}
                </div>
            </div>
        </div>
    `;

    // --- [2. 오답 복습하기 영역] ---
    html += `
        <div style="grid-column: 1 / -1; margin-bottom: 20px; border: 1px solid #eec; border-radius: 12px; background: #fffaf0; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05); user-select: none;">
            <div onclick="toggleWrongNoteList()" style="padding: 15px 20px; background: #fff5f5; cursor: pointer; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #fce4e4;">
                <strong style="color: #d9534f; font-size: 1rem;">📕 오답 복습하기 (${roundKeys.length}개 회차)</strong>
                <span id="wrong-arrow" style="transition: transform 0.3s;">▼</span>
            </div>
            <div id="wrong-note-list" style="display: none; padding: 15px; background: #fff;">
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px;">
${roundKeys.length > 0 ? roundKeys.map(roundName => {
    const roundWrongs = allWrongNotes[roundName];
    // 해당 회차에서 가장 많이 틀린 문제의 횟수나, 전체 틀린 문항 합계 등 취향껏 표시 가능
    // 여기서는 "저장된 문항 수"를 유지하되, 개별 문제 렌더링 시 횟수를 보여주도록 로직 준비
    const count = roundWrongs.length;
    return `
        <div style="display: flex; align-items: stretch; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
            <button onclick="startWrongNote('${roundName}')" style="flex: 1; background: white; border: none; padding: 12px; text-align: left; cursor: pointer;">
                <span style="font-weight: bold; color: #333; font-size: 0.9rem;">${roundName}</span><br>
                <span style="font-size: 0.75rem; color: #d9534f;">${count}문제 저장됨</span>
            </button>
            <button onclick="clearRound('${roundName}')" style="background: #fdf2f2; border: none; border-left: 1px solid #eee; width: 45px; color: #d9534f; cursor: pointer;">✕</button>
        </div>
    `;
                    }).join('') : '<div style="grid-column: 1 / -1; text-align:center; padding: 10px; color: #aaa; font-size: 0.8rem;">오답이 없습니다.</div>'}
                </div>
            </div>
        </div>
    `;

    // --- [3. 통합 랜덤 및 정규 회차 영역] ---
    html += `
        <div style="grid-column: 1 / -1; margin-bottom: 25px;">
            <button onclick="startIntegratedRandom()" style="width: 100%; height: 56px; background: linear-gradient(135deg, #1f3b73, #3a63ad); color: white; border: none; border-radius: 12px; font-size: 1rem; font-weight: bold; cursor: pointer; box-shadow: 0 2px 8px rgba(31, 59, 115, 0.2); user-select: none;">
                🎲 모든 회차 통합 랜덤 (80문제)
            </button>
        </div>
        <div style="grid-column: 1 / -1; margin-bottom: 10px; font-weight: bold; color: #666; font-size: 0.9rem; user-select: none;">📖 정규 회차</div>
    `;

    activeSets.forEach(set => {
        html += `
            <button class="set-select-btn" onclick="startQuiz('${set.id}')" style="background: white; border: 1px solid #eee; color: #333; border-radius: 10px; padding: 15px; user-select: none;">
                <strong style="font-size: 1rem;">${set.roundName}</strong><br>
                <span style="font-size:0.8rem; color: #888;">(${set.repairData.length}문항)</span>
            </button>
        `;
    });

    menuGrid.innerHTML = html;
}

// 상세 목록 토글 함수 복구
window.toggleHistoryList = () => {
    const list = document.getElementById("history-list");
    const arrow = document.getElementById("history-arrow");
    if (list.style.display === "none") {
        list.style.display = "block";
        arrow.textContent = "▲";
        arrow.style.color = "#1f3b73";
    } else {
        list.style.display = "none";
        arrow.textContent = "▼";
        arrow.style.color = "#aaa";
    }
};

// [기능] 퀴즈 인터페이스 정리
function clearQuizInterface(pushBack = true) {
    document.getElementById("quiz-menu").style.display = "block";
    document.getElementById("quiz-wrapper").style.display = "none";
    document.getElementById("omr-card").style.display = "none";
    if (timerInterval) clearInterval(timerInterval);
    document.getElementById("main-title").innerHTML = "문제 은행";
    if (pushBack && history.state && history.state.page === 'quiz') {
        history.back();
    }
    renderMenu();
    window.scrollTo(0, 0);
}

window.retryCurrentQuiz = () => {
    if (!confirm("현재 회차를 처음부터 다시 푸시겠습니까?")) return;
    currentQuestions = shuffleLogic(currentQuestions);
    startQuizProcess(lastQuizTitle);
};

// [수정] 퀴즈 시작 프로세스 (OMR 표시 보장 및 드래그 방지 스타일 추가)
function startQuizProcess(title) {
    lastQuizTitle = title;
    if (!(history.state && history.state.page === 'quiz')) {
        history.pushState({ page: 'quiz' }, null, "");
    }
    document.getElementById("quiz-menu").style.display = "none";
    document.getElementById("quiz-wrapper").style.display = "block";
    document.getElementById("omr-card").style.display = "block"; 
    
    document.getElementById("main-title").innerHTML = `
        <div style="display:flex; align-items:center; width:100%; justify-content: space-between; user-select: none;">
            <div style="display:flex; align-items:center;">
                <span style="font-size: 1rem; font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px;">${title}</span>
            </div>
            <div id="header-score-area" style="display:none; align-items:center; gap:8px;"></div>
        </div>
    `;
    renderQuiz();
    startTimer();
}

window.submitQuiz = () => {
    clearInterval(timerInterval);
    if (!confirm("제출하시겠습니까?")) return startTimer();
    
    let score = 0;
    let wrongQuestions = []; 
    currentQuestions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.answer;
        if (isCorrect) score++;
        else wrongQuestions.push({ ...q, saveDate: new Date().getTime() });
        
        document.getElementById(`q-${i}`).style.borderLeft = isCorrect ? "5px solid green" : "5px solid red";
        const omrNum = document.querySelector(`#omr-item-${i} .omr-q-num`);
        if (omrNum) {
            omrNum.style.backgroundColor = isCorrect ? "#e6ffed" : "#ffeeee"; 
            omrNum.style.color = isCorrect ? "green" : "red";
        }
        document.getElementById(`explain-${i}`).style.display = "block";
    });

    saveStudyRecord(lastQuizTitle, score, currentQuestions.length);
    if (wrongQuestions.length > 0) saveWrongNotes(wrongQuestions);

    const percent = Math.round((score / currentQuestions.length) * 100);

    const scoreArea = document.getElementById("header-score-area");
    scoreArea.style.display = "flex";
    scoreArea.innerHTML = `
        <span style="background: #ffeb3b; color: #1f3b73; padding: 4px 10px; border-radius: 20px; font-weight: bold; font-size: 0.9rem; user-select: none;">${percent}점</span>
        <button onclick="retryCurrentQuiz()" style="background: white; border: 1px solid #1f3b73; color: #1f3b73; padding: 4px 8px; border-radius: 6px; font-size: 0.75rem; font-weight: bold; cursor: pointer; user-select: none;">다시풀기</button>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderMenu(); 
};

// --- 공통 로직 및 추가 기능 ---

// [성적 통계] 그래프 그리기 및 모달 열기 (수정본)
window.showStatsChart = () => {
    const history = JSON.parse(localStorage.getItem("studyHistory")) || [];
    const chartContainer = document.getElementById("chart-container");
    const modal = document.getElementById("stats-modal");
    
    if (history.length === 0) return alert("통계를 표시할 기록이 없습니다.");

    const recentData = history.slice(0, 10).reverse(); 
    
    chartContainer.innerHTML = recentData.map(h => {
        const score = h.percent;
        let barColor = "#3a63ad"; 
        if (score >= 80) barColor = "#28a745"; 
        if (score < 60) barColor = "#dc3545";  

        return `
            <div style="flex:1; display:flex; flex-direction:column; align-items:center; height: 100%; justify-content: flex-end; gap:5px; min-width: 0;">
                <span style="font-size:0.65rem; font-weight:bold; color:${barColor}; white-space:nowrap;">${score}점</span>
                <div style="width:70%; height:${score}%; background:${barColor}; border-radius:3px 3px 0 0; min-height:2px; transition: height 0.6s ease-out;"></div>
                <span style="font-size:0.55rem; color:#888; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width:100%; text-align:center;" title="${h.roundName}">
                    ${h.roundName.replace("심화 ", "")}
                </span>
                <span style="font-size:0.5rem; color:#bbb; margin-top:-3px;">${h.date}</span>
            </div>
        `;
    }).join('');

    // 히든 버튼 위치: 모달 내 제목(최근 성적 추이)을 5번 누르면 작동하도록 연결
    const titleElement = modal.querySelector("strong");
    if (titleElement) {
        titleElement.onclick = window.handleAdminClick;
        titleElement.style.cursor = "default";
    }

    const descText = modal.querySelector("div[style*='text-align:center']");
    if (descText) descText.textContent = "오른쪽이 가장 최근 기록입니다.";

    modal.style.display = "flex";
};

// 히든 초기화 기능 (최근 5회 평균 박스 클릭 시 작동)
window.handleAdminClick = (event) => {
    event.stopPropagation(); 
    adminClickCount++;
    if (adminClickTimer) clearTimeout(adminClickTimer);
    adminClickTimer = setTimeout(() => { adminClickCount = 0; }, 2000);
    
    if (adminClickCount === 5) {
        if (confirm("모든 학습 기록(성적 통계)을 초기화하시겠습니까?")) { 
            localStorage.removeItem("studyHistory"); 
            alert("기록이 초기화되었습니다.");
            location.reload(); // 깔끔하게 전체 새로고침
        }
        adminClickCount = 0;
    }
};

window.closeStatsChart = () => {
    document.getElementById("stats-modal").style.display = "none";
};

// 관리자 클릭 및 성적 저장
window.handleAdminClick = (event) => {
    event.stopPropagation(); adminClickCount++;
    if (adminClickTimer) clearTimeout(adminClickTimer);
    adminClickTimer = setTimeout(() => { adminClickCount = 0; }, 2000);
    if (adminClickCount === 5) {
        if (confirm("기록을 초기화할까요?")) { localStorage.removeItem("studyHistory"); renderMenu(); }
        adminClickCount = 0;
    }
};

window.saveStudyRecord = (roundName, score, total) => {
    const history = JSON.parse(localStorage.getItem("studyHistory")) || [];
    const now = new Date();
    history.unshift({
        roundName,
        percent: Math.round((score / total) * 100),
        date: `${now.getMonth() + 1}/${now.getDate()}`,
        time: `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`,
        id: Date.now()
    });
    localStorage.setItem("studyHistory", JSON.stringify(history.slice(0, 30)));
};

// 퀴즈 시작 및 랜덤 로직
window.startQuiz = (id) => {
    const set = quizSets.find(s => s.id === id);
    if (!set) return;
    let data = JSON.parse(JSON.stringify(set.repairData));
    data.forEach(q => q.fromRound = set.roundName); 
    currentQuestions = shuffleLogic(data); 
    startQuizProcess(set.roundName);
};

window.startIntegratedRandom = () => {
    const all = quizSets.flatMap(s => (s.repairData || []).map(q => ({ ...q, fromRound: s.roundName })));
    if (all.length === 0) return alert("데이터가 없습니다.");
    currentQuestions = shuffleLogic(all).slice(0, 80); 
    startQuizProcess("🎲 통합 랜덤 (80문항)");
};

window.startWrongNote = (name) => {
    const all = JSON.parse(localStorage.getItem("myWrongNotesV2")) || {};
    const data = all[name];
    if (!data || data.length === 0) return alert("오답이 없습니다.");
    currentQuestions = shuffleLogic(data);
    startQuizProcess(`📕 오답 복습: ${name}`);
};

function renderQuiz() {
    const container = document.getElementById("quiz");
    container.innerHTML = currentQuestions.map((q, i) => {
        // [추가] 2회 이상 틀린 문제일 경우 배지 생성
        const wrongBadge = (q.wrongCount && q.wrongCount >= 2) 
            ? `<span style="background:#dc3545; color:white; padding:2px 6px; border-radius:4px; font-size:0.7rem; margin-right:5px; vertical-align:middle; display:inline-block;">${q.wrongCount}회 오답</span>` 
            : "";

        return `
            <div class="question" id="q-${i}" style="margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
                <div class="round-name" style="font-size: 0.75rem; color: #888; margin-bottom: 5px; user-select: text;">${q.fromRound || lastQuizTitle}</div>
                <div class="q-title" style="user-select: text;">
                    <strong>${i + 1}. ${wrongBadge}${q.question}</strong>
                </div>
                <div class="options" style="margin-top:15px; user-select: text;">
                    ${q.options.map((opt, j) => `
                        <label id="label-${i}-${j}" style="display:block; margin-bottom:8px; padding:12px; border:1px solid #ddd; border-radius:8px; cursor:pointer; background: #fff;">
                            <input type="radio" name="q${i}" value="${j}" onchange="selectAnswer(${i}, ${j})" style="margin-right:8px;"> ${opt}
                        </label>
                    `).join('')}
                </div>
                <div class="explain" id="explain-${i}" style="display:none; margin-top:15px; padding:15px; background:#f0f8ff; border-left:5px solid #1f3b73; user-select: text;">
                    <strong>정답: ${q.options[q.answer]}</strong><br>
                    <small>${q.explain || '해설이 없습니다.'}</small>
                </div>
            </div>
        `;
    }).join('');
    userAnswers = Array(currentQuestions.length).fill(-1);
    window.scrollTo(0, 0);
    renderOMR(); updateStatus();
}

function saveWrongNotes(newWrongs) {
    const all = JSON.parse(localStorage.getItem("myWrongNotesV2")) || {};
    newWrongs.forEach(newQ => {
        const round = newQ.fromRound || "미분류";
        if (!all[round]) all[round] = [];
        const existing = all[round].find(q => q.question === newQ.question);
        if (existing) existing.wrongCount = (existing.wrongCount || 1) + 1;
        else { newQ.wrongCount = 1; all[round].push(newQ); }
    });
    localStorage.setItem("myWrongNotesV2", JSON.stringify(all));
}

window.clearRound = (name) => {
    if (!confirm(`${name} 삭제?`)) return;
    const all = JSON.parse(localStorage.getItem("myWrongNotesV2")) || {};
    delete all[name];
    localStorage.setItem("myWrongNotesV2", JSON.stringify(all));
    renderMenu();
};

window.clearAllWrong = () => {
    if (!confirm("초기화?")) return;
    localStorage.removeItem("myWrongNotesV2");
    renderMenu();
};

function updateStatus() {
    const done = userAnswers.filter(a => a !== -1).length;
    const remaining = document.getElementById("remaining");
    if(remaining) remaining.textContent = `진행도: ${done} / ${currentQuestions.length}`;
}

window.selectAnswer = (qIdx, aIdx) => {
    userAnswers[qIdx] = aIdx;
    updateStatus();
    document.querySelectorAll(`#q-${qIdx} label`).forEach(l => l.style.background = '#fff');
    document.getElementById(`label-${qIdx}-${aIdx}`).style.background = '#e0f7ff';
    document.querySelectorAll(`#omr-item-${qIdx} .omr-option`).forEach(opt => { opt.style.background = 'white'; opt.style.color = 'black'; });
    const sel = document.getElementById(`omr-opt-${qIdx}-${aIdx}`);
    if (sel) { sel.style.background = '#1f3b73'; sel.style.color = 'white'; }
    if (qIdx < currentQuestions.length - 1) {
        setTimeout(() => {
            const next = document.getElementById(`q-${qIdx + 1}`);
            if (next) next.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
    }
};

function renderOMR() {
    const omrList = document.getElementById("omr-list");
    omrList.innerHTML = currentQuestions.map((_, i) => `
        <div class="omr-item" id="omr-item-${i}">
            <span class="omr-q-num" onclick="scrollToQ(${i})">${i + 1}</span>
            <div class="omr-options-wrapper">${[0, 1, 2, 3].map(v => `<span class="omr-option" id="omr-opt-${i}-${v}" onclick="selectAnswer(${i}, ${v}); syncRadio(${i}, ${v})"></span>`).join('')}</div>
        </div>
    `).join('');
}

window.scrollToQ = (i) => document.getElementById(`q-${i}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
window.syncRadio = (q, v) => { const r = document.querySelector(`input[name="q${q}"][value="${v}"]`); if (r) r.checked = true; };
window.fillAll = (val) => {
    currentQuestions.forEach((_, i) => {
        window.selectAnswer(i, val);
        const r = document.querySelector(`input[name="q${i}"][value="${val}"]`);
        if (r) r.checked = true;
    });
    window.scrollToQ(0);
};

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("submitBtn");
    if (btn) btn.onclick = window.submitQuiz;
    
    // 모달 바깥 클릭 시 닫기
    window.addEventListener('click', (e) => {
        const modal = document.getElementById("stats-modal");
        if (e.target === modal) modal.style.display = "none";
    });
});

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        const timer = document.getElementById("timer");
        if (timer) timer.textContent = `남은 시간: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`;
        if (timeLeft <= 0) { clearInterval(timerInterval); window.submitQuiz(); }
    }, 1000);
}

window.toggleWrongNoteList = () => {
    const list = document.getElementById("wrong-note-list");
    const arrow = document.getElementById("wrong-arrow");
    if (list.style.display === "none") { list.style.display = "block"; arrow.style.transform = "rotate(180deg)"; }
    else { list.style.display = "none"; arrow.style.transform = "rotate(0deg)"; }
};

init();