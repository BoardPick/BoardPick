import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
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

const CategoryList = ({ categories, onCategoryClick }) => (
  <ul>
    {categories.map((tab) => (
      <li
        key={tab.text}
        className="category"
        onClick={() => onCategoryClick(tab.url)}
      >
        <span className="categoryIcon">{tab.icon}</span>
        <span className="categoryName">{tab.text}</span>
      </li>
    ))}
  </ul>
);

const CategoryBox = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
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
  };

  // Split categories into two rows
  const half = Math.ceil(categories.length / 2);
  const firstRow = categories.slice(0, half);
  const secondRow = categories.slice(half);

  return (
    <div className="categorybox">
      <CategoryList categories={firstRow} onCategoryClick={handleCategoryClick} />
      <CategoryList categories={secondRow} onCategoryClick={handleCategoryClick} />
    </div>
  );
};

export default CategoryBox;
