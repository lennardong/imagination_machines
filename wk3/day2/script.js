// Day 2 JavaScript - Building on Week 2 patterns
// This follows the same structure as rock-paper-scissors: functions with clear inputs/outputs

console.log("🎭 School Play Website JavaScript Loaded!");
console.log("📋 Code Pattern: Similar to rock-paper-scissors - functions with clear purposes");

// Character data - like the game choices in rock-paper-scissors
const characterData = {
    hermia: {
        name: "Hermia",
        actor: "Sarah Johnson",
        description: "A determined young woman in love with Lysander. She's brave and willing to defy her father's wishes for true love.",
        quote: "The course of true love never did run smooth."
    },
    lysander: {
        name: "Lysander",
        actor: "Michael Chen",
        description: "A young nobleman in love with Hermia. He's romantic and willing to elope to be with his beloved.",
        quote: "For aught that I could ever read, could ever hear by tale or history, the course of true love never did run smooth."
    },
    puck: {
        name: "Puck (Robin Goodfellow)",
        actor: "Emma Rodriguez",
        description: "A mischievous fairy who serves Oberon. Known for playing tricks and causing magical mayhem.",
        quote: "Lord, what fools these mortals be!"
    },
    bottom: {
        name: "Bottom",
        actor: "James Wilson",
        description: "A weaver and amateur actor who gets transformed by Puck. He's confident and loves being the center of attention.",
        quote: "I will roar you as gently as any sucking dove."
    }
};

// Global state (like game scores in rock-paper-scissors)
let currentTheme = "default";
let debugMode = false;

// Main functions - following Week 2 pattern of clear input/output

function showCharacter(characterKey) {
    // INPUT: character key (string)
    // OUTPUT: updates display with character info

    console.log("🎯 showCharacter called with:", characterKey);

    // Get the character data (like getting computer choice in RPS)
    const character = characterData[characterKey];

    if (!character) {
        console.log("❌ Character not found:", characterKey);
        return;
    }

    // Build the display HTML (like building result message in RPS)
    const displayHTML = `
        <h4>${character.name}</h4>
        <p><strong>Played by:</strong> ${character.actor}</p>
        <p><strong>About:</strong> ${character.description}</p>
        <p><strong>Famous Quote:</strong> "${character.quote}"</p>
    `;

    // Update the display (like updating game display in RPS)
    const displayElement = document.getElementById("character-display");
    displayElement.innerHTML = displayHTML;

    console.log("✅ Character display updated for:", character.name);

    // Show debug info if enabled
    if (debugMode) {
        showCharacterDebugInfo(character);
    }
}

function changeTheme(themeName) {
    // INPUT: theme name (string)
    // OUTPUT: changes page styling

    console.log("🎨 changeTheme called with:", themeName);

    const body = document.body;

    // Remove any existing theme classes (like resetting game state)
    body.classList.remove("magical-theme", "forest-theme", "royal-theme");

    // Add new theme class
    if (themeName !== "default") {
        body.classList.add(themeName + "-theme");
    }

    currentTheme = themeName;
    console.log("✅ Theme changed to:", currentTheme);

    // Update debug info if enabled
    if (debugMode) {
        updateDebugDisplay();
    }
}

function showPersonalizedMessage() {
    // INPUT: gets name from input field
    // OUTPUT: displays personalized message

    console.log("💬 showPersonalizedMessage called");

    // Get user input (like getting player choice in RPS)
    const nameInput = document.getElementById("visitor-name");
    const visitorName = nameInput.value.trim();

    if (!visitorName) {
        console.log("❌ No name entered");
        alert("Please enter your name first!");
        return;
    }

    // Generate personalized message (like determining winner in RPS)
    const messages = [
        `Welcome ${visitorName}! We hope you enjoy our magical production!`,
        `Hello ${visitorName}! Thank you for your interest in A Midsummer Night's Dream!`,
        `Greetings ${visitorName}! Prepare to enter the enchanted forest of Shakespeare!`,
        `Hi ${visitorName}! You're invited to experience the wonder of our school play!`
    ];

    // Pick random message (like random computer choice in RPS)
    const randomIndex = Math.floor(Math.random() * messages.length);
    const selectedMessage = messages[randomIndex];

    // Display the message (like showing round result in RPS)
    const messageElement = document.getElementById("personal-message");
    messageElement.innerHTML = `<p>🎭 ${selectedMessage}</p>`;

    console.log("✅ Personalized message shown for:", visitorName);

    // Clear the input field
    nameInput.value = "";
}

function showDebugInfo() {
    // INPUT: none
    // OUTPUT: toggles debug information display

    console.log("🔧 Debug toggle activated");

    debugMode = !debugMode;
    const debugElement = document.getElementById("debug-info");

    if (debugMode) {
        debugElement.style.display = "block";
        updateDebugDisplay();
        console.log("✅ Debug mode ON");
    } else {
        debugElement.style.display = "none";
        console.log("✅ Debug mode OFF");
    }
}

// Helper functions

function updateDebugDisplay() {
    // Updates the debug information panel
    const debugElement = document.getElementById("debug-info");
    const currentTime = new Date().toLocaleTimeString();

    const debugInfo = `
        <strong>Debug Information:</strong><br>
        Current Theme: ${currentTheme}<br>
        Debug Mode: ${debugMode}<br>
        Last Updated: ${currentTime}<br>
        Available Characters: ${Object.keys(characterData).join(", ")}<br>
        Total Characters: ${Object.keys(characterData).length}
    `;

    debugElement.innerHTML = debugInfo;
}

function showCharacterDebugInfo(character) {
    // Shows debug info for character selection
    console.log("🔍 Character Debug Info:");
    console.log("- Name:", character.name);
    console.log("- Actor:", character.actor);
    console.log("- Description Length:", character.description.length, "characters");
    console.log("- Quote Length:", character.quote.length, "characters");
}

// Initialize the page (like starting a new game in RPS)
function initializePage() {
    console.log("🚀 Page initialization started");

    // Set default character display
    const defaultDisplay = document.getElementById("character-display");
    defaultDisplay.innerHTML = "<p>Click a character button above to see their information!</p>";

    // Clear any existing personal message
    const messageElement = document.getElementById("personal-message");
    if (messageElement) {
        messageElement.innerHTML = "";
    }

    console.log("✅ Page initialized successfully");
}

// Testing functions (like checkMyWork in Week 2)
function testCharacterDisplay() {
    console.log("\n🔍 Testing character display functions...");

    const testCharacters = ["hermia", "puck", "invalid"];

    testCharacters.forEach(character => {
        console.log(`Testing character: ${character}`);
        showCharacter(character);
    });

    console.log("✅ Character display test complete");
}

function testThemeChanges() {
    console.log("\n🎨 Testing theme changes...");

    const themes = ["magical", "forest", "royal", "default"];

    themes.forEach(theme => {
        console.log(`Testing theme: ${theme}`);
        changeTheme(theme);
    });

    console.log("✅ Theme change test complete");
}

// Run initialization when page loads
initializePage();

// Welcome message (like in rock-paper-scissors)
console.log("🎭 School Play Website Ready!");
console.log("🔍 Type testCharacterDisplay() to test character functions");
console.log("🎨 Type testThemeChanges() to test theme functions");
console.log("📊 Open the Elements tab to see how JavaScript modifies the DOM!");
console.log("💡 This follows the same patterns as your rock-paper-scissors game!");