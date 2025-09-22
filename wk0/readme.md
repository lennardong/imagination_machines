# Week 0

## Course Prep
**Goal**: Get your tools ready and your mind prepared for puzzle-solving

### Why This Matters
You're about to reverse-engineer mysterious code and debug broken systems. Having a reliable development environment means you can focus on the fun detective work instead of fighting with setup issues.

### Checklist

**Setup (do in order), ~1h:**
- [ ] Create a dedicated class folder: `imagination_machines` somewhere easy to find (Desktop or Documents)
- [ ] Install VSCode (https://code.visualstudio.com/docs/setup/setup-overview)
- [ ] Install the "Dev Containers" extension in VSCode
- [ ] **Windows users only**: Install WSL2 and Docker (links below)
- [ ] Download the `.devcontainer` and `wk0` folders and place them in your class folder root
- [ ] Test: Open your class folder in VSCode, click "Reopen in Container" when prompted
- [ ] Verify: Right-click `test-setup.html` → "Open with Live Server" → click the button. 
    - If you get success flags, great. No action needed.
    - If you get fails, then please take a screenshot and post it to the forum to ask for help.

**Learning preparation (~4h):**
- [ ] Read the main `README.md` in the root folder - understand the course structure and approach
- [ ] Disable AI assistants in VSCode (we want *your* thinking, not the computer's)
- [ ] Complete assigned prep (~3h) - builds mental models for Week 1
- [ ] (Optional) Complete bonus hacking section (~30min) - get comfortable breaking things

**Windows setup links:**
- WSL2: https://learn.microsoft.com/en-us/windows/wsl/install
- Docker: https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers

### Definition of Done
By Week 1, you should be able to:
- Open VSCode and create a new file
- Right-click `test-setup.html` and select "Open with Live Server"
- See the test page in your browser and click the button successfully
- Feel comfortable navigating the interface
- Understand why we're starting with puzzles instead of lectures

## Assigned Readings

**Practical Skills:**
- Getting Started with VSCode: https://www.youtube.com/watch?v=ORrELERGIHs&t=103s
- IDE vs Text Editor: https://www.theodinproject.com/lessons/foundations-text-editors

**Mindset Preparation:**
- Think like a Programmer: https://www.youtube.com/watch?v=azcrPFhaY9k



## Bonus: Hack the Test File

**Goal**: Get comfortable breaking things and seeing what happens. This is how you'll learn to debug in Week 2-4.

### Experiments to Try
With `test-setup.html` open and Live Server running, try these modifications and watch the changes appear instantly:

**Text Hacking:**
- Change "IMAGINATION MACHINES v1.0" to your name
- Modify the ASCII art (try adding your initials)
- Change the button text to something funny
- Edit the success message that appears after clicking

**Color Experiments:**
- In the `<style>` section, change `background-color: #f5f5f5` to `#ff0000` (red)
- Try `color: #333333` → `color: #0000ff` (blue text)
- Experiment with button colors: `border: 1px solid #cccccc` → `border: 3px solid #ff00ff`

**Behavior Tweaks:**
- In the JavaScript section, add more lines to the success message
- Change `[OK]` to `[HACKED]` in the output
- Try adding `alert("You hacked it!");` before the existing code in `testClick()`

**Break It On Purpose:**
- Delete a `{` or `}` in the CSS - see what breaks
- Remove the `onclick="testClick()"` from the button - what happens?
- Add random text outside the `<script>` tags

### What You're Learning
- **Live feedback loop**: Change → Save → See result immediately
- **Cause and effect**: Understanding how code changes affect behavior
- **Debugging mindset**: When something breaks, you can fix it
- **Fearless experimentation**: Code is just text - you can always undo

**Pro tip**: Use Ctrl+Z to undo changes if you break something. The goal is to explore without fear!

This hands-on tinkering is exactly the approach we'll use for the weekly puzzles.

## Troubleshooting

### "Reopen in Container" doesn't appear
**Problem**: VSCode doesn't prompt to reopen in container when opening the folder.

**Solutions**:
- Ensure the `.devcontainer` folder is in your project root (same level as `wk0` folder)
- Install the "Dev Containers" extension: Extensions → Search "Dev Containers" → Install
- Manually trigger: Command Palette (Ctrl+Shift+P) → "Dev Containers: Reopen in Container"
- Restart VSCode and try opening the folder again

### "Open with Live Server" missing from right-click menu
**Problem**: Right-clicking on `test-setup.html` doesn't show Live Server option.

**Solutions**:
- Check if container rebuilt properly: Command Palette → "Dev Containers: Rebuild Container"
- Manually start Live Server: Command Palette → "Live Server: Open with Live Server"
- Verify extension installed: Check Extensions panel for "Live Server" by Ritwick Dey
- Try opening the file first, then using Command Palette to start Live Server

### Browser shows "This site can't be reached" or file:// URL
**Problem**: Browser opens wrong URL or can't connect to Live Server.

**Solutions**:
- Ensure URL starts with `http://127.0.0.1:5500` (not `file://`)
- Check VSCode status bar shows "Port: 5500" when Live Server is running
- Try different browser (Chrome, Firefox, Edge)
- Disable browser extensions that might block local servers
- Restart Live Server: Command Palette → "Live Server: Stop" → "Live Server: Open with Live Server"


## Questions?
Post in the discussion board - setup problems are learning opportunities for everyone.
https://github.com/lennardong/imagination_machines/discussions
