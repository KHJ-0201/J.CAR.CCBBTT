import { industry010301, industry010302, industry010303, industry010304, industry010305 } from './0103자동차 냉난방장치정비/industry_냉난방문제.js';
import { industry010401, industry010402, industry010403, industry010404, industry010405 } from './0104자동차 전기전자회로분석/industry_회로분석문제.js';
import { industry010501, industry010502, industry010503, industry010504, industry010505 } from './0105자동차 편의장치 정비/industry_편의장치문제.js';
import { industry010701, industry010702, industry010703, industry010704, industry010705 } from './0107자동차 주행안전장치정비/industry_주행안전문제.js';
import { industry010801, industry010802, industry010803, industry010804, industry010805 } from './0108자동차 네트워크통신장비정비/industry_네트워크문제.js';
import { industry010901, industry010902, industry010903, industry010904, industry010905 } from './0109하이브리드자동차 특화시스템정비/industry_하이브리드문제.js';


// 1. 문제들을 주제별(과목별)로 그룹화합니다. (코드 1 양식 적용)
const TOPIC_GROUPS = {
    '0103': [industry010301, industry010302, industry010303, industry010304, industry010305], 
    '0104': [industry010401, industry010402, industry010403, industry010404, industry010405], 
    '0105': [industry010501, industry010502, industry010503, industry010504, industry010505], 
    '0107': [industry010701, industry010702, industry010703, industry010704, industry010705], 
    '0108': [industry010801, industry010802, industry010803, industry010804, industry010805], 
    '0109': [industry010901, industry010902, industry010903, industry010904, industry010905], 
};

// 과목 코드명을 실제 과목 이름으로 변환해주는 데이터 및 함수 (코드 1 양식 적용)
const TOPIC_NAMES = {
    '0103': '자동차 냉·난방장치 정비',
    '0104': '자동차 전기·전자회로분석',
    '0105': '자동차 편의장치 정비',
    '0107': '자동차 주행안전장치 정비',
    '0108': '자동차 네트워크통신장비 정비',
    '0109': '하이브리드자동차 특화시스템정비',
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
    ✨ [신규/수정] 문제 순서 및 보기 순서를 섞는 통합 함수
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
            // 이 문제는 문제가 있는 것입니다.
            console.error("정답 텍스트를 새로운 보기 배열에서 찾을 수 없습니다:", q.originalCorrectOptionText);
            q.answer = -1; 
        }
    });

    return shuffledQuestions; // 문제 순서가 섞인 배열 반환
}

// 문제 순서 랜덤 + 60문제 제한 (균등 추출 함수 사용)
let questions = getBalancedQuestions(60);

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
  
/* ===========================
    OMR 관련 추가 함수
=========================== */

// OMR 렌더링
function renderOMR() {
    const omrListDiv = document.getElementById("omr-list");
    omrListDiv.innerHTML = "";

    questions.forEach((q, i) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "omr-item";

        // 문제 번호 (클릭 이벤트 추가)
        const numSpan = document.createElement("span");
        numSpan.className = "omr-q-num";
        numSpan.textContent = i + 1;
        numSpan.addEventListener('click', () => scrollToQuestion(i));
        itemDiv.appendChild(numSpan);

        // 옵션 wrapper
        const optsWrapper = document.createElement("div");
        optsWrapper.className = "omr-options-wrapper";
        
        // 4개의 옵션 버튼 생성
        for (let j = 0; j < 4; j++) {
            const optionSpan = document.createElement("span");
            optionSpan.className = "omr-option";
            optionSpan.textContent = j + 1; // 1, 2, 3, 4
            
            // OMR 옵션 클릭 이벤트 
            optionSpan.addEventListener('click', () => {
                // 해당 문제로 이동
                scrollToQuestion(i);
                
                // 해당 문제의 라디오 버튼을 선택 상태로 만듦
                const questionDiv = document.getElementsByClassName("question")[i];
                const radioInput = questionDiv.querySelector(`input[name="q${i}"][value="${j}"]`);
                
                if (radioInput) {
                    radioInput.checked = true;
                    // change 이벤트를 강제 실행하여 JS의 answers 배열 및 UI를 업데이트
                    radioInput.dispatchEvent(new Event('change'));
                }
            });
            
            optsWrapper.appendChild(optionSpan);
        }

        itemDiv.appendChild(optsWrapper);
        omrListDiv.appendChild(itemDiv);
    });
    
    // 초기 렌더링 후 OMR 상태 업데이트
    updateOMRState(); 

    // OMR 전체 선택 버튼 렌더링 함수 호출
    renderOMRGlobalSelectButtons();
}

