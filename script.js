function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    if (number === 0){
        return ("paper");
    }
    else if (number === 1){
        return ("scissor");
    }
    else if (number === 2){
        return ("rock");
    }
}

function getHumanChoice(){
    let input = prompt("ROCK PAPER SCISSOR!").toLowerCase();
    return input;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice){
     if(humanChoice === "rock" && computerChoice === "scissor"){
        console.log("You win! Rock beats Scissor!");
        return "human";
    }
    else if(humanChoice === "scissor" && computerChoice === "paper"){
        console.log("You win! Scissor beats Paper!");
        return "human";
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats Rock!");
        return "human";
    }
    else if(computerChoice === "rock" && humanChoice === "scissor"){
        console.log("You loose! Rock beats Scissor!");
        return "computer";
        
    }
    else if(computerChoice === "scissor" && humanChoice === "paper"){
        console.log("You loose! Scissor beats Paper!");
        return "computer";
    }
    else if(computerChoice === "paper" && humanChoice === "rock"){
        console.log("You loose! Paper beats Rock!");
        return "computer";
    }
    else {
        console.log("Give it another try!");
        return "tie";
    }
}

function playGame(){
    for(let i = 1; i<=5 ; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let score = playRound(humanChoice, computerChoice);
        if (score === "human"){
            humanScore++;
        }
        else if(score === "computer"){
            computerScore++;
        }
    }

    if (humanScore > computerScore){
        console.log("You Win!");
    }
    else if(computerScore > humanScore){
        console.log("You Lose!");
    }
    else{
        console.log("Its a tie!");
    }
}

playGame();