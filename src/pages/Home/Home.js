import React from "react";
import SearchBar from "../../components/Search/SearchBar/SearchBar";
import CategoryBox from "../../components/CategoryBox/CategoryBox";

const Home = () => {

  return <div className="home">
    <SearchBar />
    <div className="banner">
      <img src="https://via.placeholder.com/375x200" alt="샘플이미지" />
    </div>
    <CategoryBox />
  </div>;
};

export default Home;
