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
let greenPop = document.getElementById("green-pop");
let yellowPop = document.getElementById("yellow-pop");
let redPop = document.getElementById("red-pop");
let bluePop = document.getElementById("blue-pop");
let timerDisplay = document.getElementById("timer-display");

let score = 0;
let cpuPicks = [];
let playerPicks = [];
let turn = false;
let winOrLose = true;
let loopTimes = 0;
let loopStop;
let playerTime;
let count = 5;
let countStop;

//////////////////// Functions ////////////////////

// Play Game randomizes 21 numbers in cpuPicks array, runs computerChoice.
let standBy = () => {};

let playGame = () => {
  clearInterval(loopStop);
  clearInterval(countStop);
  timerDisplay.innerHTML = count;
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

let gameOver = () => {
  scoreDisplay.innerHTML = "-";
  textDisplay.innerHTML = "You lose! Press start to play again.";
  cpuPicks = [];
  playerPicks = [];
  count = 5;
  clearTimeout(playerTime);
  clearInterval(loopStop);
  clearInterval(countStop);
};

// Will make colors blink and play audio when invoked. https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
// Running a function to return original color after some time. https://stackoverflow.com/questions/11901074/javascript-call-a-function-after-specific-time-period - found setInterval() via this link too.
let blinkGreen = () => {
  greenButton.style.backgroundColor = "white";
  greenPop.play();
  setTimeout(() => {
    greenButton.style.backgroundColor = "#4CAF50";
  }, 400);
};

let blinkYellow = () => {
  yellowButton.style.backgroundColor = "white";
  yellowPop.play();
  setTimeout(() => {
    yellowButton.style.backgroundColor = "#FFEB3B";
  }, 400);
};

let blinkRed = () => {
  redButton.style.backgroundColor = "white";
  redPop.play();
  setTimeout(() => {
    redButton.style.backgroundColor = "#F44336";
  }, 400);
};

let blinkBlue = () => {
  blueButton.style.backgroundColor = "white";
  bluePop.play();
  setTimeout(() => {
    blueButton.style.backgroundColor = "#2196F3";
  }, 400);
};

// These functions control speeds after rounds 0, 5, 10, 15
const roundStart = () => {
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
};

const afterRoundFive = () => {
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
};

const afterRoundTen = () => {
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
  }, 800);
};

const afterRoundFifteen = () => {
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
};

// Function to display player turn and turn = true. 5 second timer or else gameOver();
const playerTurn = () => {
  turn = true;
  count = 5;
  textDisplay.innerHTML = "Your turn!";
  playerTime = setTimeout(() => {
    gameOver();
    clearInterval(countStop);
    timerDisplay.innerHTML = 0;
  }, 5000);
  countStop = setInterval(() => {
    if (count > 0 && turn === true) {
      count--;
      timerDisplay.innerHTML = count;
    }
  }, 1000);
};

// Computer reads through predetermined Array at start of game.
// Run playerTurn after certain time depending on score.
let computerChoice = () => {
  count = 5;
  if (turn === false) {
    textDisplay.innerHTML = "Wait for Simon";
    timerDisplay.innerHTML = count;
    loopTimes = 0;
    score++;
    scoreDisplay.innerText = "Round " + score;
    clearTimeout(playerTime);
    if (score <= 5) {
      roundStart();
      setTimeout(() => {
        playerTurn();
      }, 1000 * score);
    } else if (score > 5 && score <= 10) {
      afterRoundFive();
      setTimeout(() => {
        playerTurn();
      }, 900 * score);
    } else if (score > 10 && score <= 15) {
      afterRoundTen();
      setTimeout(() => {
        playerTurn();
      }, 800 * score);
    } else if (score > 15) {
      afterRoundFifteen();
      setTimeout(() => {
        playerTurn();
      }, 700 * score);
    }
  }
};

// Player Functions
// If player guesses correctly, but still not at last round. Keep going = first (if)
// If player guesses incorretly, reset game to 0, clear arrays. Lose = second (else if)
// If player guess correctly and array is equal to round amount. Win = third (else if)
let testChoice = () => {
  if (playerPicks.length === cpuPicks.length && playerPicks[score - 1] === cpuPicks[score - 1]) {
    turn = false;
    setTimeout(() => {
      playGame();
    }, 1000);
    clearInterval(loopStop);
    clearInterval(countStop);
  } else if (playerPicks[playerPicks.length - 1] != cpuPicks[playerPicks.length - 1]) {
    gameOver();
    clearInterval(countStop);
  } else if (playerPicks[score - 1] === cpuPicks[score - 1]) {
    turn = false;
    setTimeout(() => {
      computerChoice();
    }, 1000);
    playerPicks = [];
    clearInterval(loopStop);
    clearInterval(countStop);
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

//Temporary test button
// testButton.addEventListener("click", () => {
//   // Make run after so many seconds. Don't pass after score turn..
//   computerChoice();
// });

startButton.addEventListener("click", () => {
  playGame();
  startButton.style.backgroundColor = "white";
  setTimeout(() => {
    startButton.style.backgroundColor = "turquoise";
  }, 400);
});
