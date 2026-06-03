// index.js - Three-Paragraph Interactive Decryption System with Memory
// Author: Ronie Antonio 
// Date: June 2026 

// Constants 
const paragraphs = [ 
  "Throughout my years, I have shaped my work through the growing tensions between realism and distortion, attempting to capture both the harshness and the fragility of hope within the world among us. Across various mediums, I find myself returning to themes of realism through a darker lens, where monochromatic-esque palettes (black, white and several muted tones) help strip scenes down to their emotional cores. This reduction in color allows for mood, contrast, and form to carry more weight in its meaning, often pushing ordinary subject matters into something more unsettling, something that is eerily uncanny to the human eye.", 
  "Horror is another consistent thread I find in my practice, though I may say that it is not always as conventional as it should. I am often drawn to building horror-adjacent narratives as well as learning and reiterating existing lore within them. Through these canvases, I am able to reinterpret their meaning, a way of which I can explore ways to draw out the uncertainty, the uncanny, the unsettling and the meaningful. My influences often come from narrative-driven media, visual storytelling and the way certain atmospheres can reshape our ideas into unfamiliarity. Materials and stylistic choices vary depending on the piece, though I find myself favoring approaches emphasizing contrast, texture and stark visual clarity.", 
  "Together, these elements form a practice centered on reinterpretations and emotional atmosphere. Whether it is through realism, monochromatic-esque compositions or horror- influenced media and storytelling, I seek to examine how familiar things can be made strange again and how that same strangeness can reveal something honest beneath the hardened surface." 
]; 

let activeParagraphIndex = 0; // Tracks which paragraph section we are actively unredacting 
let screenArray = [];         // Holds the full master array of characters displayed on screen 
let paragraphStartIndices = []; // Stores the exact starting array position of each paragraph 
let revealIndex = 0;          // Absolute index tracker for our screen decryption loop 
const speed = 30;             // Classic typewriter pace (30ms per character) 

function myFunction(param1, param2) { 
  // some code here 
} 

function main() { 
  console.log("Main function started."); 
  const generateButton = document.getElementById("generate-btn"); 
  if (generateButton) { 
    generateButton.addEventListener("click", processButtonClick); 
  } 
  
  // NEW SYSTEM CHECK: Find out EXACTLY how the page was loaded
  const navigationTiming = performance.getEntriesByType("navigation")[0];
  
  if (navigationTiming && navigationTiming.type === "reload") {
    // If they hit the browser's refresh button, explicitly clear their history!
    localStorage.removeItem("highestUnredactedParagraph");
    activeParagraphIndex = 0;
    console.log("Browser refresh detected: System state reset to redacted.");
  } else {
    // Otherwise (link click/first load), fetch their permanent progress vault history
    const savedIndex = localStorage.getItem("highestUnredactedParagraph");
    if (savedIndex !== null) {
      activeParagraphIndex = parseInt(savedIndex, 10);
    }
  }
  
  // Render paragraphs based on the outcome of our check
  buildAllRedactedBlocks(); 
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
  
  // Adjust the button view state based on their history
  const generateButton = document.getElementById("generate-btn");
  if (generateButton) {
    if (activeParagraphIndex >= paragraphs.length) {
      generateButton.style.display = "none"; // Hide button if all 3 are done
    } else if (activeParagraphIndex > 0) {
      generateButton.textContent = "[ Unredact Document ]"; // Prompt next stage if mid-way
    }
  }

  // Initialize our decryption loop tracker position based on the next unredacted block
  if (activeParagraphIndex < paragraphs.length) {
    revealIndex = paragraphStartIndices[activeParagraphIndex] + (activeParagraphIndex > 0 ? 5 : 4); 
  }
} 

function processButtonClick() { 
  const generateButton = document.getElementById("generate-btn"); 
  if (!generateButton) return; 
  
  generateButton.style.opacity = "0.5"; 
  generateButton.style.pointerEvents = "none"; 
  
  revealLoop(); 
} 

function revealLoop() { 
  const paragraphElement = document.getElementById("typewriter-p"); 
  const generateButton = document.getElementById("generate-btn"); 
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
  } else if (paragraphElement && generateButton) { 
    activeParagraphIndex++; 
    
    // SAVE TO VAULT: Remember that they successfully decrypted this paragraph stage
    localStorage.setItem("highestUnredactedParagraph", activeParagraphIndex);
    
    if (activeParagraphIndex < paragraphs.length) { 
      generateButton.textContent = "[ Unredact Document ]"; 
      generateButton.style.opacity = "1"; 
      generateButton.style.pointerEvents = "auto"; 
      
      revealIndex = paragraphStartIndices[activeParagraphIndex] + 5; 
    } else { 
      generateButton.style.display = "none"; 
    } 
  } 
} 

// THE PARTY STARTER
window.addEventListener("DOMContentLoaded", main);