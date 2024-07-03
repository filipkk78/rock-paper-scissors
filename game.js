let randomNumber;
function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
    return randomNumber;
}//Gets random number including both minimal and maximum number 

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
}//Gets computer's choice and assigns the corresponding string

let humanChoice;
let humanChoiceInput;
function getHumanChoice() {
    do {
    humanChoiceInput = prompt("Enter your choice: ");
    if (humanChoiceInput == "Scissors"||humanChoiceInput == "scissors"||humanChoiceInput == "SCISSORS") {
        humanChoice = "scissors"
    } else if (humanChoiceInput == "Rock"||humanChoiceInput == "rock"||humanChoiceInput == "ROCK") {
        humanChoice = "rock"
    } else if (humanChoiceInput == "Paper"||humanChoiceInput == "paper"||humanChoiceInput == "PAPER") {
        humanChoice = "paper"
    } else {
        console.log("Please enter rock, paper or scissors.")
    }}
    while(humanChoice!="rock"&&humanChoice!="paper"&&humanChoice!="scissors")
}//Asks the player their choice and assigns it to a variable
getHumanChoice();
console.log(humanChoice);
