# Week 2 Brief: The Kitchen Code Mystery
## Helping Chef Maria Fix Her Digital Kitchen

---

## Story Introduction

Chef Maria just installed a new "Smart Kitchen System" to help run her restaurant. But something went wrong during installation - all the kitchen helper functions have bugs! The restaurant opens tomorrow, and she needs your help to debug the system.

Each puzzle set represents a different part of her kitchen that needs fixing. By helping Chef Maria, you'll learn the same debugging skills you'll need for your homework!

---

## Schedule

**Format:** Each puzzle set follows this pattern:
- **20 minutes:** Solve puzzles (students work)
- **10 minutes:** Share discoveries (peer interaction)
- **15 minutes:** Learn the concept (teacher explanation)

### Timeline:
Day 1
- 8:00-8:15: Homework Sharing from Week 1
- 8:15-9:00: Puzzle Set 0 + Discussion
- 9:00-9:45: Puzzle Set 1 + Discussion
- 9:45 - 10:00: review

Day 2
- 8:00-8:15: Recap  
- 8:15-9:00: Puzzle Set 2 + Discussion
- 9:00-9:45: Puzzle Set 3 + Discussion
- 9:45 - 10:00: Recap, homework brief, Q&A

Optional:
- Puzzle Set 4: Take home stretch challenge for advanced students

---

## Puzzle Set 0: Meeting Your Kitchen Assistant
**Time:** 45 minutes | **Concept:** Console as interpreter, logical errors

### Story:
"Welcome to my kitchen!" says Chef Maria. "First, let's make sure you can talk to the kitchen computer. It understands JavaScript and responds through something called the 'console'."

### Learning Objectives:
- Open and use the browser console
- Call functions and see their output
- Identify when outputs don't match expectations
- Fix logical errors in code

### How to Access:
1. Open `puzzle0/puzzle0.html` in Live Preview
2. Open browser console (F12)
3. Follow instructions in `puzzle0/README.md`

### Key Debugging Skills Practiced:
- **Logic Error:** `isOvenHotEnough()` - Wrong comparison operator
- **Math Error:** `countIngredients()` - Incorrect calculation
- **Return Error:** `getRecipeName()` - Wrong return value

Students test functions, notice wrong outputs, then fix the code.

> ### Instructor Guide - Puzzle Set 0
> **Key Concepts to Explain:**
> - Console = conversation with computer
> - Functions take input → process → output
> - Logical errors produce wrong results (no crashes)
> - Test with different inputs to spot patterns
> - Comments in code give hints about bugs
>
> **Discussion Points:**
> - "How did you know the output was wrong?"
> - "What clues helped you find the bug?"
> - "Why is testing with different inputs important?"

---

## Puzzle Set 1: The Recipe Logic Problem
**Time:** 45 minutes | **Concept:** Boolean logic, conditions (relates to Homework Bug 1)

### Story:
"My recipe checker is broken!" Chef Maria exclaims. "It keeps telling me I can't make recipes even when I have all the ingredients. Can you fix the logic?"

### Learning Objectives:
- Understand true/false returns
- Fix logical operators (&&, ||, !)
- See how decisions affect program flow

### Puzzle 1.1: The Pessimistic Recipe Checker
```javascript
// This should return true if we can make a sandwich
// Bug: It always says false!
function canMakeSandwich(hasBread, hasFilling) {
    // Check if we have both ingredients
    if (hasBread && hasFilling) {
        return false;  // BUG: This should return true when we CAN make a sandwich!
    } else {
        return true;   // BUG: This should return false when we CAN'T make it!
    }
}

// Test cases to try:
// canMakeSandwich(true, true)   -> Should return true (we can make it!)
// canMakeSandwich(true, false)  -> Should return false (missing filling)
```

### Puzzle 1.2: The Vegetarian Menu Filter
```javascript
// This should return true only for vegetarian dishes
// Bug: It's backwards!
function isVegetarian(dishName) {
    // Check each meat dish individually
    if (dishName === "chicken curry") {
        return true;  // BUG: Chicken is NOT vegetarian!
    }
    if (dishName === "beef stew") {
        return true;  // BUG: Beef is NOT vegetarian!
    }
    if (dishName === "pork chops") {
        return true;  // BUG: Pork is NOT vegetarian!
    }

    // If it's not meat, it must be vegetarian
    return false;  // BUG: This should return true for vegetarian dishes!
}

// Test cases to try:
// isVegetarian("chicken curry")  -> Should return false
// isVegetarian("garden salad")   -> Should return true
```

