# Puzzle Set 1: The Recipe Logic Problem

## Story
"My recipe checker is broken!" Chef Maria exclaims. "It keeps telling me I can't make recipes even when I have all the ingredients. Can you fix the logic?"

## Learning Objectives
- Understand true/false returns
- Fix logical operators (&&, ||, !)
- See how decisions affect program flow

## Getting Started

### Step 1: Open the Console
1. Open `puzzle1.html` in Live Preview
2. Press **F12** (or **Ctrl+Shift+J** on Mac: **Cmd+Option+J**)
3. Click the "Console" tab
4. You should see Chef Maria's Recipe Checker welcome message!

### Step 2: Understand Boolean Logic
Try these to see the broken behavior:

```javascript
canMakeSandwich(true, true)    // Says false (wrong!)
canMakeSandwich(false, false)  // Says true (wrong!)

isVegetarian("chicken curry")  // Says true (wrong!)
isVegetarian("garden salad")   // Says false (wrong!)

help()                         // Get hints
```

## Your Tasks

### Task 1: The Pessimistic Recipe Checker
The `canMakeSandwich()` function has backwards logic!

```javascript
canMakeSandwich(true, true)   // Currently returns false (should be true!)
canMakeSandwich(false, false) // Currently returns true (should be false!)
```

**What's wrong?** When we have BOTH ingredients, it says we CAN'T make a sandwich!

**Fix:** Look for the `canMakeSandwich()` function in `puzzle1.js` - find the comments marked `//FLAG: SANDWICH_LOGIC_BUG` and `//FLAG: SANDWICH_ELSE_BUG` - the return values are swapped!

### Task 2: The Vegetarian Menu Filter
The `isVegetarian()` function identifies everything backwards!

```javascript
isVegetarian("chicken curry")  // Says true (chicken is NOT vegetarian!)
isVegetarian("garden salad")   // Says false (salad IS vegetarian!)
```

**Fix:** Look for the `isVegetarian()` function in `puzzle1.js` - find the comments marked with `//FLAG:` tags:
- `//FLAG: CHICKEN_VEG_BUG` - should return false for chicken
- `//FLAG: BEEF_VEG_BUG` - should return false for beef
- `//FLAG: PORK_VEG_BUG` - should return false for pork
- `//FLAG: VEG_DEFAULT_BUG` - should return true for vegetarian dishes

### Task 3: The Allergy Checker (Brain Teaser)
The `isSafeToEat()` function has dangerous logic errors!

```javascript
isSafeToEat("pasta", "wheat")    // Says true (dangerous! pasta has wheat!)
isSafeToEat("salad", "milk")     // Says false (wrong! salad has no milk!)
```

**What's wrong?** The function returns true when food CONTAINS the allergen (very dangerous!)

**Fix:** Look for the `isSafeToEat()` function in `puzzle1.js` - find the comments marked `//FLAG: ALLERGY_TRUE_BUG` and `//FLAG: ALLERGY_FALSE_BUG` - the return logic is completely reversed!

## Checking Your Work

Test individual puzzles:

```javascript
checkMyWork1()    // Tests Puzzle 1.1 (sandwich maker)
checkMyWork2()    // Tests Puzzle 1.2 (vegetarian filter)
checkMyWork3()    // Tests Puzzle 1.3 (allergy checker)
checkMyWork()     // Tests all puzzles
```

You should see ✅ for each function you've fixed correctly.

## Functions to Fix

### Broken Functions (fix these):
- `canMakeSandwich(hasBread, hasFilling)` - Returns opposite of what it should
- `isVegetarian(dishName)` - Identifies meat as vegetarian and vice versa
- `isSafeToEat(dishName, allergyIngredient)` - Dangerous reversed logic

### Helper Functions:
- `help()` - Show hints and available commands
- `checkMyWork1()` - Validate Puzzle 1.1
- `checkMyWork2()` - Validate Puzzle 1.2
- `checkMyWork3()` - Validate Puzzle 1.3
- `checkMyWork()` - Validate all puzzles

## Success Checklist

Before moving to Puzzle 2, make sure you can:
- ☐ Fix functions that return true/false
- ☐ Understand when to return true vs false
- ☐ Test boolean logic with different inputs
- ☐ Fix the dangerous allergy checker logic

## Tips

- **Read function names carefully** - they tell you what should happen
- **Think about safety** - especially for the allergy checker!
- **Test edge cases** - what happens with different combinations?
- A function that checks if something is safe should return `false` when there's danger!

## Connection to Homework
This puzzle practices the same concept as Homework Bug 1, where the winner logic is reversed!