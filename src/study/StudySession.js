import React from "react";
import { useState } from "react";
import DisplayStudyCard from "./DisplayStudyCard";

const StudySession = ({ currentDeck }) => {
  return (
    <div>
      <h1>Study: {currentDeck.name}</h1>
      <DisplayStudyCard cards={currentDeck.cards} />
    </div>
  );
};

export default StudySession;
