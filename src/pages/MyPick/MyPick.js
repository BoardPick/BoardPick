import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getMyPick } from "../../common/axios/api";
import {
  useMyPick,
  useSuggestGame,
  useRecsGame,
  useSimilarData,
} from "../../common/util/useAxios";

import Loading from "../../components/Search/SearchResult/Loading/Loading";
import RecommendGame from "../../layouts/RecommendGame/RecommendGame";
import GameSlide from "../../components/GameSlide/GameSlide";
import Button from "../../components/Btn/Button/Button";
import PickBox from "../../layouts/PickBox/PickBox";

const MyPick = ({ logData }) => {
  const gameTabRef = useRef({});
  const navigate = useNavigate();
  const [myPickOn, setMyPickOn] = useState(false);
  // const [myPickData, setMyPickData] = useState([]);
  const [selectedPick, setSelectedPick] = useState({
    id: "",
    imageUrl: "",
    name: "",
    boardGameCategories: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  //추천 게임 api
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const recsGameData = await getRecsGame();
        const recsGameData = getSimilarBoardGame();
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
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     console.error("No token found");
  //     return;
  //   }
  //   const fetchPickData = async () => {
  //     try {
  //       const myPickData = await getMyPick(token);
  //       setMyPickData(myPickData);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchPickData();
  // }, [myPickData]);


  //비슷한 게임 api
  useEffect(() => {
    const getSimilarData = async () => {
      try {
        // const similarData = await getSimilarBoardGame(selectedPick.id);
        const similarData = getSimilarBoardGame(selectedPick.id);
        setSimilarData(similarData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getSimilarData();
  }, [selectedPick.id]);

  //제안 api
  useEffect(() => {
    const fetchSuggestData = async () => {
      setLoading(true);
      try {
        // const suggestData = await getSuggestGame();
        const suggestData = getSimilarBoardGame();
        setSuggestData(suggestData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSuggestData();
  }, []);


  //마이픽 초기값 설정
  useEffect(() => {
    if (myPickData.length === 0 || selectedPick.id) return;
    setSelectedPick({
      id: myPickData[0].id,
      imageUrl: myPickData[0].imageUrl,
      name: myPickData[0].name,
      boardGameCategories: myPickData[0].boardGameCategories,
    });
  }, [myPickData]);

  if (loading || sLoading || similarLoading) return <Loading />;
  if (error || sError) return console.log(error);

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
        <PickBox
          gameTabRef={gameTabRef}
          myPickData={myPickData}
          selectedPick={selectedPick}
          handleClickPick={handleClickPick}
        />
      </section>

      <article className="recommendGame" ref={gameTabRef}>
        {!myPickData && myPickData.length === 0 ? (
          <>
            <h1 className="contentTit">
              <strong>'{logData ? logData.nickname : "사용자"}'</strong>
              님을 위한 추천 보드게임
            </h1>

            <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
              {recsGameData?.map((game, i) => (
                <SwiperSlide
                  key={i}
                  onClick={() => navigate(`/category/${game.id}`)}
                >
                  <ThumbNail
                    type="small"
                    id={game.id}
                    img={game.imageUrl}
                    name={game.name}
                    info={game.description}
                    tags={game.tags}
                    picked={game.picked}
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
              {similarData?.map((game, i) => (
                <SwiperSlide
                  key={i}
                  onClick={() => navigate(`/category/${game.id}`)}
                >
                  <ThumbNail
                    type="small"
                    id={game.id}
                    img={game.imageUrl}
                    name={game.name}
                    info={game.description}
                    tags={game.tags}
                    picked={game.picked}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </article>
      {suggestData && suggestData.length !== 0 && (
        <article className="recentGame">
          <h1 className="contentTit">이런 보드게임은 어떠세요?</h1>
          <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
            {suggestData?.map((game, i) => (
              <SwiperSlide
                key={i}
                onClick={() => navigate(`/category/${game.id}`)}
              >
                <ThumbNail
                  type="small"
                  id={game.id}
                  img={game.imageUrl}
                  name={game.name}
                  info={game.description}
                  tags={game.tags}
                  picked={game.picked}
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
