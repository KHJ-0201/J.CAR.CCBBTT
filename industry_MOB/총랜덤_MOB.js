import { industry010301, industry010302, industry010303, industry010304, industry010305 } from './자동차 전기전자장치 정비/0103자동차 냉난방장치정비/industry_냉난방문제.js';
import { industry010401, industry010402, industry010403, industry010404, industry010405 } from './자동차 전기전자장치 정비/0104자동차 전기전자회로분석/industry_회로분석문제.js';
import { industry010501, industry010502, industry010503, industry010504, industry010505 } from './자동차 전기전자장치 정비/0105자동차 편의장치 정비/industry_편의장치문제.js';
import { industry010701, industry010702, industry010703, industry010704, industry010705 } from './자동차 전기전자장치 정비/0107자동차 주행안전장치정비/industry_주행안전문제.js';
import { industry010801, industry010802, industry010803, industry010804, industry010805 } from './자동차 전기전자장치 정비/0108자동차 네트워크통신장비정비/industry_네트워크문제.js';
import { industry010901, industry010902, industry010903, industry010904, industry010905 } from './자동차 전기전자장치 정비/0109하이브리드자동차 특화시스템정비/industry_하이브리드문제.js';
import { industry020101, industry020102, industry020103, industry020104, industry020105 } from './자동차 엔진 정비/0201엔진본체정비/industry_엔진본체문제.js';
import { industry020201, industry020202, industry020203, industry020204, industry020205 } from './자동차 엔진 정비/0202냉각장치정비/industry_냉각장치문제.js';
import { industry020301, industry020302, industry020303, industry020304, industry020305 } from './자동차 엔진 정비/0203윤활장치정비/industry_윤활장치문제.js';
import { industry020401, industry020402, industry020403, industry020404, industry020405 } from './자동차 엔진 정비/0204연료장치정비/industry_연료장치문제.js';
import { industry020501, industry020502, industry020503, industry020504, industry020505 } from './자동차 엔진 정비/0205엔진점화장치정비/industry_엔진점화장치문제.js';
import { industry020601, industry020602, industry020603, industry020604, industry020605 } from './자동차 엔진 정비/0206흡배기제어장치정비/industry_흡배기제어장치문제.js';
import { industry020701, industry020702, industry020703, industry020704, industry020705 } from './자동차 엔진 정비/0207과급장치정비/industry_과급장치문제.js';
import { industry020801, industry020802, industry020803, industry020804, industry020805 } from './자동차 엔진 정비/0208가솔린전자제어장치정비/industry_가솔린전자문제.js';
import { industry021001, industry021002, industry021003, industry021004, industry021005 } from './자동차 엔진 정비/0210디젤전자제어장치정비/industry_디젤전자문제.js';
import { industry021201, industry021202, industry021203, industry021204, industry021205 } from './자동차 엔진 정비/0212배출가스제어장치정비/industry_배출가스문제.js';
import { industry030301, industry030302, industry030303, industry030304, industry030305 } from './자동차 섀시 정비/0303자동변속기정비/industry_자동변속문제.js';
import { industry030801, industry030802, industry030803, industry030804, industry030805 } from './자동차 섀시 정비/0308유압식현가장치정비/industry_유압식현가문제.js';
import { industry030901, industry030902, industry030903, industry030904, industry030905 } from './자동차 섀시 정비/0309전자제어현가장치정비/industry_전자제어현가문제.js';
import { industry032401, industry032402, industry032403, industry032404, industry032405 } from './자동차 섀시 정비/0324휠타이어얼라인먼트정비/industry_얼라인먼트문제.js';
import { industry032601, industry032602, industry032603, industry032604, industry032605 } from './자동차 섀시 정비/0326조향장치정비/industry_조향장치문제.js';
import { industry032701, industry032702, industry032703, industry032704, industry032705 } from './자동차 섀시 정비/0327제동장치정비/industry_제동장치문제.js';
import { industry032801, industry032802, industry032803, industry032804, industry032805 } from './자동차 섀시 정비/0328주행안전보조시스템정비/industry_주행안전문제.js';


