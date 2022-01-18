import React from "react";
import DeckSingleCard from "./DeckSingleCard";
const DisplayCards = ({ currentDeck }) => {
  if (currentDeck.cards && currentDeck.cards.length > 0) {
    const cardList = currentDeck.cards.map((element, index) => {
      return <DeckSingleCard key={index} element={element} />;
    });
    return <div className="cards-list">{cardList}</div>;
  }
  return (
    <div className="mt-4">
      <p>There is no cards in this deck...</p>
    </div>
  );
};

export default DisplayCards;
