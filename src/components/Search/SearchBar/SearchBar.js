import React from 'react'
import btn from "../../../assets/icon/search.svg";

const SearchBar = () => {

	return (
	<div className="SearchBar">
		<div className="searchBox">
			<input type="text" placeholder={'PICK 하고싶은 보드게임을 검색해 주세요!'} className="input"/>
			<img className="img" src={btn} alt="돋보기" />
			{/* <Search className="img"/> */}
		</div>
	</div>
	);
};

export default SearchBar;
