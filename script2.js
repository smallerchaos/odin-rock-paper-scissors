// SET variables for computer and player choice for rock, paper, scissors (henceforth "rps")

let computerChoice;
let playerChoice;

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