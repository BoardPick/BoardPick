import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AppBar from "../../components/AppBar/AppBar.js";
import CategoryTab from "./CategoryTab/CategoryTab.js";
import CategoryBadge from "../../components/CategoryBadge/CategoryBadge.js";
import StarScore from "../../components/StarScore/StarScore.js";
import NoticeBtn from "../../components/Btn/NoticeBtn/NoticeBtn.js";
import ToastPopUp from "../../components/ToastPopUp/ToastPopUp.js";
import { BoardGameElement } from "../../assets/data/boardGameElmentData.js";

const CategoryDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reviewCount = useSelector((state) => state.reviewCount);
  const pick = useSelector((state) => state.pick);
  const pickCount = useSelector((state) => state.pickCount);
  const toast = useSelector((state) => state.toast);

  const setDecreaseCount = () => {
    dispatch({
      type: "SET_PICK_DECREASE",
    });
  };
  const setIncreaseCount = () => {
    dispatch({
      type: "SET_PICK_INCREASE",
    });
  };
  const setToast = () => {
    dispatch({
      type: "SET_TOAST",
    });
  };

  // const handlePick = () => {
  //   pick ? setIncreaseCount() : setDecreaseCount();
  // };

  // useEffect(() => {
  //   const handleClick = (e) => {
  //     if (!e.target.closest(".bookmark")) return;
  //     handlePick();
  //     setToast(true);
  //   };
  //   let timer = setTimeout(() => {
  //     setToast(false);
  //   }, 2000);

  //   document.addEventListener("click", handleClick);
  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //     clearTimeout(timer);
  //   };
  // }, [pick]);

  return (
    <div className="categoryDetail">
      <AppBar mark type={"gradient"} />
      <div className="backImg" />
      <section className="boardGameInfo">
        <article className="thumNail">
          <img
            src="https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__original/img/FpyxH41Y6_ROoePAilPNEhXnzO8=/0x0/filters:format(jpeg)/pic3490053.jpg"
            alt="thumNail"
          />
        </article>
        <article className="boardGameSum">
          <div className="banners">
            <CategoryBadge genre={"협력게임"} />
          </div>
          <h1 className="boardGameName">이스케이프 룸 패밀리</h1>
          <h2 className="boardGameOne">
            방 탈출 게임의 화제작 이스케이프 룸 패밀리!
          </h2>
          <StarScore />
          {reviewCount === 0 && (
            <NoticeBtn
              text={"이 보드게임 후기를 가장 먼저 작성해보세요!"}
              onClick={() => navigate("/review")}
            />
          )}
          {pickCount !== 0 && (
            <div className="pickBanner">
              이 보드게임을 <strong className="pickCount">{pickCount}</strong>
              명이 PICK 했어요!
            </div>
          )}

          <div className="hashTagBox">
            <span className="hashTag">#주사위</span>
            <span className="hashTag">#방탈출</span>
          </div>
        </article>
        <article className="BoardGameEleBox">
          {BoardGameElement.map((ele, i) => (
            <div className="BoardGameEle" key={i}>
              <span className="EleIcon">{ele.icon}</span>
              <span className="EleTit">{ele.title}</span>
              <span className="EleCon">{ele.content}</span>
            </div>
          ))}
        </article>
      </section>
      <CategoryTab reviewCount={reviewCount} />
      <div className={`toast ${toast ? "pop" : ""}`}>
        {pick ? (
          <ToastPopUp ToastContent={"보드게임을 PICK 했어요!"} />
        ) : (
          <ToastPopUp ToastContent={"보드게임 PICK을 취소했어요."} />
        )}
      </div>
    </div>
  );
};

export default CategoryDetail;
