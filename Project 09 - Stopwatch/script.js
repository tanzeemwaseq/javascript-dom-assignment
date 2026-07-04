const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");
let secondsDisplay = document.querySelector("#seconds");

let seconds = 0;
let interval;

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(() => {
    seconds++;
    secondsDisplay.textContent = seconds;
  },1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
  seconds = 0;
  secondsDisplay.textContent = seconds;
  clearInterval(interval);
});