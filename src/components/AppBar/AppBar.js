import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ChevronLeft, Link, Bookmark } from "../../assets/icon/icon";
import { togglePick } from "../../common/axios/api";

const AppBar = ({ title, mark, type, id, picked }) => {
  const BarType = ["gradient"].includes(type) ? type : "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCopied = useSelector((state) => state.isCopied);
  const isPicked = useSelector((state) => state.pickedItems[id]);

  const setIsCopied = () => {
    dispatch({ type: "SET_ISCOPY", payload: !isCopied });
  };

  const setToastPick = (value) => {
    dispatch({ type: "SET_TOAST_PICK", payload: value });
  };

  const setToastUnpick = (value) => {
    dispatch({ type: "SET_TOAST_UNPICK", payload: value });
  };

  const addPickItem = () => {
    dispatch({ type: "ADD_PICKED_ITEM", payload: id });
  };

  const removePickItem = () => {
    dispatch({ type: "REMOVE_PICKED_ITEM", payload: id });
  };

  const handlerPick = (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }

    togglePick(id, token)
      .then((response) => {
        if (response.picked) {
          setToastPick(true);
          addPickItem(id);
        } else {
          setToastUnpick(true);
          removePickItem(id);
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
            className={`barBtn bookmark ${isPicked ? "pickOn" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              handlerPick(id);
            }}
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
