import React from "react";
import Button from "../../components/Btn/Button/Button";

const MyPage = () => {
  return (
    <div className="MyPage">
      <header>내 정보</header>
      <section>
        <article className="myInfo">
          <img />
          <ul>
            <li>보드픽님 어서오세요!</li>
            <li>abc1234@naver.com</li>
          </ul>
          <Button size={"s24"} text={"정보수정"} />
        </article>
        <ul>
          <li>고객센터</li>
          <li>로그아웃</li>
        </ul>
      </section>
    </div>
  );
};

export default MyPage;
