// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants
const paragraphs = [
  "Throughout my years, I have shaped my work through the growing tensions between realism and distortion, attempting to capture both the harshness and the fragility of hope within the world among us. Across various mediums, I find myself returning to themes of realism through a darker lens, where monochromatic-esque palettes (black, white and several muted tones) help strip scenes down to their emotional cores. This reduction in color allows for mood, contrast, and form to carry more weight in its meaning, often pushing ordinary subject matters into something more unsettling, something that is eerily uncanny to the human eye.",
  "Horror is another consistent thread I find in my practice, though I may say that it is not always as conventional as it should. I am often drawn to building horror-adjacent narratives as well as learning and reiterating existing lore within them. Through these canvases, I am able to reinterpret their meaning, a way of which I can explore ways to draw out the uncertainty, the uncanny, the unsettling and the meaningful. My influences often come from narrative-driven media, visual storytelling and the way certain atmospheres can reshape our ideas into unfamiliarity. Materials and stylistic choices vary depending on the piece, though I find myself favoring approaches emphasizing contrast, texture and stark visual clarity.",
  "Together, these elements form a practice centered on reinterpretations and emotional atmosphere. Whether it is through realism, monochromatic-esque compositions or horror- influenced media and storytelling, I seek to examine how familiar things can be made strange again and how that same strangeness can reveal something honest beneath the hardened surface."
];

let currentParagraphIndex = 0; // Tracks which paragraph we are on (0, 1, or 2)
let charIndex = 0;             // Tracks character position inside the active paragraph
const speed = 30;              // Typing speed per letter

function myFunction(param1, param2) { 
  // some code here 
} 

function main() { 
  console.log("Main function started."); 
  const generateButton = document.getElementById("generate-btn"); 
  if (generateButton) { 
    generateButton.addEventListener("click", startTypewriter); 
  } 
} 

function startTypewriter() {
  const generateButton = document.getElementById("generate-btn");
  
  // Only run if we still have paragraphs left to type
  if (currentParagraphIndex < paragraphs.length) {
    // Lock the button while typing is actively happening
    generateButton.style.opacity = "0.5";
    generateButton.style.pointerEvents = "none";
    
    // Add spacing and tab indentation for paragraphs 2 and 3 before typing starts
    const paragraphElement = document.getElementById("typewriter-p");
    if (currentParagraphIndex > 0) {
      paragraphElement.textContent += "\n\n\t";
    }
    
    typeWriter(); 
  }
}

function typeWriter() { 
  const paragraphElement = document.getElementById("typewriter-p"); 
  const generateButton = document.getElementById("generate-btn");
  const activeText = paragraphs[currentParagraphIndex];
  
  if (paragraphElement && charIndex < activeText.length) { 
    paragraphElement.textContent += activeText.charAt(charIndex); 
    charIndex++; 
    setTimeout(typeWriter, speed); 
  } else if (paragraphElement) { 
    // Paragraph finished typing! Move to the next one and reset character counter
    currentParagraphIndex++;
    charIndex = 0;
    
    if (currentParagraphIndex < paragraphs.length) {
      // Unlock button and change text so they can click to continue
      generateButton.textContent = "[ Continue Reading ]";
      generateButton.style.opacity = "1";
      generateButton.style.pointerEvents = "auto";
    } else {
      // All 3 paragraphs are fully typed out! Hide the cursor and the button
      paragraphElement.style.borderRight = "none"; 
      generateButton.style.display = "none";
    }
  } 
} 

window.addEventListener("DOMContentLoaded", main);