// 1. 문제들을 주제별(과목별)로 그룹화합니다.
const TOPIC_GROUPS = {
    '0103': [industry010301, industry010302, industry010303, industry010304, industry010305], // 전기
    '0104': [industry010401, industry010402, industry010403, industry010404, industry010405], 
    '0105': [industry010501, industry010502, industry010503, industry010504, industry010505], 
    '0107': [industry010701, industry010702, industry010703, industry010704, industry010705], 
    '0108': [industry010801, industry010802, industry010803, industry010804, industry010805], 
    '0109': [industry010901, industry010902, industry010903, industry010904, industry010905],
    '0201': [industry020101, industry020102, industry020103, industry020104, industry020105], // 엔진
    '0202': [industry020201, industry020202, industry020203, industry020204, industry020205], 
    '0203': [industry020301, industry020302, industry020303, industry020304, industry020305], 
    '0204': [industry020401, industry020402, industry020403, industry020404, industry020405], 
    '0205': [industry020501, industry020502, industry020503, industry020504, industry020505], 
    '0206': [industry020601, industry020602, industry020603, industry020604, industry020605], 
    '0207': [industry020701, industry020702, industry020703, industry020704, industry020705], 
    '0208': [industry020801, industry020802, industry020803, industry020804, industry020805], 
    '0210': [industry021001, industry021002, industry021003, industry021004, industry021005], 
    '0212': [industry021201, industry021202, industry021203, industry021204, industry021205],
    '0303': [industry030301, industry030302, industry030303, industry030304, industry030305], // 섀시
    '0308': [industry030801, industry030802, industry030803, industry030804, industry030805], 
    '0309': [industry030901, industry030902, industry030903, industry030904, industry030905], 
    '0324': [industry032401, industry032402, industry032403, industry032404, industry032405], 
    '0326': [industry032601, industry032602, industry032603, industry032604, industry032605], 
    '0327': [industry032701, industry032702, industry032703, industry032704, industry032705], 
    '0328': [industry032801, industry032802, industry032803, industry032804, industry032805]      

};

// 과목 코드명을 실제 과목 이름으로 변환해주는 데이터
const TOPIC_NAMES = {
    '0103': '자동차 냉·난방장치 정비',
    '0104': '자동차 전기·전자회로분석',
    '0105': '자동차 편의장치 정비',
    '0107': '자동차 주행안전장치 정비',
    '0108': '자동차 네트워크통신장비 정비',
    '0109': '하이브리드자동차 특화시스템정비',
    '0201': '엔진본체 정비',
    '0202': '냉각장치 정비',
    '0203': '윤활장치 정비',
    '0204': '연료장치 정비',
    '0205': '엔진점화장치 정비',
    '0206': '흡·배기제어장치 정비',
    '0207': '과급장치 정비',
    '0208': '가솔린 전자제어장치 정비',
    '0210': '디젤 전자제어장치 정비',
    '0212': '배출가스 제어장치 정비',
    '0303': '자동변속기 정비',
    '0308': '유압식 현가장치 정비',
    '0309': '전자제어 현가장치 정비',
    '0324': '휠·타이어·얼라인먼트 정비',
    '0326': '조향장치 정비',
    '0327': '제동장치 정비',
    '0328': '주행안전 보조시스템 정비'
};

function getTopicName(code) {
    return TOPIC_NAMES[code] || '미분류';
}


// 문제/보기 랜덤 섞기
function shuffleArray(array) {
 return array.sort(() => Math.random() - 0.5);
}

// 중복 제거 및 랜덤 추출
function selectUniqueRandomQuestions(sourceArray, count) {
    const shuffled = shuffleArray([...sourceArray]);
    const selected = [];
    // Set을 사용하여 문제 텍스트의 중복을 확인
    const questionSet = new Set(); 
    
    for (const q of shuffled) {
        if (!questionSet.has(q.question)) {
            questionSet.add(q.question);
            selected.push(q);
        }
        if (selected.length >= count) {
            break;
        }
    }
    return selected;
}

