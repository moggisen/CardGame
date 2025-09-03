import type { card} from "./cardGame";
import  {  Suit } from "./cardGame";

export function showHand(hand: card[], container: HTMLElement): void {
  container.innerHTML = hand
    .map((c) => {
      // Bestäm färg
      const color =
        c.suit === Suit.Hearts || c.suit === Suit.Diamonds ? "red" : "black";
      return `<span class="card ${color}">${c.rank}${c.suit}</span>`;
    })
    .join("");
}
