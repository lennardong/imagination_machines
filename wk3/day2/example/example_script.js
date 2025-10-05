// Example complete JavaScript for Day 2 - fully functional version
// This shows what students should achieve by the end of the exercises

console.log("🎭 School Play Website JavaScript Loaded! (Complete Example)");

// Enhanced character data with more details
const characterData = {
    hermia: {
        name: "Hermia",
        actor: "Sarah Johnson",
        description: "A determined young woman in love with Lysander. She's brave and willing to defy her father's wishes for true love.",
        quote: "The course of true love never did run smooth.",
        funFact: "In our production, Hermia will be wearing a custom-designed dress made by the school's fashion club!"
    },
    lysander: {
        name: "Lysander",
        actor: "Michael Chen",
        description: "A young nobleman in love with Hermia. He's romantic and willing to elope to be with his beloved.",
        quote: "For aught that I could ever read, could ever hear by tale or history, the course of true love never did run smooth.",
        funFact: "Michael has been studying Shakespearean acting for 3 years and speaks fluent iambic pentameter!"
    },
    puck: {
        name: "Puck (Robin Goodfellow)",
        actor: "Emma Rodriguez",
        description: "A mischievous fairy who serves Oberon. Known for playing tricks and causing magical mayhem.",
        quote: "Lord, what fools these mortals be!",
        funFact: "Emma performs all her own acrobatic stunts as the playful Puck!"
    },
    bottom: {
        name: "Bottom",
        actor: "James Wilson",
        description: "A weaver and amateur actor who gets transformed by Puck. He's confident and loves being the center of attention.",
        quote: "I will roar you as gently as any sucking dove.",
        funFact: "James will be wearing a specially crafted donkey head made by our art department!"
    }
};

// Enhanced global state
let currentTheme = "royal";
let debugMode = true;
let selectedCharacter = "hermia";
let visitorCount = 0;

// Enhanced character display function
function showCharacter(characterKey) {
    console.log("🎯 showCharacter called with:", characterKey);

    const character = characterData[characterKey];
    if (!character) {
        console.log("❌ Character not found:", characterKey);
        return;
    }

    // Update selected character state
    selectedCharacter = characterKey;

    // Enhanced display with animation
    const displayHTML = `
        <h4>${character.name}</h4>
        <p><strong>Played by:</strong> ${character.actor}</p>
        <p><strong>About:</strong> ${character.description}</p>
        <p><strong>Famous Quote:</strong> "${character.quote}"</p>
        <p><strong>Fun Fact:</strong> ${character.funFact}</p>
    `;

    const displayElement = document.getElementById("character-display");
    displayElement.innerHTML = displayHTML;

    // Update button states
    updateCharacterButtons(characterKey);

    console.log("✅ Character display updated for:", character.name);

    if (debugMode) {
        showCharacterDebugInfo(character);
    }
}

function updateCharacterButtons(activeCharacter) {
    // Visual feedback for active button
    const buttons = document.querySelectorAll(".character-buttons button");
    buttons.forEach(button => {
        button.classList.remove("active");
    });

    // Find and activate the clicked button
    const activeButton = document.querySelector(`button[onclick="showCharacter('${activeCharacter}')"]`);
    if (activeButton) {
        activeButton.classList.add("active");
    }
}

// Enhanced theme function
function changeTheme(themeName) {
    console.log("🎨 changeTheme called with:", themeName);

    const body = document.body;
    body.classList.remove("magical-theme", "forest-theme", "royal-theme");

    if (themeName !== "default") {
        body.classList.add(themeName + "-theme");
    }

    currentTheme = themeName;
    updateThemeButtons(themeName);

    console.log("✅ Theme changed to:", currentTheme);

    if (debugMode) {
        updateDebugDisplay();
    }
}

function updateThemeButtons(activeTheme) {
    // Visual feedback for active theme button
    const themeButtons = document.querySelectorAll(".theme-btn");
    themeButtons.forEach(button => {
        button.classList.remove("active");
    });

    // Find and activate the clicked theme button
    const activeButton = document.querySelector(`button[onclick="changeTheme('${activeTheme}')"]`);
    if (activeButton) {
        activeButton.classList.add("active");
    }
}

