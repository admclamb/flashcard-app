import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import NotEnough from "./NotEnough";
import StudyHeader from "./StudyHeader";
import StudySession from "./StudySession";

const Study = () => {
  const { deckId } = useParams();
  const [currentDeck, setCurrentDeck] = useState({});

  useEffect(() => {
    setCurrentDeck({});
    const abortController = new AbortController();

    async function getCurrentDeck() {
      const response = await readDeck(deckId);
      setCurrentDeck(response);
    }
    getCurrentDeck();
  }, []);
  if (currentDeck.cards && currentDeck.cards.length >= 3) {
    return (
      <div>
        <StudyHeader name={currentDeck.name} deckId={currentDeck.deckId} />
        <StudySession currentDeck={currentDeck} />
      </div>
    );
  }
  return (
    <div>
      <StudyHeader name={currentDeck.name} deckId={currentDeck.deckId} />
      <NotEnough amount={currentDeck} />
    </div>
  );
};
export default Study;
