// Reference DOM elements
var newGameButton = $("#new-game-button");
var winningNum = $("#winningNum");
var totalScore = $("#totalScore");
var gem1 = $("#gem1");
var gem2 = $("#gem2");
var gem3 = $("#gem3");
var gem4 = $("#gem4");
var wins = $("#wins");
var losses = $("#losses");

// Variables
var wins = 0;
var losses = 0;
var gameRunning = false;
var totalScore = 0;
var winningNum = Math.floor(Math.random() * 101 + 19);
var gem1 = Math.floor(Math.random() * 11 + 1);
var gem2 = Math.floor(Math.random() * 11 + 1);
var gem3 = Math.floor(Math.random() * 11 + 1);
var gem4 = Math.floor(Math.random() * 11 + 1);
console.log(gem1, gem2, gem3, gem4, winningNum);

// New Game Function
function newGame() {
  //reset all game info
  gameRunning = true;
  totalScore = 0;

  // Pick Winning Number & Pick Crystal Values
  winningNum = Math.floor(Math.random() * 101 + 19);
  $("#winningNum").text(winningNum);
  gem1 = Math.floor(Math.random() * 11 + 1);
  gem2 = Math.floor(Math.random() * 11 + 1);
  gem3 = Math.floor(Math.random() * 11 + 1);
  gem4 = Math.floor(Math.random() * 11 + 1);
  console.log(gem1, gem2, gem3, gem4, winningNum);

  // Make Sure to write back to DOM
  $("#totalScore").text(totalScore);
  gemClick();
}
// newButton onclick
newGameButton.on("click", newGame);


// win function
function win() {
  wins++;
  $("#wins").text(wins);
  alert("you win!");
  gameRunning = false;
}
// lose function
function lose() {
  losses++;
  $("#losses").text(losses);
  alert("what a loser")
  gameRunning = false;
}



function gemClick() {
  // gem1 click
  $("#gem1").on("click", function () {
    totalScore += gem1;
    $("#totalScore").text(totalScore);
    if (winningNum == totalScore) {
      win();
    }
    else if (totalScore > winningNum) {
      lose();
    }
  });
  // gem2 click
  $("#gem2").on("click", function () {
    totalScore += gem2;
    $("#totalScore").text(totalScore);
    if (winningNum == totalScore) {
      win();
    }
    else if (totalScore > winningNum) {
      lose();
    }
  });
  // gem3 click
  $("#gem3").on("click", function () {
    totalScore += gem3;
    $("#totalScore").text(totalScore);
    if (winningNum == totalScore) {
      win();
    }
    else if (totalScore > winningNum) {
      lose();
    }
  });
  // gem4 click
  $("#gem4").on("click", function () {
    totalScore += gem4;
    $("#totalScore").text(totalScore);
    if (winningNum == totalScore) {
      win();
    }
    else if (totalScore > winningNum) {
      lose();
    }
  });
};

