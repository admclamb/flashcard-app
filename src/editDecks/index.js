import React, { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import EditHeader from "./EditHeader";
const EditDecks = () => {
  const [name, setName] = useState("");
  const [originalName, setOriginalName] = useState("");
  const [description, setDescription] = useState("");
  const { deckId } = useParams();
  const { url } = useRouteMatch();
  let history = useHistory();

  useEffect(() => {
    setName("");
    setDescription("");
    const abortController = new AbortController();

    async function getDeckNameDescription() {
      const response = await readDeck(deckId);
      setName(response.name);
      setOriginalName(response.name);
      setDescription(response.description);
    }
    getDeckNameDescription();

    return () => {
      abortController.abort();
    };
  }, []);

  const handleChange = ({ target }) => {
    if (target.id === "name") {
      setName(target.value);
    } else {
      setDescription(target.value);
    }
  };

  const handleCancel = () => {
    history.push(`/decks/${deckId}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedDeck = await updateDeck({ name, description, id: deckId });
    history.push(`/decks/${updatedDeck.id}`);
  };

  return (
    <React.Fragment>
      <EditHeader url={url} name={originalName} />
      <h1 className="mb-3">Update Deck</h1>
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
              placeholder={name}
              value={name}
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
              value={description}
              placeholder={description}
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

export default EditDecks;
