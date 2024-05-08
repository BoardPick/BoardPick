import React, { useState } from "react";
import {
  Home,
  HomeOn,
  Category,
  Review,
  ReviewOn,
  Bookmark,
  MyPage,
} from "../../assets/icon/icon.js";

import { useNavigate } from "react-router-dom";

const TabBar = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("");
  const tabs = [
    { url: "/", icon: selectedTab === "/" ? <HomeOn /> : <Home />, text: "홈" },
    { url: "/Category", icon: <Category />, text: "카테고리" },
    {
      url: "/Review",
      icon: selectedTab === "/Review" ? <ReviewOn /> : <Review />,
      text: "게임후기",
    },
    { url: "/MyPick", icon: <Bookmark />, text: "MY PICK" },
    { url: "/MyPage", icon: <MyPage />, text: "내 정보" },
  ];

  const handleTabClick = (url) => {
    setSelectedTab(url);
    navigate(url);
  };

  return (
    <div className="NavigationBar">
      <ul>
        {tabs.map((tab, i) => (
          <li
            key={i}
            className={`menu ${selectedTab === tab.url ? "on" : ""}`}
            onClick={() => handleTabClick(tab.url)}
          >
            <span className="menuIcon">{tab.icon}</span>
            <span className="menuName">{tab.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabBar;
