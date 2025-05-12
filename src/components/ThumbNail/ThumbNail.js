import axios from "axios";
import { usePickId } from "../../common/hooks/useAxios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Bookmark } from "../../assets/icon/icon";
import Tag from "../Tag/Tag";
import { getPickStatus } from "../../common/utils/getPickStatus";
import { handlerPick } from "../../common/utils/handlerPick";

const ThumbNail = ({ img, name, info, type, id, tags }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { pickId, loading, error } = usePickId();
  const [isPicked, setIsPicked] = useState(getPickStatus(id).isPicked);
  const handlerMyPick = (id) => {
    handlerPick(id, dispatch, setIsPicked);
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
