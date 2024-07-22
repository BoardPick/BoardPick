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
  const navigate = useNavigate();
  const slidesPerView = useSlidesPerView(gameTabRef);
  return (
    <article className="recommendGame" ref={gameTabRef}>
      {!myPickData && myPickData.length === 0 ? (
        <GameSlide
          className={"contentTit"}
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
          className={"contentTit"}
          title={
            <span>
              <strong>#{selectedPick.name}</strong>과 비슷한 보드게임
            </span>
          }
          slidesPerView={slidesPerView}
          games={similarData}
        />
      )}
    </article>
  );
};

export default RecommendGame;
