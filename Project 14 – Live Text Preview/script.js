const textInput = document.querySelector('#textInput');
let textPreview = document.querySelector('#textPreview');

textInput.addEventListener('input', ()=>{
  textPreview.textContent = textInput.value;
});