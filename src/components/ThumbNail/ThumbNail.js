import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bookmark } from "../../assets/icon/icon";
import Tag from "../Tag/Tag";
import { tagArr } from "../../assets/data/test";

const ThumbNail = ({ type, id }) => {
  const dispatch = useDispatch();
  const picks = useSelector((state) => state.picks);

  const handlePick = () => {
    dispatch({ type: "TOGGLE_PICK", payload: { id } });
  };
  console.log(id);
  return (
    <div className={`ThumbNail ${type}`}>
      <article className="thumImg">
        <img src="http://placehold.it/164X200" alt="" />
        <button
          className={`barBtn bookmark ${picks[id] && "pickOn"}`}
          onClick={handlePick}
        >
          <Bookmark />
        </button>
      </article>
      <article className="thumName">
        <h1>보드게임 타이틀</h1>
        <p>보드게임 설명 텍스트 영역입니다. 최대 두줄 노출sdfsdf</p>
        <div className="hashTagBox">
          {tagArr.slice(0, 2).map((tag, i) => (
            <Tag key={i} tag={tag} thumb={"thumb"} />
          ))}
        </div>
      </article>
    </div>
  );
};

export default ThumbNail;
