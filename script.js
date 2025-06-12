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

const result = document.querySelector("#result");
const final = document.querySelector("#final");
const recentScore = document.querySelector("#score");

function playRound(humanChoice , computerChoice){
     if(humanChoice === "rock" && computerChoice === "scissor"){
        result.textContent ="You win! Rock beats Scissor!";
        return "human";
    }
    else if(humanChoice === "scissor" && computerChoice === "paper"){
        result.textContent ="You win! Scissor beats Paper!";
        return "human";
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        result.textContent ="You win! Paper beats Rock!";
        return "human";
    }
    else if(computerChoice === "rock" && humanChoice === "scissor"){
        result.textContent ="You loose! Rock beats Scissor!";
        return "computer";
        
    }
    else if(computerChoice === "scissor" && humanChoice === "paper"){
        result.textContent ="You loose! Scissor beats Paper!";
        return "computer";
    }
    else if(computerChoice === "paper" && humanChoice === "rock"){
        result.textContent ="You loose! Paper beats Rock!";
        return "computer";
    }
    else {
        result.textContent ="Give it another try!";
        return "tie";
    }
}

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", handleClick);
});
function handleClick(event){
    const humanChoice = event.target.value.toLowerCase();
        const computerChoice = getComputerChoice();
        let score = playRound(humanChoice, computerChoice);
        if (score === "human"){
            humanScore++;
        }
        else if(score === "computer"){
            computerScore++;
        }

        if (humanScore === 5) {
            final.textContent = "You Win!";
        } else if (computerScore === 5) {
            final.textContent = "Computer Wins";
        }
        recentScore.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
}
