import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight } from "../../assets/icon/icon";
import { useSlidesPerViewPick } from "../../common/util/useSliderPerView";
import CategoryBanner from "../../components/CategoryBadge/CategoryBadge";

const PickBox = ({ gameTabRef, myPickData, selectedPick, handleClickPick }) => {
  const navigate = useNavigate();
  const slidesPerViewPick = useSlidesPerViewPick(gameTabRef);

  return (
    <article className="pickBox" ref={gameTabRef}>
      {myPickData.length === 0 ? (
        <>
          <div className="noPick">현재 등록된 PICK이 없어요!</div>
          <div className="go Category" onClick={() => navigate("/category")}>
            <p>보드P!CK 추천 보드게임</p>
            <span>
              <ChevronRight />
            </span>
          </div>
        </>
      ) : (
        <>
          {selectedPick && (
            <>
              <Swiper slidesPerView={slidesPerViewPick} spaceBetween={8}>
                {myPickData.map((game, i) => (
                  <SwiperSlide key={i}>
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
              <div
                className="go game"
                onClick={() => navigate(`/category/${selectedPick.id}`)}
              >
                <span>
                  <CategoryBanner genre={selectedPick.boardGameCategories[0]} />
                  <span>{selectedPick.name}</span>
                </span>
                <span>
                  <ChevronRight />
                </span>
              </div>
            </>
          )}
        </>
      )}
    </article>
  );
};

export default PickBox;
