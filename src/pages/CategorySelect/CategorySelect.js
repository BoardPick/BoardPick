import { SearchContext } from "../../context/SearchContext.js";
import { useState } from "react";
import SearchBar from "../../components/Search/SearchBar/SearchBar.js"
import SearchResult from "../../components/Search/SearchResult/SearchResult.js"
import OnSearch from "../../components/Search/OnSearch/OnSearch.js";
import CategoryTab from "../../components/CategoryTab/CategoryTab.js";
import Button from "../../components/Btn/Button/Button.js";

const CategorySelect = () => {
    const [onsearch, setOnsearch] = useState(false);
    const [keyworld, setKeyworld] = useState("");
    const [result, setResult] = useState(false);

  return (
    <SearchContext.Provider value={{onsearch, setOnsearch, keyworld, setKeyworld, result, setResult}}>
      <div className="categorySelect">
        <SearchBar />
        { onsearch ? ( result === false ? <OnSearch /> : <SearchResult keyworld={keyworld} />) : 
          <div className="selectResult">
            <CategoryTab genre="전략게임" />
          </div>
        }
      </div>
    </SearchContext.Provider>
  );
};

export default CategorySelect;