// OMR 전체 답안 일괄 선택 버튼 렌더링
function renderOMRGlobalSelectButtons() {
    const omrHeader = document.querySelector("#omr-card .omr-header");
    
    const omrTitle = omrHeader.querySelector(".omr-title");
    const omrSubmitBtn = document.getElementById("omrSubmitBtn");
    
    // 이전에 생성된 globalSelectWrapper가 있다면 제거하여 중복 방지
    let existingWrapper = omrHeader.querySelector(".global-select-wrapper");
    if (existingWrapper) existingWrapper.remove();


    const globalSelectWrapper = document.createElement("div");
    globalSelectWrapper.className = "global-select-wrapper";
    
    // 1번부터 4번까지 버튼 생성 (값은 0부터 3)
    for (let i = 0; i < 4; i++) {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        btn.className = "omr-global-select-btn";
        btn.setAttribute('data-value', i); 
        
        btn.addEventListener('click', () => {
            const selectedValue = parseInt(btn.getAttribute('data-value'));
            
            // 모든 문제의 답을 일괄 선택
            answers = answers.map(() => selectedValue);
            
            // 문제 UI 업데이트 (라디오 버튼 checked 상태 변경)
            questions.forEach((q, qIndex) => {
                const questionDiv = document.getElementsByClassName("question")[qIndex];
                // 해당 문제의 라디오 버튼을 찾아 checked 상태로 변경
                const radioInput = questionDiv.querySelector(`input[name="q${qIndex}"][value="${selectedValue}"]`);
                if (radioInput) {
                    radioInput.checked = true;
                    // 'selected' 클래스 업데이트를 위해 change 이벤트 강제 실행
                    radioInput.dispatchEvent(new Event('change')); 
                }
            });
            
            updateRemaining(); // OMR, 남은 문제 수 전체 업데이트
            // 사용자에게 알림
            alert(`${selectedValue + 1}번으로 전체 답안이 선택되었습니다!`);
        });

        globalSelectWrapper.appendChild(btn);
    }
    
    // OMR Title 뒤, OMR Submit Button 앞에 삽입
    omrHeader.insertBefore(globalSelectWrapper, omrSubmitBtn);
}


// OMR 상태 업데이트 (선택된 답안을 OMR에 반영)
function updateOMRState() {
    const omrItems = document.querySelectorAll('#omr-list .omr-item');
    answers.forEach((answer, i) => {
        if (omrItems[i]) {
            const options = omrItems[i].querySelectorAll('.omr-option');
            // 'selected', 'correct', 'wrong' 클래스 초기화
            options.forEach(opt => opt.classList.remove('selected', 'correct', 'wrong'));
            
            // 사용자가 답을 선택했을 경우 OMR에 'selected' 클래스 추가
            if (answer >= 0 && options[answer]) {
                options[answer].classList.add('selected');
            }
        }
    });
}

// 문제로 스크롤 이동 함수 
function scrollToQuestion(index) {
    const questionDivs = document.getElementsByClassName("question");
    if (questionDivs[index]) {
        // 문제 DIV의 시작 부분이 뷰포트 상단에 오도록 스크롤
        questionDivs[index].scrollIntoView({ behavior: 'smooth', block: 'start' }); 
    }
}


// 남은 문제 표시 
function updateRemaining() {
    const remainingDiv = document.getElementById("remaining");
    let answered = answers.filter((a) => a >= 0).length;
    remainingDiv.textContent = `남은 문제: ${questions.length - answered}/${questions.length}`;

    // OMR 상태 업데이트 함수 호출
    updateOMRState(); 
}
  

