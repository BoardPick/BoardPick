import React from "react";
import { ChevronRight } from "../../assets/icon/icon.js";

const NoticeBanner = ({ text }) => {
  return (
    <div className="noticeBanner">
      <p>{text}</p>
      <ChevronRight />
    </div>
  );
};

export default NoticeBanner;
