var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var questionanswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var btnStart = document.getElementById("btn-start");
var timecounter = document.getElementById("timecounter");
var titleitem = document.getElementById("title-item");
var nextQuestions;
let input = document.querySelector(".input")
let button = document.querySelector(".button")
 
button.disabled = true
 
input.addEventListener("change", swapState)
 
function swapState() 
{
  if (document.querySelector(".input").value === "") 
  {
    button.disabled = true
  } else {
    button.disabled = false
  }
}
let currentQuestion = {};
let acceptingAnswers = true;
let score = 4;
let questionCounter = 0;
var questions = [
  {
    Question: "How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: "choice4",
  },
  {
    Question: "Inside which HTML element do we put the Javascript?",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: "choice1",
  },
  {
    Question:
      "What is the currect syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: "choice3",
  },
  {
    Question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<scripting>",
    choice2: "<js>",
    choice3: "<script>",
    choice4: "<javascript>",
    answer: "choice3",
  },
];


function timer(){
  var sec = 30;
  var timer = setInterval(function(){
      document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQueston();
};

btnStart.addEventListener("click", starQuiz);
function starQuiz() {
  if (storedScores !== null) {
    allScores = storedScores;
  }
    acceptingAnswers = false;
    const selectedChoices = e.target;
    const selectedAnswers = selectedChoices.dataset["number"];

    if (response) {
      alert.innerText = "Good";
      console.log("Good");
    } else {
      alert.innerText = "Wrong";
      count = count - 15;
      timer.innerHTML = count;
      console.log("Wrong");
    }

    const classToApply =
      selectedAnswers === currentQuestion.answer ? "currect" : "incorrect";
    console.log(classToApply);

    selectedChoices.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoices.parentElement.classList.remove(classToApply);
      getNewQueston();
    }, 1000);
  };

  function endgame() {
    myScore.innaText = count;
    addscore.classList.remove("none");
    timecounter.classList.add("none");
    quizQuestions.classList.add("none");
    addscore.classList.remove("none");
  }
