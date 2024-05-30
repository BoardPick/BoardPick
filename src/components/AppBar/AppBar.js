import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ChevronLeft, Link, Bookmark } from "../../assets/icon/icon";
import { togglePick, getPickId } from "../../common/axios/api";

const AppBar = ({ title, mark, type, id, picked }) => {
  const BarType = ["gradient"].includes(type) ? type : "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCopied = useSelector((state) => state.isCopied);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pickId, setPickId] = useState([]);

  const isPicked = pickId && pickId.includes(id);

  const setIsCopied = () => {
    dispatch({ type: "SET_ISCOPY", payload: !isCopied });
  };

  const setToastPick = (value) => {
    dispatch({ type: "SET_TOAST_PICK", payload: value });
  };

  const setToastUnpick = (value) => {
    dispatch({ type: "SET_TOAST_UNPICK", payload: value });
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
        } else {
          setToastUnpick(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }
    const fetchData = async () => {
      try {
        const pickId = await getPickId(token);
        setPickId(pickId);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [pickId]);

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
