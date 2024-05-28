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
  const setIsCopied = () => {
    dispatch({ type: "SET_ISCOPY", payload: !isCopied });
  };
  const isPicked = useSelector((state) => state.pickedItems[id]);
  // const setIsPicked = (id, isPicked) => {
  //   dispatch({
  //     type: "SET_IS_PICKED",
  //     payload: { id, isPicked },
  //   });
  // };
  // const [isPicked, setIsPicked] = useState(picked);
  const setToastPick = (value) => {
    dispatch({
      type: "SET_TOAST_PICK",
      payload: value,
    });
  };

  const setToastUnpick = (value) => {
    dispatch({
      type: "SET_TOAST_UNPICK",
      payload: value,
    });
  };

  const handlerPick = (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }

    togglePick(id, token)
      .then(function (response) {
        if (response.picked) {
          setToastPick(true);
          // setIsPicked(true);
        } else {
          setToastUnpick(true);
          // setIsPicked(false);
        }
      })
      .catch(function (error) {
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
            className={`barBtn bookmark ${isPicked ? "pickOn" : ""}
          `}
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
