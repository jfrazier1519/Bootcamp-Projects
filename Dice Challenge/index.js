

// Dice Roll 1 //

// Store the output of random rumber 1-6 in randomNumber*
// Create a function which returns a random dice image on call
var randomNumber1 = Math.floor(Math.random() * 6);
function diceRoll1() {
    var output = [
      "images/dice1.png",
      "images/dice2.png",
      'images/dice3.png',
      'images/dice4.png',
      'images/dice5.png',
      'images/dice6.png',
    ];

    var randomDice = output[randomNumber1];
    return randomDice;

}

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", diceRoll1());

// Dice Roll 2 //
var randomNumber2 = Math.floor((Math.random() * 6));
function diceRoll2() {
    var output = [
      "images/dice1.png",
      "images/dice2.png",
      'images/dice3.png',
      'images/dice4.png',
      'images/dice5.png',
      'images/dice6.png',
    ];

    var randomDice = output[randomNumber2];
    return randomDice;

}

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", diceRoll2());

// Change Text on Outcome //
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
