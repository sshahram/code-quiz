// global variables
var questionEl = document.querySelector("#question");
var startBtn = document.querySelector("#start-quiz")

var start = function() {
    // change the class of our primary screen and make it invisible
    var startQuizEl = document.getElementById("primary-screen");
    startQuizEl.setAttribute("class", "invisible");

    // change the class of our question page and make it visible
    questionEl.removeAttribute("class");
};

startBtn.addEventListener("click", start());