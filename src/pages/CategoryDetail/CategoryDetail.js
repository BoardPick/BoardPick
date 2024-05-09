import { useSelector } from "react-redux";

import AppBar from "../../components/AppBar/AppBar.js";

import CategoryTab from "./CategoryTab/CategoryTab.js";
import { BoardGameElement } from "../../assets/data/boardGameElmentData.js";

import NoticeBanner from "../../components/NoticeBanner/NoticeBanner.js";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner.js";
import StarScore from "../../components/StarScore/StarScore.js";

const CategoryDetail = () => {

  const reviewCount = useSelector((state) => state.reviewCount);


  return (
    <div className="categoryDetail">
      <AppBar mark />
      <div class="backImg" />
      <section className="boardGameInfo">
        <article className="thumNail">
          <img src="https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__original/img/FpyxH41Y6_ROoePAilPNEhXnzO8=/0x0/filters:format(jpeg)/pic3490053.jpg" />
        </article>
        <article className="boardGameSum">
          <div className="banners">
            <CategoryBanner />
          </div>
          <h1 className="boardGameName">이스케이프 룸 패밀리</h1>
          <h2 className="boardGameOne">
            방 탈출 게임의 화제작 이스케이프 룸 패밀리!
          </h2>
          <StarScore />
          {reviewCount === 0 ? (
            <NoticeBanner text={"이 보드게임 후기를 가장 먼저 작성해보세요!"} />
          ) : (
            <div className="pickBanner">
              이 보드게임을 <strong>124</strong>명이 PICK 했어요!
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
    </div>
  );
};

export default CategoryDetail;
