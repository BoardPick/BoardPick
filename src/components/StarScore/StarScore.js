import React from "react";
import { useSelector } from "react-redux";

import { Star } from "../../assets/icon/icon.js";

const StarScore = () => {
  const reviewCount = useSelector((state) => state.reviewCount);

  return (
    <div className="avgStar">
      <span className="star">
        {[...Array(parseInt(5))].map(() => (
          <Star />
        ))}
      </span>
      <span className="avg">0.0</span>
      <span className="reviewCount">({reviewCount})</span>
    </div>
  );
};

export default StarScore;
