// SET variables for computer and player choice for rock, paper, scissors (henceforth "rps")

let computerChoice;
let playerChoice;
let isPlayerChoiceValid = false;

// SET computer choice of rps

computerChoice = Math.floor(Math.random()*3)+1;
console.log(computerChoice);
if (computerChoice == 1) {
    computerChoice = "rock";
} else if (computerChoice == 2) {
    computerChoice = "paper";
} else if (computerChoice == 3) {
    computerChoice = "scissors";
}
console.log(computerChoice);

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
            console.log("Yay! Thanks for picking something!");
            playerChoice = playerChoice.toLowerCase();
            isPlayerChoiceValid = true;
    } else {
        alert(`That's not one of the choices...`);
        isPlayerChoiceValid = false;
    }
}