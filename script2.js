// SET variables for computer and player choice for rock, paper, scissors (henceforth "rps")

let computerChoice;
let playerChoice;
let isPlayerChoiceValid = false;

// SET computer choice of rps
// TODO: make this a function

computerChoice = Math.floor(Math.random()*3)+1;
if (computerChoice == 1) {
    computerChoice = "rock";
} else if (computerChoice == 2) {
    computerChoice = "paper";
} else if (computerChoice == 3) {
    computerChoice = "scissors";
}
console.log(`Computer choice = ` + computerChoice);

// OBTAIN player choice for rps

while (isPlayerChoiceValid == false) {
    playerChoice = prompt('Please choose "rock", "paper", or "scissors".');
    console.log("playerChoice = " + playerChoice + ' which is a type of ' + typeof(playerChoice));

    if (playerChoice == null ||
    playerChoice == undefined ||
    playerChoice == "" || isNaN(playerChoice) == false) {
        console.log("wut");
        alert(`Hmm... try again...`);
        isPlayerChoiceValid = false;
    } else if (String(playerChoice.toLowerCase()) == "rock" ||
        String(playerChoice.toLowerCase()) == "paper" ||
        String(playerChoice.toLowerCase()) == "scissors") {
            playerChoice = playerChoice.toLowerCase();
            isPlayerChoiceValid = true;
    } else {
        alert(`That's not one of the choices...`);
        isPlayerChoiceValid = false;
    }
}

function didPlayerWin() {
    if (playerChoice == computerChoice) {
        // IF there is a tie, THEN start over with SET computer choice and OBTAIN player choice
        console.log("It's a tie.")
        return null;
    }

    // COMPARE computer choice to player choice
    // DETERMINE if computer or player wins
    else if (playerChoice == `rock` && computerChoice == `scissors` ||
    playerChoice == `paper` && computerChoice == `rock` ||
    playerChoice == `scissors` && computerChoice == `paper`) {
        console.log(`Player wins!`);
        return true;
    } else {
        console.log(`Computer wins. :/`);
        return false;
    }
}

didPlayerWin();