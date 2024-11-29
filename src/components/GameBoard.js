// components/GameBoard.jsx
import React, { useState } from "react";
import { generateDeck, shuffleDeck } from "./utils/cardUtils";
import Card from "./Card";

const GameBoard = () => {
  // Initialiser le deck
  const [deck, setDeck] = useState(shuffleDeck(generateDeck()));

  // Diviser le deck entre deux joueurs
  const [player1Deck, setPlayer1Deck] = useState(deck.slice(0, 26));
  const [player2Deck, setPlayer2Deck] = useState(deck.slice(26));
  const [playedCards, setPlayedCards] = useState([]);
  const [winner, setWinner] = useState(null);

  const playTurn = () => {
    if (player1Deck.length === 0 || player2Deck.length === 0) {
      // Déclarer un gagnant si un joueur n'a plus de cartes
      setWinner(player1Deck.length > 0 ? "Joueur 1" : "Joueur 2");
      return;
    }

    const card1 = player1Deck[0];
    const card2 = player2Deck[0];

    setPlayedCards([card1, card2]);

    if (card1.value > card2.value) {
      setPlayer1Deck([...player1Deck.slice(1), card1, card2]);
      setPlayer2Deck(player2Deck.slice(1));
    } else if (card2.value > card1.value) {
      setPlayer2Deck([...player2Deck.slice(1), card1, card2]);
      setPlayer1Deck(player1Deck.slice(1));
    } else {
      // Gestion d'un cas d'égalité (bataille)
      setPlayer1Deck(player1Deck.slice(1));
      setPlayer2Deck(player2Deck.slice(1));
    }
  };

  return (
    <div className="game-board">
      <h1>Jeu de Bataille</h1>
      {winner ? (
        <h2>{winner} a gagné !</h2>
      ) : (
        <div>
          <div className="players">
            <div>
              <h3>Joueur 1</h3>
              <div>Cartes restantes : {player1Deck.length}</div>
            </div>
            <div>
              <h3>Joueur 2</h3>
              <div>Cartes restantes : {player2Deck.length}</div>
            </div>
          </div>
          <div className="cards-played">
            {playedCards.map((card, idx) => (
              <Card key={idx} card={card} />
            ))}
          </div>
          <button onClick={playTurn}>Jouer un tour</button>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
