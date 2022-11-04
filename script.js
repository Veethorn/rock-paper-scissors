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

function playRound(playerSelection, computerSelection) {
      
      if (playerSelection=="rock" && computerSelection=="paper")
      return alert("You went with rock and the computer with paper: Bad luck, you lost...")
      else if (playerSelection=="rock" && computerSelection=="rock")
      return alert("Humm, you both went with rock: It's a tie.")
      else if (playerSelection=="rock" && computerSelection=="scissors")
      return alert("You went with rock and the computer with scissors: Congrats, you won!"); 

      if (playerSelection=="paper" && computerSelection=="scissors")
      return alert("You went with paper and the computer with scissors: Bad luck, you lost...")
      else if (playerSelection=="paper" && computerSelection=="paper")
      return alert("Humm, you both went with paper: It's a tie.")
      else if (playerSelection=="paper" && computerSelection=="rock")
      return alert("You went with paper and the computer with rock: Congrats, you won!"); 

      if (playerSelection=="scissors" && computerSelection=="rock")
      return alert("You went with scissors and the computer with rock: Bad luck, you lost...")
      else if (playerSelection=="scissors" && computerSelection=="scissors")
      return alert("Humm, you both went with scissors: It's a tie.")
      else if (playerSelection=="scissors" && computerSelection=="paper")
      return alert("You went with scissors and the computer with paper: Congrats, you won!"); 
      else return alert("Humm, I don't recognize that weapon... Please try again!")
}

let playerInput = prompt("Choose your weapon: rock, paper or scissors!").toUpperCase();
const playerSelection = playerInput.toLowerCase(); 
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

    


