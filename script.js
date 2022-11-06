
function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"]
    let computerInput = computerChoice[Math.floor(Math.random()*computerChoice.length)]
    return (computerInput);
}

for (let round = 0; round < 50; round++) {

	function playRound(playerSelection, computerSelection) {
        

        const rockWin = "You won! You chose rock and the computer scissors. Congrats!"
        const rockLose = "You lost! You chose rock and the computer paper. Bad luck..."
        const rockTie = "Humm, it's a tie. You both went with rock. Try again."
		      
		      if (playerSelection=="rock" && computerSelection=="paper")
		      return alert(rockLose) 
		      else if (playerSelection=="rock" && computerSelection=="rock")
		      return alert (rockTie) 
		      else if (playerSelection=="rock" && computerSelection=="scissors")
		      return alert(rockWin) 
        
        const paperWin = "You won! You chose paper and the computer rock. Congrats!"
        const paperLose = "You lost! You chose paper and the computer scissors. Bad luck..."
        const paperTie = "Humm, it's a tie. You both went with paper. Try again."
		
		      if (playerSelection=="paper" && computerSelection=="scissors")
		      return alert(paperLose)
		      else if (playerSelection=="paper" && computerSelection=="paper")
		      return alert(paperTie)
		      else if (playerSelection=="paper" && computerSelection=="rock")
		      return alert(paperWin); 
        
        const scissorsWin = "You won! You chose scissors and the computer paper. Congrats!"
        const scissorsLose = "You lost! You chose scissors and the computer rock. Bad luck..."
        const scissorsTie = "Humm, it's a tie. You both went with scissors. Try again."
		
		      if (playerSelection=="scissors" && computerSelection=="rock")
		      return alert(scissorsLose)
		      else if (playerSelection=="scissors" && computerSelection=="scissors")
		      return alert(scissorsTie)
		      else if (playerSelection=="scissors" && computerSelection=="paper")
		      return alert(scissorsWin); 
		
		      else if (playerSelection=="gafaralho")
		      return alert("O GAFA GANHA SEMPRE CRL!!!")
		      else return alert("Humm, I don't recognize that weapon... Please try again!")

		}

    
let playerInput = prompt("Choose your weapon: rock, paper or scissors!").toUpperCase();
const playerSelection = playerInput.toLowerCase(); 
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

}




    


