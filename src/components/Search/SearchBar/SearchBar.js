import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchContext } from "../../../context/SearchContext";
import { useNavigate } from "react-router-dom";
import btn from "../../../assets/icon/search.svg";
import rmv from "../../../assets/icon/remove.svg"

const SearchBar = () => {
  const navigate = useNavigate();
  const onSearch = useSelector((state) => state.onSearch);
  const searchResult = useSelector((state) => state.searchResult);
  const dispatch = useDispatch();
  const data = useContext(SearchContext);
  const [tmpKeyword, setTmpKeyword] = useState("");

  const onChange = (event) => {
    setTmpKeyword(event.target.value);
  };

  const onClick = () => {
    dispatch({ type: "ON_ONSEARCH" });
  };

  const setResultPage = () => {
    if (tmpKeyword === "")
        return ;
    data.setSearchKeywold(tmpKeyword);
  
    const updatedRecentKeyword = [tmpKeyword, ...data.recentKeyword];

    if (updatedRecentKeyword.length > 10) {
      updatedRecentKeyword.pop();
    }

    window.localStorage.setItem(
      'recentKeyword',
      JSON.stringify(updatedRecentKeyword)
    );
    data.setRecentKeyword(updatedRecentKeyword);

    navigate(`/search/${tmpKeyword}`);
    dispatch({ type: "OFF_ONSEARCH" });
  };

  const rmvInput = () => {
    setTmpKeyword("");
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.isComposing || e.keyCode === 229) return;
      setResultPage();
    }
  };

  const onResult = () => {
    setResultPage();
  }

  return (
    <div className="SearchBar">
      <div className="searchBox">
        <input
          type="text"
          placeholder={"PICK 하고싶은 보드게임을 검색해 주세요!"}
          className="input"
          value={tmpKeyword}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          onClick={onClick}
        />
        {onSearch && <img className="rmv" src={rmv} alt="삭제버튼" onClick={rmvInput} /> }
        <img className="img" src={btn} alt="돋보기" onClick={onResult} />
      </div>
    </div>
  );
};

export default SearchBar;
