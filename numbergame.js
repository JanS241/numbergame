
// numbergame javascript


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive;
};

function askName() {
  var person = prompt("Met welke naam wilt u meespelen?", "Guus Geluk");
  var paragraaf2 = document.querySelector("p.groet");
  if (person != null) {
    
    alert('welkom: ' + person);
    return
  }
};

function askNumber() {
  var guess = prompt('Geef uw getal in:  ( 1-25) ', 0);
  return guess;
};

function compare(number1, number2) {
  if (number1 == number2) return true;
  else return false;
};

function result1(equal) {
  var paragraaf = document.querySelector("p.uitslag");
  if (equal) alert("Gefeliciteerd, u hebt gewonnen!!");
  else alert("helaas, volgende keer beter.");
  
  return;

 };

function guessNumber() {
  askName();
  var clientNumber = askNumber();
  var compNumber = getRandomIntInclusive(1, 25);
  //var compNumber = 14; was om te testen
  var equal1 = compare(clientNumber, compNumber);
  result1(equal1);
  return
};




