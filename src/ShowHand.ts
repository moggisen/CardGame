// Import the card type and Suit enum
import type { card } from "./cardGame";
import { Suit } from "./cardGame";

/**
 * Function to display the player's hand of cards
 * @param hand - array of card objects
 * @param container - HTML element where the cards will be shown
 */
export function showHand(hand: card[], container: HTMLElement): void {
  container.innerHTML = hand
    .map((c) => {
      // Decide the color based on the suit
      const color =
        c.suit === Suit.Hearts || c.suit === Suit.Diamonds ? "red" : "black";

      // Return a span element with the card rank, suit, and CSS class for color
      return `<span class="card ${color}">${c.rank}${c.suit}</span>`;
    })
    .join(""); // Join all card spans into one string for innerHTML
}