// 2. 과목별로 균등하게 문제 수를 추출하는 핵심 함수
function getBalancedQuestions(totalCount) {
    const topicKeys = Object.keys(TOPIC_GROUPS); 
    const topicCount = topicKeys.length; 
    
    // 과목당 균등하게 할당할 문제 수 계산
    const basePerTopic = Math.floor(totalCount / topicCount);
    let remainder = totalCount % topicCount;
    
    let balancedQuestions = [];
    
    for (const key of topicKeys) {
        const countToSelect = basePerTopic + (remainder > 0 ? 1 : 0);
        if (remainder > 0) remainder--;

        const allTopicQuestions = TOPIC_GROUPS[key].flat();
        
        const selectedForTopic = selectUniqueRandomQuestions(allTopicQuestions, countToSelect);
        
        // 추출된 문제에 topicCode 속성 추가
        const questionsWithTopic = selectedForTopic.map(q => ({
            ...q,
            topicCode: key 
        }));
        
        balancedQuestions.push(...questionsWithTopic);
    }

    return balancedQuestions;
}

/* ===========================
    ✨ [수정/통합] 문제 순서 및 보기 순서를 섞는 통합 함수
=========================== */
function applyShuffling(questionsArray) {
    // 1. 문제 순서 랜덤화
    const shuffledQuestions = shuffleArray(questionsArray); 

    // 2. 보기 순서 랜덤화 및 정답 인덱스 업데이트
    shuffledQuestions.forEach((q) => {
        // 보기 배열 텍스트를 사용하여 새로운 보기 배열 생성
        let combined = q.options.map((opt) => ({ opt }));
        combined = shuffleArray(combined);

        // q.options를 섞인 새 배열로 업데이트
        q.options = combined.map((c) => c.opt);

        // 새로운 q.answer 인덱스 찾기: 저장해 둔 정답 텍스트가 새 배열에서 몇 번째에 있는지 찾습니다.
        const newAnswerIndex = q.options.findIndex(opt => opt === q.originalCorrectOptionText);
        
        // 새로운 정답 인덱스 할당
        if (newAnswerIndex !== -1) {
            q.answer = newAnswerIndex;
        } else {
            console.error("정답 텍스트를 새로운 보기 배열에서 찾을 수 없습니다:", q.originalCorrectOptionText);
            q.answer = -1; 
        }
    });

    return shuffledQuestions; // 문제 순서가 섞인 배열 반환
}

// 문제 순서 랜덤 + 80문제 제한 (균등 추출 함수 사용)
let questions = getBalancedQuestions(80);

// ✨ 1차 셔플 이전에 정답 텍스트를 저장해둡니다. (재풀이를 위함)
questions.forEach(q => {
    // q.originalCorrectOptionText가 없으면, 초기 정답 텍스트를 저장
    if (!q.originalCorrectOptionText) {
        // q.answer는 초기 정답 옵션의 인덱스라고 가정
        q.originalCorrectOptionText = q.options[q.answer]; 
    }
});

// ✨ 셔플 로직을 함수로 분리하여 호출
questions = applyShuffling(questions);

// 답안 저장
let answers = Array(questions.length).fill(-1);


// 문제로 스크롤 이동 함수 
function scrollToQuestion(index) {
    const questionDivs = document.getElementsByClassName("question");
    if (questionDivs[index]) {
        // 문제 DIV의 시작 부분이 뷰포트 상단에 오도록 스크롤
        questionDivs[index].scrollIntoView({ behavior: 'smooth', block: 'center' }); 
    }
}


// 남은 문제 표시 
function updateRemaining() {
    const remainingDiv = document.getElementById("remaining");
    let answered = answers.filter((a) => a >= 0).length;
    remainingDiv.textContent = `남은 문제: ${questions.length - answered}/${questions.length}`;
}


