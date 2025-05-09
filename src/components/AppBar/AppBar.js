import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ChevronLeft, Link, Bookmark } from "../../assets/icon/icon";

import { useBoardGameData, usePickId } from "../../common/hooks/useAxios";
import { handlerPick } from "../../common/utils/handlerPick";
import { getPickStatus } from "../../common/utils/getPickStatus";

const AppBar = ({ title, mark, type, id, setIsPicked }) => {
  const BarType = ["gradient"].includes(type) ? type : "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCopied = useSelector((state) => state.isCopied);

  const { isPicked } = getPickStatus(id) || false;
  const setIsCopied = () => {
    dispatch({ type: "SET_ISCOPY", payload: !isCopied });
  };

  const handlerMyPick = (id) => {
    handlerPick(id, dispatch, setIsPicked);
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
              handlerMyPick(id);
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
