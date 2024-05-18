import { SearchContext } from "../../context/SearchContext.js";
import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import axios from "axios"
import SearchBar from "../../components/Search/SearchBar/SearchBar.js"
import SearchResult from "../../components/Search/SearchResult/SearchResult.js"
import OnSearch from "../../components/Search/OnSearch/OnSearch.js";
import CategoryBox from "../../components/CategoryBox/CategoryBox.js"
import Button from "../../components/Btn/Button/Button.js";

const API_URL = "http://ec2-13-124-98-35.ap-northeast-2.compute.amazonaws.com";

const Category = () => {
  const onSearch = useSelector((state) => state.onSearch);
  const searchResult = useSelector((state) => state.searchResult);
  const data = useContext(SearchContext);

  const tags = [
    "#보드게임1",
    "#보드게임2",
    "#보드게임3",
    "#보드게임4",
    "#보드게임5"
  ]

  // try {
  //   const res = axios.get( `${API_URL}/api/boardgames/search?keyword=${data.searchKeywold}`);
  //   console.log(res.data);
  //     return res.data;
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div className="Categorys">
        <SearchBar />
        { onSearch ? ( searchResult === false ? <OnSearch /> : <SearchResult keyworld={data.searchKeywold} />) : 
          <div className="wrapper">
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
        }
      </div>
  );
};

export default Category;
