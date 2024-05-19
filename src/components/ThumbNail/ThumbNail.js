import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bookmark } from "../../assets/icon/icon";
import Tag from "../Tag/Tag";
import { tagArr } from "../../assets/data/test";

const ThumbNail = ({ img, name, info, type, id }) => {
  const dispatch = useDispatch();
  const picks = useSelector((state) => state.picks);

  const handlePick = () => {
    dispatch({ type: "TOGGLE_PICK", payload: { id } });
  };

  return (
    <div className={`ThumbNail ${type}`}>
      <article className="thumbImg">
        <img src={img} alt="썸네일이미지" />
        <button
          className={`barBtn bookmark ${picks[id] && "pickOn"}`}
          onClick={handlePick}
        >
          <Bookmark />
        </button>
      </article>
      <article className="thumbName">
        <h1>{name}</h1>
        <p>{info}</p>
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
