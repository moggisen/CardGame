import type { card } from "./cardGame";
import { drawCard } from "./cardGame";
import { showHand } from "./ShowHand";
import { evaluateHand } from "./handEvaluator";

// Hämta HTML-element
const app = document.getElementById("app") as HTMLDivElement;
const handDiv = document.getElementById("hand") as HTMLDivElement;
const countP = document.getElementById("count") as HTMLParagraphElement;
const drawButton = document.getElementById("drawButton") as HTMLButtonElement;
const resultP = document.getElementById("result") as HTMLParagraphElement;

// Typad array för handen
const hand: card[] = [];

// Maxkort-konstant
const MAX_CARDS = 5;

const handleDrawCard = (): void => {
  if (hand.length >= MAX_CARDS) {
    drawButton.disabled = true;
    countP.textContent = `You have reached the maximum of ${MAX_CARDS} cards.`;
    return;
  }

  const newCard = drawCard();
  hand.push(newCard);

  // Visa hela handen
  showHand(hand, handDiv);

  // Visa antal kort
  countP.textContent = `You have ${hand.length} card(s) in your hand.`;

  // Visa resultat
  resultP.textContent = evaluateHand(hand);

  if (hand.length >= MAX_CARDS) {
    drawButton.disabled = true;
  }
};

// Koppla event listener
drawButton.addEventListener("click", handleDrawCard);


