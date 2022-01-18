import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, createCard } from "../utils/api";
import CardHeader from "./CardHeader";
const AddCard = () => {
  const [deckName, setDeckName] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const { deckId } = useParams();
  let history = useHistory();
  useEffect(() => {
    setDeckName("");
    const abortController = new AbortController();

    async function getDeck() {
      const response = await readDeck(deckId, abortController.signal);
      setDeckName(response.name);
    }
    getDeck();

    return () => {
      abortController.abort();
    };
  }, [deckId]);

  const handleChange = ({ target }) => {
    if (target.id === "front") {
      setFront(target.value);
    }
    if (target.id === "back") {
      setBack(target.value);
    }
    return;
  };

  const handleCancel = () => {
    history.push(`/decks/${deckId}`);
    return;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    createCard(Number(deckId), { front, back });
    window.alert("Card added");
    setFront("");
    setBack("");
  };
  return (
    <div>
      <CardHeader name={deckName} type="add" />
      <h1>{deckName}: Add Card</h1>
      <form className="deck-form">
        <div className="form-group mb-3">
          <label htmlFor="front">
            Front
            <textarea
              type="textarea"
              name="front"
              className="form-control mt-2"
              id="front"
              aria-describedby="enterfront"
              rows="2"
              placeholder="Back side of card"
              value={front}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="back">
            Back
            <textarea
              type="textarea"
              name="back"
              className="form-control mt-2"
              id="back"
              aria-describedby="enterback"
              rows="2"
              placeholder="Back side of card"
              value={back}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <button className="btn btn-secondary mr-2" onClick={handleCancel}>
            Done
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCard;
