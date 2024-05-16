import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  HomeOn,
  Category,
  Review,
  ReviewOn,
  Bookmark,
  MyPage,
} from "../../assets/icon/icon.js";

const TabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.slice(1);
  const [selectedTab, setSelectedTab] = useState(location.pathname);

  const tabs = [
    {
      url: "/",
      icon: selectedTab === "/" ? <HomeOn /> : <Home />,
      text: "홈",
    },
    { url: "/Category", icon: <Category />, text: "카테고리" },
    { url: "/MyPick", icon: <Bookmark />, text: "MY PICK" },
    { url: "/MyPage", icon: <MyPage />, text: "내 정보" },
  ];

  const handleTabClick = (url) => {
    setSelectedTab(url);
    navigate(url);
  };
  console.log(path);
  console.log(selectedTab);
  return (
    <div className="NavigationBar">
      <ul>
        {tabs.map((tab, i) => (
          <li
            key={i}
            className={`menu ${
              selectedTab === tab.url ||
              (tab.url !== "/" && location.pathname.includes(tab.url))
                ? `on ${path}`
                : ""
            }`}
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
