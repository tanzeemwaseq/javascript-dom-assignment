randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Random Number:", randomNumber);

const guessInput = document.querySelector("#guessInput");
const guessValue = document.querySelector("#guessValue");

guessInput.addEventListener("input", function () {
  const userGuess = parseInt(guessInput.value);

  userGuess < randomNumber ? (guessValue.textContent = "Too low!") : userGuess > randomNumber ? (guessValue.textContent = "Too high!") : (guessValue.textContent = "Correct!");
});