
// Game data - simple separate variables instead of object
let gameSecret = 0;
let gameTries = 0;
let gamePoints = 0;
let gameRound = 1;
let gameRange = 10;

// Initialize game
gameController('init');

// ORCHESTRATOR PATTERN: One controller manages everything
/**
 * Central controller that manages all game actions
 * @param {string} action - The action to perform ('init', 'guess', 'nextRound', 'endGame')
 * @returns {void} - Calls appropriate function based on action
 */
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

/**
 * Sets up a new round with difficulty and random secret number
 * @returns {void} - Generates secret number and updates display
 */
function initializeGame() {
    // Set difficulty based on round
    if (gameRound === 1) {
        gameRange = 10;
    }
    if (gameRound === 2) {
        gameRange = 20;
    }
    if (gameRound === 3) {
        gameRange = 30;
    }

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

/**
 * Processes player's guess by validating, evaluating, and updating game state
 * @returns {void} - Validates input, checks guess, and may end round
 */
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

/**
 * Validates if player input is a valid number within game range
 * @param {string} input - The raw input from the player
 * @returns {boolean} - True if input is valid, false otherwise
 */
function validateInput(input) {
    // Check if input exists AND is in valid range
    if (input && input >= 1 && input <= gameRange) {
        return true;
    } else {
        return false;
    }
}

/**
 * Compares player's guess with secret number
 * @param {number} guess - The player's numerical guess
 * @returns {string} - Result code ("high", "low", "win")
 */
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

/**
 * Displays result feedback and attempt information to player
 * @param {string} result - Result code from evaluateGuess ("high", "low", "win")
 * @returns {void} - Updates multiple UI elements with feedback
 */
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

/**
 * Handles end of round by calculating score and setting up next action
 * @param {boolean} won - Whether the player won this round
 * @returns {void} - Updates score, messages, and button functionality
 */
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

/**
 * Advances to the next round by incrementing round counter
 * @returns {void} - Calls gameController to initialize next round
 */
function advanceRound() {
    gameRound = gameRound + 1;
    gameController('init');
}

/**
 * Concludes the game with final score and performance message
 * @returns {void} - Displays final message and disables button
 */
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

/**
 * Updates all display elements with current game state
 * @returns {void} - Refreshes round, score, and status displays
 */
function updateDisplay() {
    setMessage("currentRound", gameRound);
    setMessage("totalScore", gamePoints);
    setMessage("statusMessage", "Guess 1-" + gameRange);
    setMessage("resultText", "");
    setMessage("attemptCount", "");
}

// Helper function to update text in elements
/**
 * Updates text content of a DOM element by ID
 * @param {string} id - The element ID to update
 * @param {string|number} text - The text content to set
 * @returns {void} - Updates the specified DOM element
 */
function setMessage(id, text) {
    document.getElementById(id).innerText = text;
}

// Helper functions for button clicks
/**
 * Button click handler to continue to next round
 * @returns {void} - Calls gameController with 'nextRound' action
 */
function continueToNextRound() {
    gameController('nextRound');
}

/**
 * Button click handler to finish the game
 * @returns {void} - Calls gameController with 'endGame' action
 */
function finishGame() {
    gameController('endGame');
}
