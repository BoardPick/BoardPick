import React from "react";
import NoneResult from "./noneResult/NoneResult";
import ThumbNail from "../../ThumbNail/ThumbNail";

const SearchResult = ({ gamedata, keyworld }) => {
	console.log(gamedata);
	// const SEARCH_LIST = useMemo(() => {
    //     console.log(imgSelector);
    //     if (imgSelector.state === "hasValue") {
    //         const result = imgSelector.contents.results.map((card) => {
    //             return <ThumbNail key={card.id} type="big"/>
    //         })
    //         return result;
    //     }
    //     else {
    //         return <Loading />
    //     }
    // }, [imgSelector])

  	return <div className="searchResult">
		{gamedata.length == 0 ? <NoneResult value={keyworld} /> 
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
				{gamedata.map((data, i) => {
                      return (<div className="thumbnail" key={i}>
                        <ThumbNail img={data.imageUrl} name={data.name} info={data.description} tags={data.tags} type="big" />
                      </div>)
                  })}
				{/* <ThumbNail type="big" />
				<ThumbNail type="big" />
				<ThumbNail type="big" />
				<ThumbNail type="big" />
				<ThumbNail type="big" />
				<ThumbNail type="big" /> */}
				{/* {SEARCH_LIST} */}
			</div>
		</div>}
	</div>
};

export default SearchResult;
