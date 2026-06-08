// lab.js - Automated Multi-Stage Decryption System with Memory
// Author: Ronie Antonio 
// Date: June 2026 

// Constants - Your exact overview and artist statement for At Wit's End: The Unbecoming
const paragraphs = [ 
  "I designed At With’s End: The Unbecoming using a systems-driven table-top RPG process that emphasizes growing emotional pressure among players through a variety of physical mechanics, narrative constraints and action consequences. The core of the game was built around a modified Jenga tower, where pulling out blocks served as a representation of risk, sanity and group cohesion. Selfish actions, both as an individual and as a team, were expressed via color-coded blocks to create physical instability in cases where someone chooses to act rashly. Alongside this, I also created several mechanics such as Flicker, Moment of Friction and Final Stand to track psychological deterioration over time, which makes it possible for players’ emotional states to be seen first-hand and enhance the escalating gameplay structures. Worldbuilding and map creation were intentionally collaborative and changeable, allowing both players and the GM to physically alter the game world as it continues to degrade. Through iterative testing, I focused on tightening how narrative choices, mechanical crisis and physical/emotional instability work together to ensure each choices taken carry lasting weight.", 
  "At Wit’s End: The Unbecoming was one of my earlier ventures into the horror genre and has since remained important in my work. The slow, visceral erosion, driven by one’s own desires, fear and survival, scares me to my core. This table-top RPG was inspired by the Webtoon series known as Sweet Home, and I was captivated by its concept. The idea of monsterization growing from within one’s own desires and aspirations, only when they remain unchecked puts a spin in the horror genre as we often see external invasion (monsters, contagion, society, etc.) as the main culprits. The Unbecoming was designed to make players feel the tension between holding onto their own humanity through adversities and giving into something easier, something safer, something powerful, even if it's only for that moment. By forcing players to confront this instability through the tower and tracking their psychological descent through Flicker, I wanted the experience to feel intimate, uncomfortable and emotionally charged, all at the same time. Ultimately, I want players walking away with a reflection, one that shows how desperation can reshape one’s identity, how survival can come at the cost of one’s self and how even the most familiar desires can become frightening when pushed too far." 
]; 

let activeParagraphIndex = 0;   // Tracks which paragraph section we are actively unredacting 
let screenArray = [];           // Holds the full master array of characters displayed on screen 
let paragraphStartIndices = []; // Stores the exact starting array position of each paragraph 
let revealIndex = 0;            // Absolute index tracker for our screen decryption loop 
const speed = 20;               // Character streaming pace matching your homepage configuration (20ms) 

// FIX: Isolated unique storage cache block key name for At Wit's End
const storageKey = "highestUnredactedAtWitsEnd"; 

function main() { 
  // FIX: Updated system logs terminal descriptor tag
  console.log("At Wit's End: The Unbecoming automated decryption terminal initialized."); 
  
  // Detect if the user performed a hard browser page refresh 
  const navigationTiming = performance.getEntriesByType("navigation"); 
  
  // FETCH UNIVERSAL TIMESTAMP SYSTEM VALUES 
  const globalResetTime = localStorage.getItem("portfolioLastReset"); 
  
  // FIX: Isolated unique visit history checkpoint key name for At Wit's End
  const localPageVisitTime = localStorage.getItem("atWitsEndLastVisit"); 
  
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
  localStorage.setItem("atWitsEndLastVisit", Date.now().toString()); 
  
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
