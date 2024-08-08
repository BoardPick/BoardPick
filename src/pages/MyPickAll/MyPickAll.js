import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMyPick } from "../../common/axios/api";
import AppBar from "../../components/AppBar/AppBar";
import ThumbNail from "../../components/ThumbNail/ThumbNail";
import Loading from "../../components/Search/SearchResult/Loading/Loading";
import { useMyPick } from "../../common/util/useAxios";

const MyPickAll = () => {
  const navigate = useNavigate();
  const myPick = useSelector((state) => state.myPick);

  const {
    data: myPickData,
    setData: setMyPickData,
    loading: loadingPick,
    error: errorPick,
  } = useMyPick();

  if (loadingPick) return <Loading />;

  return (
    <div className="myPickAll">
      <AppBar title={"MY PICK"} />
      <article className="pickContainer">
        <p className="myPickCount">
          {myPick && (
            <div>
              <span>{myPickData.length}개</span>의 보드게임
            </div>
          )}
        </p>
        {myPickData && myPickData.length !== 0 && (
          <div className="picks">
            {myPickData.map((game, index) => (
              <ThumbNail
                id={game.id}
                img={game.imageUrl}
                name={game.name}
                info={game.description}
                tags={game.tags}
                key={index}
                onClick={() => navigate(`/category/${game.id}`)}
                type="big"
                picked={game.picked}
              />
            ))}
          </div>
        )}
      </article>
    </div>
  );
};

export default MyPickAll;
