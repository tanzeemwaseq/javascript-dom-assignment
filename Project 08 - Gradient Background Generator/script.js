const generateBtn = document.querySelector("#calculate");
const body = document.querySelector("body");

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i<6; i++) {
    color += letters[Math.floor(Math.random() *letters.length)];
  }
  return color;
}

generateBtn.addEventListener("click", () => {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
});