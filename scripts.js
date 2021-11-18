//Smoke test
console.log("hello, javascript still working");

// Main components of game DOM
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const redButton = document.getElementById("red-button");
const blueButton = document.getElementById("blue-button");
let scoreDisplay = document.getElementById("score-display");
let RNG = Math.floor(Math.random() * 4);

// Player can click on every button through these Event Listeners.
let playerChoice = () => {};
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
let computerChoice = () => {
  if (RNG === 0) {
    console.log("Yellow Clicked");
  } else if (RNG === 1) {
    console.log("Green Clicked");
  } else if (RNG === 2) {
    console.log("Red Clicked");
  } else if (RNG === 3) {
    console.log("Blue Clicked");
  }
};
console.log(computerChoice());
