import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Star } from "../../assets/icon/icon.js";

const StarScore = ({ ver }) => {
  const verType = ["black", "round"].includes(ver) ? ver : "";
  const [rate, setRate] = useState("3");
  const reviewCount = useSelector((state) => state.reviewCount);

  return (
    <div className="avgStar">
      <span className="star">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} />
        ))}
      </span>
      <span className={`avg ${verType}`}>{rate}.0</span>
      <span className={`reviewCount ${verType}`}>({reviewCount})</span>
    </div>
  );
};

export default StarScore;
