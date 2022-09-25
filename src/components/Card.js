import React from "react";
import "../styles/card.css";

const Card = (props) => {
  const { title, image, category, date } = props;
  return (
    <div className="card">
      <img src={image} alt="card" />
      <div className="card_content">
        {category} | {date}
      </div>
      <h3>{title}</h3>
      <p className="card_desc">
        Read More <span>&rarr;</span>
      </p>
    </div>
  );
};

export default Card;
