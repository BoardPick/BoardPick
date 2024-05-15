import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../components/Btn/Button/Button";
import { ChevronRight } from "../../assets/icon/icon";
import { profile_brand } from "../../assets/image/image";
import AlertPopUp from "../../components/AlertPopUP/AlertPopUp";
import { useState } from "react";

const MyPage = () => {
  const [loggedOut, setLoggedOut] = useState(false);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedOut(!loggedOut);
  };

  return (
    <div className="MyPage">
      <header>내 정보</header>
      <section>
        {isLoggedIn ? (
          <article className="myInfoContainer">
            <div className="myInfo">
              <div className="profileImg">
                <img src={profile_brand} />
              </div>
              <ul>
                <li className="nickname">
                  <strong>보드픽</strong>님 어서오세요!
                </li>
                <li className="email">abc1234@naver.com</li>
              </ul>
            </div>
            <Button size={"s24"} text={"정보수정"} />
          </article>
        ) : (
          <article
            className="myInfoContainer noLogin"
            onClick={() => navigate("/onBoarding")}
          >
            <p className="noLoginTxt">
              지금 <strong>로그인</strong>하고
            </p>
            <p className="noLoginTxt">
              나에게 맞는 보드게임을 PICK 해보세요!
              <ChevronRight />
            </p>
          </article>
        )}

        <ul className="myPageList">
          <li className="cs">
            <p>고객센터</p>
            <ChevronRight />
          </li>
          {isLoggedIn && (
            <li className="logout" onClick={handleLogout}>
              <p>로그아웃</p>
              <ChevronRight />
            </li>
          )}
        </ul>
      </section>
      {loggedOut && (
        <AlertPopUp
          popText={"정말 로그아웃 하시겠습니까?"}
          handleLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default MyPage;
