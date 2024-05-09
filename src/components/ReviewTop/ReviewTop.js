import React from "react";
import { useSelector } from "react-redux";

const ReviewTop = ({ title }) => {
  const reviewCount = useSelector((state) => state.reviewCount);
  return (
    <div className="reviewTop">
      <div className="reviewTop_Tit">
        <h1>이런 점이 {title} TOP 3</h1>{" "}
        <span className="reviewCount">({reviewCount}명 참여)</span>
      </div>
      <ul className="topBox">
        <li className="topN">
          <span>초보자도 즐길 수 있어요</span>
          <span>24</span>
        </li>
        <li className="topN">
          <span>초보자도 즐길 수 있어요</span>
          <span>24</span>
        </li>
        <li className="topN">
          <span>초보자도 즐길 수 있어요</span>
          <span>24</span>
        </li>
      </ul>
    </div>
  );
};

export default ReviewTop;
