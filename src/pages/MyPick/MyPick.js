import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getMyPick } from "../../common/axios/api";
import {
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
  const [myPickData, setMyPickData] = useState([]);
  const [selectedPick, setSelectedPick] = useState({
    id: "",
    imageUrl: "",
    name: "",
    boardGameCategories: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //추천, 제안
  const {
    data: suggestData,
    loading: sLoading,
    error: sError,
  } = useSuggestGame();
  const {
    data: recsGameData,
    loading: rLoading,
    error: rError,
  } = useRecsGame();
  //비슷한 게임 api
  const {
    data: similarData,
    loading: similarLoading,
    error: similarError,
  } = useSimilarData(selectedPick.id);

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
      <RecommendGame
        gameTabRef={gameTabRef}
        myPickData={myPickData}
        logData={logData}
        similarData={similarData}
        selectedPick={selectedPick}
        recsGameData={recsGameData}
      />

      <GameSlide
        classNameBox={"suggestGame"}
        classNameTit={"contentTit"}
        title={"이런 보드게임은 어떠세요?"}
        games={suggestData}
      />
    </div>
  );
};

export default MyPick;
