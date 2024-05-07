import AppBar from "../../components/AppBar/AppBar.js";
import {
  People,
  Time,
  Age,
  Level,
  ChevronRight,
} from "../../assets/icon/icon.js";
import { IoBookmarkOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

import CategoryTab from "./CategoryTab/CategoryTab.js";

const CategoryDetail = () => {
  const BoardGameElement = [
    {
      icon: <People />,
      title: "추천인원",
      content: "4-5명",
    },
    {
      icon: <Time />,
      title: "게임시간",
      content: "20분",
    },
    {
      icon: <Age />,
      title: "연령제한",
      content: "14세 ⬆️",
    },
    {
      icon: <Level />,
      title: "난이도",
      content: "어려움",
    },
  ];

  return (
    <div className="categoryDetail">
      <AppBar mark={<IoBookmarkOutline />} share={<IoBookmarkOutline />} />
      <section className="boardGameInfo">
        <article className="thumNail">
          <img src="https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__original/img/FpyxH41Y6_ROoePAilPNEhXnzO8=/0x0/filters:format(jpeg)/pic3490053.jpg" />
        </article>
        <article className="boardGameSum">
          <div className="banners">
            <span className="banner">협동게임</span>
            <span className="banner">협동게임</span>
          </div>
          <h1 className="boardGameName">이스케이프 룸 패밀리</h1>
          <h2 className="boardGameOne">
            방 탈출 게임의 화제작 이스케이프 룸 패밀리!
          </h2>
          <div className="avgStar">
            <span className="star">
              {[...Array(parseInt(5))].map(() => (
                <CiStar />
              ))}
            </span>
            <span className="avg">0.0</span>
            <span className="reviewCount">(24)</span>
          </div>
          <div className="reviewBtn">
            <p>이 보드게임 후기를 가장 먼저 작성해보세요!</p>
            <ChevronRight />
          </div>
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
      <CategoryTab />
    </div>
  );
};

export default CategoryDetail;
