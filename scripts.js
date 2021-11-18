//Smoke test
console.log("hello, javascript still working");

// Main components of game DOM
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const redButton = document.getElementById("red-button");
const blueButton = document.getElementById("blue-button");
const testButton = document.getElementById("test-button");
let scoreDisplay = document.getElementById("score-display");
let cpuPicks = [];
let playerPicks = [];

// Player can click on every button through these Event Listeners.

yellowButton.addEventListener("click", () => {
  console.log("Clicked Yellow Button");
});

greenButton.addEventListener("click", () => {
  console.log("Clicked Green Button");
});

redButton.addEventListener("click", () => {
  console.log("Clicked Red Button");
});

blueButton.addEventListener("click", () => {
  console.log("Clicked blue Button");
});

//Computer pulls random number from RNG to choose color
//Computer pushes a number to array cpuPicks
let computerChoice = () => {
  let RNG = Math.floor(Math.random() * 4);
  if (RNG === 0) {
    console.log("Yellow Clicked");
    cpuPicks.push(0);
  } else if (RNG === 1) {
    console.log("Green Clicked");
    cpuPicks.push(1);
  } else if (RNG === 2) {
    console.log("Red Clicked");
    cpuPicks.push(2);
  } else if (RNG === 3) {
    console.log("Blue Clicked");
    cpuPicks.push(3);
  }
};

testButton.addEventListener("click", () => {
  computerChoice();
});

console.log(cpuPicks);
