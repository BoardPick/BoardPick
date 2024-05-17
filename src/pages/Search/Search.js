import SearchBar from "../../components/Search/SearchBar/SearchBar";
import SearchResult from "../../components/Search/SearchResult/SearchResult";
import Button from "../../components/Btn/Button/Button.js";
import { useState } from 'react';

const tags = [
    "#검색어1",
    "#검색어2",
    "#검색어3",
    "#검색어4",
    "#검색어5"
  ]

const Search = () => {
    const [onsearch, setOnsearch] = useState(false);

    return (
    <div className="search">
        <SearchBar />
        {onsearch === true ? <SearchResult keyworld={"검색 키워드"}/> :
        <div className="recent">
        <h1 className="title">최근 검색어</h1>
        <div className="tags">
            {tags.map((tag, i) => {
                return (<div className="tag">
                    <Button key={i} text={tag} size={"s36"} type={"default"}></Button>
                </div>)
            })}
        </div>
        </div>
        }
    </div>
    );
};

export default Search;
