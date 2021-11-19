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

let score = 4;
let cpuPicks = [];
let playerPicks = [];
let turn = false;
let winOrLose = true;
let loopTimes = 0;
let loopStop;

//Computer pushes a number to array cpuPicks[]
// Need to loop through numbers everytime. Make a loop that reads from start of Array and stops when it reaches playerPicks.length + 1
let computerChoice = () => {
  if (turn === false) {
    loopTimes = 0;
    score++;
    scoreDisplay.innerText = score;
    loopStop = setInterval(() => {
      if (loopTimes < score) {
        if (cpuPicks[loopTimes] === 0) {
          console.log("Green Clicked");
        }
        if (cpuPicks[loopTimes] === 1) {
          console.log("Yellow Clicked");
        }
        if (cpuPicks[loopTimes] === 2) {
          console.log("Red Clicked");
        }
        if (cpuPicks[loopTimes] === 3) {
          console.log("Blue Clicked");
        } else if (loopTimes === score) {
          console.log("Players Turn");
        }
        loopTimes++;
      }
    }, 1000);
  }
  turn = true;
  console.log(cpuPicks);
  console.log("Score number: " + score);
  console.log("Loop number " + loopTimes);
};

//Player Functions
// Three condtions to set
// If player guesses correctly, but still not at last round. Keep going
// If player guess correctly and array is equal to round amount. Win
// If player guesses incorretly, reset game to 0, clear arrays.
let testChoice = () => {
  if (playerPicks.length === cpuPicks.length) {
    console.log("Good job, you win");
  }
};
console.log(playerPicks);
// Event Listeners

// Player can click on every button through these Event Listeners.
greenButton.addEventListener("click", () => {
  if (turn === true) {
    playerPicks.push(0);
    testChoice();
  }
});
yellowButton.addEventListener("click", () => {
  if (turn === true) {
    playerPicks.push(1);
    testChoice();
  }
});
redButton.addEventListener("click", () => {
  if (turn === true) {
    playerPicks.push(2);
    testChoice();
  }
});
blueButton.addEventListener("click", () => {
  if (turn === true) {
    playerPicks.push(3);
    testChoice();
  }
});

//Temporary CPU button
testButton.addEventListener("click", () => {
  // Make run after so many seconds. Don't pass after score turn..
  computerChoice();
});

// Play Game randomizes 21 numbers in cpuPicks array, runs computerChoice.
let playGame = () => {
  for (let i = 0; i < 21; i++) {
    let RNG = Math.floor(Math.random() * 4);
    cpuPicks.push(RNG);
  }
  computerChoice();
};

startButton.addEventListener("click", () => {
  cpuPicks = [];
  playerPicks = [];
  turn = false;
  score = 4;
  playGame();
});
