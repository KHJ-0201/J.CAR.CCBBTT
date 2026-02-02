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

// [기존 변수 설정 구역 아래에 추가]
let isDarkMode = localStorage.getItem("theme") === "dark";

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
    applyTheme();
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

// [1] 바로 제출 (확인 없이 즉시 실행)
window.directSubmit = () => {
    processSubmit();
};

// [2] 일반 제출 (미풀이 체크 및 스크롤 이동 기능 포함)
window.submitQuiz = () => {
    const unAnsweredIdx = userAnswers.findIndex(a => a === -1);
    
    if (unAnsweredIdx !== -1) {
        // 미선택 문항이 있을 때
        if (confirm(`아직 풀지 않은 문제가 있습니다. (${unAnsweredIdx + 1}번 등)\n이대로 제출하시겠습니까? (미풀이는 오답 처리)`)) {
            processSubmit();
        } else {
            // "아니오" 클릭 시 미선택된 첫 번째 문제로 이동
            window.scrollToQ(unAnsweredIdx);
            // 시각적 강조
            const targetQ = document.getElementById(`q-${unAnsweredIdx}`);
            if (targetQ) {
                const originalBg = targetQ.style.backgroundColor;
                targetQ.style.backgroundColor = isDarkMode ? "#4a1d1d" : "#fff0f0";
                setTimeout(() => { targetQ.style.backgroundColor = originalBg; }, 1500);
            }
        }
    } else {
        // 모든 문제를 다 풀었을 때
        if (confirm("모든 문제를 풀었습니다. 제출하시겠습니까?")) {
            processSubmit();
        }
    }
};

// [3] 실제 채점 프로세스 통합 함수
function processSubmit() {
    if (timerInterval) clearInterval(timerInterval);
    let score = 0;
    let wrongQuestions = []; 

    currentQuestions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.answer;
        const qBox = document.getElementById(`q-${i}`);
        
        // [추가] 맞음/틀림 상태에 따른 클래스 부여 및 아이콘 삽입
        if (qBox) {
            // 기존 아이콘이 있다면 제거 (재채점 시 중복 방지)
            const oldIcon = qBox.querySelector('.result-icon');
            if (oldIcon) oldIcon.remove();

            const icon = document.createElement('span');
            icon.className = 'result-icon';
            
            if (isCorrect) {
                score++;
                qBox.classList.add('correct');
                qBox.classList.remove('wrong');
                icon.innerHTML = '✓'; // 맞았을 때 체크
            } else {
                wrongQuestions.push({ ...q, saveDate: new Date().getTime() });
                qBox.classList.add('wrong');
                qBox.classList.remove('correct');
                icon.innerHTML = '✕'; // 틀렸을 때 X
            }
            
            // 문제 제목(q-title) 맨 앞에 아이콘 삽입
            const qTitle = qBox.querySelector('.q-title strong');
            if (qTitle) qTitle.prepend(icon);
        }
        
        // OMR 번호 색상 보정 (기존 로직 유지)
        const omrNum = document.querySelector(`#omr-item-${i} .omr-q-num`);
        if (omrNum) {
            const darkModeActive = document.body.classList.contains("dark-mode");
            if (darkModeActive) {
                omrNum.style.setProperty('background-color', isCorrect ? '#1b4332' : '#4a1d1d', 'important');
                omrNum.style.setProperty('color', isCorrect ? '#75f0a0' : '#ff8585', 'important');
            } else {
                omrNum.style.setProperty('background-color', isCorrect ? '#e6ffed' : '#ffeeee', 'important'); 
                omrNum.style.setProperty('color', isCorrect ? "#28a745" : "#dc3545", 'important');
            }
        }
        
        // 해설 보이기
        const explainBox = document.getElementById(`explain-${i}`);
        if (explainBox) explainBox.style.display = "block";
    });

    // ... (이하 기록 저장 및 상단 스코어 표시 로직은 동일) ...
    saveStudyRecord(lastQuizTitle, score, currentQuestions.length);
    if (wrongQuestions.length > 0) saveWrongNotes(wrongQuestions);

    const percent = Math.round((score / currentQuestions.length) * 100);
    const scoreArea = document.getElementById("header-score-area");
    if (scoreArea) {
        scoreArea.style.display = "flex";
        scoreArea.innerHTML = `
            <span style="background: #ffeb3b; color: #1f3b73; padding: 4px 10px; border-radius: 20px; font-weight: bold; font-size: 0.9rem;">${percent}점</span>
            <button onclick="retryCurrentQuiz()" style="margin-left:8px; background: white; border: 1px solid #1f3b73; color: #1f3b73; padding: 4px 8px; border-radius: 6px; font-size: 0.75rem; font-weight: bold; cursor: pointer;">다시풀기</button>
        `;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderMenu(); 
}

// --- 공통 로직 및 추가 기능 ---

