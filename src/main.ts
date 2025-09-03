import './style.css'
import { drawCard} from './cardGame'

// Fetch Element
const app = document.querySelector<HTMLDivElement>('#app')!;

// Draw a card
const card = drawCard();

// Show the card
app.innerHTML = `
  <h1>You Drew a card!</h1>
  <p>${card.rank} of ${card.suit}</p>
`