### Puzzle 1.3: The Allergy Checker (Brain Teaser)
```javascript
// This checks if a dish is SAFE for someone with an allergy
// Bug: The logic is completely mixed up!
function isSafeToEat(dishName, allergyIngredient) {
    // Check what's in each dish using if/else
    let containsAllergen = false;

    if (dishName === "pasta") {
        // Pasta contains wheat and eggs
        if (allergyIngredient === "wheat" || allergyIngredient === "eggs") {
            containsAllergen = true;
        }
    } else if (dishName === "salad") {
        // Salad contains lettuce and tomatoes (no common allergens)
        if (allergyIngredient === "lettuce" || allergyIngredient === "tomatoes") {
            containsAllergen = true;
        }
    } else if (dishName === "ice cream") {
        // Ice cream contains milk and sugar
        if (allergyIngredient === "milk" || allergyIngredient === "sugar") {
            containsAllergen = true;
        }
    }

    // BUG: This return is backwards!
    if (containsAllergen) {
        return true;  // BUG: Should return false if it CONTAINS the allergen!
    } else {
        return false; // BUG: Should return true if it's SAFE!
    }
}

// Test cases to try:
// isSafeToEat("pasta", "wheat")     -> Should return false (not safe!)
// isSafeToEat("salad", "milk")      -> Should return true (safe!)
```

### Expected Outputs:
- 1.1: Swap the return values
- 1.2: Return false for meat dishes, true for others
- 1.3: Reverse the final return logic

### Stretch Challenge for Advanced Students:
Research what a "dictionary" or "object" is in JavaScript and try rebuilding the vegetarian checker using one!

> ### Instructor Guide - Puzzle Set 1
> **Key Concepts to Explain:**
> - Boolean values: true/false are the basis of all decisions
> - Conditions create branches in code flow
> - The return value should match the function's purpose
> - Read function names carefully - they hint at what should return
>
> **Note:** These examples don't use "best practices" - they're simplified for learning
>
> **Real-world Connection:**
> This is exactly like Homework Bug 1 where the winner logic is reversed!

---

## Puzzle Set 2: The Kitchen Timer Troubles
**Time:** 45 minutes | **Concept:** Comparison operators (relates to Homework Bug 2)

### Story:
"The kitchen timers are all wrong!" Chef Maria shows you the oven controls. "They're using the wrong comparisons - food is either burning or coming out raw!"

### Learning Objectives:
- Understand <, >, <=, >=, ===, !==
- See how comparison affects program behavior
- Fix boundary conditions

### Puzzle 2.1: The Oven Temperature Check
```javascript
// This should return true if the oven is hot enough for baking
// Baking needs at least 180°C
// Bug: Wrong comparison operator!
function isOvenReady(currentTemperature) {
    let minimumBakingTemp = 180;

    // Check if temperature is high enough
    // BUG: This comparison is backwards!
    if (currentTemperature < minimumBakingTemp) {
        return true;  // This says oven is ready when it's TOO COLD!
    } else {
        return false; // This says not ready when it's HOT ENOUGH!
    }
}

// Test cases to try:
// isOvenReady(175)  -> Should return false (too cold!)
// isOvenReady(180)  -> Should return true (just right!)
```

### Puzzle 2.2: The Cooking Timer
```javascript
// This checks if food has cooked long enough
// Bug: It never says the food is done!
function isCooked(minutesCooked, minutesNeeded) {
    // Check if we've cooked long enough
    // BUG: Should we use > or >= here?
    if (minutesCooked > minutesNeeded) {
        return "It's done!";
    } else {
        return "Keep cooking!";
    }
}

// Test cases to try:
// isCooked(10, 15)  -> Should return "Keep cooking!"
// isCooked(15, 15)  -> Should return "It's done!" (BUG: currently says keep cooking!)
```

