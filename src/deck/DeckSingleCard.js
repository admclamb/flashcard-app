import React from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteCard } from "../utils/api";

const DeckSingleCard = ({ element }) => {
  const { deckId } = useParams();
  const handleDeleteCard = async () => {
    const deleteTheCard = window.confirm(
      "Delete this card?\r\n\r\nYou will not be able to recover it."
    );
    if (deleteTheCard) {
      deleteCard(element.id);
      window.location.reload(false);
    }
  };
  return (
    <div className="border p-3">
      <div className="d-flex justify-content-between">
        <div style={{ width: "50%" }} className="mr-3">
          {element.front}
        </div>
        <div style={{ width: "50%" }} className="ml-3">
          {element.back}
        </div>
      </div>
      <div className="d-flex justify-content-end mt-2">
        <Link
          to={`/decks/${deckId}/cards/${element.id}/edit`}
          className="btn btn-secondary mr-2"
        >
          <i className="fas fa-pencil-alt mr-2"></i>Edit
        </Link>
        <button className="btn btn-danger" onClick={handleDeleteCard}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default DeckSingleCard;
