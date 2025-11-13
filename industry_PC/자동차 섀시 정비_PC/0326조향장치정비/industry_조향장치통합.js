// -----------------------------
// 회차 파라미터 가져오기
const params = new URLSearchParams(window.location.search);
const round = params.get('round');

let questions = [];

// -----------------------------
// 동적 import
async function loadQuestions() {
  try {
    const module = await import('./industry_조향장치문제.js');

    let selectedSet;

    if (round === '0') {
        const allSets = [
            ...(module.industry032601 || []),
            ...(module.industry032602 || []),
            ...(module.industry032603 || []),
            ...(module.industry032604 || []),
            ...(module.industry032605 || []),
      ];
    selectedSet = shuffleArray(allSets).slice(0, 60);
    }   else if (!isNaN(round)) {
            selectedSet = module[`industry03260${round}`];
    }   else {
            return;
    }
    if (!selectedSet) throw new Error('해당 회차 데이터가 없습니다.');
    

    questions = shuffleArray([...selectedSet]).slice(0, 60);
    questions.forEach((q) => {
        let combined = q.options.map((opt, idx) => ({ opt, idx }));
        combined = shuffleArray(combined);
        q.answer = combined.findIndex((c) => c.idx === q.answer);
        q.options = combined.map((c) => c.opt);
    });

    renderQuiz();
  } catch (err) {
        console.error(err);
        document.getElementById("quiz").innerHTML = `<p>문제를 불러오지 못했습니다.</p>`;
  }
}

// -----------------------------
// 배열 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// -----------------------------
// 답안 저장
let answers = [];

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
    answers = Array(questions.length).fill(-1);

    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.className = "question";

        div.innerHTML = `
            <span id="q-status-${i}" class="q-status"></span>
            <strong class="q-title">${i + 1}. ${q.question}</strong>
        `;

        if (q.imagePath) {
            div.innerHTML += `<img src="${q.imagePath}" alt="문제 그림"
                style="width: 500px; height: auto; margin: 15px 0;">`;
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

                optsDiv.querySelectorAll('label').forEach(l => l.classList.remove('selected'));
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
// 제출 및 채점
function submitQuiz() {
    const firstUnansweredIndex = answers.findIndex((a) => a < 0);
    const unansweredCount = answers.filter((a) => a < 0).length;

    if (unansweredCount > 0 && totalSeconds > 0) {
        const confirmSubmit = confirm(
        `아직 ${unansweredCount}개의 문제를 풀지 않았습니다.\n계속 제출하시겠습니까?`
        );

    if (!confirmSubmit) {
        if (firstUnansweredIndex !== -1) {
            document.getElementsByClassName("question")[firstUnansweredIndex]
              .scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }
  }

    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "";

    let score = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    questions.forEach((q, i) => {
        const questionDiv = document.getElementsByClassName("question")[i];
        const explainDiv = questionDiv.querySelector(".explain");
        const labels = questionDiv.querySelectorAll('label');
        const statusSpan = document.getElementById(`q-status-${i}`);

        statusSpan.classList.remove('status-wrong');

        if (answers[i] == q.answer) {
            score++;
            labels[q.answer].style.backgroundColor = "#b6fcb6";
            statusSpan.innerHTML = '⭕';
        } else if (answers[i] >= 0) {
            labels[q.answer].style.backgroundColor = "#b6fcb6";
            labels[answers[i]].style.backgroundColor = "#fcb6b6";
            statusSpan.innerHTML = '❌';
            statusSpan.style.color = '#dc3545';
            statusSpan.classList.add('status-wrong');
        } else {
            labels[q.answer].style.backgroundColor = "#b6fcb6";
            statusSpan.innerHTML = '';
            statusSpan.style.color = '';
        }

        explainDiv.innerHTML = `
            <p style="color:#1f3b73;font-weight:700;">정답: ${q.options[q.answer]}</p>
            <p>${q.explain}</p>
        `;

        questionDiv.querySelectorAll('input[type="radio"]').forEach((r) => (r.disabled = true));
    });

    const status = document.getElementById("status");
    status.classList.add("center");
    status.innerHTML = `<span id="scoreDisplay">조향장치 정비 ${round}회차 총점: ${score}/${questions.length}</span>`;

    document.getElementById("submitBtn").style.display = "none";

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>조향장치 정비 ${round}회차 총점: ${score}/${questions.length}</h2>`;
}

// -----------------------------
// 타이머
let totalSeconds = 60 * 60;
function updateTimer() {
    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;
    document.getElementById("timer").textContent =
        `남은 시간: ${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

    if (totalSeconds <= 0) submitQuiz(true);
    else totalSeconds--;
}

let timerInterval = setInterval(updateTimer, 1000);

// -----------------------------
// 초기화
document.getElementById("submitBtn").addEventListener("click", submitQuiz);
loadQuestions();
