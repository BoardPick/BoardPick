import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Home, Category, Bookmark, MyPage } from "../../assets/icon/icon.js";
import { NavLink } from "react-router-dom";

const TabBar = () => {
  const onSearch = useSelector((state) => state.onSearch);
  const dispatch = useDispatch();

  const tabs = [
    {
      url: "/",
      icon: <Home />,
      text: "홈",
      class: "home",
    },
    {
      url: "/category",
      icon: <Category />,
      text: "카테고리",
      class: "category",
    },
    { url: "/myPick", icon: <Bookmark />, text: "MY PICK", class: "myPick" },
    { url: "/myPage", icon: <MyPage />, text: "내 정보", class: "myPage" },
  ];

  const handleTabClick = () => {
    dispatch({ type: "OFF_ONSEARCH" });
  };

  return (
    <div className="NavigationBar">
      <ul>
        {tabs.map((tab, i) => (
          <li key={i}>
            <NavLink
              to={`${tab.url}`}
              key={i}
              className={`menu ${tab.class}`}
              onClick={() => handleTabClick(tab.url)}
            >
              <span className="menuIcon">{tab.icon}</span>
              <span className="menuName">{tab.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabBar;
