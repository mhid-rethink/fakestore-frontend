import { FaStar } from "react-icons/fa";

import "./styles.css";

const StarRating = ({ rate }) => {
  const percentage = rate * 20;
  return (
    <span className="starRating">
      <span className="backStarContainer">
        {[...Array(5)].map((star, index) => {
          return (
            <i key={index} className="backStar">
              <FaStar />
            </i>
          );
        })}
      </span>
      <span className="frontStarContainer" style={{ width: percentage }}>
        {[...Array(5)].map((star, index) => {
          return (
            <i key={index} className="frontStar">
              <FaStar />
            </i>
          );
        })}
      </span>
    </span>
  );
};

export default StarRating;
