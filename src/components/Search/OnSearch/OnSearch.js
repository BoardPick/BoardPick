import Button from "../../../components/Btn/Button/Button";
import { SearchContext } from "../../../context/SearchContext";
import { useContext } from "react";

const OnSearch = () => {
    const data = useContext(SearchContext);

    return (
    <div className="recent">
        <h1 className="title">최근 검색어</h1>
        { Array.isArray(data.recentKeyword) && data.recentKeyword.length > 0 ? (
            <div className="tags">
                {data.recentKeyword.slice(0, 10).map((tag, i) => {
                    return (<div className="tag" key={i}>
                        <Button key={i} text={tag} size={"s36"} type={"default"}></Button>
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
