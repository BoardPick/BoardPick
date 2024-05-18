import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AppBar from "../../components/AppBar/AppBar.js";
import CategoryBadge from "../../components/CategoryBadge/CategoryBadge.js";
import NoticeBtn from "../../components/Btn/NoticeBtn/NoticeBtn.js";
import Tag from "../../components/Tag/Tag";
import ToastPopUp from "../../components/ToastPopUp/ToastPopUp.js";
import { BoardGameElement } from "../../assets/data/boardGameElmentData.js";
import { tagArr } from "../../assets/data/test.js";
import RuleTab from "../../layouts/RuleTab/RuleTab.js";
import BottomPopUp from "../../components/BottomPopUp/BottomPopUp.js";
import { getBoardGameDetail } from "../../common/axios/api.js";

const CategoryDetail = () => {
  const { id } = useParams();
  console.log(getBoardGameDetail(id));
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBoardGameDetail(id);
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reviewCount = useSelector((state) => state.reviewCount);
  const pick = useSelector((state) => state.pick);
  const pickCount = useSelector((state) => state.pickCount);
  const toast = useSelector((state) => state.toast);
  const isCopied = useSelector((state) => state.isCopied);

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

  const handlePick = () => {
    pick ? setIncreaseCount() : setDecreaseCount();
  };

  const handleClick = (e) => {
    if (!e.target.closest(".bookmark")) return;
    handlePick();
    setToast(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [pick]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="categoryDetail">
      <AppBar mark type={"gradient"} />
      <div className="backImg">
        <img src={data.imageUrl} />
      </div>
      <section className="boardGameInfo">
        <article className="detailThumbNail">
          <img src={data.thumbnailUrl} alt="ThumbNail" />
        </article>{" "}
        <article className="boardGameSum">
          <div className="banners">
            <CategoryBadge genre={"협력게임"} />
          </div>
          <h1 className="boardGameName">{data.name}</h1>
          <h2 className="boardGameOne">{data.description}</h2>
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
            {tagArr.map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
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
      <RuleTab />
      <div className={`toast ${toast ? "pop" : ""}`}>
        <ToastPopUp
          ToastContent={`보드게임${pick ? "을 PICK " : " PICK을 취소"}했어요`}
        />
      </div>
      {isCopied && <BottomPopUp />}
    </div>
  );
};

export default CategoryDetail;
