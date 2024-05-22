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
import {
  getRecsGame,
  getMyPick,
  getSimilarBoardGame,
} from "../../common/axios/api";
import { getCategorySelect } from "../../common/axios/categoryselect.js";
import Loading from "../../components/Search/SearchResult/Loading/Loading";

const MyPick = ({ logData }) => {
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
  const [similarData, setSimilarData] = useState([]);
  const [selectedPick, setSelectedPick] = useState({
    id: "",
    name: "",
    boardGameCategories: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //추천 게임 api
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

  //myPick api
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }
    const fetchPickData = async () => {
      try {
        const myPickData = await getMyPick();
        setMyPickData(myPickData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPickData();
  }, []);

  //비슷한 게임 api
  useEffect(() => {
    const fetchSimilarData = async () => {
      try {
        const similarData = await getMyPick();
        setSimilarData(similarData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchSimilarData();
  }, [myPickData]);

  //카테고리 api
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

  //마이픽 초기값 설정
  useEffect(() => {
    if (myPickData.length > 0) {
      setSelectedPick({
        id: myPickData[0].id,
        imageUrl: myPickData[0].imageUrl,
        name: myPickData[0].name,
        boardGameCategories: myPickData[0].boardGameCategories,
      });
    }
  }, [myPickData]);

  if (loading) return <Loading />;

  //마이픽 선택
  const handleClickPick = (id, imageUrl, name, boardGameCategories) => {
    setMyPickOn(!myPickOn);
    setSelectedPick({
      id: id,
      imageUrl: imageUrl,
      name: name,
      boardGameCategories: boardGameCategories,
    });
  };

  console.log(myPickData);

  return (
    <div className="myPick">
      <section className="myPickContainer">
        <header>
          <h1>
            MY PICK
            {myPickData && myPickData.length !== 0 && (
              <span> ({myPickData.length}개)</span>
            )}
          </h1>

          {myPickData && myPickData.length !== 0 && (
            <Button
              type={"txt"}
              text={"전체보기"}
              size={"s44"}
              onClick={() => navigate("/myPick/all")}
            />
          )}
        </header>
        <article className="pickBox" ref={gameTabRef}>
          {myPickData && myPickData.length === 0 ? (
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
                    {myPickData.map((game, i) => (
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
        {myPickData && myPickData !== 0 ? (
          <>
            <h1 className="contentTit">
              <strong>
                {" "}
                {logData && logData !== 0 ? logData.nickname : "사용자"}
              </strong>
              님을 위한 추천 보드게임
            </h1>

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
          </>
        ) : (
          <>
            <h1 className="contentTit">
              <strong># {selectedPick.name}</strong>과 비슷한 보드게임
            </h1>
            <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
              {similarData.map((game, i) => (
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
          <h1 className="contentTit">이런 보드게임은 어떠세요?</h1>
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
