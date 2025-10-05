# Remaining Deliverables: 
- [ ] Update brief with > comments.
- [ ] Exercise folders with code, all in wk3 folder
- [ ] Readme for each exercise, it will be in each folder
- [ ] Standalone Instructor Guide, with prompts, diagrams, etc to explain concepts. include historic context so there's interest for the students. (e.g. why was CSS created?). Here's a reference: z_lenn/wk2/wk2_instructor_guide.md

## Thoughts for exercises
- Unlike week 2, it feels like the exercises build on each ohter. Thus, we only need two exercise folders: Day 1 and Day 2. For each one, we add in a "example_output.html" which shows ONE version of what it could look like. 

## Thougths for instructor guide
- ys, include mermaid diagrams to show relationships
- include narrative to engage student imagination. give historical context who who invented what, why it was invented. (e.g. why was CSS implemented? who did it? what problem did it solve? who made HTML? this is important so they know that there is historical precedence)

## Thoughts for Homework
- Copy over the wk2 homeowork with all tasks completed (this is so they canreference it). This will be in wk3_homework. This is their baseline for styling. 

----

# Week 3 Brief: The Digital Storefront Challenge
## Helping Luna Create Her School Play Website

---

## Story Introduction

Luna runs the small school bookshop and has been asked to create a website promoting the upcoming school play "A Midsummer Night's Dream." She has the content written, but the website looks plain and boring - just black text on a white background!

"I know what I want it to look like," Luna says, showing you a colorful sketch. "But I don't know how to make the computer understand my design. Can you help me turn this bland webpage into something magical?"

Your mission is to learn the art of **digital styling** - making websites beautiful and interactive. Just like a craftsperson choosing colors, fonts, and layouts for a poster, you'll use CSS to transform Luna's plain text into an engaging website.

By helping Luna, you'll discover how the web works: HTML provides the structure (like the frame of a house), CSS adds the styling (like paint and decorations), and JavaScript adds interactivity (like light switches and moving parts).

---

## Schedule

**Format:** Each puzzle set follows this pattern:
- **20 minutes:** Solve puzzles (students work)
- **10 minutes:** Share discoveries (peer interaction)
- **15 minutes:** Learn the concept (teacher explanation)

### Timeline:
Day 1
- 8:00-8:15: Homework Sharing from Week 1
- 8:15-9:00: Puzzle Set 1 + Discussion
- 9:00-9:45: Puzzle Set 2 + Discussion
- 9:45 - 10:00: review

Day 2
- 8:00-8:15: Recap  
- 8:15-9:00: Puzzle Set 3 + Discussion
- 9:00-9:45: Puzzle Set 4 + Discussion
- 9:45 - 10:00: Recap, homework brief, Q&A

---


## Puzzle Set 1: Luna's Basic Website Structure
> **Instructor Notes:**
> - Emphasize the HTML document structure: `<head>` contains metadata (title, links to CSS), `<body>` contains visible content
> - Use browser dev tools to show students the difference between head and body sections
> - Demo how changing CSS in dev console affects the page immediately
> - Reference MDN documentation for each new HTML element encountered
> - Show students how to use CSS browser extensions like "Stylus" to demonstrate universal nature of CSS

**Time:** 45 minutes | **Concept:** Understanding HTML document structure and basic CSS styling

### Story:
"Here's my basic website content," Luna shows you a plain HTML file. "It has all the information about the play, but it looks so boring! Can you help me understand what each part does and add some basic styling?"

### Learning Objectives:
- Understand HTML document structure: `<head>` vs `<body>` sections
- Recognize HTML elements (headings, paragraphs, divs) and their semantic purpose
- Learn foundational CSS properties: color, background-color, font-size, text-align
- Use basic element selectors to target HTML elements
- Reference MDN documentation for CSS properties and syntax
- Experience immediate visual feedback from CSS changes

### Hands-On Discovery Tasks:
- Open Luna's play website in browser
- Use browser dev tools to inspect HTML elements (F12)
- Try changing CSS properties directly in dev console
- Look up CSS properties on MDN documentation
- Style the main heading to look more theatrical
- Change background colors to match play themes

### Key Skills Practiced:
- Reading HTML structure like a building blueprint
- Making CSS changes and seeing instant results
- Using dev tools as a "digital craft workspace"
- Understanding element targeting with CSS selectors


