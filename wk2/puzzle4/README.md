# Puzzle Set 4: Integration Challenge (Optional Stretch Challenge)

## ⚠️ WARNING: Advanced Content!
This is a **STRETCH CHALLENGE** that introduces **arrays** and **objects** (dictionaries). These are more complex data structures you'll learn about later. Only attempt this if you've successfully completed Puzzle Sets 0-3!

## Story
"Can you build a simple order validator that uses everything you've learned?"

Chef Maria needs a complete order validation system that checks:
- If the dish exists on the menu
- If enough portions are available
- If the dish is safe for customer allergies
- The correct total price

## Learning Objectives
- Combine all debugging concepts from previous puzzles
- Introduction to arrays and objects (advanced)
- Practice with multiple bug types in one function

## Getting Started

### Step 1: Open the Console
1. Open `puzzle4.html` in Live Preview
2. Press **F12** (or **Ctrl+Shift+J** on Mac: **Cmd+Option+J**)
3. Click the "Console" tab
4. You should see the Stretch Challenge welcome message!

### Step 2: Understand the Data Structures

**Objects** (also called dictionaries) store information like this:
```javascript
let menu = {
    "pasta": { price: 12, contains: ["wheat", "eggs"], available: 5 }
};
```

**Arrays** are lists of items:
```javascript
["wheat", "eggs"]  // A list of ingredients
```

### Step 3: Explore the Broken Function
Try these to see all the bugs:

```javascript
showMenu()                           // See what's available

validateOrder("pasta", 2, "wheat")   // Has wheat allergy!
validateOrder("salad", "3", "none")  // String quantity
validateOrder("soup", 1, "none")     // Out of stock
validateOrder("PASTA", 2, "none")    // Wrong case

help()                               // Get hints for each bug
```

## Your Tasks

### Bug 1: Case Sensitivity
The function uses the wrong variable name!

```javascript
validateOrder("pasta", 2, "none")   // Works
validateOrder("PASTA", 2, "none")   // Says "not on menu" (should still fail)
```

**What's wrong?** JavaScript is case-sensitive! `dishname` is not the same as `dishName`.

**Fix:** Look for `//FLAG: CASE_SENSITIVE_BUG` - change `dishname` to `dishName`

### Bug 2: Availability Check
The comparison for checking stock is backwards!

```javascript
validateOrder("pasta", 10, "none")  // Want 10, only have 5 - should reject!
validateOrder("soup", 1, "none")    // Soup has 0 - should reject!
```

**What's wrong?** The logic checks if `quantity < available` but should check if we want MORE than available.

**Fix:** Look for `//FLAG: AVAILABILITY_COMPARISON_BUG` - change `<` to `>`

### Bug 3: Allergy Logic (DANGEROUS!)
The allergy check is completely backwards!

```javascript
validateOrder("pasta", 2, "wheat")  // Pasta HAS wheat - should warn!
```

**What's wrong?** If the dish CONTAINS the allergen, it confirms the order (very dangerous!).

**Fix:** Look for `//FLAG: ALLERGY_LOGIC_BUG` - when allergen is found, return a warning, not confirmation!

### Bug 4: Price Calculation
String quantities break the price calculation!

```javascript
validateOrder("salad", "3", "none")  // Should be $24, not $38!
```

**What's wrong?** `"3" + 8` does string concatenation ("38") instead of math!

**Fix:** Look for `//FLAG: PRICE_CALCULATION_BUG`:
- Convert quantity to number: `Number(quantity)`
- Use multiplication, not addition: `* dish.price`

## The Complete Function Structure

```javascript
function validateOrder(dishName, quantity, customerAllergy) {
    // 1. Get dish from menu (Bug 1: case sensitivity)
    // 2. Check if dish exists
    // 3. Check availability (Bug 2: comparison)
    // 4. Check allergies (Bug 3: safety logic)
    // 5. Calculate price (Bug 4: type conversion)
    // 6. Return result
}
```

## Checking Your Work

```javascript
checkMyWork()    // Tests all four bugs and shows your score
```

The checker will test:
1. ✅ Case sensitivity is handled correctly
2. ✅ Availability comparison works
3. ✅ Allergy warnings are shown (safety first!)
4. ✅ Price calculation handles strings

## Expected Final Behavior

When all bugs are fixed:

```javascript
validateOrder("pasta", 2, "wheat")
// ❌ Warning about wheat allergy!

validateOrder("salad", "3", "none")
// ✅ Order confirmed! Total: $24

validateOrder("soup", 1, "none")
// ❌ Sorry, not enough available. We have 0 portions.

validateOrder("pasta", 10, "none")
// ❌ Sorry, not enough available. We have 5 portions.
```

## Success Checklist

To complete this stretch challenge:
- ☐ Fix the case sensitivity bug
- ☐ Fix the availability comparison
- ☐ Fix the dangerous allergy logic
- ☐ Fix the price calculation with type conversion
- ☐ Get 4/4 score on checkMyWork()

## Tips

- **Take it slow** - This combines everything you've learned
- **Use showMenu()** to see what's available
- **Test each fix** individually before moving on
- **Safety first** - The allergy bug is the most important to fix!
- Remember: `Number("5")` converts string to number

## Congratulations!
If you complete this puzzle, you've mastered:
- Boolean logic (Puzzle 1)
- Comparison operators (Puzzle 2)
- Random numbers and types (Puzzle 3)
- Plus arrays and objects (Puzzle 4)

You're ready for any debugging challenge!