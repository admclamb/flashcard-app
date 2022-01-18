import React from "react";
import { Link, useParams } from "react-router-dom";

const NotEnough = ({ currentDeck }) => {
  const { deckId } = useParams();
  let amount = currentDeck ? currentDeck.cards.length : 0;
  return (
    <React.Fragment>
      <h3>Not enough cards.</h3>
      <p>
        You need at least 3 cards to study. There are {amount} cards in this
        deck.
      </p>
      <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
        <i className="fas fa-plus"></i> Add Cards
      </Link>
    </React.Fragment>
  );
};

export default NotEnough;
