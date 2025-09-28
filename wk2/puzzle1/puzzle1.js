// Week 2 - Puzzle Set 1: The Recipe Logic Problem
// Teaching: Boolean logic, conditions, true/false returns

// Welcome message
console.log("=================================");
console.log("🍳 Chef Maria's Recipe Checker");
console.log("=================================");
console.log("The recipe logic system needs fixing!");
console.log("");
console.log("Try: canMakeSandwich(true, true)");
console.log("Or type: help()");
console.log("=================================");

// ============================================
// PUZZLE 1.1: The Pessimistic Recipe Checker
// ============================================

// This should return true if we can make a sandwich
// BUG: It always returns the wrong answer!
function canMakeSandwich(hasBread, hasFilling) {
    // Check if we have both ingredients
    if (hasBread && hasFilling) {
        return false;  // BUG: This should return true! //FLAG: SANDWICH_LOGIC_BUG
    } else {
        return true;   // BUG: This should return false! //FLAG: SANDWICH_ELSE_BUG
    }
}

// Test with:
// canMakeSandwich(true, true)   -> Should return true
// canMakeSandwich(true, false)  -> Should return false
// canMakeSandwich(false, true)  -> Should return false
// canMakeSandwich(false, false) -> Should return false

// ============================================
// PUZZLE 1.2: The Vegetarian Menu Filter
// ============================================

// This should return true ONLY for vegetarian dishes
// BUG: It's completely backwards!
function isVegetarian(dishName) {
    // Check each meat dish individually
    if (dishName === "chicken curry") {
        return true;  // BUG: Chicken is NOT vegetarian! //FLAG: CHICKEN_VEG_BUG
    }
    if (dishName === "beef stew") {
        return true;  // BUG: Beef is NOT vegetarian! //FLAG: BEEF_VEG_BUG
    }
    if (dishName === "pork chops") {
        return true;  // BUG: Pork is NOT vegetarian! //FLAG: PORK_VEG_BUG
    }

    // If it's not a meat dish, it must be vegetarian
    return false;  // BUG: This should return true for vegetarian dishes! //FLAG: VEG_DEFAULT_BUG
}

// Test with:
// isVegetarian("chicken curry")  -> Should return false
// isVegetarian("garden salad")   -> Should return true
// isVegetarian("vegetable soup") -> Should return true
// isVegetarian("beef stew")      -> Should return false

// ============================================
// PUZZLE 1.3: The Allergy Checker (Brain Teaser)
// ============================================

// This checks if a dish is SAFE for someone with an allergy
// BUG: The logic is completely reversed!
function isSafeToEat(dishName, allergyIngredient) {
    // Check what's in each dish using if/else
    let containsAllergen = false;

    if (dishName === "pasta") {
        // Pasta contains wheat and eggs
        if (allergyIngredient === "wheat" || allergyIngredient === "eggs") {
            containsAllergen = true;
        }
    } else if (dishName === "salad") {
        // Salad contains lettuce and tomatoes (usually safe)
        if (allergyIngredient === "lettuce" || allergyIngredient === "tomatoes") {
            containsAllergen = true;
        }
    } else if (dishName === "ice cream") {
        // Ice cream contains milk and sugar
        if (allergyIngredient === "milk" || allergyIngredient === "sugar") {
            containsAllergen = true;
        }
    }

    // BUG: The return logic is backwards!
    if (containsAllergen) {
        return true;  // BUG: Should return false if it contains the allergen! //FLAG: ALLERGY_TRUE_BUG
    } else {
        return false; // BUG: Should return true if it's safe! //FLAG: ALLERGY_FALSE_BUG
    }
}

// Test with:
// isSafeToEat("pasta", "wheat")     -> Should return false (not safe!)
// isSafeToEat("salad", "milk")      -> Should return true (safe!)
// isSafeToEat("ice cream", "milk")  -> Should return false (not safe!)

// ============================================
// HELPER FUNCTIONS
// ============================================

