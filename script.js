// Note: rock, paper, scissors (henceforth "rps")

// SET computer choice of rps

function setComputerChoice () {
    // SET computer choice of rps
    let choice = Math.floor(Math.random()*3)+1;
    if (choice == 1) {
        return `rock`;
    } else if (choice == 2) {
        return `paper`;
    } else if (choice == 3) {
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
            alert(`Hmm... Try again...`);
            isChoiceValid = false;
        } else if (String(choice.toLowerCase()) == `rock` ||
        String(choice.toLowerCase()) == `paper` ||
        String(choice.toLowerCase()) == `scissors`) {
            isChoiceValid = true;
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
        alert(`Computer also chose ` + computerChoice + `. It's a tie! Try again.`)
        didPlayerWin(getPlayerChoice(),setComputerChoice());
    }

    // COMPARE computer choice to player choice
    // DETERMINE if computer or player wins
    else if (playerChoice == `rock` && computerChoice == `scissors` ||
    playerChoice == `paper` && computerChoice == `rock` ||
    playerChoice == `scissors` && computerChoice == `paper`) {
        alert(`Computer chose ` + computerChoice + `. You win!`)
        return true;
    } else {
        alert(`Computer chose ` + computerChoice + `. Computer won. :(`)
        return false;
    }
}

didPlayerWin(getPlayerChoice(),setComputerChoice());