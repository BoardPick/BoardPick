import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import btn from "../../../assets/icon/search.svg";

const SearchBar = () => {
	const navigate = useNavigate();
	const [value, setValue] = useState("");
	const url = "/search";

	const onChange = (event) => {
		setValue(event.target.value);
	};

	const onClick = () => {
		navigate(url);
	}

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			// setSearch();
			console.log("enter!");
		}
	}

	return (
	<div className="SearchBar">
		<div className="searchBox">
			<input type="text" placeholder={'PICK 하고싶은 보드게임을 검색해 주세요!'} className="input" value={value} onChange={onChange} handleKeyDown={handleKeyDown} onClick={onClick}/>
			<img className="img" src={btn} alt="돋보기" onClick={onClick}/>
		</div>
	</div>
	);
};

export default SearchBar;
