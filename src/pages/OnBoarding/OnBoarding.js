import { logo } from "../../assets/image/image";
import { Kakao } from "../../assets/icon/icon";

const OnBoarding = () => {
  return (
    <div className="onBoarding">
      <article className="logo">
        <img src={logo} alt="logo" />
        <p className="logoDesc">나에게 맞는 보드게임을 PICK하다</p>
      </article>
      <ul className="loginBtnBox">
        <ul>
          <li className="loginBtn kakao">
            <Kakao />
            카카오로 시작하기
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default OnBoarding;
