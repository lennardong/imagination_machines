// Week 2 - Puzzle Set 2: The Kitchen Timer Troubles
// Teaching: Comparison operators (<, >, <=, >=, ===, !==)

// Welcome message
console.log("=================================");
console.log("⏰ Kitchen Timer Control System");
console.log("=================================");
console.log("The timers and temperature checks are broken!");
console.log("");
console.log("Try: isOvenReady(200)");
console.log("Or type: help()");
console.log("=================================");

// ============================================
// PUZZLE 2.1: The Oven Temperature Check
// ============================================

// This should return true if the oven is hot enough for baking
// Baking needs at least 180°C
// BUG: Wrong comparison operator!
function isOvenReady(currentTemperature) {
    let minimumBakingTemp = 180;

    // Check if temperature is high enough
    // BUG: This comparison is backwards! //FLAG: OVEN_COMPARISON_BUG
    if (currentTemperature < minimumBakingTemp) {
        return true;  // This says oven is ready when it's TOO COLD!
    } else {
        return false; // This says not ready when it's HOT ENOUGH!
    }
}

// Test with:
// isOvenReady(175)  -> Should return false (too cold!)
// isOvenReady(180)  -> Should return true (just right!)
// isOvenReady(200)  -> Should return true (hot enough!)

// ============================================
// PUZZLE 2.2: The Cooking Timer
// ============================================

// This checks if food has cooked long enough
// BUG: It never says the food is done at the exact time!
function isCooked(minutesCooked, minutesNeeded) {
    // Check if we've cooked long enough
    // BUG: Should we use > or >= here? //FLAG: TIMER_COMPARISON_BUG
    if (minutesCooked > minutesNeeded) {
        return "It's done!";
    } else {
        return "Keep cooking!";
    }
}

// Test with:
// isCooked(10, 15)  -> Should return "Keep cooking!"
// isCooked(15, 15)  -> Should return "It's done!" (but currently says keep cooking!)
// isCooked(20, 15)  -> Should return "It's done!"

// ============================================
// PUZZLE 2.3: The Kitchen Closing Time (Brain Teaser)
// ============================================

// Restaurant opens at 9 AM and closes at 22 (10 PM)
// This should return true if kitchen is still open
// BUG: Multiple comparison issues!
function isKitchenOpen(currentHour) {
    let openingTime = 9;   // Opens at 9 AM
    let closingTime = 22;  // Closes at 10 PM

    // Check if we're in business hours
    // BUG: The second comparison is wrong! //FLAG: KITCHEN_AND_BUG
    if (currentHour >= openingTime && currentHour >= closingTime) {
        return true;  // Kitchen is open
    } else {
        return false; // Kitchen is closed
    }
}

// Test with:
// isKitchenOpen(8)   -> Should return false (too early)
// isKitchenOpen(14)  -> Should return true (2 PM - open!)
// isKitchenOpen(22)  -> Should return false (closing time!)
// isKitchenOpen(23)  -> Should return false (after closing)

// ============================================
// HELPER FUNCTIONS
// ============================================

// Function to give hints
function help() {
    console.log("");
    console.log("🆘 HELP MENU - Timer Troubles:");
    console.log("------------------------------");
    console.log("Functions to fix:");
    console.log("1. isOvenReady(temperature)");
    console.log("   - Should return true if temp >= 180");
    console.log("   - Currently using wrong comparison!");
    console.log("");
    console.log("2. isCooked(minutesCooked, minutesNeeded)");
    console.log("   - Should return 'It's done!' when time is reached");
    console.log("   - Think: Should 15 minutes be enough for a 15-minute recipe?");
    console.log("");
    console.log("3. isKitchenOpen(currentHour)");
    console.log("   - Open from 9 AM to 10 PM (22:00)");
    console.log("   - Check BOTH conditions: after opening AND before closing");
    console.log("");
    console.log("Comparison operators:");
    console.log("  <   less than");
    console.log("  >   greater than");
    console.log("  <=  less than or equal");
    console.log("  >=  greater than or equal");
    console.log("");
    console.log("Use checkMyWork1(), checkMyWork2(), or checkMyWork3()");
    console.log("to test each puzzle individually!");
    console.log("");
}

