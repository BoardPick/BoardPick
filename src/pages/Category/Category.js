import { SearchContext } from "../../context/SearchContext.js";
import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import SearchBar from "../../components/Search/SearchBar/SearchBar.js"
import OnSearch from "../../components/Search/OnSearch/OnSearch.js";
import CategoryBox from "../../components/CategoryBox/CategoryBox.js"
import Button from "../../components/Btn/Button/Button.js";

const Category = () => {
  const navigate = useNavigate();
  const onSearch = useSelector((state) => state.onSearch);
  const log = useContext(SearchContext);

  
  const tags = [
    { url: "/category/17", name: "#어스" },
    { url: "/category/47", name: "#냥자역학 연구소" },
    { url: "/category/70", name: "#키친 러시" },
    { url: "/category/49", name: "#이스케이프 플랜" },
    { url: "/category/27", name: "#언락!" },
    { url: "/category/30", name: "#사건의 재구성" },
    { url: "/category/2", name: "#아컴 호러: 카드게임" },
    { url: "/category/64", name: "#마스터 폭스" },
    { url: "/category/55", name: "#갱스터스 딜레마" },
    { url: "/category/48", name: "#피드 더 크라켄" }
  ]

  return (
    <div className="Categorys">
        <SearchBar />
        { onSearch ? <OnSearch /> : 
          <div className="wrapper">
            <CategoryBox />
            <div className="HotTag">
              <h1 className="title">가장 핫한 보드게임</h1>
              <div className="tags">
                  {tags.map((tag, i) => {
                      return (<div className="tag">
                        <Button key={i} text={tag.name} size={"s36"} type={"default"} onClick={() => navigate(tag.url)}></Button>
                      </div>)
                  })}
              </div>
            </div>
          </div>
        }
      </div>
  );
};

export default Category;
