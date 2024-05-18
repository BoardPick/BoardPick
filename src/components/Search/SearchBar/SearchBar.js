import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { SearchContext } from '../../../context/SearchContext';
import btn from "../../../assets/icon/search.svg";

const SearchBar = () => {
	const onSearch = useSelector((state) => state.onSearch);
	const searchResult = useSelector((state) => state.searchResult);
	const dispatch = useDispatch();
	const data = useContext(SearchContext);
	const [tmpKeyword, setTmpKeyword] = useState("");

	const onChange = (event) => {
		setTmpKeyword(event.target.value);
	};

	const onClick = () => {
		dispatch({type: "ON_ONSEARCH"});
	}

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			data.setSearchKeywold(tmpKeyword);
			dispatch({type: "ON_SEARCHRESULT"});
			// console.log("enter");
		}
	}

	const onResult = () => {
		data.setSearchKeywold(tmpKeyword);
		dispatch({type: "ON_SEARCHRESULT"});
	}

	return (
	<div className="SearchBar">
		<div className="searchBox">
			<input type="text" placeholder={'PICK 하고싶은 보드게임을 검색해 주세요!'} className="input" value={tmpKeyword} onChange={onChange} onKeyDown={handleKeyDown} onClick={onClick}/>
			<img className="img" src={btn} alt="돋보기" onClick={onResult}/>
		</div>
	</div>
	);
};

export default SearchBar;
