var printScores = function () {
    var highScore = JSON.parse(window.localStorage.getItem("highscore")) || [];
    highScore.sort(function(x, y){
        return y.score - x.score
    });

    highScore.forEach(function(score) {
        var scoreEl = document.createElement("li");
        scoreEl.textContent = score.initial + " - " + score.score;
    
        var scoreListEl = document.getElementById("highscore");
        scoreListEl.appendChild(scoreEl);
      });
    }
    
function clearScores() {
      window.localStorage.removeItem("highscore");
      window.location.reload();
    }
    
    document.getElementById("clear").onclick = clearScores;
    
    printScores();