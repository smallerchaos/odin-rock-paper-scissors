// Note: rock, paper, scissors henceforth referred to as "rps"

// IF Javascript is enabled, remove the no Javascript text.
const body = document.querySelector("body");
const noJs = document.getElementById("no-javascript");
noJs.remove();

// HTML Elements variables
// Get rounds HTML

const getRoundsContainer = document.querySelector(".get-rounds-container")
const roundsInput = document.querySelector(".rounds-input");
const submitRoundsButton = document.querySelector(".submit-rounds");
submitRoundsButton.addEventListener("click", (event) => {
    totalRounds = getNumberOfRounds();
    console.log(`totalRounds = ${totalRounds}`);
});
const roundsInputErrorElement = document.querySelector(".get-rounds-container .error-message");

// // Display rounds HTML
const roundsContainer = document.querySelector(".rounds-container");
const currentRoundElement = document.querySelector(".current-round");
const totalRoundsElement = document.querySelector(".total-rounds");

// RPS HTML
const rpsContainer = document.querySelector(".rps-container")
const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", () => {
    console.log("You clicked rock!");
});
const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", () => {
    console.log("You clicked paper!");
});
const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", () => {
    console.log("You clicked scissors!");
});

// Scores HTML
const playerScoreElement = document.querySelector(".player-score");
const computerScoreElement = document.querySelector(".computer-score");

// Choices HTML
const choiceContainer = document.querySelector(".choice-container");
const playerChoiceElement = document.querySelector(".player-choice");
const computerChoiceElement = document.querySelector(".computer-choice");

// //Results HTML
const resultContainer = document.querySelector(".result-container");
const resultElement = document.querySelector(".result");
const nextRoundButton = document.querySelector(".next-round");
nextRoundButton.addEventListener("click", () => {
    console.log("You clicked next round!");
});

// // Game Over HTML
const gameResultElement = document.querySelector(".game-result");
const newGameButton = document.querySelector(".new-game");
newGameButton.addEventListener("click", () => {
    console.log("You clicked new game!");
});

// Universal variables
let totalRounds;
getRoundsContainer.classList.toggle("hidden");

// GET total rounds logic
function getNumberOfRounds () {
    if (roundsInput.value <= 0) {
        roundsInputErrorElement.classList.remove("hidden");
        roundsInputErrorElement.textContent = "Please select a number greater than 0. >:("
    } else {
        roundsInputErrorElement.classList.add("hidden");
        console.log(`roundsInput's value = ${roundsInput.value}`);
        return roundsInput.value;
    }
}

// DISPLAY rounds in UI
// function initiateDisplayRounds() {
//     getRounds.remove();

//     const displayRoundsTitle = document.createElement("h2");
//     displayRoundsTitle.textContent = "Rounds";
//     displayRounds.appendChild(displayRoundsTitle);

//     const roundsCountainer = document.createElement("div");
//     roundsCountainer.className = "rounds-container";

//     current.textContent = 1;
//     roundsCountainer.appendChild(current);

//     const ofText = document.createElement("span");
//     ofText.textContent = " of ";
//     roundsCountainer.appendChild(ofText);

//     total.textContent = totalRounds;
//     roundsCountainer.appendChild(total);

//     displayRounds.appendChild(roundsCountainer);
//     body.appendChild(displayRounds);

//     getPlayerChoice();
// }


// SET computer choice of rps
function setComputerChoice () {
    // COMPUTE a random number
    let choice = Math.floor(Math.random()*3)+1;

    // SET a number to be rock, paper, or scissors
    if (choice == 1) {
        console.log(`Computer chose rock`);
        return `rock`;
    } else if (choice == 2) {
        console.log(`Computer chose paper`);
        return `paper`;
    } else if (choice == 3) {
        console.log(`Computer chose scissors`);
        return `scissors`;
    }
}

