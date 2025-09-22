// Game data - simple separate variables instead of object
let gameSecret = 0;
let gameTries = 0;
let gamePoints = 0;
let gameRound = 1;
let gameRange = 10;
let gameActive = false;  // Track if a round is in progress

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
    gameActive = true;  // Round is now active
    
    // Update display
    updateDisplay();
}

function processGuess() {
    // Check if a round is active
    if (!gameActive) {
        setMessage("resultText", "Start a new game or go to next round!");
        return;
    }
    
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
}

function handleRoundEnd(won) {
    gameActive = false;  // Round is no longer active
    
    if (won) {
        let earned = (4 - gameTries) * 10;
        gamePoints = gamePoints + earned;
        setMessage("statusMessage", "Excellent! +" + earned + " points!");
    } else {
        setMessage("statusMessage", "The number was " + gameSecret);
    }
    
    // Show appropriate message based on game progress
    if (gameRound < 3) {
        setMessage("resultText", "Click Next Round to continue!");
    } else {
        setMessage("resultText", "All rounds complete! Click End Game.");
    }
}

function advanceRound() {
    // Check if we should advance
    if (gameActive) {
        // Round still in progress - just end it and move on
        setMessage("resultText", "Skipping to next round!");
        gameActive = false;
    }
    
    if (gameRound >= 3) {
        setMessage("resultText", "All rounds complete! Click End Game.");
        return;
    }
    
    gameRound = gameRound + 1;
    
    // Clear the input field for the new round
    document.getElementById("playerInput").value = "";
    
    gameController('init');
}

function concludeGame() {
    gameActive = false;
    
    let finalMsg = "Complete! Score: " + gamePoints;
    
    if (gamePoints > 70) {
        finalMsg = finalMsg + " - Master!";
    } else if (gamePoints > 40) {
        finalMsg = finalMsg + " - Nice!";
    } else {
        finalMsg = finalMsg + " - Good try!";
    }
    
    setMessage("statusMessage", finalMsg);
    setMessage("resultText", "Game Over!");
    setMessage("attemptCount", "");
}

function updateDisplay() {
    setMessage("currentRound", gameRound);
    setMessage("totalScore", gamePoints);
    setMessage("statusMessage", "Guess 1-" + gameRange);
    setMessage("resultText", "");
    setMessage("attemptCount", "");
    
    // Clear input for new round
    document.getElementById("playerInput").value = "";
}

// Helper function to update text in elements
function setMessage(id, text) {
    document.getElementById(id).innerText = text;
}