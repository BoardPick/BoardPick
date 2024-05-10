import React from "react";
import { ChevronRight } from "../../../assets/icon/icon";

const NoticeBtn = ({ text, notice }) => {
  const noticeType = ["notice"].includes(notice) ? notice : "";
  return (
    <button className={`noticeBtn ${noticeType}`}>
      <article className={["noticeTxt", `noticeTxt_${noticeType}`].join(" ")}>
        <span className="noticeBadge">공지</span>
        <p>{text}</p>
      </article>
      <ChevronRight />
    </button>
  );
};

export default NoticeBtn;
