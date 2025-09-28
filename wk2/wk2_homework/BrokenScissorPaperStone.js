// Rock Paper Scissors Game - BROKEN VERSION
// This game has 5 bugs that need fixing!
//
// CODE PATTERN: Pipeline Style
// Each function takes inputs and returns outputs (like a factory assembly line)
// Main function calls each step in order: Step 1 → Step 2 → Step 3 → etc.

// ===========================================
// GAME STATE VARIABLES
// ===========================================
let currentRound = 1;
let maxRounds = 5;
let playerScore = 0;
let computerScore = 0;
let gameActive = true;
let debugMessages = [];

// ===========================================
// GAME INITIALIZATION
// ===========================================
console.log("🎮 Rock Paper Scissors Game Starting!");
console.log("📋 Code Pattern: Pipeline Style - each function has clear inputs and outputs");
console.log("🔧 Open the console (F12) to see debugging messages!");
startNewGame();

// ===========================================
// MAIN GAME PIPELINE
// ===========================================

function playRound(playerChoice) {
    if (!gameActive) {
        updateStatus("Game is over! Click 'New Game' to play again.");
        return;
    }

    debugLog("🎯 === ROUND " + currentRound + " PIPELINE START ===");
    debugLog("📥 INPUT: Player chose " + playerChoice);

    // STEP 1: Get computer choice (pure function: no input → computer choice)
    let computerChoice = getComputerChoice();
    debugLog("🎲 STEP 1 OUTPUT: Computer chose " + computerChoice);

    // STEP 2: Determine winner (pure function: two choices → winner)
    let winner = determineWinner(playerChoice, computerChoice);
    debugLog("🏆 STEP 2 OUTPUT: Winner is " + winner);

    // STEP 3: Calculate new scores (pure function: old scores + winner → new scores)
    let newScores = calculateNewScores(playerScore, computerScore, winner);
    debugLog("📊 STEP 3 OUTPUT: New scores [player: " + newScores[0] + ", computer: " + newScores[1] + "]");

    // STEP 4: Update game state with new values
    playerScore = newScores[0];
    computerScore = newScores[1];

    // STEP 5: Update display (pure function: game data → display updates)
    updateGameDisplay(playerChoice, computerChoice, winner, currentRound);

    // STEP 6: Check if game should end (pure function: round data → should end?)
    let shouldEnd = shouldGameEnd(currentRound, maxRounds);
    debugLog("🔚 STEP 6 OUTPUT: Should game end? " + shouldEnd);

    if (shouldEnd) {
        endGame();
    } else {
        currentRound = currentRound + 1;
        updateRoundDisplay();
    }

    debugLog("✅ === ROUND PIPELINE COMPLETE ===\n");
}

// ===========================================
// PURE FUNCTIONS (Clear Inputs → Clear Outputs)
// ===========================================

function getComputerChoice() {
    // INPUT: none
    // OUTPUT: "rock", "paper", or "scissors"

    let randomNumber = Math.random();
    debugLog("🎲 Random number generated: " + randomNumber);

    // BUG 3: Random number not being used! //FLAG: RANDOM_NOT_USED_BUG
    // This should use randomNumber to pick different choices
    let choice = "rock";  // Always returns rock instead of using random!

    return choice;
}

function determineWinner(playerChoice, computerChoice) {
    // INPUT: two choices (strings)
    // OUTPUT: "player", "computer", or "tie"

    debugLog("⚖️ Comparing: " + playerChoice + " vs " + computerChoice);

    if (playerChoice === computerChoice) {
        return "tie";
    }

    // BUG 1: Winner logic is backwards! //FLAG: WINNER_LOGIC_BUG
    // Rock beats Scissors, Scissors beats Paper, Paper beats Rock
    if (playerChoice === "rock" && computerChoice === "scissors") {
        return "computer";  // BUG: Should return "player"!
    }
    if (playerChoice === "scissors" && computerChoice === "paper") {
        return "computer";  // BUG: Should return "player"!
    }
    if (playerChoice === "paper" && computerChoice === "rock") {
        return "computer";  // BUG: Should return "player"!
    }

    // If none of the above, computer wins
    return "computer";
}

function calculateNewScores(currentPlayerScore, currentComputerScore, winner) {
    // INPUT: current scores (numbers) and winner (string)
    // OUTPUT: array with new scores [playerScore, computerScore]

    debugLog("📊 Calculating scores - Current: [" + currentPlayerScore + ", " + currentComputerScore + "], Winner: " + winner);

    let newPlayerScore = currentPlayerScore;
    let newComputerScore = currentComputerScore;

    if (winner === "player") {
        // BUG 4: String concatenation instead of addition! //FLAG: SCORE_TYPE_BUG
        newPlayerScore = currentPlayerScore + "1";  // This creates "01", "011" instead of 1, 2, 3!
    } else if (winner === "computer") {
        newComputerScore = currentComputerScore + 1;  // This one works correctly
    }

    return [newPlayerScore, newComputerScore];
}

function shouldGameEnd(currentRound, maxRounds) {
    // INPUT: current round number and max rounds
    // OUTPUT: true or false

    debugLog("🔍 Checking end game - Round: " + currentRound + ", Max: " + maxRounds);

    // BUG 2: Wrong comparison operator! //FLAG: ROUND_COMPARISON_BUG
    return currentRound < maxRounds;  // BUG: Should be >= to end the game!
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
    debugLog("🔄 Starting new game...");

    // BUG 5: Scores not being reset! //FLAG: RESET_VALUES_BUG
    // These lines are missing - scores should be reset to 0!
    // playerScore = 0;     // Missing reset!
    // computerScore = 0;   // Missing reset!

    currentRound = 1;
    gameActive = true;

    updateStatus("New game started! Choose your move!");
    updateScoreDisplay();
    updateRoundDisplay();

    document.getElementById("roundResult").innerHTML = "Ready to play? Click a button above!";
    document.getElementById("choicesDisplay").innerHTML = "";

    debugLog("✨ New game ready - Player: " + playerScore + ", Computer: " + computerScore);
}

