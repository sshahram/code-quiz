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
      {
        title: "Arrays in JavaScript can be used to store",
        choice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
      },
      {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
      },
      {
        title: "String values must be enclosed within ... when being assigned to variables",
        choice: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
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
var initialEl = document.querySelector("#initial");
var submitBtn = document.querySelector("#submit")


 // functions

 // starting quiz
var startQuiz = function() {
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

// showing timer

var clock = function() {
    time--;
    timeEl.textContent = time;
    if(time<=0) {
        endQuiz();
    }
};

// displaying quettions
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


// cheking answers
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
    endQuiz();
  } else {
    questionsQuiz();
  }
};

// ending quiz
var endQuiz = function() {
  clearInterval(timer);
  var endEl = document.getElementById('third-screen');
  endEl.removeAttribute("class");
  var scoreEl = document.getElementById('final-score')
  scoreEl.textContent = time;
  questionEl.setAttribute("class", "invisible")
};

// saving high scores
var saveScores = function () {
  var name = initialEl.value.trim();

  if (name !== "") {
    var highScore =
      JSON.parse(window.localStorage.getItem("highScore")) || [];

    var scoreNew = {
      score: time,
      initial: name
    };

    highScore.push(scoreNew);
    window.localStorage.setItem("highscore", JSON.stringify(highScore));

    // put view high score page here

  }
}
    
submitBtn.onclick = saveScores;
startBtn.onclick = startQuiz;
