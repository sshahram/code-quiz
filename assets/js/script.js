//Question List

var question = [
    {
      title: "Commonly used data types DO Not Include:",
      choice: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
        title: "The condition in an if/else statement is enclosed with ...",
        choice: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
      },
    // more questions to be added here
 ];

// global variables
var questionEl = document.querySelector("#question");
var startBtn = document.querySelector("#start-quiz");
var timer;
var time = question.length * 10
var timeEl = document.querySelector("#time-value");
var questionIndex = 0;
var choiceEl = document.querySelector("#choice");
var answerCheckEl = document.querySelector("#check-answer");


 // functions

var start = function() {
    // change the class of our primary screen and make it invisible
    var startQuizEl = document.getElementById("primary-screen");
    startQuizEl.setAttribute("class", "invisible");

    // change the class of our question page and make it visible
    questionEl.removeAttribute("class");

    // add timer
    timer = setInterval(clock, 1000);
    timeEl.textContent = time;

    //Add questions
    questionsQuiz();

};

var clock = function() {
    time--;
    timeEl.textContent = time;
    if(time<=0) {
        // function to end quiz
    }
};

var questionsQuiz = function() {
    var currentQuestion = question[questionIndex];
    var questionTitleEl = document.getElementById("question-title");
    questionTitleEl.textContent = currentQuestion.title;
    choiceEl.innerHTML = "";
    currentQuestion.choice.forEach(function(choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "multiple-choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = choice;
        choiceBtn.onclick = clickQuestion;
        choiceEl.appendChild(choiceBtn);
    });
        
    };

var clickQuestion = function() {
  if (this.value !== question[questionIndex].answer) {
    // reduce time
    time -= 10;

    if (time < 0) {
      time = 0;
    }
   
    timeEl.textContent = time;
    answerCheckEl.textContent = "Wrong!";
    answerCheckEl.style.color = "red";
  } else {
    answerCheckEl.textContent = "Correct!";
    answerCheckEl.style.color = "green";
  }

  answerCheckEl.setAttribute("class", "check-answer");
  setTimeout(function() {
    answerCheckEl.setAttribute("class", "check-answer invisible");
  }, 1000);

  // next question
  questionIndex++;

  // time checker
  if (questionIndex === question.length) {
    // function to end quiz
  } else {
    questionsQuiz();
  }
};


    

startBtn.onclick = start;