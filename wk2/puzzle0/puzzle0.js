// Week 2 - Puzzle Set 0: Meeting Your Kitchen Assistant
// Teaching: Console usage, function calls, error reading, undefined

// Welcome message when page loads
console.log("=================================");
console.log("🍳 Welcome to Chef Maria's Kitchen!");
console.log("=================================");
console.log("The kitchen computer is ready!");
console.log("");
console.log("Try typing: isFresh('banana')");
console.log("=================================");

// ============================================
// PUZZLE 0.1: Your First Kitchen Function (WORKING CODE)
// ============================================

// This function checks if an ingredient is fresh
function isFresh(ingredient) {
    // List of fresh items in the kitchen
    let freshItems = ["banana", "apple", "lettuce", "tomato", "carrot", "milk", "students"];

    // Check if no ingredient was provided
    if (ingredient === undefined) {
        return "Please specify an ingredient!";
    }

    // Check if the ingredient is in our fresh list
    if (freshItems.includes(ingredient)) {
        return ingredient + " is fresh!";
    } else {
        return ingredient + " is not fresh.";
    }
}

// Students can test:
// isFresh("banana")     -> "banana is fresh!"
// isFresh("apple")      -> "apple is fresh!"
// isFresh("old bread")  -> "old bread is not fresh."
// isFresh()            -> "Please specify an ingredient!"

// ============================================
// PUZZLE 0.1b: Logic Error Example
// ============================================

// This function should check if the oven is hot enough (at least 180°C)
// BUG: It uses the wrong comparison!
function isOvenHotEnough(temperature) {
    let minimumTemp = 180;
    let maxTemp = 1000

    // BUG: This comparison is backwards! //FLAG: OVEN_LOGIC_BUG
    if (temperature > minimumTemp) {
        return "Oven is hot enough!";
    } else {
        return "Oven needs to heat up more.";
    }
}

// Test with:
// isOvenHotEnough(200)  -> Should say "hot enough" but doesn't!
// isOvenHotEnough(150)  -> Should say "needs more heat" but doesn't!

// ============================================
// PUZZLE 0.2: Reading Error Messages (HAS A BUG!)
// ============================================

// This function has a logic error - it counts wrong!
function countIngredients(list) {
    // Check if list was provided
    if (!list) {
        return "No ingredients provided!";
    }

    // BUG: Adding 1 to the count for some reason! //FLAG: COUNT_MATH_BUG
    let total = list.length+ 1;  // <- Why add 1?

    console.log("You have " + total + " ingredients");

    return total;
}

// ============================================
// PUZZLE 0.3: Understanding 'undefined' (HAS A BUG!)
// ============================================

// This function returns the wrong recipe name!
function getRecipeName() {
    let todaysDishBoard = "Chocolate Cake";

    // BUG: Returning the wrong thing! //FLAG: RECIPE_RETURN_BUG
    // retu
    // retu
    return todaysDishBoard
    return "Chocolate Cake"
    // return "Vanilla Cake";  // <- Should return recipeName instead!
}

// ============================================
// BONUS: Extra practice functions (WORKING CODE)
// ============================================

// Check if we have enough ingredients for a recipe
function canCook(required, available) {
    if (available >= required) {
        return "Yes, you can cook this recipe!";
    } else {
        let missing = required - available;
        return "Sorry, you need " + missing + " more ingredients.";
    }
}

// Convert temperature from Celsius to Fahrenheit
function toFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return celsius + "°C is " + fahrenheit + "°F";
}

// Simple timer function
function setTimer(minutes) {
    let seconds = minutes * 60;
    console.log("Timer set for " + minutes + " minutes (" + seconds + " seconds)");
    return "Timer started!";
}

// ============================================
// HELPER MESSAGES
// ============================================

// Function to give hints (students can call this if stuck)
function help() {
    console.log("");
    console.log("🆘 HELP MENU:");
    console.log("-------------");
    console.log("1. To test a function, type its name followed by ()");
    console.log("2. If a function needs input, put it in the parentheses");
    console.log("3. Strings need quotes: 'banana' or \"banana\"");
    console.log("4. Red text = error (read it, it helps!)");
    console.log("5. undefined = function didn't return anything");
    console.log("");
    console.log("Available functions to try:");
    console.log("- isFresh('ingredient')");
    console.log("- countIngredients(['item1', 'item2'])");
    console.log("- getRecipeName()");
    console.log("- canCook(5, 3)");
    console.log("- toFahrenheit(100)");
    console.log("- setTimer(5)");
    console.log("");
}

// Function to check student's fixes
function checkMyWork() {
    console.log("");
    console.log("📋 CHECKING YOUR WORK...");
    console.log("------------------------");

    // Check if isOvenHotEnough is fixed
    let ovenTest1 = isOvenHotEnough(200);  // Should say "hot enough"
    let ovenTest2 = isOvenHotEnough(150);  // Should say "needs more heat"

    if (ovenTest1.includes("hot enough") && ovenTest2.includes("needs")) {
        console.log("✅ isOvenHotEnough is fixed! Great work!");
    } else {
        console.log("❌ isOvenHotEnough has backwards logic - check the comparison!");
    }

    // Check if countIngredients is fixed
    let countResult = countIngredients(["a", "b", "c"]);
    if (countResult === 3) {
        console.log("✅ countIngredients is fixed! Good job!");
    } else if (countResult === 4) {
        console.log("❌ countIngredients is adding 1 extra - check the math!");
    } else {
        console.log("❌ countIngredients has an issue");
    }

    // Check if getRecipeName is fixed
    let recipeResult = getRecipeName();
    if (recipeResult === "Chocolate Cake") {
        console.log("✅ getRecipeName is fixed! Well done!");
    } else if (recipeResult === "Vanilla Cake") {
        console.log("❌ getRecipeName returns wrong recipe - should use the variable!");
    } else {
        console.log("❌ getRecipeName has an issue");
    }

    console.log("");
}

// Easter egg function for fun
function secretMenu() {
    let specials = [
        "🍝 Today's special: Magic Spaghetti!",
        "🍕 Secret item: Invisible Pizza!",
        "🍰 Hidden dessert: Floating Cake!",
        "🥗 Mystery dish: Quantum Salad!"
    ];

    let randomIndex = Math.floor(Math.random() * specials.length);
    return specials[randomIndex];
}

// Final message
console.log("Type help() if you get stuck!");
console.log("Type checkMyWork() to see if you fixed the bugs!");