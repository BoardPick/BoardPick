import React from 'react'

const SearchBar = () => {

	return (
	<div className="SearchBar">
		{/* <div className="header">카테고리</div> */}
		<div className="searchBox">
			<input type="text" placeholder='PICK 하고싶은 보드게임을 검색해 주세요!' className="input"/>
			<img src="src/assets/icon/search.svg" alt="" className="img"/>
		</div>
	</div>
	);
};

export default SearchBar;
