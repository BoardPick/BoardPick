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
import { getRecsGame } from "../../common/axios/api";
import { getCategorySelect } from "../../common/axios/categoryselect.js";
import Loading from "../../components/Search/SearchResult/Loading/Loading";

const MyPick = ({ LogData }) => {
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
  const [categoryData, setCategoryData] = useState([]);
  const [selectedPick, setSelectedPick] = useState({
    id: "",
    name: "",
    boardGameCategories: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recsGameData = await getRecsGame();
        setRecsGameData(recsGameData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(<Loading />);
      try {
        const categoryData = await getCategorySelect(
          selectedPick.boardGameCategories[0]
        );
        setCategoryData(categoryData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [selectedPick.boardGameCategories]);

  useEffect(() => {
    if (recsGameData.length > 0) {
      setSelectedPick({
        id: recsGameData[0].id,
        name: recsGameData[0].name,
        boardGameCategories: recsGameData[0].boardGameCategories,
      });
    }
  }, [recsGameData]); // myPick연결시 연결 데이터 수정

  if (loading) return <Loading />;

  const handleClickPick = (id, name, boardGameCategories) => {
    setMyPickOn(!myPickOn);
    setSelectedPick({
      id: id,
      name: name,
      boardGameCategories: boardGameCategories,
    });
  };

  return (
    <div className="myPick">
      <section className="myPickContainer">
        <header>
          <h1>MY PICK{myPickData && <span> ({myPickData.length}개)</span>}</h1>

          {myPick && myPick.length !== 0 && (
            <Button
              type={"txt"}
              text={"전체보기"}
              size={"s44"}
              onClick={() => navigate("/myPick/all")}
            />
          )}
        </header>
        <article className="pickBox" ref={gameTabRef}>
          {myPick && myPick.length === 0 ? (
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
              {selectedPick && (
                <>
                  <Swiper slidesPerView={slidesPerViewPick} spaceBetween={8}>
                    {recsGameData.map((game, i) => (
                      <SwiperSlide key={i}>
                        <div
                          className={`pickThumb ${
                            selectedPick.name === game.name ? "on" : ""
                          }`}
                          onClick={() =>
                            handleClickPick(
                              game.id,
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
                    onClick={() => navigate(`/category/ ${selectedPick.id}`)}
                  >
                    <p>
                      <CategoryBanner
                        genre={selectedPick.boardGameCategories[0]}
                      />
                      <span>{selectedPick.name}</span>
                    </p>
                    <span>
                      <ChevronRight />
                    </span>
                  </div>
                </>
              )}
            </>
          )}
        </article>
      </section>
      <article className="recommendGame" ref={gameTabRef}>
        {!selectedPick ? (
          <>
            <h1 className="contentTit">
              <strong>{LogData ? LogData.nickname : "사용자"}</strong>님을 위한
              추천 보드게임
            </h1>

            <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
              {recentGame.map((game, i) => (
                <SwiperSlide
                  key={i}
                  onClick={() => navigate(`/category/${game.id}`)}
                >
                  <ThumbNail
                    type="small"
                    img={game.imageUrl}
                    name={game.name}
                    info={game.description}
                    tags={game.tags}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          <>
            <h1 className="contentTit">
              <strong># {selectedPick.name}</strong>과 비슷한 보드게임
            </h1>
            <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
              {categoryData.map((game, i) => (
                <SwiperSlide
                  key={i}
                  onClick={() => navigate(`/category/${game.id}`)}
                >
                  <ThumbNail
                    type="small"
                    img={game.imageUrl}
                    name={game.name}
                    info={game.description}
                    tags={game.tags}
                  />
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
              <SwiperSlide
                key={i}
                onClick={() => navigate(`/category/${game.id}`)}
              >
                <ThumbNail
                  type="small"
                  img={game.imageUrl}
                  name={game.name}
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
