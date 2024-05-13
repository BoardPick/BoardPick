import React from "react";
import ReviewContent from "../../../../components/ReviewContent/ReviewContent";

const Popular = () => {
  return (
    <div>
      <ReviewContent
        nickName={"나임"}
        date={"2024-05-05"}
        review={"재밋다"}
        bottomContent={"game"}
        content={
          <span>
            <img src="https://via.placeholder.com/32x32" alt="샘플이미지" />
          </span>
        }
      />
    </div>
  );
};

export default Popular;
