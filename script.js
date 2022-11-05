
function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"]
    let computerInput = computerChoice[Math.floor(Math.random()*computerChoice.length)]
    return (computerInput);
}

for (let round = 0; round < 5; round++) {

	function playRound(playerSelection, computerSelection) {
        

        const rockWin = "You chose rock and the computer scissors: Congrats, you won!"
        const rockLose = "You chose rock and the computer paper: Bad luck, you lost..."
        const rockTie = "Humm, you both went with rock: It's a tie."
		      
		      if (playerSelection=="rock" && computerSelection=="paper")
		      return console.log(rockLose)
		      else if (playerSelection=="rock" && computerSelection=="rock")
		      return console.log(rockTie)
		      else if (playerSelection=="rock" && computerSelection=="scissors")
		      return console.log(rockWin); 
        
        const paperWin = "You chose paper and the computer rock: Congrats, you won!"
        const paperLose = "You chose paper and the computer scissors: Bad luck, you lost..."
        const paperTie = "Humm, you both went with paper: It's a tie."
		
		      if (playerSelection=="paper" && computerSelection=="scissors")
		      return console.log(paperLose)
		      else if (playerSelection=="paper" && computerSelection=="paper")
		      return console.log(paperTie)
		      else if (playerSelection=="paper" && computerSelection=="rock")
		      return console.log(paperWin); 
        
        const scissorsWin = "You chose scissors and the computer paper: Congrats, you won!"
        const scissorsLose = "You chose scissors and the computer rock: Bad luck, you lost..."
        const scissorsTie = "Humm, you both went with scissors: It's a tie."
		
		      if (playerSelection=="scissors" && computerSelection=="rock")
		      return console.log(scissorsLose)
		      else if (playerSelection=="scissors" && computerSelection=="scissors")
		      return console.log(scissorsTie)
		      else if (playerSelection=="scissors" && computerSelection=="paper")
		      return console.log(scissorsWin); 
		
		      else if (playerSelection=="gafaralho")
		      return console.log ("O GAFA GANHA SEMPRE CRL!!!")
		      else return console.log("Humm, I don't recognize that weapon... Please try again!")

		}

    
let playerInput = prompt("Choose your weapon: rock, paper or scissors!").toUpperCase();
const playerSelection = playerInput.toLowerCase(); 
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

}




    


