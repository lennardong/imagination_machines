// STATE MACHINE PATTERN - Alternative approach
// Think of this like a board game with different phases

// Game states as simple constants (not dictionary)
const STATE_WAITING = 'waiting';
const STATE_GUESSING = 'guessing';
const STATE_ROUND_END = 'round_end';
const STATE_GAME_OVER = 'game_over';

// Current state tracking
let currentState = STATE_WAITING;

// Game data as simple variables
let stateSecret = 0;
let stateTries = 0;
let statePoints = 0;
let stateRound = 1;

// This is like a game master deciding what happens next
function gamePhaseManager(event) {
    // Using if-else instead of switch for simplicity
    // (switch/case is common in JavaScript but if-else is clearer for beginners)
    
    if (currentState === STATE_WAITING) {
        if (event === 'start') {
            transitionTo(STATE_GUESSING);
        }
    } else if (currentState === STATE_GUESSING) {
        if (event === 'guess') {
            processGuessInState();
        } else if (event === 'roundComplete') {
            transitionTo(STATE_ROUND_END);
        }
    } else if (currentState === STATE_ROUND_END) {
        if (event === 'continue' && stateRound < 3) {
            stateRound = stateRound + 1;
            transitionTo(STATE_GUESSING);
        } else if (event === 'continue') {
            transitionTo(STATE_GAME_OVER);
        }
    } else if (currentState === STATE_GAME_OVER) {
        // Game is over, no more transitions
    }
}

function transitionTo(newState) {
    // Change state
    currentState = newState;
    document.getElementById("currentState").innerText = newState.toUpperCase();
    
    // Do different things based on new state
    if (newState === STATE_GUESSING) {
        initRoundInState();
    } else if (newState === STATE_ROUND_END) {
        showRoundResultsInState();
    } else if (newState === STATE_GAME_OVER) {
        showFinalScoreInState();
    }
}

function handleAction() {
    // Button does different things based on state
    if (currentState === STATE_WAITING) {
        gamePhaseManager('start');
    } else if (currentState === STATE_GUESSING) {
        gamePhaseManager('guess');
    } else if (currentState === STATE_ROUND_END) {
        gamePhaseManager('continue');
    }
}

function processGuessInState() {
    let guess = Number(document.getElementById("playerGuess").value);
    
    if (!guess || guess < 1) {
        document.getElementById("feedback").innerText = "Enter a valid number!";
        return;
    }
    
    stateTries = stateTries + 1;
    
    if (guess === stateSecret) {
        document.getElementById("feedback").innerText = "Correct!";
        gamePhaseManager('roundComplete');
    } else if (guess > stateSecret) {
        document.getElementById("feedback").innerText = "Too high! " + (3 - stateTries) + " tries left";
    } else {
        document.getElementById("feedback").innerText = "Too low! " + (3 - stateTries) + " tries left";
    }
    
    if (stateTries >= 3 && guess !== stateSecret) {
        gamePhaseManager('roundComplete');
    }
}

// Functions that set up each state
function initRoundInState() {
    let range = stateRound * 10;
    stateSecret = Math.floor(Math.random() * range) + 1;
    stateTries = 0;
    
    document.getElementById("gameMessage").innerText = 
        "Round " + stateRound + ": Guess 1-" + range;
    document.getElementById("playerGuess").style.display = "inline";
    document.getElementById("actionButton").innerText = "Submit Guess";
    document.getElementById("feedback").innerText = "";
}

function showRoundResultsInState() {
    document.getElementById("playerGuess").style.display = "none";
    
    // Check if last guess was correct
    let lastGuess = Number(document.getElementById("playerGuess").value);
    if (lastGuess === stateSecret) {
        let points = (4 - stateTries) * 10;
        statePoints = statePoints + points;
        document.getElementById("gameMessage").innerText = 
            "Round complete! +" + points + " points!";
    } else {
        document.getElementById("gameMessage").innerText = 
            "Round over! The number was " + stateSecret;
    }
    
    document.getElementById("scoreDisplay").innerText = statePoints;
    
    // Show results, then wait for player to click to continue
    document.getElementById("actionButton").innerText = "Continue";
    document.getElementById("actionButton").style.display = "inline";
    
    // Note: Player must click button to continue to next round
    // This gives them time to read the results
}

function showFinalScoreInState() {
    document.getElementById("gameMessage").innerText = 
        "Game Over! Final Score: " + statePoints;
    document.getElementById("actionButton").style.display = "none";
    
    if (statePoints > 70) {
        document.getElementById("feedback").innerText = "Amazing!";
    } else if (statePoints > 40) {
        document.getElementById("feedback").innerText = "Good job!";
    } else {
        document.getElementById("feedback").innerText = "Nice try!";
    }
}

// Note: In programming, we often separate:
// - Helper functions: Small, specific tasks (like getting input)
// - Utility functions: General purpose tools (like random numbers)
// Here, all our functions are specific to the game, so they're all helpers!
