import React from "react";
import { MagnifierCharacter } from "../../../../assets/icon/character/character";


const Loading = () => {

  	return <div className="Loading">
	  <div className="message">
	  	<MagnifierCharacter />
		  <div className="text">
			<div className="head">
			  <h1 className="value">Loading...</h1>
			</div>
			<div className="info">
				<span>
					<p>조금만 기다려주세요!</p>
				</span>
			</div>
		  </div>
	  </div>
  </div>
};

export default Loading;
