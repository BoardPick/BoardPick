import React from "react";
import SearchBar from "../../components/Search/SearchBar/SearchBar.js"
import CategoryBox from "../../components/CategoryBox/CategoryBox.js"
import Button from "../../components/Btn/Button/Button.js";

const Category = () => {

  const tags = [
    "#보드게임1",
    "#보드게임2",
    "#보드게임3",
    "#보드게임4",
    "#보드게임5"
  ]

  return (
    <div className="Categorys">
      <SearchBar />
      <CategoryBox />
      <div className="HotTag">
        <h1 className="title">가장 핫한 보드게임</h1>
        <div className="tags">
            {tags.map((tag, i) => {
                return (<div className="tag">
                  <Button key={i} text={tag} size={"s36"} type={"default"}></Button>
                </div>)
            })}
        </div>
      </div>
     </div>
  );
};

export default Category;
