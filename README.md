# CardGame

# A) Introduktion 
  Den här webbsidan är ett enkelt kortspel program skrivet i TypeScript, HTML och CSS. När man klickar på knappen “Draw a card” drar man slumpmässigt ett kort ur en kortlek. Kortet visas i webbläsaren, med färgade symboler (hjärter och ruter är röda, spader och klöver är svarta). Man kan dra max 5 kort, därefter stängs knappen av.

## Varför använda detta?
### Träning i programmering
 Perfekt för nybörjare som vill förstå hur TypeScript fungerar i praktiken – särskilt grunder som funktioner, typer och DOM-manipulation.

### Spel eller simuleringar
 Kan byggas vidare till enklare spel som poker, blackjack eller memory.

### Visualisering av slump
Samma kodidé kan användas för andra slump baserade projekt, till exempel tärningskast eller slumpmässiga quizfrågor.

# B) Vanliga fel och felsökning

## 1. Fel: Typen importeras felaktigt
```ts
import { card } from "./cardGame";
// Error: "card is a type and must be imported using a type-only import"
```
Förklaring: TypeScript skiljer på typer och värden.
Lösning: import type { card } from "./cardGame";

## 2. Fel: Försöker ändra på null element
```ts
const handDiv = document.getElementById("hand") as HTMLDivElement;
handDiv.innerHTML = "Hej";
// Uncaught TypeError: Cannot set properties of null
```
Förklaring: Elementet #hand finns inte i HTML.
Lösning: Kontrollera att HTML-filen har rätt id: <div id="hand"></div>

## 3. Fel: Saknar let eller const när man deklarerar
```ts
hand.push(drawCard());
// Error: Cannot find name 'hand'.
```
Förklaring: Variabeln hand är inte deklarerad innan användning.
Lösning:const hand: card[] = [];

## 4. Fel: Räknar fler än maxkort
Om man inte stoppar dragningen, fortsätter programmet utan begränsning.
Lösning: Kontroll med if: 
```ts
if (hand.length >= MAX_CARDS) {
  drawButton.disabled = true;
  return;
}
```

# C)Vårt program
Vi har gjort ett enkelt kortspels-program. Programmet låter dig dra kort från en kortlek och visa dem på skärmen. Du kan dra max 5 kort – sedan stoppas spelet. Hjärter och ruter visas i rött, medan spader och klöver visas i svart.
Hur vi använder interfaces och types i uppgiften
Interface (card) används för att bestämma vilka fält ett kort måste ha – exempelvis suit (färg) och rank (värde).

Type (GameState) används för att begränsa spelets tillstånd till endast "waiting", "playing" eller "ended".
 På så sätt får vi tydliga regler och TypeScript varnar oss om vi skriver fel eller missar något.

Instruktioner för att köra programmet
Börja med att klona ner projektet från GitHub (eller skapa lokalt med Vite + TypeScript):
```
git clone https://github.com/moggisen/CardGame.git
```
```
cd cardgame-1
```
```
 npm install
```
```
npm run dev
```

4.  Öppna länken som visas i terminalen
Nu ska du kunna:
Se en starttext som säger “Click ‘Draw a card’ to start!”.

Klicka på knappen Draw a card för att dra ett nytt kort.

Se din hand växa tills du når 5 kort (därefter inaktiveras knappen).

# D) Övningauppgift 


