
// Setting up the game
let secretNumber = 7;
let attempts = 0;
let maxAttempts = 3;

function playGame() {
    // getElementById("userInput") finds the input box by its ID name
    // .value gets what the player typed inside it
    let playerGuess = document.getElementById("userInput").value;
    
    // Count this attempt
    attempts = attempts + 1;
    
    // Check the guess
    let result = checkGuess(playerGuess);
    
    // Show feedback
    showMessage(result);
    
    // Check if game is over
    if (attempts >= maxAttempts) {
        endGame();
    }
}

function checkGuess(guess) {
    // Convert text to number
    let guessNumber = Number(guess);
    
    // Compare with secret
    if (guessNumber > secretNumber) {
        return "Too high!";
    }
    if (guessNumber < secretNumber) {
        return "Too low!";
    }
    if (guessNumber === secretNumber) {
        return "You got it!";
    }
}

function showMessage(message) {
    // getElementById finds the element with id="feedback"
    let feedbackArea = document.getElementById("feedback");
    
    // innerText changes the text inside that element
    feedbackArea.innerText = message;
}

function endGame() {
    // querySelector finds the first button element
    let button = document.querySelector("button");
    button.disabled = true;
    
    // Change the message text
    document.getElementById("message").innerText = "Game Over! The number was " + secretNumber;
}