// Function to give hints
function help() {
    console.log("");
    console.log("🆘 HELP MENU - Recipe Logic:");
    console.log("-----------------------------");
    console.log("Functions to fix:");
    console.log("1. canMakeSandwich(hasBread, hasFilling)");
    console.log("   - Should return true only when BOTH are true");
    console.log("");
    console.log("2. isVegetarian(dishName)");
    console.log("   - Should return false for meat dishes");
    console.log("   - Should return true for non-meat dishes");
    console.log("");
    console.log("3. isSafeToEat(dishName, allergyIngredient)");
    console.log("   - Should return false if dish contains the allergen");
    console.log("   - Should return true if it's safe");
    console.log("");
    console.log("Use checkMyWork1(), checkMyWork2(), or checkMyWork3()");
    console.log("to test each puzzle individually!");
    console.log("");
}

// Function to check Puzzle 1.1
function checkMyWork1() {
    console.log("");
    console.log("📋 Checking Puzzle 1.1: Recipe Checker");
    console.log("--------------------------------------");

    let test1 = canMakeSandwich(true, true);
    let test2 = canMakeSandwich(true, false);
    let test3 = canMakeSandwich(false, true);
    let test4 = canMakeSandwich(false, false);

    let allCorrect = true;

    if (test1 === true) {
        console.log("✅ canMakeSandwich(true, true) is correct!");
    } else {
        console.log("❌ canMakeSandwich(true, true) should return true");
        allCorrect = false;
    }

    if (test2 === false && test3 === false && test4 === false) {
        console.log("✅ All other cases return false correctly!");
    } else {
        console.log("❌ Should only return true when BOTH ingredients are available");
        allCorrect = false;
    }

    if (allCorrect) {
        console.log("🎉 Puzzle 1.1 is completely fixed! Great job!");
    }
    console.log("");
}

// Function to check Puzzle 1.2
function checkMyWork2() {
    console.log("");
    console.log("📋 Checking Puzzle 1.2: Vegetarian Filter");
    console.log("-----------------------------------------");

    let test1 = isVegetarian("chicken curry");
    let test2 = isVegetarian("beef stew");
    let test3 = isVegetarian("garden salad");
    let test4 = isVegetarian("vegetable soup");

    let allCorrect = true;

    if (test1 === false && test2 === false) {
        console.log("✅ Meat dishes return false correctly!");
    } else {
        console.log("❌ Meat dishes should return false");
        allCorrect = false;
    }

    if (test3 === true && test4 === true) {
        console.log("✅ Vegetarian dishes return true correctly!");
    } else {
        console.log("❌ Non-meat dishes should return true");
        allCorrect = false;
    }

    if (allCorrect) {
        console.log("🎉 Puzzle 1.2 is completely fixed! Well done!");
    }
    console.log("");
}

// Function to check Puzzle 1.3
function checkMyWork3() {
    console.log("");
    console.log("📋 Checking Puzzle 1.3: Allergy Checker");
    console.log("---------------------------------------");

    let test1 = isSafeToEat("pasta", "wheat");
    let test2 = isSafeToEat("salad", "milk");
    let test3 = isSafeToEat("ice cream", "milk");
    let test4 = isSafeToEat("pasta", "lettuce");

    let allCorrect = true;

    if (test1 === false) {
        console.log("✅ Pasta with wheat allergy returns false (not safe)!");
    } else {
        console.log("❌ Pasta contains wheat - should return false for wheat allergy");
        allCorrect = false;
    }

    if (test2 === true) {
        console.log("✅ Salad with milk allergy returns true (safe)!");
    } else {
        console.log("❌ Salad doesn't contain milk - should return true");
        allCorrect = false;
    }

    if (test3 === false) {
        console.log("✅ Ice cream with milk allergy returns false (not safe)!");
    } else {
        console.log("❌ Ice cream contains milk - should return false for milk allergy");
        allCorrect = false;
    }

    if (allCorrect) {
        console.log("🎉 Puzzle 1.3 is completely fixed! Excellent work!");
    }
    console.log("");
}

// Master check function
function checkMyWork() {
    checkMyWork1();
    checkMyWork2();
    checkMyWork3();
    console.log("Use individual check functions for detailed feedback:");
    console.log("- checkMyWork1() for Puzzle 1.1");
    console.log("- checkMyWork2() for Puzzle 1.2");
    console.log("- checkMyWork3() for Puzzle 1.3");
}

// Final message
console.log("Type help() for hints!");
console.log("Type checkMyWork() to test all your fixes!");