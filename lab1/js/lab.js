// lab.js - Automated Multi-Stage Decryption System with Memory
// Author: Ronie Antonio 
// Date: June 2026 

// Constants - Your exact socials paragraphs
const paragraphs = [ 
  "Overview: Primary database module updating on the latest and ongoing illustration, assets, and progress on a game's development process.", 
  "Operational Frequency: Consistently Inconsistent."
]; 

let activeParagraphIndex = 0;   // Tracks which paragraph section we are actively unredacting 
let screenArray = [];           // Holds the full master array of characters displayed on screen 
let paragraphStartIndices = []; // Stores the exact starting array position of each paragraph 
let revealIndex = 0;            // Absolute index tracker for our screen decryption loop 
const speed = 20;               // Character streaming pace matching your homepage configuration (20ms) 
const storageKey = "highestUnredactedSocial"; // Isolated tracking vault for your socials progress

function main() { 
  console.log("Socials automated decryption terminal initialized."); 
  
  // NEW SYSTEM CHECK: Find out EXACTLY how the page was loaded
  const navigationTiming = performance.getEntriesByType("navigation")[0]; 
  if (navigationTiming && navigationTiming.type === "reload") {
    // If they hit the browser's refresh button, explicitly clear their history!
    localStorage.removeItem(storageKey);
    activeParagraphIndex = 0;
    console.log("Browser refresh detected: System state reset to redacted.");
  } else {
    // Otherwise, fetch their permanent progress vault history
    const savedIndex = localStorage.getItem(storageKey);
    if (savedIndex !== null) {
      activeParagraphIndex = parseInt(savedIndex, 10);
    }
  }
  
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
      // AUTOMATIC CHAIN RUN: Instantly trigger the next paragraph sequence without stopping
      revealLoop();
    } 
  } 
} 

// THE PARTY STARTER
window.addEventListener("DOMContentLoaded", main);