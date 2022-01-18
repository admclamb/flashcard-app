import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createDeck } from "../utils/api";
import CreateHeader from "./CreateHeader";
const CreateDecks = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  let history = useHistory();

  const handleChange = ({ target }) => {
    if (target.id === "name") {
      setName(target.value);
    } else {
      setDescription(target.value);
    }
  };

  const handleCancel = () => {
    history.push("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newDeck = await createDeck({ name, description });
    history.push(`/decks/${newDeck.id}`);
  };

  return (
    <React.Fragment>
      <CreateHeader />
      <h1 className="mb-3">Create Deck</h1>
      <form className="deck-form">
        <div className="form-group mb-4">
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              className="form-control mt-2"
              id="name"
              aria-describedby="entername"
              placeholder="Deck Name"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="description">
            Description
            <textarea
              type="textarea"
              name="description"
              className="form-control mt-2"
              id="description"
              aria-describedby="enterDescription"
              placeholder="Breif description of the deck"
              rows="4"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <button className="btn btn-secondary mr-2" onClick={handleCancel}>
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CreateDecks;
