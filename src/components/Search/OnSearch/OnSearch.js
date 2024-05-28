import Button from "../../../components/Btn/Button/Button";
import { SearchContext } from "../../../context/SearchContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import rmv from "../../../assets/icon/keyword_remove.svg";

const OnSearch = () => {
    const data = useContext(SearchContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedTag, setSelectedTag] = useState(null);

    const rmvKeyword = (keyword) => {
        console.log("test");
        // keyword를 recentKeyword 배열에서 제거
        const updatedKeywords = data.recentKeyword.filter(tag => tag !== keyword);
        console.log(updatedKeywords);
        // updatedKeywords를 setRecentKeyword를 통해 업데이트
        data.setRecentKeyword(updatedKeywords);
        localStorage.setItem("recentKeyword", JSON.stringify(updatedKeywords));
    }

    const tagClick = ( tag ) => {
        setSelectedTag(tag);
    }

    useEffect(() => {
        if (selectedTag) {
            navigate(`/search/${selectedTag}`);
            dispatch({ type: "OFF_ONSEARCH" });
        }
    }, [selectedTag]);

    const removeAllKeywords = () => {
        data.setRecentKeyword([]);
        localStorage.setItem("recentKeyword", JSON.stringify([]));
    }

    return (
    <div className="recent">
        <div className="head">
            <h1 className="title">최근 검색어</h1>
            <p className="allrmv" onClick={removeAllKeywords} >모두 삭제</p>
        </div>
        { Array.isArray(data.recentKeyword) && data.recentKeyword.length > 0 ? (
            <div className="tags">
                {data.recentKeyword.slice(0,10).map((tag, i) => {
                    return (<div className="tag" key={i}>
                        <div className="tagkey">
                            <p className="txt" onClick={() => {tagClick(tag)}}>{tag}</p>
                            <img className="rmv" src={rmv} alt="삭제버튼" onClick={() => {rmvKeyword(tag)}}/>
                        </div>
                        {/* <Button key={i} text={tag} size={"s36"} type={"default"} remove="true"></Button> */}
                    </div>)
                })}
            </div>
            )
        : <p>최근 검색어 내용이 없어요!</p>
        }
    </div>
    )
};

export default OnSearch;
