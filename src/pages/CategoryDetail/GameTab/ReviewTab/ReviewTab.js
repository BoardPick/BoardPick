import React from "react";
import StarScore from "../../../../components/StarScore/StarScore";
import ReviewTop from "../../../../components/ReviewTop/ReviewTop";

const ReviewTab = () => {
  return (
    <div className="reviewTab">
      <StarScore />
      <ReviewTop title={"좋았어요"} />
      <ReviewTop title={"아쉬워요"} />
    </div>
  );
};

export default ReviewTab;