// 문제 렌더링
function renderQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
  
    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.className = "question";
        
        // 과목 코드(이름)를 표시
        const topicName = getTopicName(q.topicCode);

        div.innerHTML = `
            <div class="q-header">
                <span class="topic-code">[${topicName}]</span>
                <span id="q-status-${i}" class="q-status"></span>
            </div>
            <strong class="q-title">${i + 1}. ${q.question}</strong>
        `;

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

    // 보기 클릭 시 다음 문제로 이동하는 로직 (여기를 수정합니다)
    if (i < questions.length - 1) {
        // 0.5초(500밀리초) 지연 후 다음 문제로 스크롤 이동
        setTimeout(() => {
            scrollToQuestion(i + 1); 
        }, 500); // 👈 딜레이 시간 (밀리초)
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
// 제출 및 채점 (수정됨: OMR 결과 표시 및 다시 풀기 버튼 렌더링 추가)
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
      
      // OMR 항목 가져오기
      const omrItems = document.querySelectorAll('#omr-list .omr-item');
      const omrOptions = omrItems[i] ? omrItems[i].querySelectorAll('.omr-option') : null;

      // 이전 상태 클래스 초기화
      statusSpan.classList.remove('status-correct', 'status-wrong', 'status-unanswered');
      if (omrOptions) omrOptions.forEach(opt => opt.classList.remove('selected')); // OMR의 'selected' 제거

      // 💡 문제 상태에 따라 아이콘/색상/클래스 결정
      if (answers[i] == q.answer) {
          // 정답: ⭕ 
          score++;
          labels[q.answer].style.backgroundColor = "#b6fcb6";
          statusSpan.innerHTML = '⭕';
          if (omrOptions) omrOptions[q.answer].classList.add('correct'); // OMR 정답 표시
      } else if (answers[i] >= 0) {
          // 오답: ❌ 
          // q.answer를 사용하여 정답을 찾아야 함.
          labels[q.answer].style.backgroundColor = "#b6fcb6"; // 정답은 초록색
          labels[answers[i]].style.backgroundColor = "#fcb6b6"; // 내가 고른 오답은 빨간색
          statusSpan.innerHTML = '❌';
          statusSpan.style.color = '#dc3545'; 
          statusSpan.classList.add('status-wrong');
          if (omrOptions) {
             omrOptions[q.answer].classList.add('correct'); // OMR 정답 표시
             omrOptions[answers[i]].classList.add('wrong'); // OMR 오답 표시
          }
      } else {
          // 미응답: 정답 옵션 하이라이트만 유지
          labels[q.answer].style.backgroundColor = "#b6fcb6"; // 정답은 초록색
          statusSpan.innerHTML = ''; 
          statusSpan.style.color = ''; 
          
          if (omrOptions) omrOptions[q.answer].classList.add('correct'); // OMR 정답 표시
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
    retryButton.style.cssText = `
        background-color: #dc3544; /* 사진 속 OMR 배너 빨간색과 유사하게 */
        color: white;
        font-size: 1.8rem;
        font-weight: 600;
        border: none;
        border-radius: 6px;
        padding: 8px 15px;
        margin-left: 20px;
        cursor: pointer;
        transition: background-color 0.3s;
    `;
    retryButton.addEventListener("click", resetQuiz);
    
    const scoreDisplaySpan = document.createElement('span');
    scoreDisplaySpan.textContent = `자동차 전기·전자장치 정비 전체랜덤 총점: ${score}/${questions.length}`;
    scoreDisplaySpan.id = 'scoreDisplay';
    scoreDisplaySpan.style.cssText = `
        font-size: 2.2rem;
        font-weight: 700;
        color: #b30000;
    `;
    
    // 최종 HTML 구조 변경
    status.innerHTML = '';
    status.appendChild(scoreDisplaySpan);
    status.appendChild(retryButton);
    
    // 제출 버튼 제거 (두 개 모두)
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("omrSubmitBtn").style.display = "none";
    
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동차 전기·전자장치 정비 전체랜덤 총점: ${score}/${questions.length}</h2>`;
}
  
/* ===========================
    ✨ [신규 함수] 다시 풀기 로직 (순서/보기 셔플 포함)
=========================== */
function resetQuiz() {
    if (!confirm("현재 풀었던 60문제를 다시 푸시겠습니까? (문제 순서 및 보기 순서도 다시 섞입니다.)")) {
        return;
    }

    // 1. 문제 순서 및 보기 순서 재셔플
    questions = applyShuffling(questions); 
    
    // 2. 답안 초기화
    answers = Array(questions.length).fill(-1);
    
    // 3. 타이머 재시작 (1시간 설정)
    clearInterval(timerInterval);
    totalSeconds = 60 * 60; 
    timerInterval = setInterval(updateTimer, 1000);
    
    // 4. UI 초기화 및 재렌더링
    
    // Status Bar 복원 및 타이머 표시
    const status = document.getElementById("status");
    status.classList.remove("center");
    status.innerHTML = `
        <h1 class="page-title">자동차 전기·전자장치 정비 전체랜덤</h1> 
        <div class="status-info">
            <span id="timer">남은 시간: 01:00:00</span>
            <span id="remaining">남은 문제: 0/0</span>
        </div>`;
    
    // 제출 버튼 복원 (두 개 모두)
    document.getElementById("submitBtn").style.display = "block";
    document.getElementById("omrSubmitBtn").style.display = "block";
    
    // 결과창 숨김
    document.getElementById("result").innerHTML = "";

    // 퀴즈 영역 및 OMR 영역 재렌더링 (순서가 바뀌었으므로 DOM을 새로 만듭니다)
    renderQuiz();
    renderOMR(); 
    
    // 화면 최상단으로 이동
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// -----------------------------
// 타이머
let totalSeconds = 60 * 60;
function updateTimer() {
    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;
    document.getElementById(
      "timer"
    ).textContent = `남은 시간: ${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
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

// OMR 제출 버튼에 이벤트 추가
document.getElementById("omrSubmitBtn").addEventListener("click", submitQuiz);

renderQuiz();

// OMR 렌더링 실행
renderOMR();