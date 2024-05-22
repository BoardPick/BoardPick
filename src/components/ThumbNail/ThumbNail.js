import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bookmark } from "../../assets/icon/icon";
import Tag from "../Tag/Tag";
import { useNavigate } from "react-router-dom";
import { togglePick } from "../../common/axios/api";

const ThumbNail = ({ img, name, info, type, id, tags, picked }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const picked = useSelector((state) => state.picked);
  // const setPicked = () => {
  //   dispatch({ type: "SET_PICKED", payload: !picked });
  // };
  const [pick, setPick] = useState(false);
  const [pickedItems, setPickedItems] = useState([]);

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
    {
      picked ? setPick(true) : setPick(false);
    }
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
          className={`barBtn bookmark ${pick && "pickOn"}
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
          {tags && tags.map((t, i) => <Tag key={i} tag={t} thumb={"thumb"} />)}
        </div>
      </article>
    </div>
  );
};

export default ThumbNail;
