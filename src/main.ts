// Import types and functions from other files
import type { card, GameState } from "./cardGame";
import { drawCard } from "./cardGame";
import { showHand } from "./ShowHand";
import "./style.css";

// Get references to HTML elements
const app = document.getElementById("app") as HTMLDivElement;
const handDiv = document.getElementById("hand") as HTMLDivElement;
const countP = document.getElementById("count") as HTMLParagraphElement;
const drawButton = document.getElementById("drawButton") as HTMLButtonElement;

// Array to store the cards in the player's hand
const hand: card[] = [];

// Maximum number of cards allowed
const MAX_CARDS = 5;

// Show initial message
app.textContent = "Click 'Draw a card' to start!";

// Variable to track the game state
let gameState: GameState = "waiting";

// Function to run when the "Draw a card" button is clicked
const handleDrawCard = (): void => {
  // Check if player has reached max cards
  if (hand.length >= MAX_CARDS) {
    drawButton.disabled = true; // Disable the button
    countP.textContent = `You have reached the maximum of ${MAX_CARDS} cards.`;
    gameState = "ended"; // Update game state
    return; // Stop further execution
  }

  // Draw a new card and add it to the hand
  const newCard = drawCard();
  hand.push(newCard);

  // Update the game state
  gameState = "playing";

  // Show all cards in the hand
  showHand(hand, handDiv);

  // Display the number of cards in hand
  countP.textContent = `You have ${hand.length} card(s) in your hand.`;

  // If max cards reached, disable the button and update state
  if (hand.length >= MAX_CARDS) {
    drawButton.disabled = true;
    gameState = "ended";
  }
};

// Attach the click event to the draw button
drawButton.addEventListener("click", handleDrawCard);
