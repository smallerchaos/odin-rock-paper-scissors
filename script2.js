// SET variables for computer and player choice for rock, paper, scissors (henceforth "rps")

let computerChoice;
let playerChoice;
let isPlayerChoiceValid = false;

// SET computer choice of rps
// TODO: make this a function

function setComputerChoice () {
    // SET computer choice of rps
    let choice = Math.floor(Math.random()*3)+1;
    if (choice == 1) {
        console.log(`Computer choice = rock`);
        return `rock`;
    } else if (choice == 2) {
        console.log(`Computer choice = paper`);
        return `paper`;
    } else if (choice == 3) {
        console.log(`Computer choice = scissors`);
        return `scissors`;
    }
}

// OBTAIN player choice for rps

function getPlayerChoice () {
    let isChoiceValid = false;
    let choice;

    while (isChoiceValid == false) {
        choice = prompt(`Please choose "rock", "paper", or "scissors".`);

        if (choice == null ||
        choice == undefined ||
        isNaN(choice) == false) {
            console.log(`wut`);
            alert(`Hmm... Try again...`);
            isChoiceValid = false;
        } else if (String(choice.toLowerCase()) == `rock` ||
        String(choice.toLowerCase()) == `paper` ||
        String(choice.toLowerCase()) == `scissors`) {
            isChoiceValid = true;
            console.log(`Thanks for picking!`);
            console.log(`Player choice = ` + choice.toLowerCase());
            return choice.toLowerCase();
        } else {
            alert(`That's not one of the choices...`);
            isChoiceValid = false;
        }
    }

}

function didPlayerWin(playerChoice, computerChoice) {
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

didPlayerWin(getPlayerChoice(),setComputerChoice());