import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Btn/Button/Button";
import { LinkShare } from "../../assets/icon/icon";
import ToastPopUp from "../ToastPopUp/ToastPopUp";

const BottomPopUp = () => {
  const dispatch = useDispatch();
  const isCopied = useSelector((state) => state.isCopied);
  const [isCopyBtn, setIsCopyBtn] = useState(false);
  const setIsCopied = () => {
    dispatch({ type: "SET_ISCOPY", payload: !isCopied });
  };
  const copyCurrentUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setIsCopyBtn(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLinkCopy = () => {
    copyCurrentUrl();
    setIsCopyBtn(true);
    const timer = setTimeout(() => {
      setIsCopyBtn(false);
    }, 2000);
    return () => clearTimeout(timer);
  };
  const handleCloseBtn = () => {
    setIsCopied(!isCopied);
  };
  return (
    <div className="bottomPopup">
      <section className="overlay">
        <header>
          <span>공유하기</span>
          <div className="closeIcon" onClick={handleCloseBtn} />
        </header>
        <article className="shareBtnBox">
          <button className="shareBtn" onClick={handleLinkCopy}>
            <LinkShare />
          </button>
          <p className="linkCopy">링크복사</p>
        </article>
        {isCopyBtn && <ToastPopUp ToastContent={"링크가 복사되었습니다."} />}
        <article className="closeBtn">
          <Button
            type={"brand"}
            size={"s48"}
            text={"닫기"}
            onClick={handleCloseBtn}
          />
        </article>
      </section>
    </div>
  );
};

export default BottomPopUp;
