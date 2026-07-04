const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
let result = document.querySelector("#result");

const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");

addButton.addEventListener("click", () => {
  const sum = parseFloat(num1.value) + parseFloat(num2.value);
  result.textContent = `Result: ${sum}`;
});

subtractButton.addEventListener("click", () => {
  const difference = parseFloat(num1.value) - parseFloat(num2.value);
  result.textContent = `Result: ${difference}`;
});

multiplyButton.addEventListener("click", () => {
  const product = parseFloat(num1.value) * parseFloat(num2.value);
  result.textContent = `Result: ${product}`;
});

divideButton.addEventListener("click", () => {
  const quotient = parseFloat(num1.value) / parseFloat(num2.value);
  result.textContent = `Result: ${quotient}`;
});