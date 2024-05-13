// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar.js"
import Header from "./Header/Header.js";
import {
  Strategy,
  Rollplaying,
  Cardgame,
  Cooperation,
  Deduction,
  Batting,
  Mafia,
  Memory,
  Realtime,
  Etc,
} from "../../assets/icon/category/category.js";

const Category = () => {
  // const category = useNavigate();
  // const [selectedCategory, setSelectedCategory] = useState("");
  const categorys = [
    { url: "/Category", icon: <Strategy />, text: "전략게임" },
    { url: "/Category", icon: <Rollplaying />, text: "롤플레잉" },
    { url: "/Category", icon: <Cardgame />, text: "카드게임" },
    { url: "/Category", icon: <Cooperation />, text: "협력게임" },
    { url: "/Category", icon: <Deduction />, text: "추리게임" },
    { url: "/Category", icon: <Batting />, text: "베팅게임" },
    { url: "/Category", icon: <Mafia />, text: "마피아" },
    { url: "/Category", icon: <Memory />, text: "기억력" },
    { url: "/Category", icon: <Realtime />, text: "순발력" },
    { url: "/Category", icon: <Etc />, text: "기타게임" },
  ];

  // const handleCategoryClick = (url) => {
  //   setSelectedCategory(url);
  //   category(url);
  // }

  return (
    <div className="Categorys">
      {/* <Header /> */}
      <SearchBar />
      <ul>
        {categorys.map((tab, i) => (
          <li
            key={i}
            // className={`category ${selectedCategory === tab.url ? "on" : ""}`}
            // onClick={() => handleCategoryClick(tab.url)}
          >
            <span className="categoryIcon">{tab.icon}</span>
            <span className="categoryName">{tab.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
