generateBtn =document.querySelector("#generate");
quoteDisplay = document.querySelector("#quote");

let quoteArray = [
  "To be or not to be, that is the question. - William Shakespeare",
  "Opportunity is missed by most people because it is dressed in overalls and looks like work. - Thomas Edison",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The best way to predict the future is to create it. - Peter Drucker"];


  generateBtn.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * quoteArray.length);
    quoteDisplay.textContent = quoteArray[randomIndex];
});


