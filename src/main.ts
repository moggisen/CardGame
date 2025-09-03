import type {  card } from "./cardGame";
import { drawCard} from "./cardGame";
import { showHand } from "./ShowHand";

// Hämta HTML-element med typer
const app = document.getElementById("app") as HTMLDivElement;
const handDiv = document.getElementById("hand") as HTMLDivElement;
const countP = document.getElementById("count") as HTMLParagraphElement;
const drawButton = document.getElementById("drawButton") as HTMLButtonElement;

// Typad array för handen
const hand: card[] = [];

// Visa startmeddelande
app.textContent = "Click 'Draw a card' to start!";

// Maxkort-konstant
const MAX_CARDS = 5;

// Funktion som körs när man klickar på knappen
const handleDrawCard = (): void => {
  if (hand.length >= MAX_CARDS) {
    drawButton.disabled = true; // Inaktivera knappen
    countP.textContent = `You have reached the maximum of ${MAX_CARDS} cards.`;
    return;
  }

  const newCard = drawCard();
  hand.push(newCard);

  // Visa hela handen
  showHand(hand, handDiv);

  // Visa antal kort
  countP.textContent = `You have ${hand.length} card(s) in your hand.`;

  // Om vi når maxkort, inaktivera knappen
  if (hand.length >= MAX_CARDS) {
    drawButton.disabled = true;
  }
};

// Koppla event listener
drawButton.addEventListener("click", handleDrawCard);
