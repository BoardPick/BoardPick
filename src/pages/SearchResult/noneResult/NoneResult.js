import React from "react";
import { MagnifierCharacter } from "../../../assets/icon/character/character";

const noneResult = ({icon, value, h1, p1, p2}) => {

  	return <div className="searchResult">
	  <div className="message">
		{icon}
		  <div className="text">
			<div className="head">
			  <h1 className="value">'{value}'</h1>
			  <h1 className="h1">{h1}</h1>
			</div>
			<div className="info">
				<span>
					<p>{p1}</p>
					<p>{p2}</p>
				</span>
			</div>
		  </div>
	  </div>
  </div>
};

noneResult.defaultProps = {
	icon: <MagnifierCharacter />,
	value: "코드네임",
	h1: "에 대한 검색결과가 없어요.",
	p1: "아직 많은 보드게임이 준비되어 있지 않습니다!",
	p2: "조만간 보드게임에서 만나보실 수 있어요!",
  };

export default noneResult;
