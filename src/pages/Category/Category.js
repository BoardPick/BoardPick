import React from "react";
import SearchBar from "../../components/Search/SearchBar/SearchBar.js"
import CategoryBox from "../../components/CategoryBox/CategoryBox.js"
import Button from "../../components/Btn/Button/Button.js";

const Category = () => {

  return (
    <div className="Categorys">
      <SearchBar value="\n"/>
      <CategoryBox />
      <div className="HotTag">
        <h1 className="title">가장 핫한 보드게임</h1>
        <div className="tags">
          <div className="tag">
            <Button text={"#보드게임"} size={"s36"} type={"default"}></Button>
          </div>
          <div className="tag">
            <Button text={"#보드게임"} size={"s36"} type={"default"}></Button>
          </div>
          <div className="tag">
            <Button text={"#보드게임"} size={"s36"} type={"default"}></Button>
          </div>
          <div className="tag">
            <Button text={"#보드게임"} size={"s36"} type={"default"}></Button>
          </div>
          <div className="tag">
            <Button text={"#보드게임"} size={"s36"} type={"default"}></Button>
          </div>
        </div>
      </div>
     </div>
  );
};

export default Category;
