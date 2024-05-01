import React from "react";

import { useNavigate } from "react-router-dom";

const TabBar = () => {
  const navigate = useNavigate();

  const handleTabClick = (url) => {
    navigate(url);
  };

  return (
    <div className="TabBar">
      <ul>
        <li onClick={() => handleTabClick("/")}>홈</li>
        <li onClick={() => handleTabClick("/Category")}>카테고리</li>
        <li onClick={() => handleTabClick("/Review")}>게임 후기</li>
        <li onClick={() => handleTabClick("/MyPick")}>MY P!CK</li>
        <li onClick={() => handleTabClick("/MyPage")}>내 정보</li>
      </ul>
    </div>
  );
};

export default TabBar;
