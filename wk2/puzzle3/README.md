# Puzzle Set 3: The Random Menu & Mixed Types

## Story
"My daily special selector is broken - it keeps picking the same dish!" Plus, the order system is confusing numbers with text. "Sometimes '5' orders doesn't equal 5 orders!"

## Learning Objectives
- Understand how random selection works
- Recognize string vs number issues
- Fix type-related bugs

## Getting Started

### Step 1: Open the Console
1. Open `puzzle3.html` in Live Preview
2. Press **F12** (or **Ctrl+Shift+J** on Mac: **Cmd+Option+J**)
3. Click the "Console" tab
4. You should see the Random Menu & Order System message!

### Step 2: Understand Random Numbers and Types
Try these to see the broken behavior:

```javascript
pickTodaysSpecial()    // Call multiple times - always the same!
pickTodaysSpecial()    // Still the same dish!

rollForDessert()       // Check the dice values in console
rollForDessert()       // Can dice ever be 0? Or 6?

canFulfillOrder("20", 3)   // String "20" vs number 3 - what happens?

help()                 // Get hints about random numbers
```

## Your Tasks

### Task 1: The Predictable Daily Special
The `pickTodaysSpecial()` function always picks the same dish!

```javascript
pickTodaysSpecial()  // Always returns "Garden Salad"
pickTodaysSpecial()  // Still "Garden Salad"!
```

**What's wrong?** The function generates a random number but never uses it! It always sets `dishNumber = 2`.

**Fix:** Look for the `pickTodaysSpecial()` function in `puzzle3.js` - find the comment marked `//FLAG: RANDOM_NOT_USED_BUG` - replace the fixed number with:
```javascript
let dishNumber = Math.floor(Math.random() * 4);  // Gives 0, 1, 2, or 3
```

### Task 2: The Dice Roll for Free Dessert
The `rollForDessert()` function has impossible dice values!

```javascript
rollForDessert()  // Check console - might show "Dice 1: 0, Dice 2: 3"
rollForDessert()  // Dice can be 0-5, but real dice are 1-6!
```

**What's wrong?** Real dice show 1-6, but `Math.floor(Math.random() * 6)` gives 0-5!

**Fix:** Look for the `rollForDessert()` function in `puzzle3.js` - find the comments marked `//FLAG: DICE_RANGE_BUG1` and `//FLAG: DICE_RANGE_BUG2` - add 1 to each die:
```javascript
let dice1 = Math.floor(Math.random() * 6) + 1;  // Now 1-6!
let dice2 = Math.floor(Math.random() * 6) + 1;  // Now 1-6!
```

### Task 3: The Order Quantity Confusion (Brain Teaser - Advanced)
The `canFulfillOrder()` function treats strings and numbers differently!

```javascript
canFulfillOrder("5", 10)   // Works fine
canFulfillOrder("20", 3)   // Says we can fulfill 20 with only 3! (WRONG!)
canFulfillOrder(20, 3)     // This works correctly
```

**What's wrong?** When comparing strings, "20" < "3" because it compares alphabetically!
- String comparison: "20" < "3" is TRUE (comparing first character: "2" < "3")
- Number comparison: 20 < 3 is FALSE

**Fix:** Look for the `canFulfillOrder()` function in `puzzle3.js` - find the comment marked `//FLAG: TYPE_COMPARISON_BUG` - convert strings to numbers before comparing:
```javascript
// Add this before the comparison:
orderQuantity = Number(orderQuantity);
```

## Checking Your Work

Test individual puzzles:

```javascript
checkMyWork1()    // Tests Puzzle 3.1 (random special)
checkMyWork2()    // Tests Puzzle 3.2 (dice roll)
checkMyWork3()    // Tests Puzzle 3.3 (type confusion)
checkMyWork()     // Tests all puzzles
```

You should see ✅ for each function you've fixed correctly.

## Random Number Reference

| Code | Result | Use Case |
|------|--------|----------|
| `Math.random()` | 0 to 0.999... | Raw random decimal |
| `Math.floor(Math.random() * 4)` | 0, 1, 2, or 3 | Array indexes |
| `Math.floor(Math.random() * 6) + 1` | 1, 2, 3, 4, 5, or 6 | Dice rolls |

## Type Conversion Reference

| Code | Converts | Example |
|------|----------|---------|
| `Number("5")` | String to number | `"5"` becomes `5` |
| `parseInt("5")` | String to integer | `"5.7"` becomes `5` |
| `String(5)` | Number to string | `5` becomes `"5"` |

## Functions to Fix

### Broken Functions (fix these):
- `pickTodaysSpecial()` - Always returns same dish (not random)
- `rollForDessert()` - Dice values are 0-5 instead of 1-6
- `canFulfillOrder(quantity, available)` - String/number confusion

### Helper Functions:
- `help()` - Show hints about random numbers and types
- `checkMyWork1()` - Validate Puzzle 3.1
- `checkMyWork2()` - Validate Puzzle 3.2
- `checkMyWork3()` - Validate Puzzle 3.3
- `checkMyWork()` - Validate all puzzles

## Success Checklist

Before moving to Puzzle 4, make sure you can:
- ☐ Generate random numbers in a specific range
- ☐ Convert random decimals to integers
- ☐ Understand string vs number comparisons
- ☐ Convert between types when needed

## Tips

- **Random formula:** For 0 to N-1, use `Math.floor(Math.random() * N)`
- **For dice (1-6):** Add 1 after generating 0-5
- **Type matters:** "20" and 20 are different in JavaScript!
- **Always check types** when comparisons seem wrong: `typeof variable`

## Connection to Homework
- Puzzle 3.1 practices random selection (Homework Bug 3)
- Puzzle 3.3 practices type issues that affect game logic (Homework Bug 4)