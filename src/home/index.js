import React from "react";
import DeckList from "./DeckList";
import { Link } from "react-router-dom";
const Home = ({ decks, handleDelete }) => {
  return (
    <div>
      <Link to={"/decks/new"} className="bg-secondary p-2 rounded text-light">
        <i className="fas fa-plus mb-4"></i> Create Deck
      </Link>
      <DeckList decks={decks} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
