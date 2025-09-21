
// Game state - simple variables, no arrays needed
let secretNumber = 0;
let attempts = 0;
let score = 0;
let currentRound = 1;
let maxNumber = 10;

// Initialize first round
setupRound();

function setupRound() {
    // Set difficulty based on round
    if (currentRound === 1) {
        maxNumber = 10;
    }
    if (currentRound === 2) {
        maxNumber = 20;
    }
    if (currentRound === 3) {
        maxNumber = 30;
    }
    
    // Math.random() is built into JavaScript - no import needed!
    // It gives a random decimal between 0 and 1
    // Math.floor() rounds down to whole number
    secretNumber = Math.floor(Math.random() * maxNumber) + 1;
    
    // Reset round state
    attempts = 0;
    
    // Update display
    document.getElementById("round").innerText = currentRound;
    document.getElementById("message").innerText = "Guess between 1 and " + maxNumber;
    document.getElementById("feedback").innerText = "";
    document.getElementById("attemptsDisplay").innerText = "";
}

// SEQUENTIAL CHAIN PATTERN: Each function calls the next
function startChain() {
    captureGuess();
}

function captureGuess() {
    let guess = document.getElementById("userInput").value;
    
    // Check if player entered something
    if (guess === "") {
        document.getElementById("feedback").innerText = "Enter a number!";
        return;
    }
    
    // Check if number is in valid range
    if (guess < 1 || guess > maxNumber) {
        document.getElementById("feedback").innerText = "Number must be 1-" + maxNumber;
        return;
    }
    
    // Count this attempt
    attempts = attempts + 1;
    
    // Continue chain
    checkGuess(Number(guess));
}

function checkGuess(guess) {
    let result = "";
    
    if (guess > secretNumber) {
        result = "Too high!";
    } else if (guess < secretNumber) {
        result = "Too low!";
    } else {
        result = "Correct!";
    }
    
    // Continue chain
    displayFeedback(result, guess === secretNumber);
}

function displayFeedback(result, isCorrect) {
    document.getElementById("feedback").innerText = result;
    
    // Show attempts count
    document.getElementById("attemptsDisplay").innerText = 
        "Attempt " + attempts + " of 3";
    
    // Check if round should end
    if (isCorrect) {
        // Player won this round
        endRound(true);
    } else if (attempts >= 3) {
        // Player used all attempts and lost
        endRound(false);
    } else {
        // Player still has attempts left
        let attemptsLeft = 3 - attempts;
        document.getElementById("message").innerText = attemptsLeft + " attempts left";
    }
    
    // NOTE: The above could be written shorter as:
    // if (isCorrect || attempts >= 3) { endRound(isCorrect); }
    // But separate conditions are clearer for beginners
}

function endRound(won) {
    if (won) {
        let points = (4 - attempts) * 10;
        score = score + points;
        document.getElementById("score").innerText = score;
        document.getElementById("message").innerText = "Nice! +" + points + " points!";
    } else {
        document.getElementById("message").innerText = "The number was " + secretNumber;
    }
    
    // Show continue button instead of automatic timing
    if (currentRound < 3) {
        document.getElementById("feedback").innerText = "Click Continue for next round!";
        
        // Find the button and change it
        let continueButton = document.querySelector("button");
        continueButton.innerText = "Continue";
        continueButton.onclick = continueToNextRound;
    } else {
        document.getElementById("feedback").innerText = "Click Finish to see final score!";
        
        // Find the button and change it  
        let finishButton = document.querySelector("button");
        finishButton.innerText = "Finish Game";
        finishButton.onclick = finishGame;
    }
}

function checkGameEnd() {
    if (currentRound < 3) {
        // Continue to next round
        currentRound = currentRound + 1;
        setupRound();
    } else {
        // End game
        finalizeGame();
    }
}

function finalizeGame() {
    let message = "Game Over! Final Score: " + score;
    
    if (score > 70) {
        message = message + " - Expert!";
    } else if (score > 40) {
        message = message + " - Good!";
    } else {
        message = message + " - Keep practicing!";
    }
    
    document.getElementById("message").innerText = message;
    document.querySelector("button").disabled = true;
}

// Helper functions for button clicks
function continueToNextRound() {
    checkGameEnd();
}

function finishGame() {
    finalizeGame();
}
