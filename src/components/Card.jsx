// components/Card.jsx
import React from "react";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card-value">{card.label}</div>
      <div className="card-suit">{card.suit}</div>
    </div>
  );
};

export default Card;
