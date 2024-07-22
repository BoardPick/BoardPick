import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Btn/Button/Button";
import PickBox from "../../layouts/PickBox/PickBox";

import {
  getRecsGame,
  getMyPick,
  getSimilarBoardGame,
  getSuggestGame,
} from "../../common/axios/api";
import { useSlidesPerView } from "../../common/util/useSliderPerView";

import Loading from "../../components/Search/SearchResult/Loading/Loading";
import RecommendGame from "../../layouts/RecommendGame/RecommendGame";
import GameSlide from "../../components/GameSlide/GameSlide";

const MyPick = ({ logData }) => {
  const gameTabRef = useRef({});
  const slidesPerView = useSlidesPerView(gameTabRef);
  const [myPickOn, setMyPickOn] = useState(false);
  const navigate = useNavigate();

  const [myPickData, setMyPickData] = useState([]);
  const [recsGameData, setRecsGameData] = useState([]);
  const [similarData, setSimilarData] = useState([]);
  const [suggestData, setSuggestData] = useState([]);
  const [selectedPick, setSelectedPick] = useState({
    id: "",
    imageUrl: "",
    name: "",
    boardGameCategories: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //추천, 제안
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recsGameData, suggestData] = await Promise.all([
          getRecsGame(),
          getSuggestGame(),
        ]);
        setRecsGameData(recsGameData);
        setSuggestData(suggestData);
      } catch (err) {
        setError(err.message);
      } finally {
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
        const myPickData = await getMyPick(token);
        setMyPickData(myPickData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPickData();
  }, [myPickData]);

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

  //비슷한 게임 api
  useEffect(() => {
    const getSimilarData = async () => {
      try {
        const similarData = await getSimilarBoardGame(selectedPick.id);
        setSimilarData(similarData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getSimilarData();
  }, [selectedPick.id]);

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
          onClick={handleClickPick}
        />
      </section>
      <RecommendGame
        gameTabRef={gameTabRef}
        myPickData={myPickData}
        logData={logData}
        recsGameData={recsGameData}
        similarData={similarData}
        selectedPick={selectedPick}
      />
      <article className="suggestGame" ref={gameTabRef}>
        <GameSlide
          className={"contentTit"}
          title={"이런 보드게임은 어떠세요?"}
          slidesPerView={slidesPerView}
          games={suggestData}
          onClick={(id) => navigate(`/category/${id}`)}
        />
      </article>
    </div>
  );
};

export default MyPick;
