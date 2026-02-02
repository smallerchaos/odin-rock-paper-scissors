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



// OBTAIN number of rounds
function getNumberOfRounds () {
    let rounds;
    let isRoundsValid = false;

    // GET number of rounds
    rounds = prompt(`How many rounds do you want to play?`);

    // VALIDATE if the rounds number is actually a number
    while (isRoundsValid == false) {

        // IF rounds is not a number, null, or undefined, prompt a round
        // This recursive function doesn't work so let's assume the user inputs a number for now
        if (isNaN(+rounds) == true ||
        rounds == null ||
        rounds == undefined ||
        rounds == "") {
            console.log(`That's not a number...`);
            isRoundsValid = false;
            getNumberOfRounds();
        // ELSE it's a number and that's what we want
        } else if (isNaN(+rounds) == false) {
            isRoundsValid = true;
            console.log(`So you want to play ${rounds} rounds, huh?`);
            return +rounds;
        }
    }
}

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

// WHILE all rounds are not complete, keep playing the game
// function receives true or false and true increases player score and false increases computer score
// WHEN player score + computer score = number of desired rounds, game is over

runRounds(getNumberOfRounds());
// game(didPlayerWin(getPlayerChoice(),setComputerChoice()));