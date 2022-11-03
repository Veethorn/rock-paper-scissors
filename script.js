let greeting="Rock, Paper, Scissors!";
console.log(greeting);

function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"]
    let computerInput = computerChoice[Math.floor(Math.random()*computerChoice.length)]
    return (computerInput);
}

// write a function where the user writes a value
// write a function that plays a single round of rock paper scissors.
// The function should return a message 

function test () {
    let user = prompt ("Your play", "");
    let userChoice = user 
    return (userChoice);
   
}

function versus () {
    if (test () == "rock") return getComputerChoice (); 
    else return "testing";
}

function versus2 () {
    let computerChoice = getComputerChoice()
    console.log (computerChoice);
    if (computerChoice == "rock") return "rock!"; 
    else if (computerChoice == "paper") return "paper!";
    else return "scissors!!";
}