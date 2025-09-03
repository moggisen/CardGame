//Enums for Suit and Rank
export enum Suit {
    Hearts = "&hearts;",
    Diamonds = "&diams;",
    Spades = "&spades;",
    Clubs = "&clubs;",
};

export enum Rank {
    Ace = "A",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Jack = "J",
    Queen = "Q",
    King = "K",
};

// Literal type for game state 
export type GameState = "waiting" | "playing" | "ended";

// Card Type
export interface card {
    suit: Suit;
    rank: Rank;
};

//Function for drawing a card 
export function drawCard(): card {
    const suits = Object.values(Suit);
    const ranks = Object.values(Rank);
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    return {suit, rank};
};