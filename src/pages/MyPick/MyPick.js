import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Btn/Button/Button";
import Loading from "../../components/Search/SearchResult/Loading/Loading";
import {
  getMyPick,
  getSimilarBoardGame,
  getSuggestGame,
} from "../../common/axios/api";
import { getRecsGame } from "../../common/axios/api";
import GameSlide from "../../components/GameSlide/GameSlide";
import PickBox from "../../layouts/PickBox/PickBox";

const MyPick = ({ logData }) => {
  const gameTabRef = useRef({});
  const navigate = useNavigate();
  const [myPickOn, setMyPickOn] = useState(false);
  const [myPickData, setMyPickData] = useState();
  const [recsGameData, setRecsGameData] = useState([]);
  const [similarData, setSimilarData] = useState([]);
  const [suggestData, setSuggestData] = useState([]);
  const [selectedPick, setSelectedPick] = useState({
    id: "",
    imageUrl: "",
    name: "",
    boardGameCategories: "",
  });
  const toastPick = useSelector((state) => state.toast?.pick);
  const toastUnPick = useSelector((state) => state.toast?.unpick);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //추천 게임 api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const recsGameData = await getRecsGame(myPickData);
        setRecsGameData(recsGameData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // myPick api
  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (!token) {
    //   console.error("No token found");
    //   return;
    // }
    const fetchPickData = async () => {
      try {
        // const myPickData = await getMyPick(token);
        const myPickData = await getMyPick();
        setMyPickData(myPickData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPickData();
  }, [toastPick, toastUnPick]);

  //비슷한 게임 api
  useEffect(() => {
    const getSimilarData = async () => {
      try {
        const similarData = await getSimilarBoardGame(
          selectedPick.boardGameCategories,
          selectedPick.id
        );
        setSimilarData(similarData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getSimilarData();
  }, [selectedPick.boardGameCategories, selectedPick.id]);

  //제안 api
  useEffect(() => {
    const fetchSuggestData = async () => {
      setLoading(true);
      try {
        const suggestData = await getSuggestGame();
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
    if (!myPickData || myPickData.length === 0 || selectedPick.id) return;

    setSelectedPick({
      id: myPickData[0].id,
      imageUrl: myPickData[0].imageUrl,
      name: myPickData[0].name,
      boardGameCategories: myPickData[0].boardGameCategories,
    });
  }, [toastPick, toastUnPick, myPickData, selectedPick.id]);

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
          handleClickPick={handleClickPick}
        />
      </section>
      <article className="recommendGame" ref={gameTabRef}>
        {/* 사용자를 위한 추천 보드게임 */}
        {!myPickData || myPickData.length === 0 ? (
          <GameSlide
            classNameBox={"recsGame"}
            title={
              <>
                <strong>{logData ? logData.nickname : "'사용자'"}</strong>
                님을 위한 추천 보드게임
              </>
            }
            games={recsGameData}
          />
        ) : (
          <GameSlide
            title={
              <>
                <strong>{`#${selectedPick.name}`}</strong>과 비슷한 보드게임
              </>
            }
            games={similarData}
          />
        )}
      </article>
      <article className="suggestGame">
        {suggestData && suggestData.length !== 0 && (
          <GameSlide title={"이런 보드게임은 어떠세요?"} games={suggestData} />
        )}
      </article>
    </div>
  );
};

export default MyPick;
