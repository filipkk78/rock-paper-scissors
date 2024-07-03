let randomNumber
let computerChoice  
function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
    return randomNumber;
  }
  
  getRandomNumber(1,3);
  console.log(randomNumber);
function getComputerChoice() {
    getRandomNumber(1, 3);
    
}