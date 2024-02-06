const options = ["rock", "paper", "scissors"];
const roundsToPlay = 5;

let playerScore = 0;
let computerScore = 0;
let round = 1;

function greeting(){
    alert("Welcome to my Rock, Paper, Scissors Game! Have fun!!")
}

function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
}