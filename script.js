
function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"]
    let computerInput = computerChoice[Math.floor(Math.random()*computerChoice.length)]
    return (computerInput);
}

for (let round = 0; round < 50; round++) {

	function playRound(playerSelection, computerSelection) {
        

        const rockWin = "You chose rock and the computer scissors: Congrats, you won!"
        const rockLose = "You chose rock and the computer paper: Bad luck, you lost..."
        const rockTie = "Humm, you both went with rock: It's a tie."
		      
		      if (playerSelection=="rock" && computerSelection=="paper")
		      return alert(rockLose) 
		      else if (playerSelection=="rock" && computerSelection=="rock")
		      return alert (rockTie) 
		      else if (playerSelection=="rock" && computerSelection=="scissors")
		      return alert(rockWin) 
        
        const paperWin = "You chose paper and the computer rock: Congrats, you won!"
        const paperLose = "You chose paper and the computer scissors: Bad luck, you lost..."
        const paperTie = "Humm, you both went with paper: It's a tie."
		
		      if (playerSelection=="paper" && computerSelection=="scissors")
		      return alert(paperLose)
		      else if (playerSelection=="paper" && computerSelection=="paper")
		      return alert(paperTie)
		      else if (playerSelection=="paper" && computerSelection=="rock")
		      return alert(paperWin); 
        
        const scissorsWin = "You chose scissors and the computer paper: Congrats, you won!"
        const scissorsLose = "You chose scissors and the computer rock: Bad luck, you lost..."
        const scissorsTie = "Humm, you both went with scissors: It's a tie."
		
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




    


