import type { card } from "./cardGame";
import { Rank, getRankValue } from "./cardGame";

// Counts how many times each rank appears in the hand
function countRanks(hand: card[]): Record<string, number> {
  return hand.reduce((acc, c) => {
    acc[c.rank] = (acc[c.rank] || 0) + 1; // Increment count for this rank
    return acc;
  }, {} as Record<string, number>);
}

// Evaluates the hand and returns a string describing the result
export function evaluateHand(hand: card[]): string {
  if (hand.length === 0) return "No cards drawn."; // No cards in hand

  const rankCounts = countRanks(hand); // Get counts of each rank
  const counts = Object.values(rankCounts); // Array of counts

  // Check for Four of a Kind
  if (counts.includes(4)) return "You got Four of a Kind!";
  // Check for Full House (three of one rank and two of another)
  if (counts.includes(3) && counts.includes(2)) return "You got a Full House!";
  // Check for Three of a Kind
  if (counts.includes(3)) return "You got Three of a Kind!";
  // Check for Two Pairs
  if (counts.filter((c) => c === 2).length === 2) return "You got Two Pairs!";
  // Check for One Pair
  if (counts.includes(2)) return "You got One Pair!";

  // Find the card with the highest value
  const highCard = hand.reduce((max, c) =>
    getRankValue(c.rank) > getRankValue(max.rank) ? c : max
  );

  // Return the highest card if no other hand is found
  return `High card: ${highCard.rank} ${highCard.suit}`;
}
