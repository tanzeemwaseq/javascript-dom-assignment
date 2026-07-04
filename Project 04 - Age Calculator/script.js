const dateInput = document.querySelector("#dateinput");
const calculateButton = document.querySelector("#calculate");
const result = document.querySelector("#result");

console.log("Hello, World!");


function calculateAge(birthYear) {
  let today = new Date();
  today = (parseInt(today.getFullYear()));
  birthYear = parseInt(dateInput.value);
  let age = today - birthYear;
  console.log(today);
  console.log(birthYear);
  return age;
}

calculateButton.addEventListener("click", ()=>{
  result.textContent = "Your age: " +calculateAge(dateInput.value) + " Years.";
});
