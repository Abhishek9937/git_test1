function getComputerChoice () {
    let computer;
    random = Math.floor(Math.random()*3);
    if(random == 0){
        computer = "Rock";
    }
    else if (random == 1){
        computer = "Paper";
    }
    else {
        computer = "Scissors";
    }
    return computer.toLowerCase();

}

function selection(playerSelection, computerSelection){
    let result, score;
    if (playerSelection == "rock" && computerSelection == "paper"){
    result = "You lost! Paper beats Rock";
    score = -1;
    }

     else if (playerSelection == "scissors" && computerSelection == "paper"){
    result = "You won! Scissors beats Paper";
    score = 1;
     }

    else  if (playerSelection == "paper" && computerSelection == "rock"){
    result = "You won! Paper beats Rock";
    score = 1;
    }

    else  if (playerSelection == "paper" && computerSelection == "scissors"){
    result = "You lost! Scissors beats Paper";
    score =  -1;
    }

    else  if (playerSelection == "scissors" && computerSelection == "rock"){
    result = "You lost! Rock beats Scissors";
    score =  -1;
    }

    else  if (playerSelection == "rock" && computerSelection == "scissors"){
    result = "You won! Rock beats Scissors";
    score = 1;
    }

    else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "paper"){
    result = "Play again";
    score = 0;
    }

    else 
    result  = "error";

    return score;

}

function game (){

    
     let finalScore = 0;
    
    for (let i=0; i< 5; i++){
        let gameScore = selection(playerSelection, computerSelection);
        finalScore = finalScore + gameScore;
        console.log(gameScore);
    }

    if (finalScore >= 0){
        return "You are Winner!"
    }
    else{
       return "You are Loser!"
    }
}


const playerSelection = prompt("Enter one of your choice");
const computerSelection = getComputerChoice();
console.log(game());