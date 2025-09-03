// Import types and enums from cardGame.ts

import { drawCard } from "./cardGame";

export function showHand(hand: drawCard[], container: HTMLElement): void {
  container.innerHTML = hand
    .map(
      (c) =>
        `<span style="margin:5px; font-size:20px;">${c.rank}${c.suit}</span>`
    )
    .join("");
}
