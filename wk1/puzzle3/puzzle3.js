
// Game data - simple separate variables instead of object
let gameSecret = 0;
let gameTries = 0;
let gamePoints = 0;
let gameRound = 1;
let gameRange = 10;

// Initialize game
gameController('init');

// ORCHESTRATOR PATTERN: One controller manages everything
function gameController(action) {
    if (action === 'init') {
        initializeGame();
    } else if (action === 'guess') {
        processGuess();
    } else if (action === 'nextRound') {
        advanceRound();
    } else if (action === 'endGame') {
        concludeGame();
    }
}

function initializeGame() {
    // Set difficulty based on round
    gameRange = 10
    
    // Math is built into JavaScript - no import needed!
    // Math.random() gives random decimal 0-1
    // Math.floor() rounds down to whole number
    // Learn more: https://www.w3schools.com/js/js_math.asp
    gameSecret = Math.floor(Math.random() * gameRange) + 1;
    
    // Reset round data
    gameTries = 0;
    
    // Update display
    updateDisplay();
}

function processGuess() {
    let input = document.getElementById("playerInput").value;
    
    // Validate input
    if (!validateInput(input)) {
        setMessage("resultText", "Please enter a valid number!");
        return;
    }
    
    let guess = Number(input);
    gameTries = gameTries + 1;
    
    // Check guess
    let result = evaluateGuess(guess);
    
    // Update UI
    displayResult(result);
    
    // Check if round should end - three separate conditions for clarity
    if (result === "win") {
        // Player got it right
        handleRoundEnd(true);
    } else if (gameTries >= 3) {
        // Player used all attempts
        handleRoundEnd(false);
    } else {
        // Player still has attempts left - continue playing
        // (No action needed, game continues)
    }
    
    // NOTE: The above could be written shorter as:
    // if (result === "win" || gameTries >= 3) { handleRoundEnd(result === "win"); }
    // But separate conditions are clearer for beginners
}

function validateInput(input) {
    // Check if input exists AND is in valid range
    if (input && input >= 1 && input <= gameRange) {
        return true;
    } else {
        return false;
    }
}

function evaluateGuess(guess) {
    // Using explicit braces for clarity
    if (guess > gameSecret) {
        return "high";
    } else if (guess < gameSecret) {
        return "low";
    } else {
        return "win";
    }
}

function displayResult(result) {
    let message = "";
    
    // Convert result to user-friendly message
    if (result === "high") {
        message = "Too high!";
    } else if (result === "low") {
        message = "Too low!";
    } else if (result === "win") {
        message = "Perfect!";
    }
    
    // Show the feedback message
    setMessage("resultText", message);
    
    // Show attempt counter
    setMessage("attemptCount", "Attempt " + gameTries + " of 3");
    
    // Show remaining attempts only if game continues
    if (result !== "win" && gameTries < 3) {
        let attemptsLeft = 3 - gameTries;
        setMessage("statusMessage", attemptsLeft + " attempts remaining");
    }
    
    // NOTE: The condition above is the opposite of the one in processGuess():
    // Here: if (NOT win AND tries < 3) - show attempts remaining
    // There: if (win OR tries >= 3) - end the round
    // Same logic, just checking the "continue playing" case instead of "end round" case
}

function handleRoundEnd(won) {
    if (won) {
        let earned = (4 - gameTries) * 10;
        gamePoints = gamePoints + earned;
        setMessage("statusMessage", "Excellent! +" + earned + " points!");
    } else {
        setMessage("statusMessage", "The number was " + gameSecret);
    }
    
    // Show continue button instead of automatic timing
    if (gameRound < 3) {
        setMessage("resultText", "Click Continue for next round!");
        
        // Find the button element
        let continueButton = document.querySelector("button");
        // Change the button text
        continueButton.innerText = "Continue";
        // Set what happens when clicked
        continueButton.onclick = continueToNextRound;
    } else {
        setMessage("resultText", "Click Finish to see final score!");
        
        // Find the button element
        let finishButton = document.querySelector("button");
        // Change the button text
        finishButton.innerText = "Finish Game";
        // Set what happens when clicked
        finishButton.onclick = finishGame;
    }
}

function advanceRound() {
    gameRound = gameRound + 1;
    gameController('init');
}

function concludeGame() {
    let finalMsg = "Complete! Score: " + gamePoints;
    
    if (gamePoints > 70) {
        finalMsg = finalMsg + " - Master!";
    } else if (gamePoints > 40) {
        finalMsg = finalMsg + " - Nice!";
    } else {
        finalMsg = finalMsg + " - Good try!";
    }
    
    setMessage("statusMessage", finalMsg);
    document.querySelector("button").disabled = true;
}

function updateDisplay() {
    setMessage("currentRound", gameRound);
    setMessage("totalScore", gamePoints);
    setMessage("statusMessage", "Guess 1-" + gameRange);
    setMessage("resultText", "");
    setMessage("attemptCount", "");
}

// Helper function to update text in elements
function setMessage(id, text) {
    document.getElementById(id).innerText = text;
}

// Helper functions for button clicks
function continueToNextRound() {
    gameController('nextRound');
}

function finishGame() {
    gameController('endGame');
}
