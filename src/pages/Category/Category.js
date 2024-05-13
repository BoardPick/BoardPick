import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import SearchBar from "../../components/SearchBar/SearchBar.js"
import Header from "./Header/Header.js"
// import Categoryjson from "./category.json"
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
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const categorys = [
    { url: "/Category/strategy", icon: <Strategy />, text: "전략게임" },
    { url: "/Category/rollplaying", icon: <Rollplaying />, text: "롤플레잉" },
    { url: "/Category/cardgame", icon: <Cardgame />, text: "카드게임" },
    { url: "/Category/cooperation", icon: <Cooperation />, text: "협력게임" },
    { url: "/Category/deduction", icon: <Deduction />, text: "추리게임" },
    { url: "/Category/batting", icon: <Batting />, text: "베팅게임" },
    { url: "/Category/mafia", icon: <Mafia />, text: "마피아" },
    { url: "/Category/memory", icon: <Memory />, text: "기억력" },
    { url: "/Category/realtime", icon: <Realtime />, text: "순발력" },
    { url: "/Category/etc", icon: <Etc />, text: "기타게임" },
  ];

  const handleCategoryClick = (url) => {
    setSelectedCategory(url);
    navigate(url);
  }

  return (
    <div className="Categorys">
      <Header />
      <SearchBar />
      <ul>
        {categorys.map((tab, i) => (
          <li
            key={i}
            className="category" onClick={() => handleCategoryClick(tab.url)}
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
