// Week 2 - Puzzle Set 3: The Random Menu & Mixed Types
// Teaching: Random numbers, data types, string vs number issues

// Welcome message
console.log("=================================");
console.log("🎲 Random Menu & Order System");
console.log("=================================");
console.log("The daily special selector and order system are broken!");
console.log("");
console.log("Try: pickTodaysSpecial() multiple times");
console.log("Or type: help()");
console.log("=================================");

// ============================================
// PUZZLE 3.1: The Predictable Daily Special
// ============================================

// This should randomly pick a dish for today's special
// BUG: Always picks the same dish!
function pickTodaysSpecial() {
    // Generate a random number from 0 to 3
    let randomNumber = Math.random();  // This gives 0 to 0.999...

    // BUG: We're not using the random number properly! //FLAG: RANDOM_NOT_USED_BUG
    let dishNumber = 2;  // This is always 2, not random!

    // Map each number to a dish
    let specialDish;
    if (dishNumber === 0) {
        specialDish = "Pasta Primavera";
    } else if (dishNumber === 1) {
        specialDish = "Pizza Margherita";
    } else if (dishNumber === 2) {
        specialDish = "Garden Salad";
    } else if (dishNumber === 3) {
        specialDish = "Tomato Soup";
    }

    return "Today's special: " + specialDish;
}

// Fix hint: Use Math.floor(Math.random() * 4) to get 0, 1, 2, or 3
// Test by calling multiple times - should see different dishes

// ============================================
// PUZZLE 3.2: The Dice Roll for Free Dessert
// ============================================

// Roll two dice - if total is 12, customer gets free dessert!
// BUG: The dice values are wrong!
function rollForDessert() {
    // Roll two dice (should be 1-6 each)
    // BUG: Math.floor(Math.random() * 6) gives 0-5, not 1-6! //FLAG: DICE_RANGE_BUG1
    let dice1 = Math.floor(Math.random() * 6);  // This gives 0-5!
    let dice2 = Math.floor(Math.random() * 6);  // This gives 0-5! //FLAG: DICE_RANGE_BUG2

    let total = dice1 + dice2;

    // Display the dice values for debugging
    console.log("Dice 1: " + dice1 + ", Dice 2: " + dice2);

    // Check if they won (two 6s = 12)
    if (total === 12) {
        return "🎉 Free dessert! You rolled " + total + " (double 6s)!";
    } else if (total === 11) {
        return "So close! You rolled " + total + ". Need 12 for free dessert.";
    } else {
        return "You rolled " + total + ". Need 12 (double 6s) for free dessert.";
    }
}

// Fix hint: Add 1 to each die roll to get 1-6 instead of 0-5

// ============================================
// PUZZLE 3.3: The Order Quantity Confusion (Brain Teaser - Advanced)
// ============================================

// This should check if we have enough portions
// BUG: String/number confusion causes problems!
function canFulfillOrder(orderQuantity, availablePortions) {
    // Let's see what types we're dealing with
    console.log("Order type: " + typeof orderQuantity);
    console.log("Available type: " + typeof availablePortions);
    console.log("Comparing: '" + orderQuantity + "' <= " + availablePortions);

    // BUG: String comparison doesn't work like number comparison! //FLAG: TYPE_COMPARISON_BUG
    if (orderQuantity <= availablePortions) {
        return "✅ Order confirmed for " + orderQuantity + " portions";
    } else {
        return "❌ Sorry, we only have " + availablePortions + " portions (you wanted " + orderQuantity + ")";
    }
}

// Test these - watch for surprises!
// canFulfillOrder("5", 10)   -> Works correctly by luck
// canFulfillOrder("20", 3)   -> "20" <= 3 is true in string comparison!
// canFulfillOrder(5, 10)     -> This works correctly

// Fix: Convert strings to numbers using Number() before comparing

// ============================================
// HELPER FUNCTIONS
// ============================================

// Function to give hints
function help() {
    console.log("");
    console.log("🆘 HELP MENU - Random & Types:");
    console.log("------------------------------");
    console.log("Functions to fix:");
    console.log("1. pickTodaysSpecial()");
    console.log("   - Should return different dishes randomly");
    console.log("   - Hint: Math.floor(Math.random() * 4) gives 0, 1, 2, or 3");
    console.log("");
    console.log("2. rollForDessert()");
    console.log("   - Dice should be 1-6, not 0-5");
    console.log("   - Hint: Add 1 after Math.floor(Math.random() * 6)");
    console.log("");
    console.log("3. canFulfillOrder(quantity, available) [BRAIN TEASER]");
    console.log("   - String '20' is 'less than' string '3' alphabetically!");
    console.log("   - Convert to numbers: Number(orderQuantity)");
    console.log("");
    console.log("Random number formula:");
    console.log("  Math.random() gives 0 to 0.999...");
    console.log("  Math.floor(Math.random() * N) gives 0 to N-1");
    console.log("  Add 1 for dice: 1 + Math.floor(Math.random() * 6)");
    console.log("");
    console.log("Use checkMyWork1(), checkMyWork2(), or checkMyWork3()");
    console.log("");
}

