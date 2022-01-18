import React from "react";
import { Link } from "react-router-dom";
const DeckCard = ({ deck, handleDelete }) => {
  const { id, name, description, cards } = deck;
  return (
    <div className="border border rounded deck-card p-4">
      <div className="d-flex justify-content-between">
        <h1>{name}</h1>
        <h6 className="text-muted">{deck ? cards.length : 0} cards</h6>
      </div>
      <p>{description}</p>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <Link
            to={`/decks/${id}`}
            className="mr-4  p-2  rounded bg-secondary text-light"
          >
            <i className="fas fa-eye mr-2"></i>
            View
          </Link>
          <Link
            to={`/decks/${id}/study`}
            className="p-2  rounded bg-primary text-light"
          >
            <i className="fas fa-book mr-2"></i>
            Study
          </Link>
        </div>
        <button
          className="btn bg-danger rounded delete-btn"
          onClick={() => handleDelete(id)}
        >
          <i className="fas fa-trash-alt text-light"></i>
        </button>
      </div>
    </div>
  );
};

export default DeckCard;
