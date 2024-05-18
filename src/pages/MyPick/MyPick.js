import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import ThumbNail from "../../components/ThumbNail/ThumbNail";
import CategoryBanner from "../../components/CategoryBadge/CategoryBadge";
import { ChevronRight } from "../../assets/icon/icon";
import Button from "../../components/Btn/Button/Button";

import { useSlidesPerView } from "../../common/util/useSliderPerView";

const MyPick = () => {
  const gameTabRef = useRef(null);
  const myPick = useSelector((state) => state.myPick);
  const recentGame = useSelector((state) => state.recentGame);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [myPickOn, setMyPickOn] = useState(false);
  const navigate = useNavigate();
  const slidesPerView = useSlidesPerView(gameTabRef);
  return (
    <div className="myPick">
      <section className="myPickContainer">
        <header>
          <h1>
            MY PICK<span>({myPick.length}개)</span>
          </h1>
          {myPick.length !== 0 && (
            <Button
              type={"txt"}
              text={"전체보기"}
              size={"s44"}
              onClick={() => navigate("/myPick/all")}
            />
          )}
        </header>

        <article className="pickBox" ref={gameTabRef}>
          {myPick.length === 0 || !isLoggedIn ? (
            <>
              <div className="noPick">현재 등록된 PICK이 없어요!</div>
              <div
                className="go Category"
                onClick={() => navigate("/category")}
              >
                <p>보드P!CK 추천 보드게임</p>
                <span>
                  <ChevronRight />
                </span>
              </div>
            </>
          ) : (
            <>
              <Swiper slidesPerView={4.5} spaceBetween={8}>
                {[...Array(10)].map((_, i) => (
                  <SwiperSlide>
                    <div
                      className={`pickThumb ${myPickOn ? "on" : ""}`}
                      onClick={() => setMyPickOn(!myPickOn)}
                    >
                      <div className="imgBox">
                        <img
                          src="https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__original/img/FpyxH41Y6_ROoePAilPNEhXnzO8=/0x0/filters:format(jpeg)/pic3490053.jpg"
                          alt="ThumbNail"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="go game" onClick={() => navigate("/category/:0")}>
                <p>
                  <CategoryBanner genre={"협력게임"} />
                  <span>피라미드의 제물</span>
                </p>
                <span>
                  <ChevronRight />
                </span>
              </div>
            </>
          )}
        </article>
      </section>
      <article className="recommendGame" ref={gameTabRef}>
        <h1 className="contentTit">
          {myPick.length === 0 || !isLoggedIn ? (
            <>
              <strong>'스위프'</strong>님을 위한 추천 보드게임
            </>
          ) : (
            <>
              <strong>#피라미드의 제물</strong>과 비슷한 보드게임
            </>
          )}
        </h1>
        <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
          {[...Array(10)].map((_, i) => (
            <SwiperSlide key={i}>
              <ThumbNail type="small" />
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
      {recentGame.length !== 0 && (
        <article className="recentGame">
          <h1 className="contentTit">최근 본 보드게임</h1>
          <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
            {[...Array(10)].map((_, i) => (
              <SwiperSlide key={i}>
                <ThumbNail type="small" />
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      )}
    </div>
  );
};

export default MyPick;
