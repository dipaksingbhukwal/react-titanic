import React from "react";
const Card = props => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.passenger.Name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="https://www.google.com/" className="card-link">
          Card link
        </a>
        <a href="https://www.google.com/" className="card-link">
          Another link
        </a>
      </div>
    </div>
    // <p>Card</p>
  );
};

export default Card;
