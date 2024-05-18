import { SearchContext } from "../../context/SearchContext.js";
import { useState } from "react";
import SearchBar from "../../components/Search/SearchBar/SearchBar.js"
import SearchResult from "../../components/Search/SearchResult/SearchResult.js"
import OnSearch from "../../components/Search/OnSearch/OnSearch.js";
import CategoryBox from "../../components/CategoryBox/CategoryBox.js"
import Button from "../../components/Btn/Button/Button.js";

const Category = () => {
  const [onsearch, setOnsearch] = useState(false);
  const [keyworld, setKeyworld] = useState("");
  const [result, setResult] = useState(false);

  const tags = [
    "#보드게임1",
    "#보드게임2",
    "#보드게임3",
    "#보드게임4",
    "#보드게임5"
  ]

  return (
    <SearchContext.Provider value={{onsearch, setOnsearch, keyworld, setKeyworld, result, setResult}}>
      <div className="Categorys">
        <SearchBar />
        { onsearch ? ( result === false ? <OnSearch /> : <SearchResult keyworld={keyworld} />) : 
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
    </SearchContext.Provider>
  );
};

export default Category;
