import React from "react";
import NoneResult from "./noneResult/NoneResult";
import ThumbNail from "../../ThumbNail/ThumbNail";

const SearchResult = ({ games, keyworld }) => {

  	return <div className="searchResult">
		{keyworld !== "검색 키워드" ? <NoneResult value={keyworld} /> 
		: <div className="Result">
			<div className="message">
				<div className="text">
				  <div className="head">
					<h1 className="value">'{keyworld}'</h1>
					<h1 className="h1">에 대한 검색결과에요!</h1>
				  </div>
				</div>
			</div>
			<div className="ResultThumbNail">
				<ThumbNail type="small" />
				{/* <div className="wrapper">
					{games.map((_, i) => (
						<ThumbNail type="small" key={i}/>
					))}
				</div> */}
			</div>
		</div>}
	</div>
};

export default SearchResult;
