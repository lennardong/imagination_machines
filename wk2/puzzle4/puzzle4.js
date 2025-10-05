// Week 2 - Puzzle Set 4: Integration Challenge (Optional Stretch Challenge)
// Teaching: Combining all concepts - arrays, objects, all previous bug types

// Welcome message
console.log("=================================");
console.log("🌟 STRETCH CHALLENGE: Complete Order System");
console.log("=================================");
console.log("⚠️ WARNING: This puzzle uses arrays and objects!");
console.log("These are advanced concepts - only try if you've");
console.log("completed Puzzles 0-3 successfully!");
console.log("");
console.log("Try: validateOrder('pasta', 2, 'none')");
console.log("Or type: help()");
console.log("=================================");

// ============================================
// PUZZLE 4: The Complete Order System
// ============================================

// This function should validate a complete order
// It has MULTIPLE bugs - use all your debugging skills!
// WARNING: This puzzle uses arrays and objects (advanced concepts)
function validateOrder(dishName, quantity, customerAllergy) {
    // This is an "object" - a more complex data structure
    // Each dish has properties: price, contains (array), available
    let menu = {
        "pasta": { price: 12, contains: ["wheat", "eggs"], available: 5 },
        "salad": { price: 8, contains: ["lettuce"], available: 10 },
        "soup": { price: 6, contains: ["vegetables"], available: 0 }  // Out of stock!
    };

    // Bug 1: Wrong variable name (case matters!) //FLAG: CASE_SENSITIVE_BUG
    let dish = menu[dishName];  // BUG: JavaScript is case-sensitive!

    if (!dish) {
        return "❌ Dish not on menu. Try 'pasta', 'salad', or 'soup'";
    }

    // Bug 2: Wrong comparison //FLAG: AVAILABILITY_COMPARISON_BUG
    if (quantity > dish.available) {  // BUG: Should this be < or > ?
        return "❌ Sorry, not enough available. We have " + dish.available + " portions.";
    }

    // Bug 3: Backwards allergy logic //FLAG: ALLERGY_LOGIC_BUG
    if (!dish.contains.includes(customerAllergy)) {
        return "✅ Order confirmed!";  // BUG: This is dangerous!
    }

    // Bug 4: String concatenation instead of math //FLAG: PRICE_CALCULATION_BUG
    let totalPrice = quantity + dish.price;  // BUG: What if quantity is "3"?

    return "✅ Order confirmed! Total: $" + totalPrice;
}

// Test with:
// validateOrder("pasta", 2, "wheat")     -> Should warn about allergy!
// validateOrder("salad", "3", "none")    -> Should calculate price correctly
// validateOrder("soup", 1, "none")       -> Should say not available

// ============================================
// HELPER FUNCTIONS
// ============================================

// Function to give hints
function help() {
    console.log("");
    console.log("🆘 HELP MENU - Integration Challenge:");
    console.log("------------------------------------");
    console.log("This challenge combines ALL previous concepts!");
    console.log("");
    console.log("Bug 1 - Case Sensitivity:");
    console.log("  JavaScript is case-sensitive!");
    console.log("  'dishName' is not the same as 'dishname'");
    console.log("");
    console.log("Bug 2 - Comparison Logic:");
    console.log("  Think: If I want 5 but you have 3...");
    console.log("  Should that be quantity > available?");
    console.log("");
    console.log("Bug 3 - Allergy Safety:");
    console.log("  If dish CONTAINS the allergen, is it safe?");
    console.log("  Should return warning, not confirmation!");
    console.log("");
    console.log("Bug 4 - Type Conversion:");
    console.log("  '3' + 12 = '312' (string concatenation)");
    console.log("  Need to convert: Number(quantity) * dish.price");
    console.log("");
    console.log("Test cases:");
    console.log("  validateOrder('pasta', 2, 'wheat')");
    console.log("  validateOrder('salad', '3', 'none')");
    console.log("  validateOrder('soup', 1, 'none')");
    console.log("");
    console.log("Use checkMyWork() to validate your fixes!");
    console.log("");
}

