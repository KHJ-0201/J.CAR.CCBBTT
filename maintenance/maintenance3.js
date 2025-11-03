// -----------------------------
// 문제 배열
export const maintenance3Questions = [
    {
        question: "사이드 슬립 측정 전 준비사항으로 틀린 것은?",
        options: ["타이어의 공기압력이 규정압력인지 확인한다.", "바퀴를 잭으로 들고 위아래를 흔들어 허브 유격을 확인한다.", "보닛을 위아래로 눌러 ABS 시스템을 확인한다.", "바퀴를 잭으로 들고 좌우로 흔들어 엔드볼 및 링키지를 확인한다."],
        answer: 2,
        explain: "사이드 슬립 측정 전 준비 사항\n•타이어 공기 압력(28~32psi)을 확인하다.\n•위·아래로 흔들어 허브 유격을 확인한다.\n•좌우로 흔들어 엔드볼 및 링키지 확인한다.\n•보닛을 위아래로 눌러보아 현가 스프링의 피로를 점검한다."
    },
    {
        question: "폐자로 타입의 점화코일 1차 저항에 대한 점검 및 판정 내용으로 틀린 것은?",
        options: ["무한대로 표시된 경우 관련 배선이 정상이다.", "규정값보다 낮은 경우 내부회로가 단락이다.", "저항 측정위치로 테스터기를 설정한다.", "멀티테스터기를 이용하여 점검한다."],
        answer: 0,
        explain: "저항 측정 시 무한대로 표시되면 단선(끊어짐)을 의미한다."
    },
    {
        question: "종감속장치(베벨기어식)에서 구동피니언과 링기어의 접촉상태에 대한 종류가 아닌 것은?",
        options: ["토(toe) 접촉", "힐 접촉", "페이스 접촉", "캐스터 접촉"],
        answer: 3,
        explain: "구동피니언과 링기어의 접촉 상태 종류\n정상 접촉, 힐(Heel) 접촉, 토(Toe) 접촉, 페이스 접촉, 플랭크 접촉"
    },
    {
        question: "운전석 메모리 시트 시스템(IMS)의 출력 요소가 아닌 것은?", // 여기서 수정
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
  let questions = shuffleArray([...maintenance3Questions]).slice(0, 60);
  
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

      // 1. imagePath 속성이 있는지 확인
        if (q.imagePath) {
            // 2. 이미지 태그를 만들어서 문제 텍스트 아래에 추가
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