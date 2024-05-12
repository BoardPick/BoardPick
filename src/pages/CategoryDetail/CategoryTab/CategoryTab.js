import { useState } from "react";
import { tabContArr } from "../../../assets/data/tabConArr";

const CategoryTab = ({ reviewCount }) => {
  const [activeIdx, setActiveIdx] = useState(0);

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
            {i === 1 && <span className="reviewNum">{reviewCount}</span>}
          </li>
        ))}
      </ul>
      <div>{tabContArr[activeIdx].tabCont}</div>
    </div>
  );
};

export default CategoryTab;
