// lab.js - Automated Multi-Stage Decryption System with Memory
// Author: Ronie Antonio 
// Date: June 2026 

// Constants - Your exact original games hub paragraph
const paragraphs = [ 
  "Overview: A collection of playable media built on tension, texture, and emotional weight. Whether navigating narratives, systems, or environments, these diverse projects invite you to uncover what lies beneath the unsettling and the uncanny." 
]; 

let activeParagraphIndex = 0;   // Tracks which paragraph section we are actively unredacting 
let screenArray = [];           // Holds the full master array of characters displayed on screen 
let paragraphStartIndices = []; // Stores the exact starting array position of each paragraph 
let revealIndex = 0;            // Absolute index tracker for our screen decryption loop 
const speed = 20;               // Character streaming pace matching your homepage configuration (20ms) 

// FIX 1: Isolated unique storage cache block key name for the Games Directory Hub page
const storageKey = "highestUnredactedGames"; 

function main() { 
  // FIX 2: Updated system logs terminal descriptor tag
  console.log("Games automated decryption terminal initialized."); 
  
  // Detect if the user performed a hard browser page refresh 
  const navigationTiming = performance.getEntriesByType("navigation"); 
  
  // FETCH UNIVERSAL TIMESTAMP SYSTEM VALUES 
  const globalResetTime = localStorage.getItem("portfolioLastReset"); 
  
  // FIX 3: Isolated unique visit history checkpoint key name for the Games page
  const localPageVisitTime = localStorage.getItem("gamesLastVisit"); 
  
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
  
  // FIX 4: Isolated unique visitor log clock variable name update
  localStorage.setItem("gamesLastVisit", Date.now().toString()); 
  
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