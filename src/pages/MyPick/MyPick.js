import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import ThumbNail from "../../components/ThumbNail/ThumbNail";
import CategoryBanner from "../../components/CategoryBadge/CategoryBadge";
import { ChevronRight } from "../../assets/icon/icon";
import Button from "../../components/Btn/Button/Button";

import {
  useSlidesPerView,
  useSlidesPerViewPick,
} from "../../common/util/useSliderPerView";
import { getMyPick, getRecsGame } from "../../common/axios/api";

const MyPick = () => {
  const gameTabRef = useRef({});
  const myPick = useSelector((state) => state.myPick);
  const recentGame = useSelector((state) => state.recentGame);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [myPickOn, setMyPickOn] = useState(false);
  const navigate = useNavigate();
  const slidesPerView = useSlidesPerView(gameTabRef);
  const slidesPerViewPick = useSlidesPerViewPick(gameTabRef);

  const [myPickData, setMyPickData] = useState([]);
  const [recsGameData, setRecsGameData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const myPickData = await getMyPick();
        const recsGameData = await getRecsGame();
        // setMyPickData(myPickData);
        setRecsGameData(recsGameData);
        setLoading(false);
        console.log(myPickData, recsGameData);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="myPick">
      <section className="myPickContainer">
        <header>
          <h1>
            MY PICK<span>(0개)</span>
          </h1>
          {myPick.length !== 0 ||
            (!isLoggedIn && (
              <Button
                type={"txt"}
                text={"전체보기"}
                size={"s44"}
                onClick={() => navigate("/myPick/all")}
              />
            ))}
        </header>

        <article className="pickBox" ref={gameTabRef}>
          {!isLoggedIn ? (
            <>
              <div className="noPick">
                나에게 맞는 보드게임을 PICK 해보세요!
              </div>
              <div
                className="go Category"
                onClick={() => navigate("/OnBoarding")}
              >
                <p>로그인 하러가기</p>
                <span>
                  <ChevronRight />
                </span>
              </div>
            </>
          ) : myPick.length !== 0 ? (
            <>
              <Swiper slidesPerView={slidesPerViewPick} spaceBetween={8}>
                {myPick.map((_, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className={`pickThumb ${myPickOn ? "on" : ""}`}
                      onClick={() => setMyPickOn(!myPickOn)}
                    >
                      <div className="imgBox">
                        {/* <img src={data.imageUrl} alt="ThumbNail" /> */}
                        {myPickData}
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
          ) : (
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
          )}
        </article>
      </section>
      <article className="recommendGame" ref={gameTabRef}>
        {myPick.length === 0 || !isLoggedIn ? (
          <>
            <h1 className="contentTit">
              <strong>'스위프'</strong>님을 위한 추천 보드게임
            </h1>
            <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
              {recsGameData.map((game, i) => (
                <SwiperSlide key={i}>
                  <ThumbNail
                    type="small"
                    name={game.name}
                    img={game.imageUrl}
                    info={game.description}
                    tags={game.tags}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          <>
            <strong>#피라미드의 제물</strong>과 비슷한 보드게임
            <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
              {[...Array(10)].map((_, i) => (
                <SwiperSlide key={i}>
                  <ThumbNail type="small" />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </article>
      {recentGame.length !== 0 && (
        <article className="recentGame">
          <h1 className="contentTit">최근 본 보드게임</h1>
          <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
            {recsGameData.map((game, i) => (
              <SwiperSlide key={i}>
                <ThumbNail
                  type="small"
                  name={game.name}
                  img={game.imageUrl}
                  info={game.description}
                  tags={game.tags}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      )}
    </div>
  );
};

export default MyPick;
