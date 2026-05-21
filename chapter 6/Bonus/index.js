var score = 0;
var lives = 3;
var winningColor;

var scoreText = document.getElementById("userScore");
var livesText = document.getElementById("userLives");
var rgbHeading = document.getElementById("rgbCode");
var container = document.getElementById("boxContainer");
var msgText = document.getElementById("replyMsg");
var gameBox = document.getElementById("gameBox");
var loseBox = document.getElementById("loseBox");
var endScoreText = document.getElementById("endScore");
var resetBtn = document.getElementById("resetBtn");

function makeRound() {
    msgText.textContent = "";
    container.innerHTML = "";

    var myChoices = [];
    
    for (var i = 0; i < 3; i++) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var rgbString = "rgb(" + r + ", " + g + ", " + b + ")";
        myChoices.push(rgbString);
    }

    var randNum = Math.floor(Math.random() * 3);
    winningColor = myChoices[randNum];
    rgbHeading.textContent = winningColor;

    for (var i = 0; i < 3; i++) {
        var newCircle = document.createElement("div");
        newCircle.className = "circle";
        newCircle.style.backgroundColor = myChoices[i];

        newCircle.onclick = function() {
            var clickedColor = this.style.backgroundColor;
            
            if (clickedColor === winningColor) {
                score = score + 1;
                scoreText.textContent = score;
                msgText.style.color = "green";
                msgText.textContent = "Correct!";
                setTimeout(makeRound, 1000);
            } else {
                lives = lives - 1;
                livesText.textContent = lives;
                msgText.style.color = "red";
                msgText.textContent = "Wrong!";
                
                if (lives <= 0) {
                    gameBox.className = "hidden";
                    loseBox.className = "";
                    endScoreText.textContent = score;
                } else {
                    setTimeout(makeRound, 1000);
                }
            }
        };

        container.appendChild(newCircle);
    }
}

resetBtn.onclick = function() {
    score = 0;
    lives = 3;
    scoreText.textContent = score;
    livesText.textContent = lives;
    loseBox.className = "hidden";
    gameBox.className = "";
    makeRound();
};

makeRound();