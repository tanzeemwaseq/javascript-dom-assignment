const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');
const counterDisplay = document.querySelector('#counter');

let counter = 0;

incrementBtn.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
});

decrementBtn.addEventListener('click', () => {
    counter--;
    counterDisplay.textContent = counter;
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    counterDisplay.textContent = counter;
});