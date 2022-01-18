import React from "react";
import { useHistory, Link, useParams } from "react-router-dom";

const StudyHeader = ({ name }) => {
  const history = useHistory();
  const { deckId } = useParams();
  const handleClick = () => {
    history.push(`/decks/${deckId}`);
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">
            <i className="fas fa-home mr-2"></i>Home
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <Link to={`/decks/${deckId}`}>{name}</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Study
        </li>
      </ol>
    </nav>
  );
};

export default StudyHeader;
