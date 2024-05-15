import React from "react";
import SearchBar from "../../components/Search/SearchBar/SearchBar.js"
import CategoryBox from "../../components/CategoryBox/CategoryBox.js"

const Category = () => {

  return (
    <div className="Categorys">
      <SearchBar value="\n"/>
      <CategoryBox />
     </div>
  );
};

export default Category;
