import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChevronRight } from "../../assets/icon/icon";
import { profile_brand } from "../../assets/image/image";
import AlertPopUp from "../../components/AlertPopUP/AlertPopUp";
import { useState, useEffect } from "react";
import { getLogInfo } from "../../common/axios/loginfo.js";
import Loading from "../../components/Search/SearchResult/Loading/Loading.js";

const MyPage = () => {
  const [loggedOut, setLoggedOut] = useState(false);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedOut(!loggedOut);
  };

  // 로그인 api 호출
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [LogData, setLogData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const LogData = await getLogInfo();
        setLogData(LogData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [isLoggedIn]);

  if (loading)
    return <Loading />

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
                {LogData && <li className="nickname">
                  <strong>{LogData.nickname}</strong>님 안녕하세요!
                </li>}
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
            <p>1:1오픈채팅 문의하기</p>
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
