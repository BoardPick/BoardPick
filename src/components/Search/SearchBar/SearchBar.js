import React, { useState } from 'react'
import btn from "../../../assets/icon/search.svg";

const SearchBar = () => {
	const [value, setValue] = useState("");

	const onChange = (event) => {
		setValue(event.target.value);
	};

	// const onClick = () => {
	// 	// setSearch(value);
	// 	console.log("click!");
	// }

	// const handleKeyDown = (event) => {
	// 	if (event.key === "Enter") {
	// 		// setSearch(value);
	// 		console.log("search!");
	// 	}
	// }

	return (
	<div className="SearchBar">
		<div className="searchBox">
			<input type="text" placeholder={'PICK 하고싶은 보드게임을 검색해 주세요!'} className="input" value={value} onChange={onChange}/>
			<img className="img" src={btn} alt="돋보기"/>
		</div>
	</div>
	);
};

export default SearchBar;
