// index.js - purpose and description here
// Author: Your Name
// Date:

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
const speed = 6;              // Decryption sweep speed (lower is faster)

function myFunction(param1, param2) { 
  // some code here 
} 

function main() {
  console.log("Main function started.");
  
  const generateButton = document.getElementById("generate-btn");
  if (generateButton) {
    generateButton.addEventListener("click", processButtonClick);
  }

  // Generate ALL redacted blocks for ALL paragraphs right on page load
  buildAllRedactedBlocks();
}

// Generates all three paragraph blocks immediately so the page is fully redacted on load
function buildAllRedactedBlocks() {
  const paragraphElement = document.getElementById("typewriter-p");
  if (!paragraphElement) return;

  for (let p = 0; p < paragraphs.length; p++) {
    // If it's paragraph 2 or 3, add spacing and a tab indentation first
    if (p > 0) {
      screenArray.push("\n\n\t");
    }

    // Save the exact array index where this paragraph's text actually starts
    paragraphStartIndices.push(screenArray.length);

    const text = paragraphs[p];
    for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);
      if (char === " ") {
        screenArray.push(" "); // Keep normal spacing intact
      } else {
        screenArray.push("█"); // Redaction block
      }
    }
  }

  // Render all blocks to the screen immediately
  paragraphElement.textContent = screenArray.join("");
  
  // Initialize our starting reveal position to the beginning of the first paragraph
  revealIndex = paragraphStartIndices[0];
}

function processButtonClick() {
  const generateButton = document.getElementById("generate-btn");
  if (!generateButton) return;

  // Lock button down to prevent double-clicking glitches while the sweep animation runs
  generateButton.style.opacity = "0.5";
  generateButton.style.pointerEvents = "none";

  // Start the decoding sweep loop
  revealLoop();
}

function revealLoop() {
  const paragraphElement = document.getElementById("typewriter-p");
  const generateButton = document.getElementById("generate-btn");
  
  const currentText = paragraphs[activeParagraphIndex];
  const startPos = paragraphStartIndices[activeParagraphIndex];
  const endPos = startPos + currentText.length;

  if (paragraphElement && revealIndex < endPos) {
    // Calculate relative character position inside the raw string text
    const relativeCharPos = revealIndex - startPos;
    
    // Overwrite the block with the real letter
    screenArray[revealIndex] = currentText.charAt(relativeCharPos);
    paragraphElement.textContent = screenArray.join("");
    
    revealIndex++;
    setTimeout(revealLoop, speed);
  } else if (paragraphElement && generateButton) {
    // Current paragraph section is fully decrypted! Move tracker to the next stage
    activeParagraphIndex++;

    if (activeParagraphIndex < paragraphs.length) {
      // Unlock the button and prompt the user for the next stage
      generateButton.textContent = "[ Unredact Document ]";
      generateButton.style.opacity = "1";
      generateButton.style.pointerEvents = "auto";
      
      // Update reveal index to bypass the structural line breaks (\n\n\t) and hit the next text start
      revealIndex = paragraphStartIndices[activeParagraphIndex];
    } else {
      // Everything is completely revealed! Hide cursor and remove button
      paragraphElement.style.borderRight = "none";
      generateButton.style.display = "none";
    }
  }
}

// THE PARTY STARTER (checking changes)
window.addEventListener("DOMContentLoaded", main);