// Function to check Puzzle 2.1
function checkMyWork1() {
    console.log("");
    console.log("📋 Checking Puzzle 2.1: Oven Temperature");
    console.log("----------------------------------------");

    let test1 = isOvenReady(175);
    let test2 = isOvenReady(180);
    let test3 = isOvenReady(200);

    let allCorrect = true;

    if (test1 === false) {
        console.log("✅ isOvenReady(175) returns false - too cold!");
    } else {
        console.log("❌ isOvenReady(175) should return false (below 180)");
        allCorrect = false;
    }

    if (test2 === true) {
        console.log("✅ isOvenReady(180) returns true - just right!");
    } else {
        console.log("❌ isOvenReady(180) should return true (exactly minimum)");
        allCorrect = false;
    }

    if (test3 === true) {
        console.log("✅ isOvenReady(200) returns true - hot enough!");
    } else {
        console.log("❌ isOvenReady(200) should return true (above minimum)");
        allCorrect = false;
    }

    if (allCorrect) {
        console.log("🎉 Puzzle 2.1 is completely fixed! Great job!");
    }
    console.log("");
}

// Function to check Puzzle 2.2
function checkMyWork2() {
    console.log("");
    console.log("📋 Checking Puzzle 2.2: Cooking Timer");
    console.log("-------------------------------------");

    let test1 = isCooked(10, 15);
    let test2 = isCooked(15, 15);
    let test3 = isCooked(20, 15);

    let allCorrect = true;

    if (test1 === "Keep cooking!") {
        console.log("✅ isCooked(10, 15) says keep cooking!");
    } else {
        console.log("❌ isCooked(10, 15) should return 'Keep cooking!'");
        allCorrect = false;
    }

    if (test2 === "It's done!") {
        console.log("✅ isCooked(15, 15) says it's done!");
    } else {
        console.log("❌ isCooked(15, 15) should return 'It's done!' (exact time reached)");
        allCorrect = false;
    }

    if (test3 === "It's done!") {
        console.log("✅ isCooked(20, 15) says it's done!");
    } else {
        console.log("❌ isCooked(20, 15) should return 'It's done!'");
        allCorrect = false;
    }

    if (allCorrect) {
        console.log("🎉 Puzzle 2.2 is completely fixed! Well done!");
    }
    console.log("");
}

// Function to check Puzzle 2.3
function checkMyWork3() {
    console.log("");
    console.log("📋 Checking Puzzle 2.3: Kitchen Hours");
    console.log("-------------------------------------");

    let test1 = isKitchenOpen(8);
    let test2 = isKitchenOpen(14);
    let test3 = isKitchenOpen(22);
    let test4 = isKitchenOpen(23);

    let allCorrect = true;

    if (test1 === false) {
        console.log("✅ isKitchenOpen(8) returns false - too early!");
    } else {
        console.log("❌ isKitchenOpen(8) should return false (before 9 AM)");
        allCorrect = false;
    }

    if (test2 === true) {
        console.log("✅ isKitchenOpen(14) returns true - open hours!");
    } else {
        console.log("❌ isKitchenOpen(14) should return true (2 PM)");
        allCorrect = false;
    }

    if (test3 === false) {
        console.log("✅ isKitchenOpen(22) returns false - closing time!");
    } else {
        console.log("❌ isKitchenOpen(22) should return false (10 PM closing)");
        allCorrect = false;
    }

    if (test4 === false) {
        console.log("✅ isKitchenOpen(23) returns false - after closing!");
    } else {
        console.log("❌ isKitchenOpen(23) should return false (after 10 PM)");
        allCorrect = false;
    }

    if (allCorrect) {
        console.log("🎉 Puzzle 2.3 is completely fixed! Excellent work!");
    }
    console.log("");
}

// Master check function
function checkMyWork() {
    checkMyWork1();
    checkMyWork2();
    checkMyWork3();
    console.log("Use individual check functions for detailed feedback:");
    console.log("- checkMyWork1() for Puzzle 2.1");
    console.log("- checkMyWork2() for Puzzle 2.2");
    console.log("- checkMyWork3() for Puzzle 2.3");
}

// Final message
console.log("Type help() for hints!");
console.log("Type checkMyWork() to test all your fixes!");