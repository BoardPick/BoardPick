import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bookmark } from "../../assets/icon/icon";
import Tag from "../Tag/Tag";
import { useNavigate } from "react-router-dom";
import { togglePick } from "../../common/axios/api";
import { usePickId } from "../../common/util/useAxios";

const ThumbNail = ({ img, name, info, type, id, tags }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pickId, loading, error } = usePickId();
  const isPicked = pickId && pickId.includes(id);

  const handlerPick = (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }
    togglePick(id, token)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
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
          className={`barBtn bookmark ${isPicked ? "pickOn" : ""}
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
        <div className="hashTagBox tagBig">
          {tags &&
            tags
              .slice(0, 2)
              .map((t, i) => <Tag key={i} tag={t} thumb={"thumb"} />)}
          <div className="hashTag ellipis"></div>
        </div>
        <div className="hashTagBox tagSmall">
          {tags &&
            tags
              .slice(0, 1)
              .map((t, i) => <Tag key={i} tag={t} thumb={"thumb"} />)}
          <div className="hashTag ellipis"></div>
        </div>
      </article>
    </div>
  );
};

export default ThumbNail;
