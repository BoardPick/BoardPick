import React from "react";
import { tagArr } from "../../assets/data/test";

const Tag = ({ thumb, tag }) => {
  return <span className={`hashTag ${thumb}`}>{tag}</span>;
};

export default Tag;
