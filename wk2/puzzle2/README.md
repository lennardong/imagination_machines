# Puzzle Set 2: The Kitchen Timer Troubles

## Story
"The kitchen timers are all wrong!" Chef Maria shows you the oven controls. "They're using the wrong comparisons - food is either burning or coming out raw!"

## Learning Objectives
- Understand <, >, <=, >=, ===, !==
- See how comparison affects program behavior
- Fix boundary conditions (edge cases)

## Getting Started

### Step 1: Open the Console
1. Open `puzzle2.html` in Live Preview
2. Press **F12** (or **Ctrl+Shift+J** on Mac: **Cmd+Option+J**)
3. Click the "Console" tab
4. You should see the Kitchen Timer Control System message!

### Step 2: Understand Comparison Operators
Try these to see the broken behavior:

```javascript
isOvenReady(200)       // Says false (but 200°C is hot enough!)
isOvenReady(150)       // Says true (but 150°C is too cold!)

isCooked(15, 15)       // Says "Keep cooking!" (but it's done!)

isKitchenOpen(14)      // Should be open at 2 PM but check what it says!

help()                 // Get hints about comparison operators
```

## Your Tasks

### Task 1: The Oven Temperature Check
The `isOvenReady()` function uses the wrong comparison!

```javascript
isOvenReady(175)  // Currently returns true (wrong! Too cold!)
isOvenReady(180)  // Currently returns false (wrong! This is perfect!)
isOvenReady(200)  // Currently returns false (wrong! This is hot enough!)
```

**What's wrong?** The oven needs AT LEAST 180°C. The comparison is backwards!

**Fix:** Look for the `isOvenReady()` function in `puzzle2.js` - find the comment marked `//FLAG: OVEN_COMPARISON_BUG` - you need to change `<` to `>=`!

### Task 2: The Cooking Timer
The `isCooked()` function doesn't handle exact timing correctly!

```javascript
isCooked(10, 15)  // Returns "Keep cooking!" (correct)
isCooked(15, 15)  // Returns "Keep cooking!" (wrong! It should be done!)
isCooked(20, 15)  // Returns "It's done!" (correct)
```

**What's wrong?** When cooking time EQUALS required time, food is done! But the function uses `>` instead of `>=`.

**Fix:** Look for the `isCooked()` function in `puzzle2.js` - find the comment marked `//FLAG: TIMER_COMPARISON_BUG` - change the comparison to include equality!

### Task 3: The Kitchen Closing Time (Brain Teaser)
The `isKitchenOpen()` function has TWO comparison problems!

```javascript
isKitchenOpen(8)   // Before opening (9 AM)
isKitchenOpen(14)  // During the day (2 PM)
isKitchenOpen(22)  // At closing time (10 PM)
isKitchenOpen(23)  // After closing
```

**What's wrong?** The kitchen is open from 9 AM to 10 PM. The function should check:
- Is it AFTER OR AT opening time (9)? AND
- Is it BEFORE closing time (22)?

**Fix:** Look for the `isKitchenOpen()` function in `puzzle2.js` - find the comment marked `//FLAG: KITCHEN_AND_BUG` - the second comparison should use `<` not `>=`!

## Checking Your Work

Test individual puzzles:

```javascript
checkMyWork1()    // Tests Puzzle 2.1 (oven temperature)
checkMyWork2()    // Tests Puzzle 2.2 (cooking timer)
checkMyWork3()    // Tests Puzzle 2.3 (kitchen hours)
checkMyWork()     // Tests all puzzles
```

You should see ✅ for each function you've fixed correctly.

## Comparison Operators Reference

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `<` | Less than | `5 < 10` | true |
| `>` | Greater than | `5 > 10` | false |
| `<=` | Less than or equal | `10 <= 10` | true |
| `>=` | Greater than or equal | `10 >= 10` | true |
| `===` | Exactly equal | `5 === 5` | true |
| `!==` | Not equal | `5 !== 10` | true |

## Functions to Fix

### Broken Functions (fix these):
- `isOvenReady(temperature)` - Uses wrong comparison direction
- `isCooked(minutesCooked, minutesNeeded)` - Doesn't handle exact timing
- `isKitchenOpen(currentHour)` - Wrong logic for business hours

### Helper Functions:
- `help()` - Show hints and comparison operators
- `checkMyWork1()` - Validate Puzzle 2.1
- `checkMyWork2()` - Validate Puzzle 2.2
- `checkMyWork3()` - Validate Puzzle 2.3
- `checkMyWork()` - Validate all puzzles

## Success Checklist

Before moving to Puzzle 3, make sure you can:
- ☐ Understand the difference between `<` and `>`
- ☐ Know when to use `<=` vs `<`
- ☐ Fix boundary conditions (like exact timing)
- ☐ Combine multiple comparisons with AND (&&)

## Tips

- **Boundary cases matter!** If a recipe needs 15 minutes, is it done at exactly 15 minutes?
- **Read comparisons aloud:** "If temperature is less than minimum" helps spot errors
- **Draw a number line** if you're confused about < vs >
- Think about **real-world logic**: Would an oven at 175°C be ready for 180°C baking?

## Connection to Homework
This puzzle practices the same concept as Homework Bug 2, where comparison operators affect game flow!