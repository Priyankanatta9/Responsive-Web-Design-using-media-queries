// Simple Quiz
const quizData = [
  { question: "JavaScript is the same as Java.", answer: false },
  { question: "CSS stands for Cascading Style Sheets.", answer: true },
  { question: "Media queries help make pages responsive.", answer: true },
];
let currentQuestion = 0;

function showQuestion() {
  document.getElementById("result").innerText = "";
  document.getElementById("question").innerText = quizData[currentQuestion].question;
}

function answer(userAnswer) {
  const isCorrect = userAnswer === quizData[currentQuestion].answer;
  document.getElementById("result").innerText = isCorrect ? "✅ Correct!" : "❌ Wrong!";
  currentQuestion = (currentQuestion + 1) % quizData.length;
  setTimeout(showQuestion, 1000);
}

showQuestion();

// Fetch Joke from API
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerText = `${data.setup} ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("joke").innerText = "Failed to load joke. Try again!";
    });
}