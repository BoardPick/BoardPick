import React from "react";
import { useNavigate } from "react-router-dom";

const ToastPopUp = ({ ToastContent, viewBtn }) => {
  const navigate = useNavigate();
  return (
    <div className="toastPopUp">
      <span>{ToastContent}</span>
      {viewBtn && (
        <button className="view" onClick={() => navigate("/myPick")}>
          보기
        </button>
      )}
    </div>
  );
};

export default ToastPopUp;
