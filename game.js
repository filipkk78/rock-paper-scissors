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
        computerChoice = "rock"
    } else if (randomNumber === 2) {
        computerChoice = "paper"
    } else if (randomNumber === 3) {
        computerChoice = "scissors"
    }
}

let humanChoice;
function getHumanChoice() {
    do {
    humanChoice = prompt("Enter your choice: ").toLowerCase();
    } while(humanChoice!="rock"&&humanChoice!="paper"&&humanChoice!="scissors")
}
let humanScore = 0
let computerScore = 0
function playRound() {
        if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You chose rock. Computer chose scissors. You win.")
        humanScore++
        console.log(`You have ${humanScore} points. Computer has ${computerScore}.`)
    }   else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You chose paper. Computer chose rock. You win.")
        humanScore++
        console.log(`You have ${humanScore} points. Computer has ${computerScore}.`)
    }   else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You chose scissors. Computer chose paper. You win.")
        humanScore++
        console.log(`You have ${humanScore} points. Computer has ${computerScore}.`)
    }   //Possibilities where player wins
        else if(humanChoice == "rock" && computerChoice == "paper") {
        console.log("You chose rock. Computer chose paper. Computer wins.")
        computerScore++
        console.log(`You have ${humanScore} points. Computer has ${computerScore}.`)
    }   else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You chose paper. Computer chose scissors. Computer wins.")
        computerScore++
        console.log(`You have ${humanScore} points. Computer has ${computerScore}.`)
    }   else if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You chose scissors. Computer chose rock. Computer wins.")
        computerScore++
        console.log(`You have ${humanScore} points. Computer has ${computerScore}.`)
    }   //Possibilities where computer wins
        else if(humanChoice == "rock" && computerChoice == "rock") {
        console.log("You chose rock. Computer chose rock. It's a tie.")
        console.log(`You have ${humanScore} points. Computer has ${computerScore}.`)
    }   else if(humanChoice == "paper" && computerChoice == "paper") {
        console.log("You chose paper. Computer chose paper. It's a tie.")
        console.log(`You have ${humanScore} points. Computer has ${computerScore}.`)
    }   else if(humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("You chose scissors. Computer chose scissors. It's a tie.")
        console.log(`You have ${humanScore} points. Computer has ${computerScore}.`)
    }   //Possibilities where it's a tie
}



function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);;
    }
    if(humanScore>computerScore) {
        console.log("Congratulations, you win!")
    } else if(humanScore<computerScore) {
        console.log("Computer wins!")
    } else if(humanScore==computerScore) {
        console.log("It's a tie!")
    } 
}
playGame();