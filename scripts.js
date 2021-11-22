//Smoke test
console.log("hello, javascript still working");

//////////////////// Main Components/DOM ////////////////////
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const redButton = document.getElementById("red-button");
const blueButton = document.getElementById("blue-button");
const allButton = document.getElementById("main-grid");
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

//////////////////// Functions ////////////////////

// Play Game randomizes 21 numbers in cpuPicks array, runs computerChoice.
let standBy = () => {};

let playGame = () => {
  clearInterval(loopStop);
  cpuPicks = [];
  playerPicks = [];
  for (let i = 0; i < 20; i++) {
    let RNG = Math.floor(Math.random() * 4);
    cpuPicks.push(RNG);
  }
  score = 0;
  turn = false;
  computerChoice();
};

// Will make colors blink when invoked
let blinkGreen = () => {
  greenButton.style.backgroundColor = "white";
  setTimeout(() => {
    greenButton.style.backgroundColor = "green";
  }, 400);
};

let blinkYellow = () => {
  yellowButton.style.backgroundColor = "white";
  setTimeout(() => {
    yellowButton.style.backgroundColor = "yellow";
  }, 400);
};

let blinkRed = () => {
  redButton.style.backgroundColor = "white";
  setTimeout(() => {
    redButton.style.backgroundColor = "red";
  }, 400);
};

let blinkBlue = () => {
  blueButton.style.backgroundColor = "white";
  setTimeout(() => {
    blueButton.style.backgroundColor = "blue";
  }, 400);
};

// Computer reads through predetermined Array at start of game.
// Game speeds up after round 5 and
let computerChoice = () => {
  if (turn === false) {
    loopTimes = 0;
    score++;
    scoreDisplay.innerText = score;
    turn = true;
    if (score <= 5) {
      loopStop = setInterval(() => {
        if (loopTimes < score) {
          if (cpuPicks[loopTimes] === 0) {
            blinkGreen();
          }
          if (cpuPicks[loopTimes] === 1) {
            blinkYellow();
          }
          if (cpuPicks[loopTimes] === 2) {
            blinkRed();
          }
          if (cpuPicks[loopTimes] === 3) {
            blinkBlue();
          } else if (loopTimes === score) {
          }
          loopTimes++;
        }
      }, 1000);
    } else if (score > 5 && score <= 10) {
      loopStop = setInterval(() => {
        if (loopTimes < score) {
          if (cpuPicks[loopTimes] === 0) {
            blinkGreen();
          }
          if (cpuPicks[loopTimes] === 1) {
            blinkYellow();
          }
          if (cpuPicks[loopTimes] === 2) {
            blinkRed();
          }
          if (cpuPicks[loopTimes] === 3) {
            blinkBlue();
          } else if (loopTimes === score) {
          }
          loopTimes++;
        }
      }, 900);
    } else if (score > 10 && score <= 15) {
      loopStop = setInterval(() => {
        if (loopTimes < score) {
          if (cpuPicks[loopTimes] === 0) {
            blinkGreen();
          }
          if (cpuPicks[loopTimes] === 1) {
            blinkYellow();
          }
          if (cpuPicks[loopTimes] === 2) {
            blinkRed();
          }
          if (cpuPicks[loopTimes] === 3) {
            blinkBlue();
          } else if (loopTimes === score) {
          }
          loopTimes++;
        }
      }, 700);
    } else if (score > 15) {
      loopStop = setInterval(() => {
        if (loopTimes < score) {
          if (cpuPicks[loopTimes] === 0) {
            blinkGreen();
          }
          if (cpuPicks[loopTimes] === 1) {
            blinkYellow();
          }
          if (cpuPicks[loopTimes] === 2) {
            blinkRed();
          }
          if (cpuPicks[loopTimes] === 3) {
            blinkBlue();
          } else if (loopTimes === score) {
          }
          loopTimes++;
        }
      }, 600);
    }
  }
};

// Player Functions
// If player guesses correctly, but still not at last round. Keep going = first (if)
// If player guess correctly and array is equal to round amount. Win = second (else if)
// If player guesses incorretly, reset game to 0, clear arrays. Lose = third (else if)
let testChoice = () => {
  if (playerPicks.length === cpuPicks.length && playerPicks[score - 1] === cpuPicks[score - 1]) {
    turn = false;
    setTimeout(() => {
      playGame();
    }, 1000);
    clearInterval(loopStop);
  } else if (playerPicks[playerPicks.length - 1] != cpuPicks[playerPicks.length - 1]) {
    // You lost! Press start to play again.

    clearInterval(loopStop);
  } else if (playerPicks[score - 1] === cpuPicks[score - 1]) {
    // Good job go next round!
    turn = false;
    setTimeout(() => {
      computerChoice();
    }, 1000);
    playerPicks = [];
    clearInterval(loopStop);
  }
};

//////////////////// Event Listeners ////////////////////

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
