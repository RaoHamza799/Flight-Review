import React from "react";
import "./Rating.css";

const Rating = (props) => {
  const { score } = props;
  const filledStars = Math.round(score); // Number of filled stars based on the score
  const totalStars = 5; // Total number of stars

  return (
    <>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`star-wrapper ${
            index < filledStars ? "unfilled-star" : "filled-star"
          }`}
        ></span>
      ))}
    </>
  );
};

export default Rating;
