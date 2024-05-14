import React from "react";

const Tag = ({ thumb }) => {
  return (
    <div className="hashTagBox">
      <span className={`hashTag ${thumb}`}>#주사위</span>
    </div>
  );
};

export default Tag;
