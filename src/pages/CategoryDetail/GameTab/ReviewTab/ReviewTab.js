import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Pencil } from "../../../../assets/icon/icon";

import { ReviewTabs } from "../../../../assets/data/gameTab";
import StarScore from "../../../../components/StarScore/StarScore";
import Button from "../../../../components/Btn/Button/Button";

const ReviewTab = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const tabClickHandler = (i) => {
    setActiveIdx(i);
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const reviewCount = useSelector((state) => state.reviewCount);
  return (
    <div className="reviewTab">
      <StarScore ver="round" />
      <section className="reviewTopBox">
        <article className="reviewTop">
          <div className="reviewTop_Tit">
            <h1>이런 점이 좋았어요 TOP 3</h1>
            <span className="reviewCount">({reviewCount}명 참여)</span>
          </div>
          <ul className="topBox">
            <li className="topN">
              <span>초보자도 즐길 수 있어요</span>
              <span>24</span>
            </li>
            <li className="topN">
              <span>초보자도 즐길 수 있어요</span>
              <span>24</span>
            </li>
            <li className="topN">
              <span>초보자도 즐길 수 있어요</span>
              <span>24</span>
            </li>
          </ul>
        </article>
        <article className="reviewTop">
          <div className="reviewTop_Tit">
            <h1>이런 점이 아쉬워요 TOP 3</h1>
            <span className="reviewCount">({reviewCount}명 참여)</span>
          </div>
          <ul className="topBox">
            <li className="topN">
              <span>초보자도 즐길 수 있어요</span>
              <span>24</span>
            </li>
            <li className="topN">
              <span>초보자도 즐길 수 있어요</span>
              <span>24</span>
            </li>
            <li className="topN">
              <span>초보자도 즐길 수 있어요</span>
              <span>24</span>
            </li>
          </ul>
        </article>
      </section>
      <section className="reviewGroupBox">
        <h1>
          보드게임 후기 <span className="reviewNum">{reviewCount}</span>
        </h1>
        <article className="reviewGroup">
          <nav className="reviewNav">
            <ul className="filter">
              {ReviewTabs.map((section, i) => (
                <li
                  className={`filterTab ${activeIdx === i ? "on" : ""}`}
                  key={i}
                  onClick={() => tabClickHandler(i)}
                >
                  {section.reviewTab}
                </li>
              ))}
            </ul>
            <Button
              size={"s36"}
              type={"brand"}
              text={
                <>
                  <Pencil className="pencilIcon" /> 후기 작성하기
                </>
              }
              onClick={() => navigate(`/category/${id}/review`)}
            />
          </nav>
          <div className="reviewBox">
            <div>{ReviewTabs[activeIdx].content}</div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ReviewTab;
