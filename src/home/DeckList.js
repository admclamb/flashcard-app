import React from "react";
import { useState, useEffect } from "react";
import { listDecks, deleteDeck } from "../utils/api";

import DeckCard from "./DeckCard";

const DeckList = () => {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    setDecks([]);
    const abortController = new AbortController();
    async function getDeckData() {
      let response = await listDecks(abortController.signal);
      setDecks(response);
    }
    getDeckData();
    return () => {
      abortController.abort();
    };
  }, []);

  async function handleDelete(id) {
    const deleteTheDeck = window.confirm(
      "Delete the deck?\r\n\r\n\r\nYou will not be able to recover it."
    );
    if (deleteTheDeck) {
      await deleteDeck(id);
      let response = await listDecks();
      setDecks(response);
    }
  }

  if (decks) {
    const listOfDecks = decks.map((deck, index) => {
      return (
        <DeckCard
          deck={deck}
          index={index}
          key={index}
          handleDelete={handleDelete}
        />
      );
    });
    return <React.Fragment>{listOfDecks}</React.Fragment>;
  }
  return null;
};

export default DeckList;
