import { industry070101 } from './0701전기자동차안전관리/industry_안전문제.js';
import { industry070102 } from './0701전기자동차안전관리/industry_안전문제.js';
import { industry070103 } from './0701전기자동차안전관리/industry_안전문제.js';
import { industry070104 } from './0701전기자동차안전관리/industry_안전문제.js';
import { industry070105 } from './0701전기자동차안전관리/industry_안전문제.js';
import { industry070201 } from './0702전기자동차고전압취급관리/industry_취급문제.js';
import { industry070202 } from './0702전기자동차고전압취급관리/industry_취급문제.js';
import { industry070203 } from './0702전기자동차고전압취급관리/industry_취급문제.js';
import { industry070204 } from './0702전기자동차고전압취급관리/industry_취급문제.js';
import { industry070205 } from './0702전기자동차고전압취급관리/industry_취급문제.js';
import { industry070301 } from './0703전기자동차구성시스템점검/industry_구성문제.js';
import { industry070302 } from './0703전기자동차구성시스템점검/industry_구성문제.js';
import { industry070303 } from './0703전기자동차구성시스템점검/industry_구성문제.js';
import { industry070304 } from './0703전기자동차구성시스템점검/industry_구성문제.js';
import { industry070305 } from './0703전기자동차구성시스템점검/industry_구성문제.js';
import { industry070401 } from './0704전기자동차고전압배터리시스템정비/industry_배터리문제.js';
import { industry070402 } from './0704전기자동차고전압배터리시스템정비/industry_배터리문제.js';
import { industry070403 } from './0704전기자동차고전압배터리시스템정비/industry_배터리문제.js';
import { industry070404 } from './0704전기자동차고전압배터리시스템정비/industry_배터리문제.js';
import { industry070405 } from './0704전기자동차고전압배터리시스템정비/industry_배터리문제.js';
import { industry070501 } from './0705전기자동차고전압분배시스템정비/industry_분배문제.js';
import { industry070502 } from './0705전기자동차고전압분배시스템정비/industry_분배문제.js';
import { industry070503 } from './0705전기자동차고전압분배시스템정비/industry_분배문제.js';
import { industry070504 } from './0705전기자동차고전압분배시스템정비/industry_분배문제.js';
import { industry070505 } from './0705전기자동차고전압분배시스템정비/industry_분배문제.js';
import { industry070601 } from './0706전기자동차충전시스템정비/industry_충전문제.js';
import { industry070602 } from './0706전기자동차충전시스템정비/industry_충전문제.js';
import { industry070603 } from './0706전기자동차충전시스템정비/industry_충전문제.js';
import { industry070604 } from './0706전기자동차충전시스템정비/industry_충전문제.js';
import { industry070605 } from './0706전기자동차충전시스템정비/industry_충전문제.js';
import { industry070701 } from './0707전기자동차구동시스템정비/industry_구동문제.js';
import { industry070702 } from './0707전기자동차구동시스템정비/industry_구동문제.js';
import { industry070703 } from './0707전기자동차구동시스템정비/industry_구동문제.js';
import { industry070704 } from './0707전기자동차구동시스템정비/industry_구동문제.js';
import { industry070705 } from './0707전기자동차구동시스템정비/industry_구동문제.js';
import { industry070801 } from './0708전기자동차편의안전시스템정비/industry_편의문제.js';
import { industry070802 } from './0708전기자동차편의안전시스템정비/industry_편의문제.js';
import { industry070803 } from './0708전기자동차편의안전시스템정비/industry_편의문제.js';
import { industry070804 } from './0708전기자동차편의안전시스템정비/industry_편의문제.js';
import { industry070805 } from './0708전기자동차편의안전시스템정비/industry_편의문제.js';
import { industry070901 } from './0709전기자동차열관리시스템정비/industry_열관리문제.js';
import { industry070902 } from './0709전기자동차열관리시스템정비/industry_열관리문제.js';
import { industry070903 } from './0709전기자동차열관리시스템정비/industry_열관리문제.js';
import { industry070904 } from './0709전기자동차열관리시스템정비/industry_열관리문제.js';
import { industry070905 } from './0709전기자동차열관리시스템정비/industry_열관리문제.js';
import { industry071001 } from './0710전기자동차출고전검사/industry_출고문제.js';
import { industry071002 } from './0710전기자동차출고전검사/industry_출고문제.js';
import { industry071003 } from './0710전기자동차출고전검사/industry_출고문제.js';
import { industry071004 } from './0710전기자동차출고전검사/industry_출고문제.js';
import { industry071005 } from './0710전기자동차출고전검사/industry_출고문제.js';


// 1. 문제들을 주제별(과목별)로 그룹화합니다. (수정된 로직)
const TOPIC_GROUPS = {
    '0701': [industry070101, industry070102, industry070103, industry070104, industry070105], 
    '0702': [industry070201, industry070202, industry070203, industry070204, industry070205], 
    '0703': [industry070301, industry070302, industry070303, industry070304, industry070305], 
    '0704': [industry070401, industry070402, industry070403, industry070404, industry070405], 
    '0705': [industry070501, industry070502, industry070503, industry070504, industry070505], 
    '0706': [industry070601, industry070602, industry070603, industry070604, industry070605], 
    '0707': [industry070701, industry070702, industry070703, industry070704, industry070705], 
    '0708': [industry070801, industry070802, industry070803, industry070804, industry070805], 
    '0709': [industry070901, industry070902, industry070903, industry070904, industry070905], 
    '0710': [industry071001, industry071002, industry071003, industry071004, industry071005] 
};

