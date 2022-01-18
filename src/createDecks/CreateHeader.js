import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CreateHeader = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">
            <i className="fas fa-home mr-2"></i>Home
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Create Deck
        </li>
      </ol>
    </nav>
  );
};

export default CreateHeader;
