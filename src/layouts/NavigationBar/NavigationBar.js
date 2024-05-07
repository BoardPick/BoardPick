import React from "react";
import {
  Home,
  Category,
  Review,
  Bookmark,
  MyPage,
} from "../../assets/icon/icon.js";

import { useNavigate } from "react-router-dom";

const TabBar = () => {
  const navigate = useNavigate();

  const tabs = [
    { url: "/", icon: <Home />, text: "홈" },
    { url: "/Category", icon: <Category />, text: "카테고리" },
    { url: "/Review", icon: <Review />, text: "게임후기" },
    { url: "/MyPick", icon: <Bookmark />, text: "MY PICK" },
    { url: "/MyPage", icon: <MyPage />, text: "내 정보" },
  ];

  const handleTabClick = (url) => {
    navigate(url);
  };

  return (
    <div className="NavigationBar">
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`menu ${
              window.location.pathname === tab.url ? "on" : ""
            }`}
            onClick={() => handleTabClick(tab.url)}
          >
            {tab.icon}
            <span>{tab.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabBar;
