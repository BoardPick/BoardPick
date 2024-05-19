import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bookmark } from "../../assets/icon/icon";
import Tag from "../Tag/Tag";
import { useNavigate } from "react-router-dom";
import { togglePick } from "../../common/axios/api";

const ThumbNail = ({ img, name, info, type, id, tags }) => {
  const dispatch = useDispatch();
  const picks = useSelector((state) => state.picks);
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlerPick = () => {
    togglePick(id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
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
          onClick={(e) => {
            e.stopPropagation();
            handlerPick();
          }}
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
