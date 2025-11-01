// -----------------------------
// 문제 배열
let allQuestions = [
    {
        question: "가솔린 엔진의 흡기다기관 누설 점검 시 사용하는 계측기는?",
        options: ["다이얼 게이지", "진공 게이지", "텔레스코핑 게이지", "압축압력 게이지"],
        answer: 1,
        explain: "스로틀 바디와 흡기 다기관 연결 부분, 흡기 다기관과 실린더 헤드 사이 연결 부분의 진공 누설을 점검하기 위해서 진공 게이지를 서지탱크의 진공 구멍에 연결한다.\n※ 압축압력 게이지 : 실린더 부위의 누설(실린더와 피스톤 사이의 누설, 밸브의 누설, 실린더 헤드의 누설 등)을 점검"
    },
    {
        question: "ETACS 간헐와이퍼 제어의 입·출력 요소 중 입력요소에 해당하는 것은?",
        options: ["와이어 릴레이 및 인트 타이머(INTT)", "인트(INT) 및 인트 타이머(INTT) 스위치", "인트(INT) 스위치 및 시동 스위치", "인트(INT) 스위치 및 라이트 스위치"],
        answer: 1,
        explain: "간헐와이퍼를 작동하려면 시동 스위치가 ON상태에서, 다기능 스위치 모드가 인트 스위치 ON 상태이어야 한다."
    },
    {
        question: "기관 윤활회로의 유압이 규정값보다 상승하는 원인으로 옳지 않은 것은?",
        options: ["유압조절밸브의 스프링 장력이 규정값보다 크다.", "오일펌프가 마멸되어 오일간극이 커졌다.", "기관의 온도가 낮아져 점도가 높아졌다.", "오일펌프 출력단 이후에 막힘이 있다."],
        answer: 1,
        explain: "엔진 오일 유압이 낮아지는 원인\n•유압조절밸브의 스프링 장력이 약함(쇠손)\n•엔진 베어링의 오일 간극이 너무 클 때\n•점도가 낮아질 때\n•오일펌프 이전 라인 막힘"
    },
    {
        question: "배기장치의 차압센서에 대한 설명으로 틀린 것은?",
        options: ["배기 다기관에 부착한다.", "CPF 재생시기 판단을 위한 PM 포집량을 예측한다.", "필터 전후방 압력차를 검출한다.", "압력차를 검출하여 ECU로 전송한다."],
        answer: 0,
        explain: "차압센서는 디젤 산화 촉매장치(CPF)의 전후방에 장착하여 압력차를 검출하여 PM 포집량을 예측하여 재생시기를 판단한다."
    },
    {
        question: "전조등 회로의 구성부품이 아닌 것은?",
        options: ["전조등 릴레이", "스테이터", "딤머 스위치", "라이트 스위치"],
        answer: 1,
        explain: "스테이터는 교류발전기의 구성부품이다.\n※딤머(dimmer) 스위치는 전조등의 빔을 '하이(hi)빔 <> 로(low)빔'으로 전환하는 스위치이다."
    },
    {
        question: "가솔린 연료의 구비조건이 아닌 것은?",
        options: ["옥탄가가 높을 것", "체적 및 무게가 크고, 발열량이 작을 것", "연소속도가 빠를 것", "온도에 관계없이 유동성이 좋을 것"],
        answer: 1,
        explain: "체적 및 무게가 작고, 발열량이 클 것"
    },
    {
        question: "등화장치의 일반적인 검사기준 및 방법에 대한 설명으로 틀린 것은?",
        options: ["타이어 공기압이 규정 압력인지 점검한다.", "차량의 현가장치의 정상 여부를 점검한다.", "전조등 작동상태의 정상 여부를 점검한다.", "적차 상태에서 운전자 1인 탑승 후 점검한다."],
        answer: 3,
        explain: "등화장치 검사 시 공차 상태에서 운전자 1인 탑승 후 점검한다."
    },
    {
        question: "LPG기관에서 액체상태의 연료를 기체상태의 연료로 전환시키는 장치는?",
        options: ["믹서", "베이퍼라이저", "솔레노이드 유닛", "봄베"],
        answer: 1,
        explain: "베이퍼라이저는 액상 LPG압력을 낮추어 기체상태로 변환시켜(액상 LPG를 기체 LPG로 기화) LPG 압력을 일정하게 조절하는 작용을 한다."
    }
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...allQuestions]).slice(0, 60);
  
  // ✅ 보기 순서도 랜덤화
  questions.forEach((q) => {
    let combined = q.options.map((opt, idx) => ({ opt, idx }));
    combined = shuffleArray(combined);
    q.answer = combined.findIndex((c) => c.idx === q.answer);
    q.options = combined.map((c) => c.opt);
  });
  
  // -----------------------------
  // 답안 저장
  let answers = Array(questions.length).fill(-1);
  
  // -----------------------------
  // 남은 문제 표시
  function updateRemaining() {
    const remainingDiv = document.getElementById("remaining");
    let answered = answers.filter((a) => a >= 0).length;
    remainingDiv.textContent = `남은 문제: ${questions.length - answered}/${questions.length}`;
  }
  
  // -----------------------------
  // 문제 렌더링
  function renderQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
  
    questions.forEach((q, i) => {
      const div = document.createElement("div");
      div.className = "question";
      div.innerHTML = `<strong>${i + 1}. ${q.question}</strong>`;
  
      const optsDiv = document.createElement("div");
      optsDiv.className = "options";
      q.options.forEach((opt, j) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="q${i}" value="${j}"> ${opt}`;
        label.querySelector("input").addEventListener("change", () => {
          answers[i] = j;
          updateRemaining();
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
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "";
  
    let score = 0;
    questions.forEach((q, i) => {
      const questionDiv = document.getElementsByClassName("question")[i];
      const explainDiv = questionDiv.querySelector(".explain");
      const radios = questionDiv.querySelectorAll('input[type="radio"]');
  
      if (answers[i] == q.answer) {
        score++;
        radios[q.answer].parentElement.style.backgroundColor = "#b6fcb6";
      } else if (answers[i] >= 0) {
        radios[answers[i]].parentElement.style.backgroundColor = "#fcb6b6";
      }
  
      explainDiv.innerHTML = `<p>정답: ${q.options[q.answer]}</p><p>${q.explain}</p>`;
      radios.forEach((r) => (r.disabled = true));
    });
  
    // 상단 배너에 점수 표시
    const status = document.getElementById("status");
    status.classList.add("center");
    status.innerHTML = `<span id="scoreDisplay">총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>총점: ${score}/${questions.length}</h2>`;
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