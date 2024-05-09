import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ChevronLeft, Link, Bookmark } from "../../assets/icon/icon";

const AppBar = ({ title, mark }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pick = useSelector((state) => state.pick);
  const setPick = () => {
    dispatch({ type: "SET_PICK", payload: !pick });
  };
  const click = () => {
    setPick(!pick);
  };
  console.log(pick);

  return (
    <div className="AppBar">
      <span className="back" onClick={() => navigate(-1)}>
        <ChevronLeft />
      </span>
      <span>{title}</span>
      {mark && (
        <span className="leftBtns">
          <button onClick={click}>
            <Bookmark />
          </button>
          <button>
            <Link />
          </button>
        </span>
      )}
    </div>
  );
};

export default AppBar;
