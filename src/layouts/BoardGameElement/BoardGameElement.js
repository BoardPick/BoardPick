import React from "react";
import { People, Time, Age, Level } from "../../assets/icon/icon.js";

const BoardGameElement = ({ data }) => {
  const boardGameElements = [
    {
      icon: <People />,
      title: "추천인원",
      content: `${
        data.minPlayers === data.maxPlayers
          ? `${data.maxPlayers}명`
          : `${data.minPlayers}-${data.maxPlayers}명`
      }`,
    },
    {
      icon: <Time />,
      title: "게임시간",
      content: `${data.playtime}분`,
    },
    {
      icon: <Age />,
      title: "연령제한",
      content: `${data.ageLimit}세 ↑`,
    },
    {
      icon: <Level />,
      title: "난이도",
      content: data.difficulty,
    },
  ];
  return (
    <div className="BoardGameEleBox">
      {boardGameElements.map((ele, i) => (
        <div className="BoardGameEle" key={i}>
          <span className="EleIcon">{ele.icon}</span>
          <span className="EleTit">{ele.title}</span>
          <span className="EleCon">{ele.content}</span>
        </div>
      ))}
    </div>
  );
};

export default BoardGameElement;
