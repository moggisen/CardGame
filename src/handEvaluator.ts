import type { card } from "./cardGame";
import { Rank, getRankValue } from "./cardGame";

function countRanks(hand: card[]): Record<string, number> {
  return hand.reduce((acc, c) => {
    acc[c.rank] = (acc[c.rank] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

export function evaluateHand(hand: card[]): string {
  if (hand.length === 0) return "No cards drawn.";

  const rankCounts = countRanks(hand);
  const counts = Object.values(rankCounts);

  if (counts.includes(4)) return "You got Four of a Kind!";
  if (counts.includes(3) && counts.includes(2)) return "You got a Full House!";
  if (counts.includes(3)) return "You got Three of a Kind!";
  if (counts.filter((c) => c === 2).length === 2) return "You got Two Pairs!";
  if (counts.includes(2)) return "You got One Pair!";

  // Hitta kortet med högst värde
  const highCard = hand.reduce((max, c) =>
    getRankValue(c.rank) > getRankValue(max.rank) ? c : max
  );

  return `High card: ${highCard.rank} ${highCard.suit}`;
}
