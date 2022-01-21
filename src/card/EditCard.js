import React, { useEffect, useState } from "react";
import { readCard, readDeck, updateCard } from "../utils/api";
import { useParams, useHistory } from "react-router-dom";
import CardHeader from "./CardHeader";
import CardForm from "./CardForm";
const EditCard = () => {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [deckName, setDeckName] = useState("");
  const { deckId, cardId } = useParams();
  let history = useHistory();
  useEffect(() => {
    setDeckName("");
    const abortController = new AbortController();

    async function getDeck() {
      const response = await readDeck(deckId, abortController.signal);
      setDeckName(response.name);
    }

    async function getCard() {
      const response = await readCard(cardId, abortController.signal);
      setFront(response.front);
      setBack(response.back);
    }
    getDeck();
    getCard();

    return () => {
      abortController.abort();
    };
  }, [deckId, cardId]);
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
    history.goBack();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedCard = {
      front,
      back,
      id: cardId,
      deckId: Number(deckId),
    };
    updateCard(updatedCard);
    history.goBack();
  };
  return (
    <div>
      <CardHeader name={deckName} type="edit" />
      <CardForm
        deckName={deckName}
        front={front}
        back={back}
        handleCancel={handleCancel}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editCard={true}
      />
      {/* <h1>{deckName}: Edit Card</h1>
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
              placeholder="Front side of card"
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
      </form> */}
    </div>
  );
};

export default EditCard;