// Function to check Puzzle 3.1
function checkMyWork1() {
    console.log("");
    console.log("📋 Checking Puzzle 3.1: Daily Special");
    console.log("-------------------------------------");
    console.log("Testing randomness (calling 10 times)...");

    let results = {};
    for (let i = 0; i < 10; i++) {
        let special = pickTodaysSpecial();
        results[special] = (results[special] || 0) + 1;
    }

    let uniqueCount = Object.keys(results).length;

    console.log("Results:", results);

    if (uniqueCount === 1) {
        console.log("❌ Always returns the same dish! The random number isn't being used.");
        console.log("Hint: Replace 'dishNumber = 2' with 'dishNumber = Math.floor(Math.random() * 4)'");
    } else if (uniqueCount >= 2) {
        console.log("✅ Returns different dishes! Randomness is working!");
        console.log("🎉 Puzzle 3.1 is fixed! The special changes randomly!");
    }
    console.log("");
}

// Function to check Puzzle 3.2
function checkMyWork2() {
    console.log("");
    console.log("📋 Checking Puzzle 3.2: Dice Roll");
    console.log("---------------------------------");
    console.log("Rolling dice 20 times to check range...");

    let minRoll = 12;
    let maxRoll = 0;
    let gotTwelve = false;
    let invalidDice = false;

    for (let i = 0; i < 20; i++) {
        // We need to check the actual dice values
        // Temporarily capture console.log
        let oldLog = console.log;
        let capturedDice = [];
        console.log = function(msg) {
            if (msg.includes("Dice")) {
                capturedDice.push(msg);
            }
            oldLog.apply(console, arguments);
        };

        let result = rollForDessert();
        console.log = oldLog;

        // Parse the dice values from the log
        if (capturedDice.length > 0) {
            let match = capturedDice[0].match(/Dice 1: (\d+), Dice 2: (\d+)/);
            if (match) {
                let d1 = parseInt(match[1]);
                let d2 = parseInt(match[2]);
                let total = d1 + d2;

                if (d1 < 1 || d1 > 6 || d2 < 1 || d2 > 6) {
                    invalidDice = true;
                }

                minRoll = Math.min(minRoll, total);
                maxRoll = Math.max(maxRoll, total);

                if (total === 12) {
                    gotTwelve = true;
                }
            }
        }
    }

    console.log("Min roll seen: " + minRoll);
    console.log("Max roll seen: " + maxRoll);

    if (minRoll < 2) {
        console.log("❌ Got impossible dice totals (less than 2)! Dice start at 0 instead of 1.");
        console.log("Hint: Add 1 to each die: (Math.floor(Math.random() * 6) + 1)");
    } else if (maxRoll > 12) {
        console.log("❌ Got impossible dice totals (more than 12)!");
    } else if (minRoll >= 2 && maxRoll <= 12) {
        console.log("✅ Dice values are in correct range (2-12)!");
        console.log("🎉 Puzzle 3.2 is fixed! Dice roll from 1-6 each!");
    }
    console.log("");
}

// Function to check Puzzle 3.3
function checkMyWork3() {
    console.log("");
    console.log("📋 Checking Puzzle 3.3: Order Types (Brain Teaser)");
    console.log("--------------------------------------------------");

    // Temporarily suppress console.log for cleaner output
    let oldLog = console.log;
    console.log = function() {};

    let test1 = canFulfillOrder("5", 10);
    let test2 = canFulfillOrder("20", 3);
    let test3 = canFulfillOrder(5, 10);
    let test4 = canFulfillOrder(20, 3);

    console.log = oldLog;

    let allCorrect = true;

    console.log("Testing string vs number comparisons:");

    if (test1.includes("confirmed")) {
        console.log("✅ canFulfillOrder('5', 10) correctly confirmed");
    } else {
        console.log("❌ canFulfillOrder('5', 10) should be confirmed");
        allCorrect = false;
    }

    if (test2.includes("Sorry")) {
        console.log("✅ canFulfillOrder('20', 3) correctly rejected!");
    } else {
        console.log("❌ String '20' is being treated as less than 3!");
        console.log("   This is because '20' < '3' in alphabetical order!");
        allCorrect = false;
    }

    if (test3.includes("confirmed") && test4.includes("Sorry")) {
        console.log("✅ Number comparisons work correctly!");
    } else {
        console.log("⚠️ Even number comparisons might have issues");
        allCorrect = false;
    }

    if (allCorrect) {
        console.log("🎉 Puzzle 3.3 is fixed! Type conversion is working!");
        console.log("You must be converting strings to numbers before comparing!");
    } else {
        console.log("\nHint: Convert to numbers first:");
        console.log("  orderQuantity = Number(orderQuantity);");
    }
    console.log("");
}

// Master check function
function checkMyWork() {
    checkMyWork1();
    checkMyWork2();
    checkMyWork3();
    console.log("Use individual check functions for detailed feedback:");
    console.log("- checkMyWork1() for Puzzle 3.1");
    console.log("- checkMyWork2() for Puzzle 3.2");
    console.log("- checkMyWork3() for Puzzle 3.3");
}

// Final message
console.log("Type help() for hints!");
console.log("Type checkMyWork() to test all your fixes!");