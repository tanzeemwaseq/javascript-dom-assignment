const banglaMarks = document.querySelector("#bangla");
const englishMarks = document.querySelector("#english");
const mathMarks = document.querySelector("#math");

const calculateButton = document.querySelector("#calculateBtn");

const total = document.querySelector("#total");
const average = document.querySelector("#average");
const grade = document.querySelector("#grade");

const calculateTotal = (bangla, english, math) => {
  return bangla + english + math;
};

const calculateAverage = (bangla, english, math) => {
  return (bangla + english + math) / 3;
};

const calculateGrade = (average) => {
  if (average >= 80) {
    return "A+";
  } else if (average >= 70) {
    return "A";
  } else if (average >= 60) {
    return "A-";
  } else if (average >= 50) {
    return "B";
  } else if (average >= 40) {
    return "C";
  } else if (average >= 33) {
    return "D";
  } else {
    return "F";
  }
};

calculateButton.addEventListener("click", () => {
  const bangla = parseFloat(banglaMarks.value);
  const english = parseFloat(englishMarks.value);
  const math = parseFloat(mathMarks.value);


  total.textContent = "Total: " + calculateTotal(bangla, english, math);
  average.textContent = "Average: " + calculateAverage(bangla, english, math);
  grade.textContent = "Grade: " + calculateGrade(calculateAverage(bangla, english, math));
});