// Function to check all bugs
function checkMyWork() {
    console.log("");
    console.log("📋 CHECKING INTEGRATION CHALLENGE");
    console.log("=================================");

    let score = 0;
    let totalTests = 4;

    // Test 1: Case sensitivity
    console.log("\n🔍 Test 1: Case Sensitivity");
    console.log("---------------------------");
    let test1a = validateOrder("pasta", 2, "none");
    let test1b = validateOrder("PASTA", 2, "none");  // Should fail with current bug

    if (test1a.includes("confirmed") && test1b.includes("not on menu")) {
        console.log("❌ Case sensitivity bug still exists");
        console.log("   'dishname' should be 'dishName'");
    } else if (test1a.includes("confirmed")) {
        console.log("✅ Case sensitivity fixed!");
        score++;
    }

    // Test 2: Availability check
    console.log("\n🔍 Test 2: Availability Check");
    console.log("-----------------------------");
    let test2a = validateOrder("pasta", 10, "none");  // Want 10, have 5
    let test2b = validateOrder("pasta", 3, "none");   // Want 3, have 5
    let test2c = validateOrder("soup", 1, "none");    // Soup has 0 available

    let availability_correct = true;
    if (!test2a.includes("not enough")) {
        console.log("❌ Should reject order for 10 pasta (only 5 available)");
        availability_correct = false;
    }
    if (!test2b.includes("confirmed")) {
        console.log("❌ Should confirm order for 3 pasta (5 available)");
        availability_correct = false;
    }
    if (!test2c.includes("not enough")) {
        console.log("❌ Should reject soup order (0 available)");
        availability_correct = false;
    }

    if (availability_correct) {
        console.log("✅ Availability comparison fixed!");
        score++;
    } else {
        console.log("   Hint: Use quantity > dish.available for rejection");
    }

    // Test 3: Allergy safety
    console.log("\n🔍 Test 3: Allergy Safety");
    console.log("-------------------------");
    let test3a = validateOrder("pasta", 2, "wheat");  // Pasta contains wheat!
    let test3b = validateOrder("salad", 2, "milk");   // Salad doesn't have milk

    let allergy_correct = true;
    if (!test3a.includes("❌") && !test3a.toLowerCase().includes("allerg")) {
        console.log("❌ Should warn about wheat allergy in pasta!");
        console.log("   Currently: " + test3a);
        allergy_correct = false;
    }
    if (!test3b.includes("✅")) {
        console.log("❌ Salad with milk allergy should be safe");
        allergy_correct = false;
    }

    if (allergy_correct) {
        console.log("✅ Allergy logic fixed! Safety first!");
        score++;
    } else {
        console.log("   Hint: Return warning if dish.contains.includes(allergy)");
    }

    // Test 4: Price calculation
    console.log("\n🔍 Test 4: Price Calculation");
    console.log("----------------------------");
    let test4a = validateOrder("salad", "3", "none");  // String "3"
    let test4b = validateOrder("pasta", 2, "none");    // Number 2

    let price_correct = true;
    // For salad: 3 * 8 = 24
    if (test4a.includes("confirmed") && test4a.includes("24")) {
        console.log("✅ String quantity converted correctly!");
    } else if (test4a.includes("38")) {
        console.log("❌ Got '38' instead of 24 (string concatenation: '3' + 8)");
        price_correct = false;
    } else {
        console.log("❌ Price calculation error for string quantity");
        price_correct = false;
    }

    // For pasta: 2 * 12 = 24
    if (test4b.includes("confirmed") && test4b.includes("24")) {
        // Good!
    } else if (test4b.includes("14")) {
        console.log("❌ Got 14 instead of 24 (addition instead of multiplication)");
        price_correct = false;
    }

    if (price_correct) {
        console.log("✅ Price calculation fixed!");
        score++;
    } else {
        console.log("   Hint: totalPrice = Number(quantity) * dish.price");
    }

    // Final score
    console.log("\n=================================");
    console.log("FINAL SCORE: " + score + "/" + totalTests + " bugs fixed");

    if (score === totalTests) {
        console.log("🎉 PERFECT! You've mastered all debugging concepts!");
        console.log("🌟 Integration Challenge Complete! 🌟");
    } else if (score >= 3) {
        console.log("📚 Almost there! Review the remaining bugs.");
    } else if (score >= 2) {
        console.log("💪 Good progress! Keep debugging!");
    } else {
        console.log("🔧 Keep trying! Use help() for hints.");
    }
    console.log("=================================");
    console.log("");
}

// Test data display function
function showMenu() {
    console.log("");
    console.log("📋 RESTAURANT MENU:");
    console.log("-------------------");
    console.log("PASTA: $12, contains wheat & eggs, 5 portions available");
    console.log("SALAD: $8, contains lettuce, 10 portions available");
    console.log("SOUP: $6, contains vegetables, 0 portions available (OUT OF STOCK)");
    console.log("");
}

// Final message
console.log("Type help() for hints!");
console.log("Type showMenu() to see what's available!");
console.log("Type checkMyWork() to test your fixes!");