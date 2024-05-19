import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bookmark } from "../../assets/icon/icon";
import Tag from "../Tag/Tag";
import { useNavigate } from "react-router-dom";
// import { tagArr } from "../../assets/data/test";

const ThumbNail = ({ img, name, info, type, id, tags }) => {
  const dispatch = useDispatch();
  const picks = useSelector((state) => state.picks);
  const navigate = useNavigate();
  const handlePick = () => {
    dispatch({ type: "TOGGLE_PICK", payload: { id } });
  };

  return (
    <div
      className={`ThumbNail ${type}`}
      onClick={() => {
        navigate(`/Category/${id}`);
      }}
    >
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
          {tags && tags.map((t, i) => <Tag key={i} tag={t} thumb={"thumb"} />)}
        </div>
      </article>
    </div>
  );
};

export default ThumbNail;