// 문제 렌더링
function renderQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    document.getElementById("roundTitle").textContent = "전기전자+엔진+섀시 전체랜덤"; // 상단 제목 설정

    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.className = "question";
        
        // 과목 코드(이름)를 표시
        const topicName = getTopicName(q.topicCode);

        // ✨ 수정: 엔진통합.js와 동일하게 q-header 제거하고 <p class="module-title"> 사용
        div.innerHTML = `
            <span id="q-status-${i}" class="q-status"></span>
            <strong class="q-title">${i + 1}. ${q.question}</strong>
            <p class="module-title">[${topicName}]</p>         `;

        // imagePath 속성이 있는지 확인
        if (q.imagePath) {
            div.innerHTML += `<img 
                src="${q.imagePath}" 
                alt="문제 그림" 
                style="width: 500px; height: auto; margin: 15px 0;"
            >`;
        }

        const optsDiv = document.createElement("div");
        optsDiv.className = "options";
        q.options.forEach((opt, j) => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="q${i}" value="${j}"> ${opt}`;
            
            const radioInput = label.querySelector("input");
            
            // 라디오 버튼 change 이벤트 리스너
            radioInput.addEventListener("change", () => {
            answers[i] = j;
            updateRemaining(); // OMR 상태 업데이트 포함

            const allLabels = optsDiv.querySelectorAll('label');
            allLabels.forEach(l => l.classList.remove('selected'));

            label.classList.add('selected');

            // 보기 클릭 시 다음 문제로 이동하는 로직 
            if (i < questions.length - 1) {
                scrollToQuestion(i + 1); 
            }
            });
            
            optsDiv.appendChild(label);
        });
        div.appendChild(optsDiv);

        const explainDiv = document.createElement("div");
        explainDiv.className = "explain";
        div.appendChild(explainDiv);

        quizDiv.appendChild(div);
    });

    updateRemaining();
}

// -----------------------------
// 제출 및 채점
function submitQuiz() {
    // 1. 안 푼 문제 인덱스 확인
    const firstUnansweredIndex = answers.findIndex((a) => a < 0);
    const unansweredCount = answers.filter((a) => a < 0).length;

    // 2. 안 푼 문제가 있을 경우 확인
    if (unansweredCount > 0 && totalSeconds > 0) {
        const confirmSubmit = confirm(
            `아직 ${unansweredCount}개의 문제를 풀지 않았습니다.\n계속 제출하시겠습니까? (취소 시 문제풀이 계속 및 첫 안 푼 문제로 이동)`
        );
        
        if (!confirmSubmit) {
            if (firstUnansweredIndex !== -1) {
                // 문제로 부드럽게 스크롤 이동
                scrollToQuestion(firstUnansweredIndex);
            }
            return;
        }
    }

    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "";

    let score = 0;
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
    
    questions.forEach((q, i) => {
    const questionDiv = document.getElementsByClassName("question")[i];
    const explainDiv = questionDiv.querySelector(".explain");
    const labels = questionDiv.querySelectorAll('label'); 
    const statusSpan = document.getElementById(`q-status-${i}`); 
    
    // 이전 상태 클래스 초기화
    statusSpan.classList.remove('status-correct', 'status-wrong', 'status-unanswered');

    // 💡 문제 상태에 따라 아이콘/색상/클래스 결정
    if (answers[i] == q.answer) {
        // 정답: ⭕ 
        score++;
        labels[q.answer].style.backgroundColor = "#b6fcb6";
        statusSpan.innerHTML = '⭕';
    } else if (answers[i] >= 0) {
        // 오답: ❌ 
        labels[q.answer].style.backgroundColor = "#b6fcb6"; // 정답은 초록색
        labels[answers[i]].style.backgroundColor = "#fcb6b6"; // 내가 고른 오답은 빨간색
        statusSpan.innerHTML = '❌';
        statusSpan.style.color = '#dc3545'; 
        statusSpan.classList.add('status-wrong');
    } else {
        // 미응답: 정답 옵션 하이라이트만 유지
        labels[q.answer].style.backgroundColor = "#b6fcb6"; // 정답은 초록색
        statusSpan.innerHTML = ''; 
        statusSpan.style.color = ''; 
    }

    // 채점 완료 후 기타 스타일 제거 및 해설 표시
    labels.forEach(l => l.classList.remove('selected'));

    explainDiv.innerHTML = `
        <div style="color: #1f3b73; font-weight: 700;">정답: ${q.originalCorrectOptionText}</div>
        <div style="margin-top: 5px;">${q.explain.trim()}</div> 
    `;

    questionDiv.querySelectorAll('input[type="radio"]').forEach((r) => (r.disabled = true));
    });
    
    // 상단 배너에 점수 표시 (Status Bar에 '다시 풀기' 버튼 추가)
    const status = document.getElementById("status");
    status.classList.add("center");
    
    // '다시 풀기' 버튼을 생성하고 이벤트를 연결합니다.
    const retryButton = document.createElement("button");
    retryButton.textContent = "다시 풀기";
    retryButton.id = "retryBtn";
    // CSS에서 정의된 스타일을 사용하도록 인라인 스타일 제거
    retryButton.addEventListener("click", resetQuiz);
    
    const scoreDisplaySpan = document.createElement('span');
    scoreDisplaySpan.textContent = `전기전자+엔진+섀시 전체랜덤 총점: ${score}/${questions.length}`;
    scoreDisplaySpan.id = 'scoreDisplay';
    // CSS에서 정의된 스타일을 사용하도록 인라인 스타일 제거
    
    // ✨ 수정: 채점 완료 후 h1 태그(제목)를 숨긴 채 유지하여 resetQuiz 시 쉽게 복구
    const mainTitleHtml = `<h1 id="mainTitle" style="display:none;">전기전자+엔진+섀시 전체랜덤</h1>`;
    status.innerHTML = mainTitleHtml; 
    status.appendChild(scoreDisplaySpan);
    status.appendChild(retryButton);
    
    // 제출 버튼 제거 (두 개 모두)
    document.getElementById("submitBtn").style.display = "none";
    
    const floatingSubmitBtn = document.getElementById("floatingSubmitBtn");
    if (floatingSubmitBtn) {
        floatingSubmitBtn.classList.add('hidden'); // 플로팅 제출 버튼 숨기기
    }
    
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>전기전자+엔진+섀시 전체랜덤 총점: ${score}/${questions.length}</h2>`;
}

