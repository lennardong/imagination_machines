# Puzzle Set 0: Meeting Your Kitchen Assistant

## Story
Chef Maria just installed a new "Smart Kitchen System" but needs help testing it. You'll learn to communicate with the kitchen computer through the browser console.

## Learning Objectives
- Open and use the browser console
- Call functions with different parameters
- Identify logical errors by comparing expected vs actual outputs
- Fix simple bugs by changing values and logic

## Getting Started

### Step 1: Open the Console
1. Open `puzzle0.html` in Live Preview
2. Press **F12** (or **Ctrl+Shift+J** on Mac: **Cmd+Option+J**)
3. Click the "Console" tab
4. You should see Chef Maria's welcome message!

### Step 2: Test Working Functions
Try these commands in the console:

```javascript
isFresh("banana")           // Check if ingredient is fresh
isFresh("old bread")        // Try with something stale
canCook(3, 5)              // Do we have enough ingredients?
help()                     // See all available functions
checkMyWork()              // Validate your fixes (use after making changes)
```

## Your Tasks

### Task 1: Oven Temperature Logic (Logic Error)
The `isOvenHotEnough()` function gives wrong answers!

```javascript
isOvenHotEnough(200)    // Says NOT hot enough (wrong!)
isOvenHotEnough(150)    // Says IS hot enough (wrong!)
```

**What's wrong?** The oven needs at least 180°C to be ready.

**Fix:** Look for the `isOvenHotEnough()` function in `puzzle0.js` - find the comment marked `//FLAG: OVEN_LOGIC_BUG` - the comparison is backwards!

### Task 2: Ingredient Counting (Math Error)
The `countIngredients()` function counts wrong!

```javascript
countIngredients(["flour", "eggs", "milk"])    // Says 4 ingredients (should be 3!)
```

**Fix:** Look for the `countIngredients()` function in `puzzle0.js` - find the comment marked `//FLAG: COUNT_MATH_BUG` - why is it adding 1?

### Task 3: Recipe Name (Return Error)
The `getRecipeName()` function returns the wrong recipe!

```javascript
getRecipeName()    // Says "Vanilla Cake" but variable has "Chocolate Cake"
```

**Fix:** Look for the `getRecipeName()` function in `puzzle0.js` - find the comment marked `//FLAG: RECIPE_RETURN_BUG` - should return the variable, not a hardcoded string!

## Checking Your Work

After making fixes, test your solutions:

```javascript
checkMyWork()    // Validates all your fixes
```

You should see ✅ for each function you've fixed correctly.

## Available Functions

### Working Functions (for practice):
- `isFresh(ingredient)` - Check if ingredient is fresh
- `canCook(required, available)` - Check if enough ingredients
- `toFahrenheit(celsius)` - Temperature conversion
- `setTimer(minutes)` - Timer calculator
- `secretMenu()` - Easter egg!

### Broken Functions (fix these):
- `isOvenHotEnough(temperature)` - Wrong comparison logic
- `countIngredients(list)` - Wrong math
- `getRecipeName()` - Wrong return value

### Helper Functions:
- `help()` - Show available commands
- `checkMyWork()` - Validate your fixes

## Success Checklist

Before moving to Puzzle 1, make sure you can:
- ☐ Open the browser console
- ☐ Call functions with different inputs
- ☐ Spot when output doesn't match expected result
- ☐ Fix logical errors in code
- ☐ Test your fixes

## Tips

- Use **↑** arrow to recall previous console commands
- Type first letters + **Tab** for autocomplete
- **Ctrl+L** clears the console
- Read the comments in the code - they hint at what's wrong!
- Don't be afraid to experiment!