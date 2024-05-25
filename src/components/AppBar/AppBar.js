import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ChevronLeft, Link, Bookmark } from "../../assets/icon/icon";

import { togglePick } from "../../common/axios/api";

const AppBar = ({ title, mark, type, id, picked }) => {
  const BarType = ["gradient"].includes(type) ? type : "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.toast);
  const isCopied = useSelector((state) => state.isCopied);
  const setToast = () => {
    dispatch({
      type: "SET_TOAST",
    });
  };
  const setIsCopied = () => {
    dispatch({ type: "SET_ISCOPY", payload: !isCopied });
  };
  const [isPicked, setIsPicked] = useState(() => {
    const storedIsPicked = localStorage.getItem(`thumb_${id}`);
    return storedIsPicked !== null ? JSON.parse(storedIsPicked) : false;
  });

  const handlerPick = (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }
    togglePick(id, token)
      .then(function (response) {
        setIsPicked(response.picked);
        localStorage.setItem(`thumb_${id}`, JSON.stringify(response.picked));
      })
      .catch(function (error) {
        console.error(error);
      });
    setToast(!toast);
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
