// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants
const textToType = `Throughout my years, I have shaped my work through the growing tensions between realism and distortion, attempting to capture both the harshness and the fragility of hope within the world among us. Across various mediums, I find myself returning to themes of realism through a darker lens, where monochromatic-esque palettes (black, white and several muted tones) help strip scenes down to their emotional cores. This reduction in color allows for mood, contrast, and form to carry more weight in its meaning, often pushing ordinary subject matters into something more unsettling, something that is eerily uncanny to the human eye.`;

let index = 0;
const speed = 30; 

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  typeWriter(); 
}

// 3. THE TYPEWRITER FUNCTION
function typeWriter() {
  const paragraphElement = document.getElementById("typewriter-p");
  
  if (paragraphElement && index < textToType.length) {
    paragraphElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else if (paragraphElement) {
    paragraphElement.style.borderRight = "none";
  }
}

// 4. THE PARTY STARTER (PUT THIS AT THE VERY END)
// We replaced your old "main();" with this line so the page loads fully first!
window.addEventListener("DOMContentLoaded", main);
