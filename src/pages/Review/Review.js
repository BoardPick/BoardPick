import { useNavigate, useParams } from "react-router-dom";
import { Pencil } from "../../assets/icon/icon";

import Button from "../../components/Btn/Button/Button";
import ReviewContent from "../../components/ReviewContent/ReviewContent";

import { reviewFilterTab } from "../../assets/data/tabConArr";
import { useState } from "react";

const Review = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tabIdx, setTabIdx] = useState(0);
  return (
    <div className="reviewAll">
      <h1 className="pageTit">게임후기</h1>
      <nav className="tabFilter">
        <ul>
          {reviewFilterTab.map((tab, i) => (
            <li
              className={`tab ${tabIdx === i ? "on" : ""}`}
              key={i}
              onClick={() => setTabIdx(i)}
            >
              {tab.tabTitle}
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
      <article className="reviews">{reviewFilterTab[tabIdx].tabCont}</article>
    </div>
  );
};

export default Review;
