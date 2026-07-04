// &#10006

const passwordInput = document.querySelector('#password');
const togglePasswordButton = document.querySelector('#togglePassword');

togglePasswordButton.addEventListener('click', () => {
  if(togglePasswordButton.checked) {
    passwordInput.type = 'text';
  }
  else {
    passwordInput.type = 'password';
  }
});