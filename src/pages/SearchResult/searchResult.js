import React from "react";
import { MagnifierCharacter } from "../../assets/icon/character/character";

const SearchResult = () => {

  	return <div className="none">
	<MagnifierCharacter className="img"/>
	  <div className="message">
		  <div className="title">
			  <h2 className="value">‘코드네임’</h2>
			  <h2>에 대한 검색 결과가 없어요.</h2>
		  </div>
		  <div className="info">
			  <span>
			  <p>
				  아직 많은 게임이 준비되어있지 않아요!
			  </p>
			  <p>
				  보드게임을 신청을 해주시면 보드픽이 준비해 놓을게요!
			  </p>
			  </span>
		  </div>
	  </div>
  </div>
};

export default SearchResult;
