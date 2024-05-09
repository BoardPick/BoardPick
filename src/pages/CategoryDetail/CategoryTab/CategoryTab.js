import { useState } from "react";
import GameTab from "../GameTab/GameTab.js";

const CategoryTab = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const tabContArr = [
    {
      tabTitle: "상세정보",
      tabCont: <GameTab />,
    },
    {
      tabTitle: "후기",
      tabCont: "탭2 내용",
    },
  ];
  const tabClickHandler = (i) => {
    setActiveIdx(i);
  };
  return (
    <div className="categoryTab">
      <ul className="tabs">
        {tabContArr.map((section, i) => (
          <li
            className={`tab ${activeIdx === i ? "on" : ""}`}
            key={i}
            onClick={() => tabClickHandler(i)}
          >
            {section.tabTitle}
          </li>
        ))}
      </ul>
      <div>{tabContArr[activeIdx].tabCont}</div>
    </div>
  );
};

export default CategoryTab;
