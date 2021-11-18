//Smoke test
console.log("hello, javascript still working");

const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const redButton = document.getElementById("red-button");
const blueButton = document.getElementById("blue-button");
let scoreDisplay = document.getElementById("score-display")

yellowButton.addEventListener("click", () => {
  console.log("Clicked Yellow Button")
} )

greenButton.addEventListener("click", () => {
  console.log("Clicked Green Button")
} )

redButton.addEventListener("click", () => {
  console.log("Clicked Red Button")
} )

blueButton.addEventListener("click", () => {
  console.log("Clicked blue Button")
} )
