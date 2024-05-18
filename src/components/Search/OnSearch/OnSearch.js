import Button from "../../../components/Btn/Button/Button";

const tags = [
    "#검색어1",
    "#검색어2",
    "#검색어3",
    "#검색어4",
    "#검색어5"
  ]

const OnSearch = () => {

    return (
    <div className="recent">
        <h1 className="title">최근 검색어</h1>
        <div className="tags">
            {tags.map((tag, i) => {
                return (<div className="tag" key={i}>
                    <Button key={i} text={tag} size={"s36"} type={"default"}></Button>
                </div>)
            })}
        </div>
    </div>
    )
};

export default OnSearch;
