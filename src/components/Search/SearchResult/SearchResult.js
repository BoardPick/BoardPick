import React from "react";
import NoneResult from "./noneResult/NoneResult";

const SearchResult = ({ games, keyworld }) => {

  	return <div className="searchResult">
		{keyworld ? <NoneResult value={keyworld} key={keyworld}/> 
			: <div>검색결과:{games}</div>}
	</div>
};

export default SearchResult;
