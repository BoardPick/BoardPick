import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bookmark } from "../../assets/icon/icon";
import Tag from "../Tag/Tag";
import { useNavigate } from "react-router-dom";
import { togglePick } from "../../common/axios/api";
import { usePickId } from "../../common/hooks/useAxios";
import { getPickStatus } from "../../common/utils/getPickStatus";
import { handlerPick } from "../../common/utils/handlerPick";

const ThumbNail = ({ img, name, info, type, id, tags }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { pickId, loading, error } = usePickId();
  const { isPicked } = getPickStatus(id);
  const toastPick = useSelector((state) => state.toast?.pick);
  const toastUnPick = useSelector((state) => state.toast?.unpick);
  const setToastPick = (value) => {
    dispatch({ type: "SET_TOAST_PICK", payload: value });
  };
  const setToastUnpick = (value) => {
    dispatch({ type: "SET_TOAST_UNPICK", payload: value });
  };

  const handlerMyPick = (id) => {
    handlerPick(id, setToastPick, setToastUnpick);
    window.location.reload();
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
          className={`barBtn bookmark ${isPicked ? "pickOn" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            handlerMyPick(id);
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
