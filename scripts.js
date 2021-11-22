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

let score = 0;
let cpuPicks = [];
let playerPicks = [];
let turn = false;
let winOrLose = true;
let loopTimes = 0;
let loopStop;
let playerTimeOut;

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
  greenPop.play();
  setTimeout(() => {
    greenButton.style.backgroundColor = "#b0db43";
  }, 400);
};

let blinkYellow = () => {
  yellowButton.style.backgroundColor = "white";
  yellowPop.play();
  setTimeout(() => {
    yellowButton.style.backgroundColor = "#f49d37";
  }, 400);
};

let blinkRed = () => {
  redButton.style.backgroundColor = "white";
  redPop.play();
  setTimeout(() => {
    redButton.style.backgroundColor = "#d72638";
  }, 400);
};

let blinkBlue = () => {
  blueButton.style.backgroundColor = "white";
  bluePop.play();
  setTimeout(() => {
    blueButton.style.backgroundColor = "#3f88c5";
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

// Function to display player turn and turn = true
const playerTurn = () => {
  let playerTime = clearTimeout
  turn = true;
  textDisplay.innerHTML = "Your turn!";
  if (turn === true) {
    let playerTime = setTimeout(() => {
      textDisplay.innerHTML = "You lose! Took too long";
      cpuPicks = [];
    }, 5000);
  }
};

// Computer reads through predetermined Array at start of game.
// Run playerTurn after certain time depending on score.
let computerChoice = () => {
  if (turn === false) {
    textDisplay.innerHTML = "Wait for computer to finish";
    loopTimes = 0;
    score++;
    scoreDisplay.innerText = "Round " + score;
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
// If player guesses incorretly, reset game to 0, clear arrays. Lose = third (else if)
// If player guess correctly and array is equal to round amount. Win = second (else if)
let testChoice = () => {
  if (playerPicks.length === cpuPicks.length && playerPicks[score - 1] === cpuPicks[score - 1]) {
    turn = false;
    setTimeout(() => {
      playGame();
    }, 1000);
    clearInterval(loopStop);
  } else if (playerPicks[playerPicks.length - 1] != cpuPicks[playerPicks.length - 1]) {
    // You lost! Press start to play again.
    textDisplay.innerHTML = "You lost. Press Start to try again";
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
// testButton.addEventListener("click", () => {
//   // Make run after so many seconds. Don't pass after score turn..
//   computerChoice();
// });

startButton.addEventListener("click", () => {
  playGame();
});
