import React from "react";

import kakaoLogin from "../../assets/image/kakao_login.png";

const OnBoarding = () => {
  return (
    <div>
      로그인페이지
      <ul>
        <ul>
          <li>
            <img src={kakaoLogin} alt="kakao login" />
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default OnBoarding;
