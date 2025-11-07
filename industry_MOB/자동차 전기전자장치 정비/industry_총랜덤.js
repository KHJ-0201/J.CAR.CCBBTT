import { industry010301 } from './0103자동차 냉난방장치정비/industry_냉난방문제.js';
import { industry010302 } from './0103자동차 냉난방장치정비/industry_냉난방문제.js';
import { industry010303 } from './0103자동차 냉난방장치정비/industry_냉난방문제.js';
import { industry010304 } from './0103자동차 냉난방장치정비/industry_냉난방문제.js';
import { industry010305 } from './0103자동차 냉난방장치정비/industry_냉난방문제.js';
import { industry010401 } from './0104자동차 전기전자회로분석/industry_회로분석문제.js';
import { industry010402 } from './0104자동차 전기전자회로분석/industry_회로분석문제.js';
import { industry010403 } from './0104자동차 전기전자회로분석/industry_회로분석문제.js';
import { industry010404 } from './0104자동차 전기전자회로분석/industry_회로분석문제.js';
import { industry010405 } from './0104자동차 전기전자회로분석/industry_회로분석문제.js';
import { industry010501 } from './0105자동차 편의장치 정비/industry_편의장치문제.js';
import { industry010502 } from './0105자동차 편의장치 정비/industry_편의장치문제.js';
import { industry010503 } from './0105자동차 편의장치 정비/industry_편의장치문제.js';
import { industry010504 } from './0105자동차 편의장치 정비/industry_편의장치문제.js';
import { industry010505 } from './0105자동차 편의장치 정비/industry_편의장치문제.js';
import { industry010701 } from './0107자동차 주행안전장치정비/industry_주행안전문제.js';
import { industry010702 } from './0107자동차 주행안전장치정비/industry_주행안전문제.js';
import { industry010703 } from './0107자동차 주행안전장치정비/industry_주행안전문제.js';
import { industry010704 } from './0107자동차 주행안전장치정비/industry_주행안전문제.js';
import { industry010705 } from './0107자동차 주행안전장치정비/industry_주행안전문제.js';
import { industry010801 } from './0108자동차 네트워크통신장비정비/industry_네트워크문제.js';
import { industry010802 } from './0108자동차 네트워크통신장비정비/industry_네트워크문제.js';
import { industry010803 } from './0108자동차 네트워크통신장비정비/industry_네트워크문제.js';
import { industry010804 } from './0108자동차 네트워크통신장비정비/industry_네트워크문제.js';
import { industry010805 } from './0108자동차 네트워크통신장비정비/industry_네트워크문제.js';
import { industry010901 } from './0109하이브리드자동차 특화시스템정비/industry_하이브리드문제.js';
import { industry010902 } from './0109하이브리드자동차 특화시스템정비/industry_하이브리드문제.js';
import { industry010903 } from './0109하이브리드자동차 특화시스템정비/industry_하이브리드문제.js';
import { industry010904 } from './0109하이브리드자동차 특화시스템정비/industry_하이브리드문제.js';
import { industry010905 } from './0109하이브리드자동차 특화시스템정비/industry_하이브리드문제.js';

const ALL_QUESTIONS = [
    ...industry010301,
    ...industry010302,
    ...industry010303,
    ...industry010304,
    ...industry010305,
    ...industry010401,
    ...industry010402,
    ...industry010403,
    ...industry010404,
    ...industry010405,
    ...industry010501,
    ...industry010502,
    ...industry010503,
    ...industry010504,
    ...industry010505,
    ...industry010701,
    ...industry010702,
    ...industry010703,
    ...industry010704,
    ...industry010705,
    ...industry010801,
    ...industry010802,
    ...industry010803,
    ...industry010804,
    ...industry010805,
    ...industry010901,
    ...industry010902,
    ...industry010903,
    ...industry010904,
    ...industry010905
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
   return array.sort(() => Math.random() - 0.5);
}

// 중복 제거
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
 
// 문제 순서 랜덤 + 60문제 제한
let questions = selectUniqueRandomQuestions(ALL_QUESTIONS, 60);
 
// 보기 순서 랜덤화
questions.forEach((q) => {
    let combined = q.options.map((opt, idx) => ({ opt, idx }));
    combined = shuffleArray(combined);
    q.answer = combined.findIndex((c) => c.idx === q.answer);
    q.options = combined.map((c) => c.opt);
});
 

// 답안 저장
let answers = Array(questions.length).fill(-1);
 

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
 
    questions.forEach((q, i) => {
      const div = document.createElement("div");
      div.className = "question";
      
      // 상태 표시 span과 제목 분리
          div.innerHTML = `<span id="q-status-${i}" class="q-status"></span><strong class="q-title">${i + 1}. ${q.question}</strong>`;

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
// 제출 및 채점 (아이콘/색상 설정)
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
      // 이제 status-correct 클래스는 사용하지 않으므로 status-wrong만 남김
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
          // 미응답: 아무 표시도 하지 않음 (정답 옵션 하이라이트만 유지)
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
    status.innerHTML = `<span id="scoreDisplay">전기전자장치정비 전체랜덤 총점: ${score}/${questions.length}</span>`;
 
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
 
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>전기전자장치정비 전체랜덤 총점: ${score}/${questions.length}</h2>`;
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
renderQuiz();