// [공통 로직 구역에 추가]
function applyTheme() {
    const btn = document.getElementById("dark-mode-toggle");
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        if (btn) btn.innerHTML = "☀️ 라이트모드";
    } else {
        document.body.classList.remove("dark-mode");
        if (btn) btn.innerHTML = "🌙 다크모드";
    }
}

window.toggleDarkMode = () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    applyTheme();
};

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
    
    // 1. 모든 문제 리스트 생성
    const quizContent = currentQuestions.map((q, i) => {
        const wrongBadge = (q.wrongCount && q.wrongCount >= 2) 
            ? `<span style="background:#dc3545; color:white; padding:2px 6px; border-radius:4px; font-size:0.7rem; margin-right:5px; vertical-align:middle; display:inline-block;">${q.wrongCount}회 오답</span>` 
            : "";

        return `
            <div class="question" id="q-${i}" style="margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
                <div class="round-name" style="font-size: 0.75rem; color: #888; margin-bottom: 5px;">${q.fromRound || lastQuizTitle}</div>
                <div class="q-title">
                    <strong>${i + 1}. ${wrongBadge}${q.question}</strong>
                </div>
                <div class="options" style="margin-top:15px;">
                    ${q.options.map((opt, j) => `
                        <label id="label-${i}-${j}" style="display:block; margin-bottom:8px; padding:12px; border:1px solid var(--option-border); border-radius:8px; cursor:pointer;">
                            <input type="radio" name="q${i}" value="${j}" onchange="selectAnswer(${i}, ${j})" style="margin-right:8px;"> ${opt}
                        </label>
                    `).join('')}
                </div>
                <div class="explain" id="explain-${i}" style="display:none; margin-top:15px; padding:15px; border-left:5px solid var(--status-border);">
                    <strong>정답: ${q.options[q.answer]}</strong><br>
                    <small>${q.explain || '해설이 없습니다.'}</small>
                </div>
            </div>
        `;
    }).join('');

    // 2. 문제들 바로 뒤에 올 '제출하기' 버튼 영역
    const finalSubmitHtml = `
        <div class="quiz-final-submit-area">
            <button type="button" class="quiz-final-submit-btn" onclick="submitQuiz()">
                📝 시험 제출하고 채점하기
            </button>
        </div>
    `;

    // 3. 전체 내용을 컨테이너에 삽입
    container.innerHTML = quizContent + finalSubmitHtml;
    
    // 4. 나머지 초기화 로직 실행
    userAnswers = Array(currentQuestions.length).fill(-1);
    window.scrollTo(0, 0);
    
    // OMR 카드가 정상적으로 그려지도록 호출
    renderOMR(); 
    updateStatus();
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

    // 현재 다크모드 상태를 다시 한 번 정확히 체크
    const darkModeActive = document.body.classList.contains("dark-mode");

    // 1. 해당 문제의 모든 보기 라벨 초기화
    document.querySelectorAll(`#q-${qIdx} label`).forEach(l => {
        if (darkModeActive) {
            l.style.setProperty('background', '#2a2a2a', 'important'); // 다크모드 기본 보기 배경
            l.style.setProperty('color', '#e0e0e0', 'important');
            l.style.setProperty('border-color', '#444', 'important');
        } else {
            l.style.setProperty('background', '#f9fafc', 'important'); // 라이트모드 기본 보기 배경
            l.style.setProperty('color', '#222', 'important');
            l.style.setProperty('border-color', '#d9e2ef', 'important');
        }
    });

    // 2. 선택된 보기 라벨 색상 강제 변경 (여기가 핵심!)
    const selectedLabel = document.getElementById(`label-${qIdx}-${aIdx}`);
    if (selectedLabel) {
        if (darkModeActive) {
            // [다크모드 선택 시 색상] - 여기서 색상을 수동으로 조절하세요!
            selectedLabel.style.setProperty('background', '#1a3a5f', 'important'); // 진한 파랑
            selectedLabel.style.setProperty('color', '#ffffff', 'important');      // 흰색 글자
            selectedLabel.style.setProperty('border-color', '#3a86ff', 'important'); // 밝은 파랑 테두리
        } else {
            // [라이트모드 선택 시 색상]
            selectedLabel.style.setProperty('background', '#e0f7ff', 'important'); // 연한 하늘색
            selectedLabel.style.setProperty('color', '#000000', 'important');
            selectedLabel.style.setProperty('border-color', '#00bcd4', 'important');
        }
    }

    // 3. OMR 카드 표시 (기존 유지)
    document.querySelectorAll(`#omr-item-${qIdx} .omr-option`).forEach(opt => { 
        opt.style.background = darkModeActive ? '#1e1e1e' : 'white'; 
    });
    const sel = document.getElementById(`omr-opt-${qIdx}-${aIdx}`);
    if (sel) { 
        sel.style.background = darkModeActive ? '#3a5ba0' : '#1f3b73'; 
        sel.style.color = 'white'; 
    }

    // [4] 자동 스크롤 로직
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