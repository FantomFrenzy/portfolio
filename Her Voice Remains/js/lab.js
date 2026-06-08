// lab.js - Automated Multi-Stage Decryption System with Memory
// Author: Ronie Antonio 
// Date: June 2026 

// Constants - Your exact socials paragraphs
const paragraphs = [ 
    "I created this art piece by layering digital transparency and gaussian blur effects to evoke the feeling of a painful memory. To establish the “tunnel” perspective, I placed the central figure against an expansive darkness, using a completely black void to force the viewer’s focus onto the small flickering light behind her. My process involved duplicating the figure and applying varying levels of blur to create a “ghostly” effect, symbolizing her transition from a physical presence to a distant memory. I also integrated “glitches” over the final composition to suggest that the figure before you is a mere reconstruction of someone you’ve held so dearly, lost to time.",
    "The artistic intention behind this piece was to explore Denial as a sensory experience, the moment of being at a loss for words when faced with sudden grief. I explicitly used the color yellow as a dualistic symbol, representing both the innocence of the past and the blinding nature of denial that keeps the “light” of acceptance out of reach. This piece is deeply personal to me as it shows the struggles of letting something or someone go. It shows the vast distance between one’s perspective at the start and the eventual journey one will have to embark toward healing. By covering the screen with glitches and swallowing her faint glow in darkness, I wanted to show how we cling to these unrealistic reconstructions of those we’ve lost. Ultimately, I want the viewer to feel that some images are ghosts (of what was once there) we create to shield ourselves from a truth that’s still too painful and too far away to grasp with one’s self."
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