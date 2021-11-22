//Smoke test
console.log("hello, javascript still working");

// Main components of game DOM
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const redButton = document.getElementById("red-button");
const blueButton = document.getElementById("blue-button");
const testButton = document.getElementById("test-button");
const startButton = document.getElementById("start-button");
const textDisplay = document.getElementById("text-display");
let scoreDisplay = document.getElementById("score-display");

let score = 0;
let cpuPicks = [];
let playerPicks = [];
let turn = false;
let winOrLose = true;
let loopTimes = 0;
let loopStop;

// Play Game randomizes 21 numbers in cpuPicks array, runs computerChoice.
let playGame = () => {
  clearInterval(loopStop);
  cpuPicks = [];
  playerPicks = [];
  for (let i = 0; i < 21; i++) {
    let RNG = Math.floor(Math.random() * 4);
    cpuPicks.push(RNG);
  }
  console.log(cpuPicks);
  score = 0;
  turn = false;
  computerChoice();
};

// Will make colors blink when invoked
let blinkGreen = () => {
  greenButton.style.backgroundColor = "#9EE5DD";
  setTimeout(() => {
    greenButton.style.backgroundColor = "green";
  }, 500);
};

let blinkYellow = () => {
  yellowButton.style.backgroundColor = "yellow";
  setTimeout(() => {
    yellowButton.style.backgroundColor = "#F57C00";
  }, 500);
};

let blinkRed = () => {
  redButton.style.backgroundColor = "#EE9781";
  setTimeout(() => {
    redButton.style.backgroundColor = "red";
  }, 500);
};

let blinkBlue = () => {
  blueButton.style.backgroundColor = "#9EE5DD";
  setTimeout(() => {
    blueButton.style.backgroundColor = "blue";
  }, 500);
};

// Computer reads through predetermined Array at start of game.
let computerChoice = () => {
  if (turn === false) {
    console.log("Score before number: " + score);
    loopTimes = 0;
    score++;
    scoreDisplay.innerText = score;
    loopStop = setInterval(() => {
      if (loopTimes < score) {
        if (cpuPicks[loopTimes] === 0) {
          blinkGreen();
          console.log("Green Clicked");
        }
        if (cpuPicks[loopTimes] === 1) {
          blinkYellow();
          console.log("Yellow Clicked");
        }
        if (cpuPicks[loopTimes] === 2) {
          blinkRed();
          console.log("Red Clicked");
        }
        if (cpuPicks[loopTimes] === 3) {
          blinkBlue();
          console.log("Blue Clicked");
        } else if (loopTimes === score) {
          console.log("Players Turn");
        }
        loopTimes++;
      }
    }, 1000);
    turn = true;
  }
};

// Player Functions
// If player guesses correctly, but still not at last round. Keep going = first (if)
// If player guess correctly and array is equal to round amount. Win = second (else if)
// If player guesses incorretly, reset game to 0, clear arrays. Lose = third (else if)
let testChoice = () => {
  if (playerPicks.length === cpuPicks.length && playerPicks[score - 1] === cpuPicks[score - 1]) {
    console.log("You win");
    turn = false;
    setTimeout(() => {
      playGame();
    }, 1000);
    clearInterval(loopStop);
  } else if (playerPicks[score - 1] === cpuPicks[score - 1]) {
    console.log("Good job, go next round");
    // Good job go next round!
    turn = false;
    setTimeout(() => {
      computerChoice();
    }, 1000);
    playerPicks = [];
    clearInterval(loopStop);
    console.log(turn);
  } else if (playerPicks[playerPicks.length - 1] != cpuPicks[playerPicks.length - 1]) {
    console.log("You lose");
    // You lost! Press start to play again.
    clearInterval(loopStop);
  }
  console.log(playerPicks.length);
};

// Event Listeners

// Player can click on every button through these Event Listeners.
greenButton.addEventListener("click", () => {
  if (turn === true) {
    blinkGreen();
    playerPicks.push(0);
    testChoice();
  }
});
yellowButton.addEventListener("click", () => {
  if (turn === true) {
    blinkYellow();
    playerPicks.push(1);
    testChoice();
  }
});
redButton.addEventListener("click", () => {
  if (turn === true) {
    blinkRed();
    playerPicks.push(2);
    testChoice();
  }
});
blueButton.addEventListener("click", () => {
  if (turn === true) {
    blinkBlue();
    playerPicks.push(3);
    testChoice();
  }
});

//Temporary CPU button
testButton.addEventListener("click", () => {
  // Make run after so many seconds. Don't pass after score turn..
  computerChoice();
});

startButton.addEventListener("click", () => {
  playGame();
});
