import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AppBar from "../../components/AppBar/AppBar.js";
import CategoryBadge from "../../components/CategoryBadge/CategoryBadge.js";
import Tag from "../../components/Tag/Tag";
import ToastPopUp from "../../components/ToastPopUp/ToastPopUp.js";
import BoardGameElement from "../../layouts/BoardGameElement/BoardGameElement.js";
import RuleTab from "../../layouts/RuleTab/RuleTab.js";
import BottomPopUp from "../../components/BottomPopUp/BottomPopUp.js";
import { getBoardGameDetail } from "../../common/axios/api.js";
import Loading from "../../components/Search/SearchResult/Loading/Loading.js";

const CategoryDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState({});
  const toast = useSelector((state) => state.toast);
  const isCopied = useSelector((state) => state.isCopied);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const setToast = () => {
    dispatch({
      type: "SET_TOAST",
    });
  };
  const isPicked = useSelector((state) => state.pickedItems[id] || false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }
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

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [toast, setToast]);

  // useEffect(() => {
  //   return isPicked ? data.likes + 1 : data.likes - 1;
  // }, [isPicked]);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;
  console.log(isPicked);

  return (
    <div className="categoryDetail">
      <AppBar mark type={"gradient"} id={data.id} picked={data.picked} />
      <div className="backImg">
        <img src={data.imageUrl} alt="backgroundImg" />
      </div>
      <section className="boardGameInfo">
        <article className="detailThumbNail">
          <img src={data.thumbnailUrl} alt="ThumbNail" />
        </article>
        <article className="boardGameSum">
          <div className="banners">
            {data.boardGameCategories.map((cate, i) => (
              <CategoryBadge key={i} genre={data.boardGameCategories[i]} />
            ))}
          </div>
          <h1 className="boardGameName">{data.name}</h1>
          <h2 className="boardGameOne">{data.description}</h2>
          {/* {data.likes > 0 && (
            <div className="pickBanner">
              이 보드게임을 <strong className="pickCount">{data.likes}</strong>
              명이 PICK 했어요!
            </div>
          )} */}
          <div className="hashTagBox">
            {data.tags.map((tag, i) => (
              <Tag key={i} tag={data.tags[i]} />
            ))}
          </div>
        </article>
        <BoardGameElement data={data} />
      </section>
      <RuleTab />
      <div className={`toast ${toast ? "pop" : ""}`}>
        <ToastPopUp
          ToastContent={`보드게임${
            isPicked ? "을 PICK " : " PICK을 취소"
          }했어요`}
        />
      </div>
      {isCopied && <BottomPopUp />}
    </div>
  );
};

export default CategoryDetail;
