const button = document.querySelector("#Generate");
const passwordInput = document.querySelector("#password");

function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

button.addEventListener("click", () => {
  const passwordlength = 8;
  let randomPassword = generatePassword(passwordlength);
  passwordInput.value = randomPassword;

});