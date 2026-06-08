// lab.js - Automated Multi-Stage Decryption System with Memory
// Author: Ronie Antonio 
// Date: June 2026 

// Constants - Your exact socials paragraphs
const paragraphs = [ 
    "[Update Required. This version of the archives was limited by previous technical constraints that no longer hinderss the full scope of the project. This artist statement will undergo a full rewrite to better capture the essence of the project and its development process. The hyperlink at the bottom of this page will allow access to the updated archives. Enjoy the decryption process!]",
    "I developed The Obscura Archives using the Twine engine and its built-in Harlow scripting language, focusing on creating a reactive terminal simulation that’s driven by directory-based exploration. My process involved implementing a non-linear navigation system using arrow keys (> > >) and conditional logics ($id-verified, $corruption50) to block immediate access to the archive’s deeper layers. Using a stylesheet (CSS), I was mostly able to overhaul Twine’s default look as I established better-suited aesthetic fitting for a terminal/site (mono-spaced typography, scan -line overlay and a restricted, greyscale palette). I designed special access-point mechanics where players must navigate through documents for strings like “xR4_zQ9vP” to bridge directories and advance the story. To simulate the narrative’s central theme of digital corruption, I utilized advanced text macros  (shudder, mirror, fidget, etc.) to creatively “break” the UI, turning the interface from a static tool into a more active, hostile environment.",
    "The Obscura Archives was born from my fascination with digital archeology and the “found-footage” feel of bureaucratic horror. I wanted to move beyond simple choice-based mechanics by making the act of data retrieval in itself feel dangerous, where uncovering information is synonymous with self-entrapment. Much of this was inspired by the SCP Foundation, specifically its use of clinical, redacted documentation to build an overwhelming sense of dread. I wanted to capture that same atmosphere, where the  cold, professional tone of the archives only heightened the terror of the anomalies it fails to contain. This project is a study in meta-horror as I lean into the terrifying idea that a digital medium can “infect” the observer. By forcing players to navigate a compromised terminal, I wanted to evoke a sense of ontological dread where the boundaries between the game’s corrupted files and the player’s physical screen begin to dissolve. Ultimately, I want players to walk away with a lingering paranoia, feeling that some secrets are buried for a reason and that the deeper you dig into  the rabbit hole, the harder it is to leave it behind."
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