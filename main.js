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

function getPlayerSelection() {
    while(true){
        let userChoice = prompt("Please enter your selection:");
        let userChoiceLowerCase =  userChoice.toLowerCase();

        if(options.includes(userChoiceLowerCase)){
            return userChoiceLowerCase;
        }else{
            alert('Invalid selection!!\nPlease choose one of the following options:\nRock\nPaper\nScissors');
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Player: ${playerSelection} | Computer ${computerSelection} - draw!`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return `Player: ${playerSelection} | Computer ${computerSelection} - you win!`;
    } else {
        return `Player: ${playerSelection} | Computer ${computerSelection} - you lose!`;      
    }
}

const playerSelection =  getPlayerSelection();
const computerSelection= computerPlay();
console.log(playRound(playerSelection, computerSelection));
