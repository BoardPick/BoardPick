import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ChevronLeft, Link, Bookmark } from "../../assets/icon/icon";
import { togglePick } from "../../common/axios/api";

const AppBar = ({ title, mark, type }) => {
  const BarType = ["gradient"].includes(type) ? type : "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pick = useSelector((state) => state.pick);
  const setPick = () => {
    dispatch({ type: "SET_PICK", payload: !pick });
  };

  const isCopied = useSelector((state) => state.isCopied);
  const setIsCopied = () => {
    dispatch({ type: "SET_ISCOPY", payload: !isCopied });
  };

  const handleTogglePick = async () => {
    try {
      const result = await togglePick();
      console.log("PickOn:", result);
    } catch (error) {
      console.error("PickOff:", error);
    }
  };

  return (
    <div className={`AppBar ${BarType}`}>
      <span className="back" onClick={() => navigate(-1)}>
        <ChevronLeft />
      </span>
      <span className="barTitle">{title}</span>
      {mark && (
        <span className="leftBtns">
          <button
            className={`barBtn bookmark ${pick && "pickOn"}`}
            onClick={handleTogglePick}
          >
            <Bookmark />
          </button>
          <button className="barBtn" onClick={() => setIsCopied(!isCopied)}>
            <Link />
          </button>
        </span>
      )}
    </div>
  );
};

export default AppBar;
