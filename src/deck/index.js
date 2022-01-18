import React, { useEffect, useState } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck, deleteDeck } from "../utils/api";
import DeckHeader from "./DeckHeader";
import DisplayCards from "./DisplayCards";

const Deck = () => {
  const { url } = useRouteMatch();
  const { deckId } = useParams();
  const history = useHistory();
  const [currentDeck, setCurrentDeck] = useState({});
  useEffect(() => {
    setCurrentDeck({});
    const abortController = new AbortController();
    async function getDeck() {
      const response = await readDeck(deckId, abortController.signal);
      setCurrentDeck(response);
    }
    getDeck();
    return () => {
      abortController.abort();
    };
  }, []);

  const handleDeleteDeck = async () => {
    const deleteTheDeck = window.confirm(
      "Are you sure you want to delete the deck?\r\n\r\n\r\nThis cannot be undone."
    );
    if (deleteTheDeck) {
      await deleteDeck(deckId);
      history.push("/");
    }
  };
  return (
    <div>
      <DeckHeader name={currentDeck.name} />
      <h2>{currentDeck.name}</h2>
      <p>{currentDeck.description}</p>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <Link to={`${url}/edit`} className="btn btn-secondary mr-2">
            <i className="fas fa-pencil-alt mr-2"></i>Edit
          </Link>
          <Link to={`${url}/study`} className="btn btn-primary mr-2">
            <i className="fas fa-book mr-2"></i>Study
          </Link>
          <Link to={`${url}/cards/new`} className="btn btn-primary mr-2">
            <i className="fas fa-plus mr-2"></i>Add Cards
          </Link>
        </div>
        <button className="btn btn-danger" onClick={handleDeleteDeck}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
      <h1 className="mt-4">Cards</h1>
      <DisplayCards currentDeck={currentDeck} />
    </div>
  );
};

export default Deck;
