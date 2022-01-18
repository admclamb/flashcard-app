import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const DisplayStudyCard = ({ cards }) => {
  const history = useHistory();
  const defaultCard = {
    front: "",
    back: "",
  };
  const [flippedOnBack, setFlippedOnBack] = useState(false);
  const [card, setCard] = useState({ ...defaultCard });
  // Uses the indexes to display currentCard
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    setCard(cards[cardIndex]);
  }, [cardIndex]);

  const handleFlip = () => {
    !flippedOnBack ? setFlippedOnBack(true) : setFlippedOnBack(false);
  };

  const handleNext = async () => {
    // copy is made to mutate and check condition without effecting the original state and + 2 to make index accurate to state
    const index = cardIndex + 2;
    if (index > cards.length) {
      const restart = window.confirm(
        "Restart cards?\r\nClick 'cancel' to return to the home page."
      );
      if (restart) {
        setCardIndex(0);
      } else {
        history.push("/");
      }
    } else {
      setCardIndex(() => cardIndex + 1);
      !flippedOnBack ? setFlippedOnBack(true) : setFlippedOnBack(false);
    }
  };
  return (
    <div className="p-4 border rounded">
      <h3 className="mb-2">
        Card {cardIndex + 1} of {cards.length}
      </h3>
      <p className="mb-4">{!flippedOnBack ? card.front : card.back}</p>
      <div>
        <button className="btn btn-secondary mr-2" onClick={handleFlip}>
          Flip
        </button>
        {flippedOnBack ? (
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default DisplayStudyCard;
