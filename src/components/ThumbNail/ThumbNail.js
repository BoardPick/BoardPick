import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bookmark } from "../../assets/icon/icon";
import Tag from "../Tag/Tag";
import { useNavigate } from "react-router-dom";
import { togglePick } from "../../common/axios/api";

const ThumbNail = ({ img, name, info, type, id, tags, picked }) => {
  const navigate = useNavigate();

  const handlerPick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }
    togglePick(id, token)
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
          className={`barBtn bookmark ${picked ? "pickOn" : ""}
          `}
          onClick={(e) => {
            e.stopPropagation();
            handlerPick(id);
          }}
        >
          <Bookmark />
        </button>
      </article>
      <article className="thumbName">
        <h1>{name}</h1>
        <p>{info}</p>
        <div className="hashTagBox">
          {tags &&
            tags
              .slice(0, 2)
              .map((t, i) => <Tag key={i} tag={t} thumb={"thumb"} />)}
          <div className="hashTag ellipis"></div>
        </div>
      </article>
    </div>
  );
};

export default ThumbNail;
