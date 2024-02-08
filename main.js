const options = ["rock", "paper", "scissors"];
const roundsToPlay = 5;

let playerScore = 0;
let computerScore = 0;
let round = 1;
let endGame = false;

function greeting() {
    alert("Welcome to my Rock, Paper, Scissors Game!");
    alert("The game is simple!")
    alert("Choose an option: Rock, Paper or Scissors for each round.\nThere are 5 rounds. \nThe winner will be determined at the end.") 
    alert("You will be playing against the AI that wants to dominate the world! \nHelp us win against this villain!")
    alert("Let's start! \nHave fun!!")
}

function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
}

function getPlayerSelection() {
    while(true){
        let userChoice = prompt("Rock, Paper, Scissors, Shoot!");
        if (!userChoice) {
            cancelGame();
            return;
        }
        let userChoiceLowerCase = userChoice.toLowerCase();

        if(options.includes(userChoiceLowerCase)) {
            return userChoiceLowerCase;
        } else {
            alert('Invalid selection!!\nPlease choose one of the following options:\nRock\nPaper\nScissors');
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Round ${round}: Player: ${playerSelection} | Computer: ${computerSelection} - Draw!`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return `Round ${round}: Player: ${playerSelection} | Computer: ${computerSelection} - You win!`;
    } else {
        computerScore++;
        return `Round ${round}: Player: ${playerSelection} | Computer: ${computerSelection} - You lose!`;
    }
}

function cancelGame() {
    if (confirm("Do you wanna quit the game?")) {
        alert("Thank you for playing! 😊");
        endGame = true;
    }
}

function game() {
    greeting();
    while (round <= roundsToPlay && !endGame) {
        const playerSelection = getPlayerSelection();
        if (endGame) break;
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        round++;
        alert(`Round ${round}: Player: ${playerSelection} | Computer: ${computerSelection}`) 
    }

    if (!endGame) {
        console.log(`Game over! Final Score - Player: ${playerScore} | Computer: ${computerScore}`);
        alert(`Game over! Final Score - Player: ${playerScore} | Computer: ${computerScore}`);
    }
}

game();