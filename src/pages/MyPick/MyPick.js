import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import ThumbNail from "../../components/ThumbNail/ThumbNail";
import CategoryBanner from "../../components/CategoryBadge/CategoryBadge";
import { ChevronRight } from "../../assets/icon/icon";
import Button from "../../components/Btn/Button/Button";
import { useSelector } from "react-redux";

const MyPick = () => {
  const myPick = useSelector((state) => state.myPick);
  const recentGame = useSelector((state) => state.recentGame);
  const navigate = useNavigate();
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

        <article className="pickBox">
          {myPick.length === 0 ? (
            <>
              <div className="noPick">현재 등록된 PICK이 없어요!</div>
              <div
                className="go Category"
                onClick={() => navigate("/category")}
              >
                <p>내 취향 보드게임 찾아보기</p>
                <span>
                  <ChevronRight />
                </span>
              </div>
            </>
          ) : (
            <>
              <Swiper>
                <SwiperSlide>
                  <div className="pickThumb on">
                    <div className="imgBox">
                      <img
                        src="https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__original/img/FpyxH41Y6_ROoePAilPNEhXnzO8=/0x0/filters:format(jpeg)/pic3490053.jpg"
                        alt="ThumbNail"
                      />
                    </div>
                  </div>
                  <div className="pickThumb">
                    <div className="imgBox">
                      <img
                        src="https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__original/img/FpyxH41Y6_ROoePAilPNEhXnzO8=/0x0/filters:format(jpeg)/pic3490053.jpg"
                        alt="ThumbNail"
                      />
                    </div>
                  </div>
                </SwiperSlide>
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
      <article className="recommendGame">
        <h1 className="contentTit">
          {myPick.length === 0 ? (
            <>
              <strong>'스위프'</strong>님을 위한 추천 보드게임
            </>
          ) : (
            <>
              <strong>#피라미드의 제물</strong>과 비슷한 보드게임
            </>
          )}
        </h1>
        <Swiper>
          <SwiperSlide>
            <ThumbNail type={"small"} />
          </SwiperSlide>
        </Swiper>
      </article>
      {recentGame.length !== 0 && (
        <article className="recentGame">
          <h1 className="contentTit">최근 본 보드게임</h1>
          <Swiper>
            <SwiperSlide>
              <ThumbNail type={"small"} />
            </SwiperSlide>
          </Swiper>
        </article>
      )}
    </div>
  );
};

export default MyPick;
