// Note: rock, paper, scissors henceforth referred to as "rps"

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

// OBTAIN player choice for rps
function getPlayerChoice () {
    let isChoiceValid = false;
    let choice;

    // WHILE player's choice is invalid OBTAIN another input from player
    while (isChoiceValid == false) {
        choice = prompt(`Please choose "rock", "paper", or "scissors".`);

        // IF player choice is invalid, prompt to try again
        if (choice == null ||
        choice == undefined ||
        isNaN(choice) == false) {
            alert(`Hmm... Try again...`);
            isChoiceValid = false;

        // ELSEIF player choice is valid, return true and end while
        } else if (String(choice.toLowerCase()) == `rock` ||
        String(choice.toLowerCase()) == `paper` ||
        String(choice.toLowerCase()) == `scissors`) {
            isChoiceValid = true;
            console.log(`You chose ` + choice.toLowerCase());
            return choice.toLowerCase();

        // ELSE if the player types anything else, prompt to try again
        } else {
            alert(`That's not one of the choices...`);
            isChoiceValid = false;
        }
    }
    // ENDWHILE

}

// DETERMINE if computer or player wins
function didPlayerWin(playerChoice, computerChoice) {

    // IF there is a tie, THEN start over with SET computer choice and OBTAIN player choice
    if (playerChoice == computerChoice) {
        alert(`Computer also chose ` + computerChoice + `. It's a tie! Try again.`)
        console.log(`It's a tie!`)
        didPlayerWin(getPlayerChoice(),setComputerChoice());

    // ELSEIF player choice wins computer choice, return true
    } else if (playerChoice == `rock` && computerChoice == `scissors` ||
    playerChoice == `paper` && computerChoice == `rock` ||
    playerChoice == `scissors` && computerChoice == `paper`) {
        alert(`Computer chose ` + computerChoice + `. You win!`)
        console.log(`You won!`)
        return true;
    
    // ELSE if player didn't win and it isn't a tie, then computer won
    } else {
        alert(`Computer chose ` + computerChoice + `. Computer won. :(`)
        console.log(`Computer won`);
        return false;
    }
    // ENDIF
}

function game (winner) {
    let playerScore = 0;
    let computerScore = 0;

    // IF true, add score to player
    if (winner == true) {
        playerScore ++;
    } 
    // ELSE IF false, add score to computer
    else if (winner == false) {
        computerScore ++;
    }
    //´ENDIF

    // RETURN computer score and player score
    console.log(`playerScore = ` + playerScore);
    console.log(`computerScore = ` + computerScore);
    console.log(`totalScore = ` + (playerScore + computerScore));
    return (playerScore, computerScore, playerScore + computerScore);
}

// WHILE all rounds are not complete, keep playing the game
// function receives true or false and true increases player score and false increases computer score
// WHEN player score + computer score = number of desired rounds, game is over