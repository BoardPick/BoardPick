import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight } from "../../assets/icon/icon";
import { useSlidesPerViewPick } from "../../common/util/useSliderPerView";
import CategoryBanner from "../../components/CategoryBadge/CategoryBadge";

const PickBox = ({ gameTabRef, myPickData, selectedPick, handleClickPick }) => {
  const navigate = useNavigate();
  const slidesPerViewPick = useSlidesPerViewPick(gameTabRef);

  const handleNavigateCategory = () => navigate("/category");
  const handleNavigateGame = () => navigate(`/category/${selectedPick.id}`);

  return (
    <article className="pickBox" ref={gameTabRef}>
      {!myPickData || myPickData.length === 0 ? (
        <div className="noPick">현재 등록된 PICK이 없어요!</div>
      ) : (
        <>
          {selectedPick && (
            <Swiper slidesPerView={slidesPerViewPick} spaceBetween={8}>
              {myPickData.map((game) => (
                <SwiperSlide key={game.id}>
                  <div
                    className={`pickThumb ${
                      selectedPick.name === game.name ? "on" : ""
                    }`}
                    onClick={() =>
                      handleClickPick(
                        game.id,
                        game.imageUrl,
                        game.name,
                        game.boardGameCategories
                      )
                    }
                  >
                    <div className="imgBox">
                      <img src={game.imageUrl} alt="ThumbNail" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </>
      )}
      <div
        className="go"
        onClick={!myPickData ? handleNavigateCategory : handleNavigateGame}
      >
        <div className="goCategory">
          {!myPickData || myPickData.length === 0 ? (
            <p>내 취향 보드게임 찾아보기</p>
          ) : (
            <span className="categoryBox">
              <CategoryBanner
                genre={selectedPick.boardGameCategories[0]}
                myPick
              />
              <span>{selectedPick.name}</span>
            </span>
          )}
          <ChevronRight />
        </div>
      </div>
    </article>
  );
};

export default PickBox;
