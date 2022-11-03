let greeting="Rock, Paper, Scissors!";
console.log(greeting);

function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"]
    let computerInput = computerChoice[Math.floor(Math.random()*computerChoice.length)]
    console.log(computerInput);
}



