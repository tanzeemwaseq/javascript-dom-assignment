clock = document.querySelector("#clock");

function updateClock() {
  const time = new Date();
  clock.textContent = time.toLocaleTimeString();
};

updateClock();
setInterval(updateClock, 1000);