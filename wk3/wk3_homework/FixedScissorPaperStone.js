// Rock Paper Scissors Game - FIXED VERSION (Week 3 Baseline)
// All bugs from Week 2 have been fixed - now ready for styling!
//
// CODE PATTERN: Pipeline Style
// Each function takes inputs and returns outputs (like a factory assembly line)

// ===========================================
// GAME STATE VARIABLES
// ===========================================
let currentRound = 1;
let maxRounds = 5;
let playerScore = 0;
let computerScore = 0;
let gameActive = true;

// ===========================================
// GAME INITIALIZATION
// ===========================================
console.log("🎮 Rock Paper Scissors Game Starting!");
console.log("✅ All bugs from Week 2 have been FIXED!");
console.log("🎨 Ready for Week 3 styling challenges!");
startNewGame();

// ===========================================
// MAIN GAME PIPELINE
// ===========================================

function playRound(playerChoice) {
    if (!gameActive) {
        updateStatus("Game is over! Click 'New Game' to play again.");
        return;
    }

    console.log("🎯 Round " + currentRound + " - Player chose: " + playerChoice);

    // STEP 1: Get computer choice
    let computerChoice = getComputerChoice();
    console.log("🎲 Computer chose: " + computerChoice);

    // STEP 2: Determine winner
    let winner = determineWinner(playerChoice, computerChoice);
    console.log("🏆 Winner: " + winner);

    // STEP 3: Calculate new scores
    let newScores = calculateNewScores(playerScore, computerScore, winner);
    playerScore = newScores[0];
    computerScore = newScores[1];

    // STEP 4: Update display
    updateGameDisplay(playerChoice, computerChoice, winner, currentRound);

    // STEP 5: Check if game should end
    let shouldEnd = shouldGameEnd(currentRound, maxRounds);

    if (shouldEnd) {
        endGame();
    } else {
        currentRound = currentRound + 1;
        updateRoundDisplay();
    }

    console.log("✅ Round complete - Player: " + playerScore + ", Computer: " + computerScore);
}

// ===========================================
// PURE FUNCTIONS (Clear Inputs → Clear Outputs)
// ===========================================

function getComputerChoice() {
    // INPUT: none
    // OUTPUT: "rock", "paper", or "scissors"

    let randomNumber = Math.random();

    // FIXED BUG 3: Now properly using random number
    let choice;
    if (randomNumber < 0.333) {
        choice = "rock";
    } else if (randomNumber < 0.666) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

function determineWinner(playerChoice, computerChoice) {
    // INPUT: two choices (strings)
    // OUTPUT: "player", "computer", or "tie"

    if (playerChoice === computerChoice) {
        return "tie";
    }

    // FIXED BUG 1: Winner logic is now correct
    // Rock beats Scissors, Scissors beats Paper, Paper beats Rock
    if (playerChoice === "rock" && computerChoice === "scissors") {
        return "player";  // FIXED: Player wins when rock beats scissors
    }
    if (playerChoice === "scissors" && computerChoice === "paper") {
        return "player";  // FIXED: Player wins when scissors beats paper
    }
    if (playerChoice === "paper" && computerChoice === "rock") {
        return "player";  // FIXED: Player wins when paper beats rock
    }

    // If none of the above, computer wins
    return "computer";
}

function calculateNewScores(currentPlayerScore, currentComputerScore, winner) {
    // INPUT: current scores (numbers) and winner (string)
    // OUTPUT: array with new scores [playerScore, computerScore]

    let newPlayerScore = currentPlayerScore;
    let newComputerScore = currentComputerScore;

    if (winner === "player") {
        // FIXED BUG 4: Now properly adding numbers, not strings
        newPlayerScore = currentPlayerScore + 1;  // Proper numeric addition
    } else if (winner === "computer") {
        newComputerScore = currentComputerScore + 1;
    }

    return [newPlayerScore, newComputerScore];
}

function shouldGameEnd(currentRound, maxRounds) {
    // INPUT: current round number and max rounds
    // OUTPUT: true or false

    // FIXED BUG 2: Now using correct comparison operator
    return currentRound >= maxRounds;  // Game ends when we reach max rounds
}

// ===========================================
// DISPLAY FUNCTIONS (Update UI)
// ===========================================

function updateGameDisplay(playerChoice, computerChoice, winner, round) {
    // Show round results
    let resultText = "";
    if (winner === "tie") {
        resultText = "🤝 It's a tie!";
    } else if (winner === "player") {
        resultText = "🎉 You win this round!";
    } else {
        resultText = "💻 Computer wins this round!";
    }

    document.getElementById("roundResult").innerHTML = resultText;
    document.getElementById("choicesDisplay").innerHTML =
        "You: " + playerChoice + " vs Computer: " + computerChoice;

    updateScoreDisplay();
}

function updateScoreDisplay() {
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

function updateRoundDisplay() {
    document.getElementById("currentRound").innerHTML = currentRound;
}

function updateStatus(message) {
    document.getElementById("gameStatus").innerHTML = message;
}

// ===========================================
// GAME CONTROL FUNCTIONS
// ===========================================

function startNewGame() {
    console.log("🔄 Starting new game...");

    // FIXED BUG 5: Now properly resetting scores
    playerScore = 0;     // Reset to zero
    computerScore = 0;   // Reset to zero

    currentRound = 1;
    gameActive = true;

    updateStatus("New game started! Choose your move!");
    updateScoreDisplay();
    updateRoundDisplay();

    document.getElementById("roundResult").innerHTML = "Ready to play? Click a button above!";
    document.getElementById("choicesDisplay").innerHTML = "";

    console.log("✨ New game ready - Player: " + playerScore + ", Computer: " + computerScore);
}

function endGame() {
    gameActive = false;
    let finalMessage = "";

    console.log("🏁 Game ended - Final scores: Player " + playerScore + ", Computer " + computerScore);

    if (playerScore > computerScore) {
        finalMessage = "🏆 Congratulations! You won the game!";
    } else if (computerScore > playerScore) {
        finalMessage = "💻 Computer won the game! Better luck next time!";
    } else {
        finalMessage = "🤝 It's a tie game!";
    }

    updateStatus(finalMessage);
    document.getElementById("roundResult").innerHTML = "Game Over! " + finalMessage;
}

// ===========================================
// HELPER FUNCTIONS
// ===========================================

function showInstructions() {
    alert("Rock Paper Scissors Rules:\n\n" +
          "🪨 Rock beats ✂️ Scissors\n" +
          "✂️ Scissors beats 📄 Paper\n" +
          "📄 Paper beats 🪨 Rock\n\n" +
          "First to win the most rounds out of 5 wins the game!\n\n" +
          "✅ All Week 2 bugs have been FIXED!\n" +
          "🎨 Ready for your CSS styling magic!");
}

// ===========================================
// WELCOME MESSAGES
// ===========================================
console.log("🔧 FIXED GAME LOADED!");
console.log("📋 All Week 2 bugs have been resolved:");
console.log("✅ Bug 1: Winner logic corrected");
console.log("✅ Bug 2: Game end condition fixed");
console.log("✅ Bug 3: Random computer choices working");
console.log("✅ Bug 4: Score calculation using numbers");
console.log("✅ Bug 5: Scores reset properly on new game");
console.log("🎨 Ready for Week 3: Add CSS styling to make it beautiful!");