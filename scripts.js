//Smoke test
console.log("hello, javascript still working");

// Main components of game DOM
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const redButton = document.getElementById("red-button");
const blueButton = document.getElementById("blue-button");
const testButton = document.getElementById("test-button");
const startButton = document.getElementById("start-button");
const loseDisplay = document.getElementById("lose-display");
let scoreDisplay = document.getElementById("score-display");
let score = 0;
let cpuPicks = [];
let playerPicks = [];
let turn = false;

//Computer pulls random number from RNG to choose color
//Computer pushes a number to array cpuPicks[]

console.log(cpuPicks);
let computerChoice = () => {
  if (turn === false) {
    if (cpuPicks[score] === 0) {
      console.log("Yellow Clicked");
      scoreDisplay.innerHTML = "Yellow Clicked";
    } else if (cpuPicks[score] === 1) {
      console.log("Green Clicked");
    } else if (cpuPicks[score] === 2) {
      console.log("Red Clicked");
    } else if (cpuPicks[score] === 3) {
      console.log("Blue Clicked");
    } else {
      console.log("Not your turn");
    }
    console.log(cpuPicks);
  }
};

//Player Functions

// Event Listeners

// Player can click on every button through these Event Listeners.
yellowButton.addEventListener("click", () => {
  playerPicks.push(0);
});
greenButton.addEventListener("click", () => {
  playerPicks.push(1);
});
redButton.addEventListener("click", () => {
  playerPicks.push(2);
});
blueButton.addEventListener("click", () => {
  playerPicks.push(3);
});

//Temporary CPU button
testButton.addEventListener("click", () => {
  score++;
  // Make run after so many seconds. Don't pass after score turn..
  computerChoice();
});

function playGame() {
  score++;
  for (let i = 0; i < 21; i++) {
    let RNG = Math.floor(Math.random() * 4);
    cpuPicks.push(RNG);
  }
  computerChoice();
}

startButton.addEventListener("click", () => {
  cpuPicks = [];
  turn = false;
  playGame();
});

console.log(score);