// GET player choice for rps
function getPlayerChoice () {
    let choice;
    
    const rockButton = document.createElement("button");
    rockButton.textContent = "Rock";
    rockButton.addEventListener("click", () => {
        console.log(`you clicked rock`);
        choice = "rock";
        console.log(`your choice is ${choice}`);
    });
    rpsContainer.appendChild(rockButton);

    const paperButton = document.createElement("button");
    paperButton.textContent = "Paper";
    paperButton.addEventListener("click", () => {
        console.log(`you clicked paper`);
        choice = "paper";
        console.log(`your choice is ${choice}`);
    });
    rpsContainer.appendChild(paperButton);

    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Scissors";
    scissorsButton.addEventListener("click", () => {
        console.log(`you clicked scissors`);
        choice = "scissors";
        console.log(`your choice is ${choice}`);
    });
    rpsContainer.appendChild(scissorsButton);

    body.appendChild(rpsContainer);
}

// DETERMINE if computer or player wins
function didPlayerWin(playerChoice, computerChoice) {

    // IF there is a tie, THEN start over with SET computer choice and OBTAIN player choice
    // This recursive function also doesn't work so let's assume you don't get a tie because, for some reason, the score returns [0,0,0] when you get a tie...
    if (playerChoice == computerChoice) {
        alert(`You chose ${playerChoice} and computer also chose ${computerChoice}. It's a tie! Try again.`)
        console.log(`It's a tie!`)
        didPlayerWin(getPlayerChoice(),setComputerChoice());

    // ELSEIF player choice wins computer choice, return true
    } else if (playerChoice == `rock` && computerChoice == `scissors` ||
    playerChoice == `paper` && computerChoice == `rock` ||
    playerChoice == `scissors` && computerChoice == `paper`) {
        alert(`Computer chose ${computerChoice}. You win!`)
        console.log(`You won!`)
        return true;
    
    // ELSE if player didn't win and it isn't a tie, then computer won
    } else {
        alert(`Computer chose ${computerChoice}. Computer won. :(`)
        console.log(`Computer won`);
        return false;
    }
    // ENDIF
}

// runRounds(getNumberOfRounds(), game(didPlayerWin(getPlayerChoice(),setComputerChoice())));

// DETERMINE if another game needs to be run in order to fulfill the number of rounds OBTAINED from user
function runRounds (rounds) {
    console.log(`Starting runRounds`);
    const totalRounds = rounds;
    let isGameOver = false;
    let playerScore = 0;
    let computerScore = 0;
    let totalScore = 0;
    let gameOutcome;

    // WHILE the number of requisite rounds is not fulfilled, run games
    while (isGameOver == false) {
        gameOutcome = game(didPlayerWin(getPlayerChoice(),setComputerChoice()));
        playerScore += gameOutcome[0];
        computerScore += gameOutcome[1];
        totalScore += gameOutcome[0] + gameOutcome[1];
        console.log(`In runRounds, gameOtucome = ${gameOutcome}, playerScore = ${playerScore}, computerScore = ${computerScore}, totalScore = ${totalScore}`);

        console.log(`isGameOver = ${isGameOver}`);
        // IF the totalScore (computer + player scores = number of rounds) < requisite rounds, continue running games
        if (totalScore < totalRounds) {
            console.log(`total Score in if runRounds = ${totalScore}`);
            isGameOver = false;
            console.log(`Keep going! playerScore < gameScore in runRounds`);
        
        // ELSE totalScore = requisite rounds, so you can stop running games
        } else {
            isGameOver = true;
            console.log(`Bro, it's over. playerScore >= gameScore in runRounds`);
        }
    } ;
}

// COMPUTE the computer and player score from a single game
function game (winner) {
    console.log(`Starting game...`)
    let playerScore = 0;
    let computerScore = 0;

    // IF true, add score to player
    if (winner == true) {
        playerScore ++;
        console.log(`playerScore in game = ${playerScore}`);
    } 
    // ELSE IF false, add score to computer
    else if (winner == false) {
        computerScore ++;
        console.log(`computerScore in game = ${computerScore}`);
    }
    //´ENDIF

    // RETURN computer score and player score
    const scores = [playerScore, computerScore];
    console.log(`Game finished. Score = ${scores} with type of ${typeof(scores)}`);
    return scores;
}

// runRounds(getNumberOfRounds());

// initiateGetRounds();