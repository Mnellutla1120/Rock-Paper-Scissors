let humanResp = prompt("Rock, Paper, Scissors, Shoot!");


//makes sure human only inputs rock, paper, or scissors 
function getHumanChoice(humanResp){
if (humanResp.equalsIgnoreCase("Rock") || humanResp.equalsIgnoreCase("Paper") || humanResp.equalsIgnoreCase("Scissors"))){
  return humanResp;
}

  else {
      return alert("HOW DARE YOU BREAK THE RULES OF ROCK-PAPER-SCISSORS"); 
  }
}



function getComputerChoice(){
  let compAnswer = ""; 
  let choice = getRandomInt(3); 
  if (choice === 0){
    compAnswer = "Rock";
  }
  else if (choice === 1){
compAnswer = "Paper";
  }
  else if (choice === 2){
compAnswer = "Scissors";
  }
  return compAnswer; 

}

const humanSelection = getHumanChoice();
const computerSelecion = getComputerChoice();
let compScore = 0;
let humanScore = 0;


playRound(humanChoice,computerChoice){
let i = 1;
i++;
  while (i <= 5){
if (humanChoice == "rock" && computerChoice == "paper"){
console.log("You lose! Paper beats Rock.");
compScore++;
  console.log("Computer: " + compScore);
  console.log("You: " + humanScore); 
  
}
  else if (humanChoice == "paper" && computerChoice == "scissors"){
console.log("You lose! Scissors beats Paper ");
compScore++;
  }

    else if (humanChoice == "scissors" && computerChoice == "rock"){
console.log("You lose! Rock beats Scissors.");
compScore++;
  }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
console.log("You win! Rock beats Paper.");
humanScore++;
  }
  else if (humanChoice.equalsIgnoreCase == "paper" && computerChoice == "rock")){
console.log("You win! Paper beats Rock.");
humanScore++;
  }
  else if (humanChoice.equalsIgnoreCase == "scissors" && computerChoice == "paper")){
console.log("You win! Scissors beats Paper.");
humanScore++;
  }
  else if (humanChoice == computerChoice){
     console.log("It's a draw. No one wins.");
  }
    


      console.log("Computer: " + compScore);
  console.log("You: " + humanScore); 
    
  }
  
  





}

playRound(humanSelection.toLowerCase(), computerSelection);






