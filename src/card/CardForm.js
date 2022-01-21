import React, { useEffect, useState } from "react";

const cardForm = ({ add }) => {
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

export default Car;
