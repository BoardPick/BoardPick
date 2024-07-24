import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useBoardGameData, usePickId } from "../../common/util/useAxios.js";

import AppBar from "../../components/AppBar/AppBar.js";
import CategoryBadge from "../../components/CategoryBadge/CategoryBadge.js";
import Tag from "../../components/Tag/Tag";
import ToastPopUp from "../../components/ToastPopUp/ToastPopUp.js";
import BoardGameElement from "../../layouts/BoardGameElement/BoardGameElement.js";
import RuleTab from "../../layouts/RuleTab/RuleTab.js";
import BottomPopUp from "../../components/BottomPopUp/BottomPopUp.js";
import Loading from "../../components/Search/SearchResult/Loading/Loading.js";

const CategoryDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const toastPick = useSelector((state) => state.toast?.pick);
  const toastUnPick = useSelector((state) => state.toast?.unpick);
  const isCopied = useSelector((state) => state.isCopied);

  const {
    gameData,
    setGameData,
    loading: gameLoading,
    error: gameError,
  } = useBoardGameData(id);
  const { pickId, loading: pickIdLoading, error: pickIdError } = usePickId();
  const isPicked = pickId.includes(id);

  useEffect(() => {
    setGameData((prevData) => ({
      ...prevData,
      likes: isPicked ? prevData.likes + 1 : prevData.likes - 1,
    }));
  }, [isPicked]);

  if (gameLoading || pickIdLoading) return <Loading />;
  if (gameError || pickIdError) return console.log(gameError || pickIdError);

  return (
    <div className="categoryDetail">
      <AppBar mark type={"gradient"} id={gameData.id} />
      <div className="backImg">
        <img src={gameData.imageUrl} alt="backgroundImg" />
      </div>
      <section className="boardGameInfo">
        <article className="detailThumbNail">
          <img src={gameData.thumbnailUrl} alt="ThumbNail" />
        </article>
        <article className="boardGameSum">
          <div className="banners">
            {gameData.boardGameCategories.map((cate, i) => (
              <CategoryBadge key={i} genre={cate} />
            ))}
          </div>
          <h1 className="boardGameName">{gameData.name}</h1>
          <h2 className="boardGameOne">{gameData.description}</h2>
          {gameData.likes > 0 && (
            <div className="pickBanner">
              이 보드게임을{" "}
              <strong className="pickCount">{gameData.likes}</strong>
              명이 PICK 했어요!
            </div>
          )}
          <div className="hashTagBox">
            {gameData.tags.map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
          </div>
        </article>
        <BoardGameElement data={gameData} />
      </section>
      <RuleTab />

      {isPicked ? (
        <div className={`toast ${toastPick ? "pop" : ""}`}>
          <ToastPopUp ToastContent={"보드게임을 PICK 했어요"} />
        </div>
      ) : (
        <div className={`toast ${toastUnPick ? "pop" : ""}`}>
          <ToastPopUp ToastContent={"보드게임 PICK을 취소했어요"} />
        </div>
      )}

      {isCopied && <BottomPopUp />}
    </div>
  );
};

export default CategoryDetail;
