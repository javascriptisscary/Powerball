"use strict"

function powerball() {
  
  var first =  document.getElementById("first");
  var second =  document.getElementById("second");
  var third =  document.getElementById("third");
  var fourth =  document.getElementById("fourth");
  var fifth =  document.getElementById("fifth");
  var powerball =  document.getElementById("powerball");
  
  //for first 5 numbers grab a random number 1-69
  function rando(number) {
    do {
      var random = Math.floor(Math.random() *100);
    }
    while (random >69)
    
    return number.innerHTML = random;
  }
  
  //for powerball number grab a random number 1-26
  function powerNumber(number) {
     do {
      var random = Math.floor(Math.random() *100);
    }
    while (random >26)
    
    return number.innerHTML = random;
  }
  
  rando(first);
  rando(second);
  rando(third);
  rando(fourth);
  rando(fifth);
  powerNumber(powerball);
}


powerball();

