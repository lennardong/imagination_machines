
// Setting up the game
let secretNumber = 7;
let attempts = 0;
let maxAttempts = 3;

/**
 * Main game function triggered by button click
 * @returns {void} - Processes guess and updates game state
 */
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

/**
 * Compares player's guess with secret number and returns feedback
 * @param {string} guess - The player's input as text from the input field
 * @returns {string} - Feedback message ("Too high!", "Too low!", "You got it!")
 */
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

/**
 * Displays feedback message to the player
 * @param {string} message - The feedback text to show
 * @returns {void} - Updates the feedback element in the DOM
 */
function showMessage(message) {
    // getElementById finds the element with id="feedback"
    let feedbackArea = document.getElementById("feedback");

    // innerText changes the text inside that element
    feedbackArea.innerText = message;
}

/**
 * Ends the game by disabling button and revealing the secret number
 * @returns {void} - Disables button and updates message display
 */
function endGame() {
    // querySelector finds the first button element
    let button = document.querySelector("button");
    button.disabled = true;

    // Change the message text
    document.getElementById("message").innerText = "Game Over! The number was " + secretNumber;
}