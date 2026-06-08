// lab.js - Automated Multi-Stage Decryption System with Memory
// Author: Ronie Antonio 
// Date: June 2026 

const paragraphs = [ 
  "Overview: Primary database module updating on the latest and ongoing illustration, assets, and progress on a game's development process.", 
  "Operational Frequency: Consistently Inconsistent."
]; 

let activeParagraphIndex = 0;   
let screenArray = [];           
let paragraphStartIndices = []; 
let revealIndex = 0;            
const speed = 20;               
const storageKey = "highestUnredactedSocial"; 

function main() { 
  console.log("Socials automated decryption terminal initialized."); 
  
  const navigationTiming = performance.getEntriesByType("navigation"); 
  if (navigationTiming && navigationTiming.type === "reload") {
    localStorage.removeItem(storageKey);
    activeParagraphIndex = 0;
  } else {
    const savedIndex = localStorage.getItem(storageKey);
    if (savedIndex !== null) {
      activeParagraphIndex = parseInt(savedIndex, 10);
    }
  }
  
  buildAllRedactedBlocks(); 

  if (activeParagraphIndex < paragraphs.length) {
    revealLoop();
  }
} 

function buildAllRedactedBlocks() { 
  const paragraphElement = document.getElementById("typewriter-p"); 
  if (!paragraphElement) return; 
  
  for (let p = 0; p < paragraphs.length; p++) { 
    paragraphStartIndices.push(screenArray.length); 

    // FIX: Kept ONLY the vertical line drops (\n\n) so paragraphs stay separated.
    // Removed all manual space strings (" ") from the script data array array.
    if (p > 0) { 
      screenArray.push("\n\n"); 
    } 
    
    const text = paragraphs[p]; 
    
    if (p < activeParagraphIndex) {
      for (let i = 0; i < text.length; i++) {
        screenArray.push(text.charAt(i));
      }
    } else {
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
  
  // FIX: Resetting calculations to remove hardcoded space skip numbers (+5 / +4)
  if (activeParagraphIndex < paragraphs.length) {
    revealIndex = paragraphStartIndices[activeParagraphIndex] + (activeParagraphIndex > 0 ? 1 : 0); 
  }
} 

function revealLoop() { 
  const paragraphElement = document.getElementById("typewriter-p"); 
  const currentText = paragraphs[activeParagraphIndex]; 
  const startPos = paragraphStartIndices[activeParagraphIndex]; 
  
  // FIX: Clean math matching our zero-space structure profile bounds
  const offset = activeParagraphIndex > 0 ? 1 : 0;
  const endPos = startPos + offset + currentText.length; 
  
  if (paragraphElement && revealIndex < endPos) { 
    const relativeCharPos = revealIndex - (startPos + offset); 
    
    screenArray[revealIndex] = currentText.charAt(relativeCharPos); 
    paragraphElement.textContent = screenArray.join(""); 
    
    revealIndex++; 
    setTimeout(revealLoop, speed); 
  } else if (paragraphElement) { 
    activeParagraphIndex++; 
    localStorage.setItem(storageKey, activeParagraphIndex);
    
    if (activeParagraphIndex < paragraphs.length) { 
      revealIndex = paragraphStartIndices[activeParagraphIndex] + 1; 
      revealLoop();
    } 
  } 
} 

window.addEventListener("DOMContentLoaded", main);