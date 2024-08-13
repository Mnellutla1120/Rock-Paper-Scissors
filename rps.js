// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler



alert("Welcome to Rock Paper Scissors!"); 
let humanResp = prompt("Rock, Paper, Scissors, Shoot!");
let humanAns = humanResp.toLowerCase();

//makes sure human only inputs rock, paper, or scissors 
function getHumanChoice(humanAns){
  
if (humanAns == "rock" || humanAns == "paper" || humanAns == "scissors"){
  return humanAns;
}

  else {
      return alert("HOW DARE YOU BREAK THE RULES OF ROCK-PAPER-SCISSORS"); 
  }
}




function getComputerChoice(){
  let compAnswer = ""; 
  let choice = getRandomInt(3); 
  if (choice === 0){
    compAnswer = "rock";
  }
  else if (choice === 1){
compAnswer = "paper";
  }
  else if (choice === 2){
compAnswer = "scissors";
  }
  return compAnswer; 

}

const humanSelection = getHumanChoice();
const computerSelecion = getComputerChoice();
let compScore = 0;
let humanScore = 0;


function playRound(humanChoice,computerChoice){

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
  else if (humanChoice == "paper" && computerChoice == "rock"){
console.log("You win! Paper beats Rock.");
humanScore++;
  }
  else if (humanChoice == "scissors" && computerChoice == "paper"){
console.log("You win! Scissors beats Paper.");
humanScore++;
  }
  else if (humanChoice == computerChoice){
     console.log("It's a draw. No one wins.");
  }
    


      console.log("Computer: " + compScore);
  console.log("You: " + humanScore); 
    

}
getHumanChoice(humanResp);
getComputerChoice();
playRound(humanSelection.toLowerCase(), computerSelection);






