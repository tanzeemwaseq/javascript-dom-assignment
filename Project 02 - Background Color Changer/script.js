const button = document.querySelector('#changeColor')
const body = document.querySelector('body')

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i=0;i<6;i++){
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener('click', () => {
  const randomColor = generateRandomColor();
  document.body.style.backgroundColor = randomColor;

});