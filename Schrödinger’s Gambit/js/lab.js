// lab.js - Automated Multi-Stage Decryption System with Memory
// Author: Ronie Antonio 
// Date: June 2026 

// Constants - Your exact socials paragraphs
const paragraphs = [ 
  "I created Schrödinger’s Gambit through an iterative card-game design process focusing on separating stability from manipulation. I created three distinct card archetypes [normalcy (fixed values), imaginary (blanks), and paradox (special actions)] and tested how their interactions may generate tension and uncertainty. The game’s mechanics were thoroughly refined through multiple playtests, adjusting card rations, action limits (from one action to two per rotation) and clarifying how paradox (special action) cards can either permanently or temporarily alter the foundational cards (normalcy and imaginary cards). I paid closer attention to how observation collapse, assignment, reversal and superimposition functioned as verbs rather than mere static effects, which ensured each action changed the game state more meaningfully. Feedback from paytesters directly informed the final revision, especially in simplifying setup, clearly separating special cards from regular cards and tightening win conditions to keep gameplay fast and competitive.";
  "Just like Schrödinger’s cat, Schrödinger’s Gambit is a card game of uncertainty. It is meant to explore uncertainty, control, and risk through mechanics inspired by my quantum concepts of observation, collapse and superimposition. I wanted players to feel the tension between maintaining stability and embracing manipulation, where knowledge in itself becomes a weapon and hidden information drives social pressure. The imaginary cards functioned as “empty canvases”, reflecting how potential can be shaped positively or destructively depending on player choices. Schrödinger’s Gambit, in particular, was designed to force collective paranoia and confrontation, turning the table into a moment of heightened emotion and urgency. Ultimately, I wanted players to walk away feeling that the rules themselves tell a story. A story about trust, risk-taking and how certainty often comes at a cost."
]; 

let activeParagraphIndex = 0;   // Tracks which paragraph section we are actively unredacting 
let screenArray = [];           // Holds the full master array of characters displayed on screen 
let paragraphStartIndices = []; // Stores the exact starting array position of each paragraph 
let revealIndex = 0;            // Absolute index tracker for our screen decryption loop 
const speed = 20;               // Character streaming pace matching your homepage configuration (20ms) 
const storageKey = "highestUnredactedSocial"; // Isolated tracking vault for your socials progress

function main() { 
  console.log("Socials automated decryption terminal initialized."); 
  
  // Detect if the user performed a hard browser page refresh
  const navigationTiming = performance.getEntriesByType("navigation")[0]; 
  
  // FETCH UNIVERSAL TIMESTAMP SYSTEM VALUES
  const globalResetTime = localStorage.getItem("portfolioLastReset");
  const localPageVisitTime = localStorage.getItem("socialsLastVisit");
  
  // MATH TIMING GATE: True if homepage refreshed *after* our last visit here
  let homepageSignaledReset = false;
  if (globalResetTime && localPageVisitTime) {
    if (parseInt(globalResetTime, 10) > parseInt(localPageVisitTime, 10)) {
      homepageSignaledReset = true;
    }
  }

  // EXECUTE STORAGE CLEARING RULES
  if ((navigationTiming && navigationTiming.type === "reload") || homepageSignaledReset) {
    // Clear history if this specific page is refreshed OR if the homepage signaled a fresh sync
    localStorage.removeItem(storageKey);
    activeParagraphIndex = 0;
    console.log("System state reset to redacted due to reload synchronization.");
  } else {
    // Hyperlink navigation click or page entry layout: check if they have a saved session
    const savedIndex = localStorage.getItem(storageKey);
    if (savedIndex !== null) {
      // If a save key exists, lock it in so it stays statically unredacted
      activeParagraphIndex = parseInt(savedIndex, 10);
      console.log("Existing user session found. Restoring static data state.");
    } else {
      // If no save key exists (absolute first visit), start from scratch!
      activeParagraphIndex = 0;
      console.log("Absolute first visit detected. Executing typing stream.");
    }
  }
  
  // Log the current time as this page's newest visit checkpoint so it stops resetting on link clicks
  localStorage.setItem("socialsLastVisit", Date.now().toString());
  
  // Render paragraphs based on the outcome of our check
  buildAllRedactedBlocks(); 

  // AUTOMATIC ENTRY DECRYPTION: Start typing right away without requiring a button click
  if (activeParagraphIndex < paragraphs.length) {
    revealLoop();
  }
} 

// Generates the paragraphs immediately, honoring their previous decryption history
function buildAllRedactedBlocks() { 
  const paragraphElement = document.getElementById("typewriter-p"); 
  if (!paragraphElement) return; 
  
  for (let p = 0; p < paragraphs.length; p++) { 
    // Save the exact array index where this paragraph section begins
    paragraphStartIndices.push(screenArray.length); 

    // Add line drops and structural layout spaces to the array matrix
    if (p > 0) { 
      screenArray.push("\n\n", " ", " ", " ", " "); 
    } else {
      screenArray.push(" ", " ", " ", " ");
    } 
    
    const text = paragraphs[p]; 
    
    // CRUCIAL SYSTEM LOGIC: If they already unredacted this section before, load the real letters!
    if (p < activeParagraphIndex) {
      for (let i = 0; i < text.length; i++) {
        screenArray.push(text.charAt(i));
      }
    } else {
      // Otherwise, keep it loaded as encrypted blocks
      for (let i = 0; i < text.length; i++) { 
        let char = text.charAt(i); 
        if (char === " ") { 
          screenArray.push(" "); 
        } else { 
          screenArray.push("█"); 
        } 
      } 
    }
  } 
  
  // Render current system loadout state to the screen
  paragraphElement.textContent = screenArray.join(""); 
  
  // Initialize our decryption loop tracker position based on the next unredacted block
  if (activeParagraphIndex < paragraphs.length) {
    revealIndex = paragraphStartIndices[activeParagraphIndex] + (activeParagraphIndex > 0 ? 5 : 4); 
  }
} 

function revealLoop() { 
  const paragraphElement = document.getElementById("typewriter-p"); 
  const currentText = paragraphs[activeParagraphIndex]; 
  const startPos = paragraphStartIndices[activeParagraphIndex]; 
  
  const offset = activeParagraphIndex > 0 ? 5 : 4;
  const endPos = startPos + offset + currentText.length; 
  
  if (paragraphElement && revealIndex < endPos) { 
    const relativeCharPos = revealIndex - (startPos + offset); 
    
    screenArray[revealIndex] = currentText.charAt(relativeCharPos); 
    paragraphElement.textContent = screenArray.join(""); 
    
    revealIndex++; 
    setTimeout(revealLoop, speed); 
  } else if (paragraphElement) { 
    activeParagraphIndex++; 
    
    // SAVE TO VAULT: Remember that they successfully decrypted this paragraph stage
    localStorage.setItem(storageKey, activeParagraphIndex);
    
    if (activeParagraphIndex < paragraphs.length) { 
      revealIndex = paragraphStartIndices[activeParagraphIndex] + 5; 
      // FIXED: Cleared the accidental double duplicate loop statement here
      revealLoop();
    } 
  } 
} 

// THE PARTY STARTER
window.addEventListener("DOMContentLoaded", main);