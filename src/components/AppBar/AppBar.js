import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ChevronLeft, Link, Bookmark } from "../../assets/icon/icon";

const AppBar = ({ title, mark, type }) => {
  const BarType = ["gradient"].includes(type) ? type : "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [copied, setCopied] = useState(false);
  const pick = useSelector((state) => state.pick);
  const setPick = () => {
    dispatch({ type: "SET_PICK", payload: !pick });
  };
  const handlePick = () => {
    setPick(!pick);
  };
  const copyCurrentUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("복사되었습니다", currentUrl);
        setCopied(true);
      })
      .catch((error) => {
        alert("URL 복사 중 오류 발생:", error);
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
            className={`barBtn bookmark ${pick && "pickOn"}`}
            onClick={handlePick}
          >
            <Bookmark />
          </button>
          <button className="barBtn" onClick={copyCurrentUrl}>
            <Link />
          </button>
        </span>
      )}
    </div>
  );
};

export default AppBar;
