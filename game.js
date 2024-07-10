let randomNumber;
function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
    return randomNumber;
}

let computerChoice;
function getComputerChoice() {
    getRandomNumber(1, 3);
    if (randomNumber === 1) {
        return computerChoice = "rock"
    } else if (randomNumber === 2) {
        return computerChoice = "paper"
    } else if (randomNumber === 3) {
        return computerChoice = "scissors"
    }
}

let humanChoice;
let btnMenu = document.querySelector(".selection");
btnMenu.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id){
        case "rock":
            humanChoice = "rock";
            getComputerChoice()
            playRound();
            break;
        case "paper":
            humanChoice = "paper";
            getComputerChoice()
            playRound();
            break;
        case "scissors":
            humanChoice = "scissors";
            getComputerChoice()
            playRound();
            break;

    }
})

let humanScore = 0;
let humanScoreCounter = document.querySelector("#humanScoreCounter");
humanScoreCounter.textContent = `Human score: ${humanScore}`;
let computerScore = 0;
let computerScoreCounter = document.querySelector("#computerScoreCounter");
computerScoreCounter.textContent = `Computer score: ${computerScore}`;

let roundResult = document.querySelector("#roundResult");

function playRound() {
    if(humanScore==0&&computerScore==0){
        humanScoreCounter.textContent = `Human score: ${humanScore}`;
        computerScoreCounter.textContent = `Computer score: ${computerScore}`;
    }
        if(humanChoice == "rock" && computerChoice == "scissors") {
            roundResult.textContent = "You chose rock. Computer chose scissors. You win.";
            humanScore++
            humanScoreCounter.textContent = `Human score: ${humanScore}`;
    }   else if(humanChoice == "paper" && computerChoice == "rock") {
            roundResult.textContent = "You chose paper. Computer chose rock. You win.";
            humanScore++
            humanScoreCounter.textContent = `Human score: ${humanScore}`;
    }   else if(humanChoice == "scissors" && computerChoice == "paper") {
            roundResult.textContent = "You chose scissors. Computer chose paper. You win.";
            humanScore++
            humanScoreCounter.textContent = `Human score: ${humanScore}`;
    }   //Possibilities where player wins
        else if(humanChoice == "rock" && computerChoice == "paper") {
            roundResult.textContent = "You chose rock. Computer chose paper. Computer wins.";
            computerScore++
            computerScoreCounter.textContent = `Computer score: ${computerScore}`;
    }   else if(humanChoice == "paper" && computerChoice == "scissors") {
            roundResult.textContent = "You chose paper. Computer chose scissors. Computer wins."
            computerScore++
            computerScoreCounter.textContent = `Computer score: ${computerScore}`;
    }   else if(humanChoice == "scissors" && computerChoice == "rock") {
            roundResult.textContent = "You chose scissors. Computer chose rock. Computer wins.";
            computerScore++
            computerScoreCounter.textContent = `Computer score: ${computerScore}`;
    }   //Possibilities where computer wins
        else if(humanChoice == "rock" && computerChoice == "rock") {
            roundResult.textContent = "You chose rock. Computer chose rock. It's a tie.";
    }   else if(humanChoice == "paper" && computerChoice == "paper") {
            roundResult.textContent = "You chose paper. Computer chose paper. It's a tie.";
    }   else if(humanChoice == "scissors" && computerChoice == "scissors") {
            roundResult.textContent = "You chose scissors. Computer chose scissors. It's a tie.";
    }   //Possibilities where it's a tie
    if(humanScore==5) {
    roundResult.textContent = "You win";
    computerScore = 0;
    humanScore = 0;
    } else if(computerScore==5) {
    roundResult.textContent = "Computer wins";
    computerScore = 0;
    humanScore = 0;
    }
}