function endGame() {
    gameActive = false;
    let finalMessage = "";

    debugLog("🏁 Game ended - Final scores: Player " + playerScore + ", Computer " + computerScore);

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
          "🔧 This game uses a PIPELINE PATTERN:\n" +
          "Each step takes inputs and produces outputs!");
}

function debugLog(message) {
    console.log(message);
    debugMessages.push(message);

    if (debugMessages.length > 15) {
        debugMessages.shift();
    }

    updateDebugDisplay();
}

function updateDebugDisplay() {
    let debugArea = document.getElementById("debugOutput");
    if (debugArea) {
        debugArea.innerHTML = debugMessages.join("<br>");
    }
}

function toggleDebug() {
    let debugArea = document.getElementById("debugArea");
    if (debugArea.style.display === "none") {
        debugArea.style.display = "block";
    } else {
        debugArea.style.display = "none";
    }
}

// ===========================================
// TESTING FUNCTIONS (Like the puzzles!)
// ===========================================

function checkMyWork() {
    console.log("\n" + "=".repeat(50));
    console.log("🔍 PIPELINE DEBUGGING - CHECKING YOUR FIXES...");
    console.log("=".repeat(50));

    checkBug1();
    checkBug2();
    checkBug3();
    checkBug4();
    checkBug5();

    console.log("=".repeat(50));
    console.log("💡 Each function should have clear inputs and outputs!");
    console.log("Use checkBug1(), checkBug2(), etc. for individual tests");
}

function checkBug1() {
    console.log("\n🎯 Bug 1 Test: Winner Logic Pipeline");
    console.log("Testing: determineWinner('rock', 'scissors')");
    console.log("Expected output: 'player'");

    let testResult = determineWinner("rock", "scissors");
    console.log("Actual output: '" + testResult + "'");

    if (testResult === "player") {
        console.log("✅ Bug 1 FIXED! Pipeline step working correctly!");
    } else {
        console.log("❌ Bug 1 NOT FIXED: Check the return values in determineWinner()");
        console.log("💡 Hint: Look for FLAG: WINNER_LOGIC_BUG");
    }
}

function checkBug2() {
    console.log("\n⏰ Bug 2 Test: Game End Logic Pipeline");
    console.log("Testing: shouldGameEnd(5, 5)");
    console.log("Expected output: true (game should end)");

    let testResult = shouldGameEnd(5, 5);
    console.log("Actual output: " + testResult);

    if (testResult === true) {
        console.log("✅ Bug 2 FIXED! Game end logic working!");
    } else {
        console.log("❌ Bug 2 NOT FIXED: Check comparison in shouldGameEnd()");
        console.log("💡 Hint: Look for FLAG: ROUND_COMPARISON_BUG");
    }
}

function checkBug3() {
    console.log("\n🎲 Bug 3 Test: Random Choice Pipeline");
    console.log("Testing computer choice randomness...");

    let choices = [];
    for (let i = 0; i < 5; i++) {
        choices.push(getComputerChoice());
    }

    let uniqueChoices = [...new Set(choices)];
    console.log("Computer choices: " + choices.join(", "));
    console.log("Unique choices: " + uniqueChoices.length);

    if (uniqueChoices.length > 1) {
        console.log("✅ Bug 3 FIXED! Random pipeline working!");
    } else {
        console.log("❌ Bug 3 NOT FIXED: getComputerChoice() always returns same value");
        console.log("💡 Hint: Look for FLAG: RANDOM_NOT_USED_BUG");
    }
}

function checkBug4() {
    console.log("\n🔢 Bug 4 Test: Score Calculation Pipeline");
    console.log("Testing: calculateNewScores(0, 0, 'player')");
    console.log("Expected output: [1, 0] (numbers)");

    let testResult = calculateNewScores(0, 0, "player");
    console.log("Actual output: [" + testResult[0] + ", " + testResult[1] + "]");
    console.log("Player score type: " + typeof testResult[0]);

    if (typeof testResult[0] === "number") {
        console.log("✅ Bug 4 FIXED! Score pipeline returns numbers!");
    } else {
        console.log("❌ Bug 4 NOT FIXED: Score calculation returns text, not numbers");
        console.log("💡 Hint: Look for FLAG: SCORE_TYPE_BUG");
    }
}

function checkBug5() {
    console.log("\n🔄 Bug 5 Test: Game Reset");
    console.log("Current scores: Player=" + playerScore + ", Computer=" + computerScore);
    console.log("To test: Play a game, then click 'New Game' - scores should reset to 0");
    console.log("💡 Hint: Look for FLAG: RESET_VALUES_BUG in startNewGame()");
}

function checkAllBugs() {
    checkMyWork();
}

// ===========================================
// WELCOME MESSAGES
// ===========================================
console.log("🔧 PIPELINE DEBUGGING TOOLS LOADED!");
console.log("📋 Each function takes inputs and produces outputs");
console.log("🔍 Type checkMyWork() to test all your fixes!");
console.log("🎯 Type checkBug1(), checkBug2(), etc. for individual tests!");
console.log("🚩 Look for //FLAG: comments to find bugs!");
console.log("📊 Follow the pipeline: Input → Function → Output");