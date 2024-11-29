// utils/cardUtils.js

// Générer un jeu de 52 cartes
export const generateDeck = () => {
  const suits = ["♠", "♥", "♦", "♣"]; // Couleurs
  const values = [
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
    { label: "J", value: 11 },
    { label: "Q", value: 12 },
    { label: "K", value: 13 },
    { label: "A", value: 14 },
  ];

  let deck = [];
  suits.forEach((suit) => {
    values.forEach((val) => {
      deck.push({ ...val, suit }); // Crée une carte
    });
  });

  return deck;
};

// Mélanger un tableau (deck)
export const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

  