const options = ["rock", "paper", "scissors"];
const roundsToPlay = 5;

let playerScore = 0;
let computerScore = 0;
let round = 1;
let endGame = false;
let draws = 0;

function greeting() {   
    alert("Welcome to my 👊Rock, ✋Paper, ✌️Scissors Game!");
    alert("Rock crushes scissors, scissors cut paper, and paper covers rock")
    alert("There are 5 rounds.Let's start! Have fun!! ▶️ \n\n 📢CLICK F12 (console.log) TO SEE THE RESULTS") 
}

function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
}

function getPlayerSelection() {    

    while(true){
        let userChoice = prompt("Rock, Paper, Scissors, Shoot!").toLowerCase();

        if (!userChoice) {
            cancelGame();
            return;
        }

        if(options.includes(userChoice)) {
            return userChoice;
        } else {
            alert('Invalid selection!!\nPlease choose one of the following options:\nRock\nPaper\nScissors');
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        draws++;        
        return "Draw";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return "You won 😍! " + playerSelection + " beats " + computerSelection;        
    } else {
        computerScore++;
        return "You lost 😫! " + computerSelection + " beats " + playerSelection;        
    }
}

function cancelGame() {    
    if (confirm("Do you wanna quit the game?")) {       
        alert("Bye! Thank you for playing! 😊");
        endGame = true;
    }
}

function game() {
    greeting();
    
    while (round <= roundsToPlay && !endGame) {      
        const playerSelection = getPlayerSelection();
        
        if(endGame) break;

        const computerSelection = computerPlay();        
        let roundResult = playRound(playerSelection, computerSelection);

        console.log(`===== ROUND ${round} =====`);        
        console.log(` 🧑‍💻PLAYER: ${playerSelection} ---> score: ${playerScore} \n 💻COMPUTER: ${computerSelection} ---> score: ${computerScore} \n 😕DRAWS: ---> ${draws}`)
        console.log(roundResult);
        round++;        
    }

    if (!endGame) {
        console.log(`==== FINAL RESULT ==== \n 💀Game over! Final Score - Player: ${playerScore} | Computer: ${computerScore} | Draws:${draws}  `);
        if(playerScore > computerScore){
            console.log(`You WON the game! 🎉 `);
        } else if(playerScore < computerScore){
            console.log(`You LOST the game! 😭 `);
        } else {
            console.log(`TIED GAME`); 
        }
    }
}

game();