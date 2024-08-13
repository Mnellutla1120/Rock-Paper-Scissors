let humanResp = prompt("Rock, Paper, Scissors, Shoot!");


function getHumanChoice(humanResp){
return humanResp; 
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


