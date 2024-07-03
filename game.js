let randomNumber
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
        computerChoice = "Rock"
    } else if (randomNumber === 2) {
        computerChoice = "Paper"
    } else if (randomNumber === 3) {
        computerChoice = "Scissors"
    }
}//Gets computer's choice and assigns the corresponding string
getComputerChoice();
console.log(computerChoice);