### Puzzle 2.3: The Kitchen Closing Time (Brain Teaser)
```javascript
// Restaurant closes at hour 22 (10 PM)
// This should return true if kitchen is still open
// Bug: Multiple comparison issues!
function isKitchenOpen(currentHour) {
    let openingTime = 9;   // Opens at 9 AM
    let closingTime = 22;  // Closes at 10 PM

    // Check if we're in business hours
    // BUG: The second comparison is wrong!
    if (currentHour >= openingTime && currentHour >= closingTime) {
        return true;  // Kitchen is open
    } else {
        return false; // Kitchen is closed
    }
}

// Test cases to try:
// isKitchenOpen(14)  -> Should return true (2 PM - open!)
// isKitchenOpen(23)  -> Should return false (11 PM - closed!)
```

### Expected Outputs:
- 2.1: Use >= instead of <
- 2.2: Use >= instead of >
- 2.3: Change second >= to <

### Stretch Challenge:
Add a lunch break (14:00-15:00) when kitchen is closed to `isKitchenOpen`.

> ### Instructor Guide - Puzzle Set 2
> **Key Concepts to Explain:**
> - Comparison operators create true/false results
> - >= vs > matters at boundaries (edge cases)
> - Common mistake: using wrong direction (</>)
> - AND (&&) means both must be true
>
> **Debugging Tip:**
> "Read comparisons out loud: 'If temperature is less than minimum...'"

---

## Puzzle Set 3: The Random Menu & Mixed Types
**Time:** 45 minutes | **Concepts:** Random numbers, data types (relates to Homework Bugs 3 & 4)

### Story:
"My daily special selector is broken - it keeps picking the same dish!" Plus, the order system is confusing numbers with text. "Sometimes '5' orders doesn't equal 5 orders!"

### Learning Objectives:
- Understand how random selection works
- Recognize string vs number issues
- Fix type-related bugs

### Puzzle 3.1: The Predictable Daily Special
```javascript
// This should randomly pick a dish for today's special
// Bug: Always picks the same dish!
function pickTodaysSpecial() {
    // Generate a random number from 0 to 3
    let randomNumber = Math.random();  // This gives 0 to 0.999...

    // BUG: We're not using the random number properly!
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
```

### Puzzle 3.2: The Dice Roll for Free Dessert
```javascript
// Roll two dice - if total is 12, customer gets free dessert!
// Bug: The dice values are wrong!
function rollForDessert() {
    // Roll two dice (should be 1-6 each)
    // BUG: Math.floor(Math.random() * 6) gives 0-5, not 1-6!
    let dice1 = Math.floor(Math.random() * 6);
    let dice2 = Math.floor(Math.random() * 6);

    let total = dice1 + dice2;

    // Check if they won (two 6s = 12)
    if (total === 12) {
        return "Free dessert! You rolled " + total;
    } else {
        return "Sorry, you rolled " + total + ". Need 12 for free dessert.";
    }
}

// Fix hint: Add 1 to each die roll to get 1-6 instead of 0-5
```

### Puzzle 3.3: The Order Quantity Confusion (Brain Teaser - Advanced)
```javascript
// This should check if we have enough portions
// Bug: String/number confusion!
function canFulfillOrder(orderQuantity, availablePortions) {
    // Let's see what types we're dealing with
    console.log("Order type: " + typeof orderQuantity);
    console.log("Available type: " + typeof availablePortions);

    // BUG: String comparison doesn't work like number comparison!
    if (orderQuantity <= availablePortions) {
        return "Order confirmed for " + orderQuantity + " portions";
    } else {
        return "Sorry, we only have " + availablePortions + " portions";
    }
}

// Test these - watch for surprises!
// canFulfillOrder("5", 10)   -> Works? (string "5" vs number 10)
// canFulfillOrder("20", 3)   -> "20" is less than 3? (string comparison!)

// Fix: Convert strings to numbers using Number() or parseInt()
```

### Expected Outputs:
- 3.1: Different dishes each time when fixed
- 3.2: Random totals from 2-12 when fixed
- 3.3: Proper numeric comparison after type conversion

### Stretch Challenge:
Make the daily special avoid repeating yesterday's dish.

> ### Instructor Guide - Puzzle Set 3
> **Key Concepts to Explain:**
> - Math.random() gives 0 to 0.999...
> - Math.floor() rounds down to integer
> - Strings that look like numbers can cause bugs
> - "5" + 5 = "55" but "5" * 5 = 25 (JavaScript quirk!)
> - typeof helps debug type issues
>
> **Connection to Homework:**
> Bug 3 is about random selection, Bug 4 involves logic with specific values

