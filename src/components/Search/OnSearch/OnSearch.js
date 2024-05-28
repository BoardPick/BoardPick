import Button from "../../../components/Btn/Button/Button";
import { SearchContext } from "../../../context/SearchContext";
import { useContext } from "react";
import rmv from "../../../assets/icon/keyword_remove.svg";

const OnSearch = () => {
    const data = useContext(SearchContext);

    const rmvKeyword = (keyword) => {
        console.log("test");
        // keyword를 recentKeyword 배열에서 제거
        const updatedKeywords = data.recentKeyword.filter(tag => tag !== keyword);
        console.log(updatedKeywords);
        // updatedKeywords를 setRecentKeyword를 통해 업데이트
        // data.setRecentKeyword(updatedKeywords);
        localStorage.setItem("recentKeyword", JSON.stringify(updatedKeywords));

    }

    return (
    <div className="recent">
        <h1 className="title">최근 검색어</h1>
        { Array.isArray(data.recentKeyword) && data.recentKeyword.length > 0 ? (
            <div className="tags">
                {data.recentKeyword.map((tag, i) => {
                    return (<div className="tag" key={i}>
                        <div className="tagkey">
                            <p className="txt">{tag}</p>
                            <img className="rmv" src={rmv} alt="삭제버튼" onClick={rmvKeyword({tag})}/>
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
