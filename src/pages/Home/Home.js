import React from "react";
import SearchBar from "../../components/Search/SearchBar/SearchBar";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import Banner from "../../assets/image/banner.svg";

const Home = () => {

  return <div className="home">
    <SearchBar />
    <div className="banner">
      <img src={Banner} alt="샘플이미지" />
    </div>
    <CategoryBox />
  </div>;
};

export default Home;
