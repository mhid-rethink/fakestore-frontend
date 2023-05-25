import React from "react";
import "./styles.css";
const Card = ({
  image,
  altText,
  title,
  description,
  cardClass,
  imgClass,
  tileClass,
  descriptionClass,
}) => {
  return (
    <div className={`card ${cardClass}`}>
      <img src={image} alt={altText} className={`cardImg ${imgClass}`} />
      <h3 className={`cardTitle ${tileClass}`}>{title}</h3>
      <p className={`cardDescription ${descriptionClass}`}>{description}</p>
    </div>
  );
};

export default Card;
