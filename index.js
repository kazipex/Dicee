function getDice1Number(){
    var dice1Number
    var random1Number = Math.floor(Math.random()*6);
    dice1Number = random1Number + 1;
    return dice1Number;
}
function getDice2Number(){
    var dice2Number
    var random2Number = Math.floor(Math.random()*6);
    dice2Number = random2Number + 1;
    return dice2Number;
}

var player1Score = 0;
var player2Score = 0;

function diceRoll(){
    var rolledDice1Number = getDice1Number();
if(rolledDice1Number === 1){
    document.querySelector("img").setAttribute("src", "./images/dice1.png")
}
if(rolledDice1Number === 2){
    document.querySelector("img").setAttribute("src", "./images/dice2.png")
}
if(rolledDice1Number === 3){
    document.querySelector("img").setAttribute("src", "./images/dice3.png")
}
if(rolledDice1Number === 4){
    document.querySelector("img").setAttribute("src", "./images/dice4.png")
}
if(rolledDice1Number === 5){
    document.querySelector("img").setAttribute("src", "./images/dice5.png")
}
if(rolledDice1Number === 6){
    document.querySelector("img").setAttribute("src", "./images/dice6.png")
    return rolledDice1Number
}
    var rolledDice2Number = getDice2Number();
if(rolledDice2Number === 1){
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice1.png")
}
if(rolledDice2Number === 2){
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice2.png")
}
if(rolledDice2Number === 3){
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice3.png")
}
if(rolledDice2Number === 4){
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice4.png")
}
if(rolledDice2Number === 5){
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice5.png")
}
if(rolledDice2Number === 6){
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice6.png")
    return rolledDice2Number
}

    if(rolledDice1Number > rolledDice2Number){
player1Score = player1Score + 1;
document.querySelectorAll("p")[2].innerHTML = player1Score;
document.querySelectorAll("p")[5].innerHTML = "Player 1 is the winner.";}
else if(rolledDice2Number > rolledDice1Number){
player2Score = player2Score + 1;
document.querySelectorAll("p")[4].innerHTML = player2Score;
document.querySelectorAll("p")[5].innerHTML = "Player 2 is the winner.";
}
else if(rolledDice2Number === rolledDice1Number){
    player2Score = player2Score + 1;
    document.querySelectorAll("p")[2].innerHTML = player1Score;
    player1Score = player1Score + 1;
    document.querySelectorAll("p")[4].innerHTML = player2Score;
    document.querySelectorAll("p")[5].innerHTML = "It's a draw!";
}

}




document.querySelector("button").addEventListener("click" ,function runGame(){
    diceRoll()
}
)