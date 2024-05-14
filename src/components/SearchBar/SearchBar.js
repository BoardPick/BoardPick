import React from 'react'
// import { useState } from 'react'
// import { Search } from "../../assets/icon/icon.js";

const SearchBar = () => {
	// const [text, setText] = useState("");

// 	const onChange = (event) => {
// 		setText(event.target.value);
// 	}

// 	const onSearch = () => {
// 		// setSearch(text)
// 	}

// 	const handleKeyDown = (event) => {
// 		if (event.key === "Enter") {
// 				// setSearch(text);
// 			}
// 		}

	return (
	<div className="SearchBar">
		<div className="searchBox">
			<input type="text" placeholder='PICK 하고싶은 보드게임을 검색해 주세요!' className="input" />
			<img className="img" src="src/assets/icon/search.svg" alt="" />
			{/* <Search className="img"/> */}
		</div>
	</div>
	);
};

export default SearchBar;
