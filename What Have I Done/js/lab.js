// lab.js - Automated Multi-Stage Decryption System with Memory
// Author: Ronie Antonio 
// Date: June 2026 

// Constants - Placeholder text modules for What Have I Done?
const paragraphs = [ 
  "I created this art piece using a specialized scribble-hatching technique to construct the entire background, using the lines erratic nature to build a ruined city through raw, unstable textures. My process primarily focused on making the atmosphere feel heavier by layering several degrees of dark filters with a secondary red overlay to simulate the physiological sensation of “seeing red” (unbridled anger/frustration). To heighten its visceral impact, I integrated blood smears and finished the composition by overlaying a hand-drawn crack across the entire frame. This final layer acts as a physical barrier, suggesting that the viewer is peering through a shattered lens into a broken “what-if” reality.", 
  "The artistic intention behind this piece was to show Anger in a more destructive, world-altering form. I explicitly used red as a symbol for this stage, representing a once hostile frustration I had towards a world that has failed me. A world that has failed her. This served as a focal point for the anger I’ve bottled up throughout my journey towards acceptance. By utilizing erratic hatchings and a blood-stained palette, I wanted to project that same internal madness onto the environment itself. Ultimately, I wanted the viewer to feel how a single moment of rage can permanently fracture one’s perception of reality, even if that moment was only internalized." 
]; 

let activeParagraphIndex = 0;   // Tracks which paragraph section we are actively unredacting 
let screenArray = [];           // Holds the full master array of characters displayed on screen 
let paragraphStartIndices = []; // Stores the exact starting array position of each paragraph 
let revealIndex = 0;            // Absolute index tracker for our screen decryption loop 
const speed = 20;               // Character streaming pace matching your homepage configuration (20ms) 

// FIX: Isolated unique storage cache block key name for What Have I Done?
const storageKey = "highestUnredactedWhatHaveIDone"; 

function main() { 
  // FIX: Updated system logs terminal descriptor tag
  console.log("What Have I Done? automated decryption terminal initialized."); 
  
  // FIX: Safe array verification extraction system to prevent mobile browser crashes
  const entries = performance.getEntriesByType("navigation");
  const navigationTiming = entries && entries.length > 0 ? entries[0] : null; 
  
  // FETCH UNIVERSAL TIMESTAMP SYSTEM VALUES 
  const globalResetTime = localStorage.getItem("portfolioLastReset"); 
  
  // FIX: Isolated unique visit history checkpoint key name for What Have I Done?
  const localPageVisitTime = localStorage.getItem("whatHaveIDoneLastVisit"); 
  
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
  
  // FIX: Isolated unique visitor log clock variable name update
  localStorage.setItem("whatHaveIDoneLastVisit", Date.now().toString()); 
  
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
      revealLoop(); 
    } 
  } 
} 

// THE PARTY STARTER 
window.addEventListener("DOMContentLoaded", main);