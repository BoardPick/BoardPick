import React, { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import btn from "../../../assets/icon/search.svg";

const SearchBar = () => {
	const data = useContext(SearchContext);
	const {onsearch} = useContext(SearchContext);

	const onChange = (event) => {
		data.setKeyworld(event.target.value);
	};

	const onClick = () => {
		data.setOnsearch(!onsearch);
	}

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			data.setResult(true);
			console.log("enter");
		}
	}

	return (
	<div className="SearchBar">
		<div className="searchBox">
			<input type="text" placeholder={'PICK 하고싶은 보드게임을 검색해 주세요!'} className="input" value={data.keyworld} onChange={onChange} onKeyDown={handleKeyDown} onClick={onClick}/>
			<img className="img" src={btn} alt="돋보기" onClick={() => {data.setResult(true)}}/>
		</div>
	</div>
	);
};

export default SearchBar;
