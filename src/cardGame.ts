//Enums for Suit and Rank
export enum Suit {
    Hearts = "♥",
    Diamonds = "♦",
    Clubs = "♣",
    Spades = "♠"
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

// Hjälpfunktion för rank-värde
export function getRankValue(rank: Rank): number {
    switch(rank) {
        case Rank.Ace: return 14;   // högst
        case Rank.King: return 13;
        case Rank.Queen: return 12;
        case Rank.Jack: return 11;
        case Rank.Ten: return 10;
        case Rank.Nine: return 9;
        case Rank.Eight: return 8;
        case Rank.Seven: return 7;
        case Rank.Six: return 6;
        case Rank.Five: return 5;
        case Rank.Four: return 4;
        case Rank.Three: return 3;
        case Rank.Two: return 2;    // lägst
        default: return 0;
    }
}

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

