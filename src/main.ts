import './style.css'
import { drawCard} from './cardGame'
import type { GameState } from './cardGame';

// Fetch Element
const app = document.querySelector<HTMLDivElement>('#app')!;

// Draw a card
const card = drawCard();

let gameState: GameState = "waiting";

//Start game
gameState = "playing";

//End game
gameState = "ended";

// Show the card
app.innerHTML = `
  <h2>Game State: ${gameState}</h2>
  <p>you drew: ${card.rank} ${card.suit}</p>
`