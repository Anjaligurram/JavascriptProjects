const secretNo=Math.floor(Math.random()*100)+1;
let attempts=0;
const maxAttempts=5;
function startGame() {
    alert("Welcome to the number guessing game! You have 5 attempts to guess the secret number that is in between 1 and 100");
    playGame();
}
function playGame() {
    while(attempts<maxAttempts) {
        let guess=parseInt(prompt("Attempt "+(attempts+1)+":Enter your guess"));
    if(isNaN(guess)||guess<1||guess>100) {
        alert("Please enter a valid number between 1 and 100.");
        continue;
    }
        attempts++;
    if(guess===secretNo) {
        alert("Congratulations! You've guessed the number!");
        return;
    } else if(guess<secretNo) {
        alert("The number is low.");
    } else {
        alert("The number is high.");
    }
    }
    alert("Game over! The correct number was "+secretNo+".");
}
startGame();