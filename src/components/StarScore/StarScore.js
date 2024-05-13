import React, { useState } from "react";
import { useSelector } from "react-redux";
import Rating from "react-rating";
import { FillStar, Star } from "../../assets/icon/icon";

const StarScore = ({ ver }) => {
  const verType = ["black", "round"].includes(ver) ? ver : "";
  const [rate, setRate] = useState(3);
  const reviewCount = useSelector((state) => state.reviewCount);

  return (
    <div className={`avgStar ${verType}`}>
      <span className="star">
        <Rating
          initialRating={rate}
          emptySymbol={<Star style={{ fill: "red" }} />}
          fullSymbol={<FillStar />}
          readonly
        />
      </span>
      <span className={`avg ${verType}`}>{rate}.0</span>
      <span className={`reviewCount ${verType}`}>({reviewCount})</span>
    </div>
  );
};

export default StarScore;