---

## Puzzle Set 4: Integration Challenge (Optional Stretch Challenge)
**Time:** Self-paced | **Concept:** Combining all concepts

### ⚠️ **Note for Students:**
This is an advanced STRETCH CHALLENGE that introduces arrays and objects/dictionaries. These are more complex data structures you'll learn about later. Only try this if you've mastered Puzzle Sets 0-3!

### Story:
"Can you build a simple order validator that uses everything you've learned?"

### The Complete Order System 
```javascript
// This function should validate a complete order
// It has MULTIPLE bugs - use all your skills!
// WARNING: This puzzle uses arrays and objects (advanced concepts)

function validateOrder(dishName, quantity, customerAllergy) {
    // This is an "object" - a more complex data structure
    let menu = {
        "pasta": { price: 12, contains: ["wheat", "eggs"], available: 5 },
        "salad": { price: 8, contains: ["lettuce"], available: 10 },
        "soup": { price: 6, contains: ["vegetables"], available: 0 }  // Out of stock!
    };

    // Bug 1: Wrong variable name (case matters!)
    let dish = menu[dishname];  // BUG: JavaScript is case-sensitive!

    if (!dish) {
        return "Dish not on menu";
    }

    // Bug 2: Wrong comparison
    if (quantity < dish.available) {  // BUG: Should this be < or > ?
        return "Sorry, not enough available";
    }

    // Bug 3: Backwards allergy logic
    if (dish.contains.includes(customerAllergy)) {
        return "Order confirmed!";  // BUG: This is dangerous!
    }

    // Bug 4: String concatenation with number
    let totalPrice = quantity + dish.price;  // BUG: What if quantity is "3"?

    return "Order confirmed! Total: $" + totalPrice;
}

// Test with:
// validateOrder("pasta", 2, "wheat")     -> Should warn about allergy!
// validateOrder("salad", "3", "none")    -> Should calculate price correctly
// validateOrder("soup", 1, "none")       -> Should say not available
```

### Bonus Challenges:
1. Add a random "dish of the day" discount (10-30% off)
2. Validate that quantity is a positive number
3. Add a function to check if kitchen is open before accepting order

---

## Homework Connection Guide

After completing these puzzles, students will be ready for their homework:

| Kitchen Puzzle | Homework Bug | Concept |
|---------------|--------------|---------|
| Set 1: Recipe Logic | Bug 1: Computer always wins | Reversed true/false logic |
| Set 2: Timer Comparisons | Bug 2: Game never ends | Wrong comparison operator |
| Set 3: Random Menu | Bug 3: Computer not random | Random number generation |
| Set 3: Order Types | Bug 4: Wrong game rules | Logic with specific values |
| Set 4: Integration | Bug 5: Score not resetting | Variable initialization |

---

## Assessment Rubric

### Understanding Check:
- Can call functions in console ✓
- Can read error messages ✓
- Can fix simple logic bugs ✓
- Can fix comparison operators ✓
- Understands random numbers ✓
- Recognizes type issues ✓

### Debugging Skills:
- Tests code after changes
- Uses console.log to investigate
- Reads function names for clues
- Checks test cases systematically

---

## Teacher's Notes

### Common Student Struggles:
1. **Console confusion:** Some students may never have seen a console. Spend extra time here.
2. **Reading errors:** Students often panic at red text. Normalize errors as helpful friends.
3. **Comparison direction:** < vs > is often confusing. Use number lines if needed.
4. **Random numbers:** The Math.floor(Math.random() * n) pattern needs repetition.
5. **String vs Number:** This is subtle but important for their homework.

### Differentiation:
- **Struggling students:** Focus on first 2 puzzles in each set
- **Advanced students:** Challenge them with stretch challenges and Puzzle Set 4
- **Very advanced:** Have them create a puzzle for classmates

### Success Metrics:
- Students can fix at least 2 puzzles per set independently
- Students can explain why a bug happened, not just how to fix it
- Students feel confident approaching their homework

---

## Closing Circle Questions

Ask students to share:
1. "What kind of bug was easiest to spot?"
2. "What was the trickiest bug you fixed?"
3. "What pattern did you notice across different bugs?"
4. "How will this help with your Rock-Paper-Scissors homework?"

Remember: Every bug fixed is a victory! Celebrate the debugging process, not just the solution.