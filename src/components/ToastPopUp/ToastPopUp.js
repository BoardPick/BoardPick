import React from "react";

const ToastPopUp = ({ ToastContent, viewBtn }) => {
  return (
    <div className="toastPopUp">
      <span>{ToastContent}</span>
      {viewBtn && <button className="view">보기</button>}
    </div>
  );
};

export default ToastPopUp;
