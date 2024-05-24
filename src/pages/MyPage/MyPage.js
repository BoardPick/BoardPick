import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChevronRight } from "../../assets/icon/icon";
import { profile_brand } from "../../assets/image/image";
import AlertPopUp from "../../components/AlertPopUP/AlertPopUp";
import { useState } from "react";

const MyPage = ({ logData }) => {
  const [loggedOut, setLoggedOut] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const handleLogout = () => {
    setLoggedOut(!loggedOut);
    window.location.href =
      "https://kauth.kakao.com/oauth/logout?client_id=6dc2d5a2c321c141f16322f2098449be&logout_redirect_uri=https://boardpick.netlify.app";
  };

  return (
    <div className="MyPage">
      <header>내 정보</header>
      <section>
        {isLoggedIn ? (
          <article className="myInfoContainer">
            <div className="myInfo">
              <div className="profileImg">
                <img src={profile_brand} alt="profile" />
              </div>
              <ul>
                <li className="nickname">
                  <strong>{logData ? logData.nickname : "사용자"}</strong>님
                  안녕하세요!
                </li>

                <li className="welcome">보드픽에 오신걸 환영해요!</li>
              </ul>
            </div>
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
            <p>1:1 오픈채팅 문의하기</p>
            <ChevronRight />
          </li>
          {isLoggedIn && (
            <li className="logout">
              <p>로그아웃</p>
              <ChevronRight />
            </li>
          )}
        </ul>
      </section>
      {loggedOut && (
        <AlertPopUp
          popText={"정말 로그아웃 하시겠습니까?"}
          handleSubmit={handleLogout}
          handleCancel={() => setLoggedOut(!loggedOut)}
        />
      )}
    </div>
  );
};

export default MyPage;
