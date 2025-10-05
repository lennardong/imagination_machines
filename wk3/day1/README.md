# Day 1: HTML Structure and Basic CSS Styling

## Welcome to Luna's Website Challenge! 🎭

You're helping Luna create a beautiful website for the school play "A Midsummer Night's Dream." Today you'll learn how HTML provides structure and CSS adds style to make websites beautiful.

---

## What You'll Learn Today

### Puzzle Set 1: Understanding HTML Structure
- **HTML Document Anatomy**: `<head>` vs `<body>` sections and why they matter
- **HTML Elements**: How headings (`<h1>`, `<h2>`, etc.), paragraphs (`<p>`), and containers (`<div>`) work
- **Basic CSS Properties**: `color`, `background-color`, `font-size`, `text-align`
- **Element Selectors**: How to target HTML elements with CSS
- **MDN Documentation**: Your new best friend for looking up CSS properties

### Puzzle Set 2: Advanced Styling and Layout
- **Typography Control**: `font-family`, `font-weight`, `line-height`
- **The CSS Box Model**: Understanding `margin`, `padding`, `border`, and content
- **Class and ID Selectors**: Using `.class` and `#id` to style specific elements
- **Visual Hierarchy**: Using spacing and typography to guide the eye

---

## Files in This Folder

- **`index.html`** - The basic school play website (this is your starting point)
- **`styles.css`** - Empty CSS file where you'll add your styling
- **`example_output.html`** - Shows one possible finished result
- **`example_styles.css`** - Example CSS to see what's possible

---

## Getting Started

### Step 1: Open the Website
1. Open `index.html` in your web browser
2. Notice how plain it looks - just black text on a white background
3. This is what websites look like with NO CSS styling!

### Step 2: Explore the HTML Structure
1. Open `index.html` in your text editor
2. Look at the structure - can you identify:
   - The `<head>` section (metadata, not visible)
   - The `<body>` section (visible content)
   - Different heading levels (`<h1>`, `<h2>`, `<h3>`)
   - Paragraphs (`<p>`) and divs (`<div>`)

### Step 3: Connect Your CSS
1. In the `<head>` section of `index.html`, add this line:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
2. This tells the HTML file to use your CSS for styling

### Step 4: Start Styling!
Follow the puzzle activities in your main brief to add CSS to `styles.css`

---

## Puzzle Set 1 Activities

### Activity 1.1: Basic Element Styling
Add these styles to your `styles.css` file:

```css
/* Style the main heading */
h1 {
    color: purple;
    text-align: center;
    font-size: 2.5em;
}

/* Style all paragraphs */
p {
    color: #333;
    font-size: 16px;
}

/* Style the page background */
body {
    background-color: #f8f4e6;
    font-family: Georgia, serif;
}
```

**Save and refresh your browser - see the magic happen!**

### Activity 1.2: Using Browser Dev Tools
1. Right-click on any element and select "Inspect" (or press F12)
2. In the Elements tab, click on different HTML elements
3. In the Styles panel, try changing CSS values directly
4. Watch the page update in real-time!

### Activity 1.3: MDN Documentation Practice
1. Go to [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
2. Look up these properties:
   - `background-color` - What values can it accept?
   - `text-align` - What alignment options are available?
   - `font-size` - What units can you use? (px, em, rem, %)

### Activity 1.4: Color Experimentation
Try different ways to specify colors:
```css
h2 {
    color: red;           /* Color name */
    color: #ff0000;       /* Hex code */
    color: rgb(255, 0, 0); /* RGB values */
}
```

---

## Puzzle Set 2 Activities

### Activity 2.1: Understanding the Box Model
Add these styles to see how the box model works:

```css
.hero-section {
    background-color: lightblue;
    padding: 20px;        /* Space inside the element */
    margin: 15px;         /* Space outside the element */
    border: 3px solid navy; /* Border around the element */
}
```

**Use dev tools to visualize the box model!**

### Activity 2.2: Class Selectors
Style specific sections using class selectors:

```css
.play-info {
    background-color: #fff2e6;
    padding: 15px;
    border-left: 5px solid orange;
}

.cast-section {
    background-color: #e6f3ff;
    padding: 15px;
}
```

### Activity 2.3: Typography Enhancement
Make the text more readable and attractive:

```css
body {
    font-family: 'Georgia', serif;
    line-height: 1.6;    /* Space between lines */
}

h3 {
    font-weight: bold;
    color: #e74c3c;
    margin-top: 25px;
}

.character h4 {
    color: #3498db;
    margin-bottom: 5px;
}
```

---

## Debugging Tips

### Common CSS Mistakes
1. **Forgetting semicolons**: Every CSS property needs a `;` at the end
2. **Misspelling properties**: `collor` won't work, but `color` will
3. **Wrong selector syntax**: `.classname` needs the dot, `#idname` needs the hash
4. **Not saving files**: Always save your CSS file before refreshing the browser

### Using Dev Tools for Debugging
1. **Red strikethrough text** = CSS property is invalid or overridden
2. **Check the Console tab** for error messages
3. **Try changes in dev tools first**, then copy to your file
4. **Use the Elements tab** to see which CSS rules are applying

---

## Success Criteria

By the end of Day 1, you should have:
- [ ] Connected your CSS file to your HTML
- [ ] Styled at least 5 different HTML elements
- [ ] Used both element selectors (`h1`) and class selectors (`.hero-section`)
- [ ] Applied the box model (margin, padding, border) to at least 2 elements
- [ ] Changed colors, fonts, and spacing to make the website more attractive
- [ ] Successfully used browser dev tools to experiment with CSS
- [ ] Referenced MDN documentation to understand CSS properties

---

## Going Further (Optional Challenges)

1. **Custom Color Scheme**: Create a cohesive color palette for the entire site
2. **Typography Hierarchy**: Use different font sizes and weights to create visual hierarchy
3. **Hover Effects**: Research `:hover` pseudo-class and add interactive elements
4. **Responsive Design**: Try using `%` or `em` units instead of fixed `px` values

---

## Next Steps

Tomorrow (Day 2), you'll add JavaScript to make the website interactive! You'll learn how to:
- Respond to button clicks
- Change content dynamically
- Connect HTML, CSS, and JavaScript together
- Build on your rock-paper-scissors debugging skills

---

## Resources

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [MDN HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [CSS Box Model Explained](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [Web Color Names](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

Remember: The goal is to experiment and learn! Don't worry about making it perfect - focus on understanding how HTML and CSS work together. 🎨