/* ===========================
    ✨ [수정/통합] 다시 풀기 로직 (순서/보기 셔플 포함)
=========================== */
function resetQuiz() {
    if (!confirm("현재 풀었던 80문제를 다시 푸시겠습니까? (문제 순서 및 보기 순서도 다시 섞입니다.)")) {
        return;
    }

    // 1. 문제 순서 및 보기 순서 재셔플
    questions = applyShuffling(questions); 
    
    // 2. 답안 초기화
    answers = Array(questions.length).fill(-1);
    
    // 3. 타이머 재시작 (1시간 40분 설정 - 초기 스크린샷 시간 참조)
    clearInterval(timerInterval);
    totalSeconds = 100 * 60; // 1시간 40분
    timerInterval = setInterval(updateTimer, 1000);
    
    // 4. UI 초기화 및 재렌더링
    
    // Status Bar 복원 및 타이머 표시
    const status = document.getElementById("status");
    status.classList.remove("center");
    
    // ✨ 수정: 엔진통합과 동일하게 분:초만 표시
    const initialMinutes = Math.floor(totalSeconds / 60);
    const initialSeconds = totalSeconds % 60;
    
    status.innerHTML = `
        <span id="timer">남은 시간: ${initialMinutes.toString().padStart(2, "0")}:${initialSeconds.toString().padStart(2, "0")}</span>
        <span id="roundTitle">전기전자+엔진+섀시 전체랜덤</span> 
        <span id="remaining">남은 문제: ${questions.length}/${questions.length}</span>`;
    
    // 제출 버튼 복원 (두 개 모두)
    document.getElementById("submitBtn").style.display = "block";
    
    // --- [추가] 플로팅 버튼 복원 ---
    const floatingSubmitBtn = document.getElementById("floatingSubmitBtn");
    if (floatingSubmitBtn) {
        floatingSubmitBtn.classList.remove('hidden');
    }
    // ---------------------------------
    
    // 결과창 숨김
    document.getElementById("result").innerHTML = "";

    // 퀴즈 영역 재렌더링
    renderQuiz();
    
    // 화면 최상단으로 이동
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// -----------------------------
// 타이머
let totalSeconds = 100 * 60; // 1시간 40분으로 초기화

function updateTimer() {
    // ✨ 수정: 엔진통합과 동일하게 분:초만 표시
    let m = Math.floor(totalSeconds / 60);
    let s = totalSeconds % 60;

    document.getElementById("timer").textContent =
        `남은 시간: ${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    
    if (totalSeconds <= 0) {
        submitQuiz();
    } else {
        totalSeconds--;
    }
}
let timerInterval = setInterval(updateTimer, 1000);

// -----------------------------
// 초기화
document.getElementById("submitBtn").addEventListener("click", submitQuiz);

// --- [추가 기능 2] 플로팅 버튼 연결 ---
const floatingSubmitBtn = document.getElementById("floatingSubmitBtn");
if (floatingSubmitBtn) {
    floatingSubmitBtn.addEventListener("click", submitQuiz);
}
// ------------------------------------

renderQuiz();