## Puzzle Set 2: The Art of Typography and Colors
> **Instructor Notes:**
> - Introduce the CSS Box Model concept visually - every element is a box with content, padding, border, margin
> - Demonstrate the difference between margin (outside spacing) and padding (inside spacing) using dev tools
> - Show how different font-family choices affect readability and mood
> - Emphasize the importance of consistent spacing for professional appearance
> - Guide students to discover class selectors (.) vs ID selectors (#) and when to use each

**Time:** 45 minutes | **Concept:** Advanced styling with fonts, spacing, and the CSS box model

### Story:
"The website is starting to look better!" Luna says. "But I want the text to feel more magical, and I need proper spacing between sections. Can you help me make it look more professional?"

### Learning Objectives:
- Work with font-family, font-weight, line-height
- Understand margin vs padding (the box model)
- Add borders and rounded corners
- Use class selectors (.) and ID selectors (#)
- Reference MDN for advanced properties

### Hands-On Discovery Tasks:
- Compare different font families for the play title
- Add spacing around content using margin and padding
- Create borders around important sections
- Use classes to style similar elements consistently
- Experiment with text decoration and text transform
- Look up box model properties on MDN

### Key Skills Practiced:
- Understanding the box model (content, padding, border, margin)
- Using selectors to target specific elements
- Making design decisions about spacing and typography
- Reading MDN documentation effectively

## Puzzle Set 3: Interactive Elements with JavaScript
> **Instructor Notes:**
> - Build on Week 2's debugging skills - use console.log extensively to show DOM objects and their properties
> - Explain the Document Object Model (DOM) as the browser's way of representing HTML as objects JavaScript can manipulate
> - Connect back to rock-paper-scissors patterns: event handlers, functions with clear inputs/outputs
> - Demonstrate getElementById as the bridge between HTML and JavaScript
> - Show how JavaScript can both read and modify CSS properties dynamically

**Time:** 45 minutes | **Concept:** DOM manipulation and connecting HTML to JavaScript

### Story:
"The website looks amazing now!" Luna exclaims. "But I want to add some interactivity - maybe a button that changes information or shows different cast members. Can you help me make the website respond to clicks?"

### Learning Objectives:
- Connect HTML buttons to JavaScript functions
- Use getElementById to find HTML elements
- Change element content and styling with JavaScript
- Apply debugging skills from Week 2 (console.log)
- Understand the Document Object Model (DOM)

### Hands-On Discovery Tasks:
- Add clickable buttons to Luna's website
- Write JavaScript functions similar to rock-paper-scissors structure
- Use console.log to see DOM objects and their properties
- Change text content when buttons are clicked
- Modify CSS properties through JavaScript
- Debug with browser console (building on Week 2 skills)

### Key Skills Practiced:
- DOM manipulation (finding and changing elements)
- Event handling (responding to clicks)
- Object inspection using console.log
- Connecting the three web languages (HTML, CSS, JavaScript)

## Puzzle Set 4: Bringing It All Together
> **Instructor Notes:**
> - This is the integration challenge - students combine HTML structure, CSS styling, and JavaScript interactivity
> - Encourage code pattern recognition from the rock-paper-scissors game structure
> - Emphasize testing and debugging workflow: make a change, test immediately, fix if needed
> - Help students see the complete web development cycle in action
> - Celebrate their progress from plain HTML to fully interactive website!

**Time:** 45 minutes | **Concept:** Full-stack web development integration

### Story:
"Perfect! Now I want to combine everything - beautiful styling AND interactivity. Can you help me create a section where visitors can learn about different characters by clicking buttons?"

### Learning Objectives:
- Combine CSS styling with JavaScript interactivity
- Create a character information panel
- Use both class and ID selectors in JavaScript
- Apply consistent styling across interactive elements
- Build confidence in reading and modifying code

### Hands-On Discovery Tasks:
- Create character profile cards with CSS styling
- Add JavaScript to show/hide character information
- Style buttons with hover effects
- Use consistent color schemes across the site
- Test the complete website functionality
- Reference back to rock-paper-scissors code patterns

### Key Skills Practiced:
- Integration of HTML structure, CSS styling, and JavaScript interactivity
- Code pattern recognition (similar to rock-paper-scissors event handling)
- Complete web development workflow
- Problem-solving with multiple technologies

## Homework: Styling Your Rock-Paper-Scissors Game

### Mission: Transform Your Debugged Game into a Beautiful Experience

Now that you've fixed all the bugs in your Rock-Paper-Scissors game (from Week 2), it's time to make it look amazing! You'll use the CSS and styling skills you learned helping Luna to transform your functional game into a visually appealing experience.

**Note:** Your homework files have been simplified from the original Week 2 version - debug displays and complex features have been removed so you can focus purely on CSS styling without getting overwhelmed by too many HTML elements.

### Connection to This Week's Learning:
- Apply CSS styling techniques from Puzzle Sets 1-2
- Use the dev tools skills you practiced
- Reference MDN documentation for CSS properties
- Think like a digital craftsperson designing an interactive experience

---

### Level 1 Challenges (For All Students)

#### Challenge 1.1: Color Theme Makeover
**Goal:** Give your game a cohesive color scheme
- Choose a theme: (Forest, Ocean, Sunset, Space, etc.)
- Change background colors to match your theme
- Update button colors to complement the background
- Make sure text is readable against new backgrounds
- **Skills:** `background-color`, `color`, color theory

#### Challenge 1.2: Typography Polish
**Goal:** Make the text more engaging and readable
- Choose a web font for your game title (Google Fonts)
- Increase font sizes for important elements (title, scores)
- Add font-weight to make key text bold
- Improve text alignment for a cleaner look
- **Skills:** `font-family`, `font-size`, `font-weight`, `text-align`

#### Challenge 1.3: Button Beautification
**Goal:** Make your game buttons more appealing
- Add rounded corners to buttons (`border-radius`)
- Increase button padding for better click targets
- Add borders or remove them for cleaner look
- Ensure all buttons have consistent styling
- **Skills:** `border-radius`, `padding`, `border`, consistency in design

#### Challenge 1.4: Spacing and Layout
**Goal:** Improve the overall spacing and organization
- Add proper margins between sections
- Use padding to give content breathing room
- Center important elements properly
- Create visual separation between game areas
- **Skills:** `margin`, `padding`, `text-align: center`, box model understanding

---

### Level 2 Challenges (Stretch Goals)

#### Challenge 2.1: Advanced Visual Polish
**Goal:** Add sophisticated styling details
- Create hover effects for buttons (`:hover` pseudo-class)
- Add subtle shadows to elements (`box-shadow`)
- Use CSS transforms for slight button animations
- Experiment with gradients for backgrounds
- **Skills:** `:hover`, `box-shadow`, `transform`, advanced CSS properties

#### Challenge 2.2: Responsive Sizing
**Goal:** Make your game look good on different screen sizes
- Use relative units (`em`, `rem`, `%`) instead of fixed pixels
- Make sure the game fits on smaller screens
- Test your design by resizing the browser window
- Adjust font sizes and spacing for mobile-friendly experience
- **Skills:** Responsive design principles, relative units

#### Challenge 2.3: Custom Game Enhancement
**Goal:** Add a unique personal touch
- Create a custom win/lose message area with special styling
- Add emoji or symbols to enhance the visual experience
- Design a unique layout for the score display
- Create visual feedback for game state changes
- **Skills:** Creative application of CSS, personal design choices

#### Challenge 2.4: Performance Optimization
**Goal:** Ensure your styled game loads quickly and smoothly
- Optimize your CSS (remove unused styles)
- Ensure your CSS is organized and readable
- Test game performance with new styles
- Document your color choices and design decisions
- **Skills:** Code organization, performance awareness, documentation

---

### Technical Requirements

#### Must-Have Features:
- [ ] Game functions exactly as it did after Week 2 bug fixes
- [ ] Uses at least 8 different CSS properties
- [ ] All styling changes are in CSS (not inline styles)
- [ ] Color scheme is consistent throughout
- [ ] Text remains readable against all backgrounds
- [ ] Game is still fully playable after styling changes

#### Assessment Criteria:

**Level 1 Completion (✓):**
- Completed at least 3 out of 4 Level 1 challenges
- Game has a cohesive visual theme
- All text is readable and properly sized
- Used CSS properties correctly

**Level 2 Achievement (✓✓):**
- Completed all Level 1 challenges
- Attempted at least 2 Level 2 challenges
- Demonstrated creativity in design choices
- Game has professional appearance

**Excellence (⭐):**
- Completed all challenges (Level 1 + Level 2)
- Created unique, polished visual design
- Showed mastery of CSS concepts
- Game could serve as portfolio piece

---

### Getting Started Guide

#### Step 1: Setup Your Workspace
1. Make sure your Rock-Paper-Scissors game works perfectly (all bugs fixed from Week 2)
2. Open the HTML file in your browser
3. Open dev tools (F12) to experiment with styles
4. Have MDN documentation ready for reference

#### Step 2: Plan Your Design
1. Choose a color theme that matches your personality
2. Sketch or visualize how you want the game to look
3. Decide which elements need the most visual attention
4. Plan your approach (start with colors, then typography, then spacing)

#### Step 3: Implement Systematically
1. Work on one challenge at a time
2. Save frequently and test in browser
3. Use dev tools to experiment before adding to CSS file
4. Reference your Week 3 puzzle notes for CSS syntax

#### Step 4: Test and Refine
1. Play the game multiple times to ensure functionality
2. Test on different browser window sizes
3. Ask someone else to try your game
4. Make final adjustments based on feedback

---

### Reflection Questions

After completing your styling challenges, consider:

1. **Design Process:** How did you decide on your color scheme and visual choices?
2. **Problem Solving:** What challenges did you face when applying CSS, and how did you solve them?
3. **Tools Usage:** How did browser dev tools help you experiment with styles?
4. **Connection to Learning:** How did the puzzle activities prepare you for this homework?
5. **Next Steps:** What additional styling would you add if you had more time?

---

### Resources and Support

#### CSS Reference Materials:
- MDN CSS Documentation (practice using this!)
- Google Fonts for typography choices
- Color palette generators (Coolors.co, Adobe Color)
- Your Week 3 puzzle notes and examples

#### Debugging CSS Issues:
- Use browser dev tools to inspect elements
- Check for typos in property names
- Ensure proper CSS syntax (colons, semicolons, brackets)
- Test one change at a time
- Reference working examples from puzzle activities

#### Design Inspiration:
- Look at well-designed websites for color ideas
- Consider game UI designs you find appealing
- Think about how visual design affects user experience
- Remember: simple, consistent design often works best

**Remember:** The goal is to practice your CSS skills while creating something you're proud of. Focus on learning and experimenting rather than achieving perfection! 
