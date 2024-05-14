import React from "react";
import StarScore from "../StarScore/StarScore";
import Tag from "../Tag/Tag";

const ThumNail = ({ type }) => {
  return (
    <div className={`thumNail ${type}`}>
      <article className="thumImg">
        <img src="http://placehold.it/140X200" alt="" />
      </article>
      <article className="thumName">
        <h1>보드게임 타이틀</h1>
        <p>보드게임 설명 텍스트 영역입니다. 최대 두줄 노출sdfsdf</p>
        <StarScore ver={"black"} />
        <Tag thumb={"thumb"} />
      </article>
    </div>
  );
};

export default ThumNail;