// Enhanced personalized message function
function showPersonalizedMessage() {
    console.log("💬 showPersonalizedMessage called");

    const nameInput = document.getElementById("visitor-name");
    const visitorName = nameInput.value.trim();

    if (!visitorName) {
        console.log("❌ No name entered");
        alert("Please enter your name first!");
        return;
    }

    visitorCount++;

    // Enhanced message generation
    const messages = [
        `Welcome ${visitorName}! We hope you enjoy our magical production!`,
        `Hello ${visitorName}! Thank you for your interest in A Midsummer Night's Dream!`,
        `Greetings ${visitorName}! Prepare to enter the enchanted forest of Shakespeare!`,
        `Hi ${visitorName}! You're invited to experience the wonder of our school play!`,
        `${visitorName}, step into our world of fairies, lovers, and laughter!`,
        `Welcome to the magic, ${visitorName}! Your theatrical adventure awaits!`
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const selectedMessage = messages[randomIndex];

    // Enhanced display with visitor count
    const messageElement = document.getElementById("personal-message");
    messageElement.innerHTML = `
        <p>🎭 ${selectedMessage}</p>
        <small>You are visitor #${visitorCount} today!</small>
    `;

    console.log("✅ Personalized message shown for:", visitorName);
    nameInput.value = "";

    if (debugMode) {
        console.log("📊 Total visitors today:", visitorCount);
    }
}

// Enhanced debug function
function showDebugInfo() {
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

// Enhanced helper functions
function updateDebugDisplay() {
    const debugElement = document.getElementById("debug-info");
    const currentTime = new Date().toLocaleTimeString();

    const debugInfo = `
        <strong>Debug Information:</strong><br>
        Current Theme: ${currentTheme}<br>
        Selected Character: ${selectedCharacter}<br>
        Debug Mode: ${debugMode}<br>
        Visitor Count: ${visitorCount}<br>
        Last Updated: ${currentTime}<br>
        Available Characters: ${Object.keys(characterData).join(", ")}<br>
        Total Characters: ${Object.keys(characterData).length}<br>
        Page Load Time: ${new Date().toLocaleString()}
    `;

    debugElement.innerHTML = debugInfo;
}

function showCharacterDebugInfo(character) {
    console.log("🔍 Character Debug Info:");
    console.log("- Name:", character.name);
    console.log("- Actor:", character.actor);
    console.log("- Description Length:", character.description.length, "characters");
    console.log("- Quote Length:", character.quote.length, "characters");
    console.log("- Has Fun Fact:", !!character.funFact);
}

// Enhanced initialization
function initializePage() {
    console.log("🚀 Page initialization started");

    // Set default character (Hermia)
    showCharacter("hermia");

    // Set default theme (Royal)
    changeTheme("royal");

    // Clear personal message
    const messageElement = document.getElementById("personal-message");
    if (messageElement) {
        messageElement.innerHTML = "";
    }

    // Initialize debug display
    if (debugMode) {
        updateDebugDisplay();
    }

    console.log("✅ Page initialized successfully");
}

// Enhanced testing functions
function testCharacterDisplay() {
    console.log("\n🔍 Testing character display functions...");

    const testCharacters = ["hermia", "lysander", "puck", "bottom", "invalid"];

    testCharacters.forEach((character, index) => {
        setTimeout(() => {
            console.log(`Testing character: ${character}`);
            showCharacter(character);
        }, index * 1000);
    });

    console.log("✅ Character display test started (watch the page!)");
}

function testThemeChanges() {
    console.log("\n🎨 Testing theme changes...");

    const themes = ["magical", "forest", "royal", "default"];

    themes.forEach((theme, index) => {
        setTimeout(() => {
            console.log(`Testing theme: ${theme}`);
            changeTheme(theme);
        }, index * 1500);
    });

    console.log("✅ Theme change test started (watch the background!)");
}

function runFullDemo() {
    console.log("\n🎭 Running full interactive demo...");

    // Demo sequence
    setTimeout(() => changeTheme("magical"), 1000);
    setTimeout(() => showCharacter("puck"), 2000);
    setTimeout(() => changeTheme("forest"), 3000);
    setTimeout(() => showCharacter("bottom"), 4000);
    setTimeout(() => changeTheme("royal"), 5000);
    setTimeout(() => showCharacter("hermia"), 6000);

    console.log("✅ Full demo started - watch for 6 seconds!");
}

// Advanced DOM manipulation examples
function highlightActiveSection() {
    // Demonstrate more advanced DOM manipulation
    const sections = document.querySelectorAll("div[class*='section']");
    sections.forEach(section => {
        section.style.transition = "all 0.3s ease";
        section.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.02)";
            this.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
        });
        section.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
        });
    });
    console.log("✅ Interactive hover effects added to sections");
}

// Initialize everything
initializePage();
highlightActiveSection();

// Enhanced welcome messages
console.log("🎭 Enhanced School Play Website Ready!");
console.log("🔍 Type testCharacterDisplay() to test character functions");
console.log("🎨 Type testThemeChanges() to test theme functions");
console.log("🚀 Type runFullDemo() to see a complete demonstration");
console.log("📊 Debug mode is ON - check the debug panel at the bottom");
console.log("💡 This shows the complete integration of HTML, CSS, and JavaScript!");
console.log("🔗 Notice how this follows the same patterns as rock-paper-scissors but with enhanced features");