// 과목 코드명을 실제 과목 이름으로 변환해주는 데이터 및 함수 (새로 추가됨)
const TOPIC_NAMES = {
    '0701': '전기자동차 안전관리',
    '0702': '전기자동차 고전압 취급관리',
    '0703': '전기자동차 구성시스템 점검',
    '0704': '전기자동차 고전압배터리시스템 정비',
    '0705': '전기자동차 고전압분배시스템 정비',
    '0706': '전기자동차 충전시스템 정비',
    '0707': '전기자동차 구동시스템 정비',
    '0708': '전기자동차 편의안전시스템 정비',
    '0709': '전기자동차 열관리시스템 정비',
    '0710': '전기자동차 출고 전 검사',
};

function getTopicName(code) {
    return TOPIC_NAMES[code] || '미분류';
}


// 문제/보기 랜덤 섞기 (기존 함수 유지)
function shuffleArray(array) {
   return array.sort(() => Math.random() - 0.5);
}

// 중복 제거 및 랜덤 추출 (기존 함수 유지)
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
 
// 2. 과목별로 균등하게 문제 수를 추출하는 새로운 핵심 함수 (수정됨: topicCode 추가)
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
        
        // ✨ 추출된 문제에 topicCode 속성 추가
        const questionsWithTopic = selectedForTopic.map(q => ({
            ...q,
            topicCode: key 
        }));
        
        balancedQuestions.push(...questionsWithTopic);
    }

    return balancedQuestions;
}


// 문제 순서 랜덤 + 60문제 제한 (균등 추출 함수 사용)
let questions = getBalancedQuestions(60);

// 추출된 60개의 문제를 최종적으로 한번 더 섞어서 순서를 뒤죽박죽 만듦
questions = shuffleArray(questions);
 
// 보기 순서 랜덤화 (기존 로직 유지)
questions.forEach((q) => {
    let combined = q.options.map((opt, idx) => ({ opt, idx }));
    combined = shuffleArray(combined);
    q.answer = combined.findIndex((c) => c.idx === q.answer);
    q.options = combined.map((c) => c.opt);
});
 

// 답안 저장 (기존 로직 유지)
let answers = Array(questions.length).fill(-1);
 

// 남은 문제 표시 (기존 로직 유지)
function updateRemaining() {
    const remainingDiv = document.getElementById("remaining");
    let answered = answers.filter((a) => a >= 0).length;
    remainingDiv.textContent = `남은 문제: ${questions.length - answered}/${questions.length}`;
}
 

// 문제 렌더링 (수정됨: 과목명 표시 로직 추가)
function renderQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
 
    questions.forEach((q, i) => {
      const div = document.createElement("div");
      div.className = "question";
      
      // ✨ 수정된 부분: 문제 제목 위에 과목 코드(이름)를 표시
      const topicName = getTopicName(q.topicCode);

          div.innerHTML = `
        <div class="q-header">
            <span class="topic-code">${topicName}</span>
            <span id="q-status-${i}" class="q-status"></span>
        </div>
        <strong class="q-title">${i + 1}. ${q.question}</strong>
      `;

      // 1. imagePath 속성이 있는지 확인
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
        
        radioInput.addEventListener("change", () => {
          answers[i] = j;
          updateRemaining();

          const allLabels = optsDiv.querySelectorAll('label');
          allLabels.forEach(l => l.classList.remove('selected'));

          label.classList.add('selected');

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
// 제출 및 채점 (아이콘/색상 설정) (기존 로직 유지)
function submitQuiz() {
    // 1. 안 푼 문제 인덱스 확인
    const firstUnansweredIndex = answers.findIndex((a) => a < 0);
    const unansweredCount = answers.filter((a) => a < 0).length;

    // 2. 안 푼 문제가 있을 경우 확인
    if (unansweredCount > 0) {
        const confirmSubmit = confirm(
            `아직 ${unansweredCount}개의 문제를 풀지 않았습니다.\n계속 제출하시겠습니까? (취소 시 문제풀이 계속 및 첫 안 푼 문제로 이동)`
        );
        
        if (!confirmSubmit) {
            if (firstUnansweredIndex !== -1) {
                const questionDiv = document.getElementsByClassName("question")[firstUnansweredIndex];
                questionDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
          statusSpan.classList.add('status-wrong'); // 클래스 추가 (CSS에서 빨간색 강제 적용)
      } else {
          // 미응답: 정답 옵션 하이라이트만 유지
          labels[q.answer].style.backgroundColor = "#b6fcb6"; // 정답은 초록색
          statusSpan.innerHTML = ''; // 아이콘 내용 비우기
          statusSpan.style.color = ''; // 스타일 제거
      }

      // 채점 완료 후 기타 스타일 제거 및 해설 표시
      labels.forEach(l => l.classList.remove('selected'));

      explainDiv.innerHTML = `
    <div style="color: #1f3b73; font-weight: 700;">정답: ${q.options[q.answer]}</div>
    <div style="margin-top: 5px;">${q.explain.trim()}</div> 
    `;

      questionDiv.querySelectorAll('input[type="radio"]').forEach((r) => (r.disabled = true));
    });
 
    // 상단 배너에 점수 표시
    const status = document.getElementById("status");
    status.classList.add("center");
    status.innerHTML = `<span id="scoreDisplay">엔진정비 전체랜덤 총점: ${score}/${questions.length}</span>`;
 
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
 
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>엔진정비 전체랜덤 총점: ${score}/${questions.length}</h2>`;
}
 
// -----------------------------
// 타이머 (기존 로직 유지)
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
// 초기화 (기존 로직 유지)
document.getElementById("submitBtn").addEventListener("click", submitQuiz);
renderQuiz();