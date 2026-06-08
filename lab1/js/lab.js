// lab.js - Interactive Auto-Decryption Engine for Networks & Communications
// Author: Ronie Antonio 
// Date: June 2026 

// Socials Page Specific Paragraph Profiles
const paragraphs = [
  "Primary database module tracking ongoing illustrations, design notes, and character layout sheets. This interface aggregates rough concept sketches, atmospheric environment adjustments, and chronological workflow progression metrics from current game development assets.",
  "Operational frequency: Frequent narrative stream updates focusing on the structural friction between stark monochromatic contrasts and underlying dark realism."
];

let activeParagraphIndex = 0;   // Tracks which section is actively typing
let screenArray = [];           // Master character matrix displayed on screen 
let paragraphStartIndices = []; // Stores baseline positions for formatting boundaries
let revealIndex = 0;            // Character pointer position for loop stream
const speed = 25;               // Slightly faster auto-stream velocity (25ms per character)
const storageKey = "highestUnredactedSocial"; // Isolated cache block index

function main() { 
  console.log("Socials automated decryption sequence initialized."); 

  // Reset progress cache if the user forces a hard manual page reload
  const navigationTiming = performance.getEntriesByType("navigation")[0];
  if (navigationTiming && navigationTiming.type === "reload") {
    localStorage.removeItem(storageKey);
    activeParagraphIndex = 0;
  } else {
    // Look up previous visit history parameters
    const savedIndex = localStorage.getItem(storageKey);
    if (savedIndex !== null) {
      activeParagraphIndex = parseInt(savedIndex, 10);
    }
  }
  
  // Render layout structure blocks cleanly
  buildAllRedactedBlocks(); 

  // AUTOMATIC ENGAGEMENT: Run the typing sequence instantly if incomplete
  if (activeParagraphIndex < paragraphs.length) {
    revealLoop();
  }
} 

function buildAllRedactedBlocks() { 
  const paragraphElement = document.getElementById("typewriter-p"); 
  if (!paragraphElement) return; 
  
  for (let p = 0; p < paragraphs.length; p++) { 
    paragraphStartIndices.push(screenArray.length); 

    // Inject matching structural double line breaks
    if (p > 0) { 
      screenArray.push("\n\n", " ", " ", " ", " "); 
    } else {
      screenArray.push(" ", " ", " ", " ");
    } 
    
    const text = paragraphs[p]; 
    
    // Fall back to instant loading if history parameters show past completion
    if (p < activeParagraphIndex) {
      for (let i = 0; i < text.length; i++) {
        screenArray.push(text.charAt(i));
      }
    } else {
      // Build block masks
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
  
  paragraphElement.textContent = screenArray.join(""); 

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
    // Advance to the next text tier automatically
    activeParagraphIndex++; 
    localStorage.setItem(storageKey, activeParagraphIndex);
    
    if (activeParagraphIndex < paragraphs.length) { 
      revealIndex = paragraphStartIndices[activeParagraphIndex] + 5; 
      // CHAIN EXECUTION: Call the loop again immediately to stream paragraph 2
      revealLoop(); 
    } 
  } 
} 

// Start runtime
window.addEventListener("DOMContentLoaded", main);