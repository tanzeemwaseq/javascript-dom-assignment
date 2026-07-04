const input = document.querySelector('#textInput');
const charCount = document.querySelector('#charCount');

input.addEventListener('input', () => {
  const count = input.value.length;
  charCount.textContent = count;
})