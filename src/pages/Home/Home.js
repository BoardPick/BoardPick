import React, { useState } from "react";
import SearchBar from "../../components/Search/SearchBar/SearchBar";
import SearchResult from "../../components/Search/SearchResult/SearchResult";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import Banner from "../../assets/image/banner.svg";

const Home = () => {
  const [onsearch, setOnsearch] = useState(false);

  return <div className="home">
    <SearchBar />
    {onsearch === true ? <SearchResult keyworld={"검색 키워드"}/> :
      <div className="wrapper">
        <div className="banner">
          <img src={Banner} alt="샘플이미지" onClick={() => setOnsearch(!onsearch)}/>
        </div>
        <CategoryBox />
      </div>
    }
  </div>;
};

export default Home;
