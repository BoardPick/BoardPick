import React from "react";
import { useNavigate } from "react-router-dom";
import { useSlidesPerView } from "../../common/util/useSliderPerView";
import GameSlide from "../../components/GameSlide/GameSlide";

const RecommendGame = ({
  gameTabRef,
  myPickData,
  logData,
  recsGameData,
  similarData,
  selectedPick,
}) => {
  const slidesPerView = useSlidesPerView(gameTabRef);
  return !myPickData && myPickData.length === 0 ? (
    <GameSlide
      classNameBox={"recommendGame"}
      classNameTit={"contentTit"}
      title={
        <span>
          <strong>'{logData ? logData.nickname : "사용자"}'</strong>
          님을 위한 추천 보드게임
        </span>
      }
      slidesPerView={slidesPerView}
      games={recsGameData}
    />
  ) : (
    <GameSlide
      classNameBox={"recommendGame"}
      classNameTit={"contentTit"}
      title={
        <span>
          <strong>#{selectedPick.name}</strong>과 비슷한 보드게임
        </span>
      }
      slidesPerView={slidesPerView}
      games={similarData}
    />
  );
};

export default RecommendGame;
