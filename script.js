// Note: rock, paper, scissors henceforth referred to as "rps"

// ---------- Variables ---------- //

// HTML Elements variables
// Get rounds HTML

const getRoundsContainer = document.querySelector(".get-rounds-container")
const roundsInput = document.querySelector(".rounds-input");
const submitRoundsButton = document.querySelector(".submit-rounds");
const roundsInputErrorElement = document.querySelector(".get-rounds-container .error-message");

// // Display rounds HTML
const gameInfoContainer = document.querySelector(".game-info-container");
const roundsContainer = document.querySelector(".rounds-container");
const currentRoundElement = document.querySelector(".current-round");
const totalRoundsElement = document.querySelector(".total-rounds");

// RPS HTML
const rpsContainer = document.querySelector(".rps-container")
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

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


// // Game Over HTML
const gameResultContainer = document.querySelector(".game-result-container");
const gameResultElement = document.querySelector(".game-result");
const newGameButton = document.querySelector(".new-game");

// Universal variables
let currentRound = 1;
let totalRounds = 0;
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

// ---------- Logic ---------- //

// IF Javascript is enabled, remove the no Javascript text and show the beginning of the game.
const body = document.querySelector("body");
const noJs = document.getElementById("no-javascript");
noJs.remove();
getRoundsContainer.classList.toggle("hidden");

// CLICK submit round -> show rps
submitRoundsButton.addEventListener("click", (event) => {
    getNumberOfRounds();
});

function getNumberOfRounds () {
    if (roundsInput.value <= 0) {
        roundsInputErrorElement.textContent = "Please select a number greater than 0. >:(";

        roundsInputErrorElement.classList.remove("hidden");
    } else {
        totalRounds = roundsInput.value;
        totalRoundsElement.textContent = totalRounds;
        currentRoundElement.textContent = currentRound;

        roundsInputErrorElement.classList.add("hidden");
        getRoundsContainer.classList.add("hidden");
        gameInfoContainer.classList.remove("hidden");
        rpsContainer.classList.remove("hidden");
    }
    roundsInput.value = "";
}

// CLICK rps choice -> show round results
rockButton.addEventListener("click", () => {
    runRound("rock");
});
paperButton.addEventListener("click", () => {
    runRound("paper");
});
scissorsButton.addEventListener("click", () => {
    runRound("scissors");
});

function runRound (choice) {
    playerChoice = choice;
    playerChoiceElement.textContent = choice;
    computerChoice = setComputerChoice();
    computerChoiceElement.textContent = computerChoice;

    roundResult();

    rpsContainer.classList.add("hidden");
    choiceContainer.classList.remove("hidden");
}

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

function roundResult () {
    if (playerChoice === computerChoice) {
        // If it's a tie
        resultElement.textContent = "It's a tie!";
        nextRoundButton.classList.add("hidden");

        const tryAgainButton = document.createElement("button");
        tryAgainButton.textContent = "Try again";
        resultContainer.appendChild(tryAgainButton);

        tryAgainButton.addEventListener("click", () => {
            tryAgainButton.remove();
            nextRoundButton.classList.remove("hidden");
            resultContainer.classList.add("hidden");
            choiceContainer.classList.add("hidden");
            rpsContainer.classList.remove("hidden");
        });

        resultContainer.classList.remove("hidden");

    } else if (playerChoice == `rock` && computerChoice == `scissors` ||
    playerChoice == `paper` && computerChoice == `rock` ||
    playerChoice == `scissors` && computerChoice == `paper`) {
        // IF player wins
        playerScore += 1;
        playerScoreElement.textContent = playerScore;

        if ((playerScore + computerScore) == totalRounds) {
            // If that was the last round
            gameResult(); 
        } else {
            resultElement.textContent = "You won!";
            resultContainer.classList.remove("hidden");
        }

    } else {
        // ELSE computer won
        computerScore += 1;
        computerScoreElement.textContent = computerScore;

        if ((playerScore + computerScore) == totalRounds) {
            // If that was the last round
            gameResult();
        } else {
            resultElement.textContent = "The computer won!";
            resultContainer.classList.remove("hidden");
        }
    }
}

// Start next round
nextRoundButton.addEventListener("click", () => {
    currentRound += 1;
    currentRoundElement.textContent = currentRound;

    resultContainer.classList.add("hidden");
    choiceContainer.classList.add("hidden");
    rpsContainer.classList.remove("hidden");
});

// DETERMINE who won the game overall
function gameResult () {
    resultContainer.classList.add("hidden");
    gameResultContainer.classList.remove("hidden");

    if (playerScore > computerScore) {
        gameResultElement.textContent = "You won the game!";
    } else if (playerScore < computerScore) {
        gameResultElement.textContent = "The computer won the game. ;_;";
    } else if (playerScore == computerScore) {
        gameResultElement.textContent = "The game was a tie...";
    }
}

// CLICK new game -> start new game
newGameButton.addEventListener("click", () => {
    // Reset the game information
    totalRounds = 0;
    currentRound = 1;
    playerScore = 0;
    computerScore = 0;

    // Hide game UI and show starting UI
    gameInfoContainer.classList.add("hidden");
    choiceContainer.classList.add("hidden");
    resultContainer.classList.add("hidden");
    gameResultContainer.classList.add("hidden");
    getRoundsContainer.classList.remove("hidden");
});