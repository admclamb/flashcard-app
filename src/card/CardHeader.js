import React from "react";
import { Link, useHistory } from "react-router-dom";

const CardHeader = ({ name, type }) => {
  const history = useHistory();

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">
            <i className="fas fa-home mr-2"></i>Home
          </Link>
        </li>
        <li className="breadcrumb-item">
          <a onClick={history.goBack} className="a-tag text-primary">
            {name}
          </a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {type === "add" ? "Add Card" : "Edit Card"}
        </li>
      </ol>
    </nav>
  );
};

export default CardHeader;
