import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, createCard } from "../utils/api";
import CardForm from "./CardForm";
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
      <CardForm
        deckName={deckName}
        front={front}
        back={back}
        handleCancel={handleCancel}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editCard={false}
      />
    </div>
  );
};

export default AddCard;
