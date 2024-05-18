import { SearchContext } from "../../context/SearchContext.js";
import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../../components/Search/SearchBar/SearchBar.js"
import SearchResult from "../../components/Search/SearchResult/SearchResult.js"
import OnSearch from "../../components/Search/OnSearch/OnSearch.js";
import CategoryBox from "../../components/CategoryBox/CategoryBox.js"
import Button from "../../components/Btn/Button/Button.js";
import Loading from "../../components/Search/SearchResult/Loading/Loading.js";
import { getSearchResult } from "../../common/axios/search.js";

const Category = () => {
  const onSearch = useSelector((state) => state.onSearch);
  const searchResult = useSelector((state) => state.searchResult);
  const log = useContext(SearchContext);

  // console.log("test");
  // console.log(getSearchResult(log.searchKeywold));
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const tags = [
    "#보드게임1",
    "#보드게임2",
    "#보드게임3",
    "#보드게임4",
    "#보드게임5"
  ]

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getSearchResult(log.searchKeywold);
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [log.searchKeywold, searchResult]);

  return (
    <div className="Categorys">
        <SearchBar />
        { onSearch ? ( searchResult === false ? <OnSearch /> : ( loading ? <Loading /> : <SearchResult gamedata={data} keyworld={log.searchKeywold}/>)) : 
          <div className="wrapper">
            <CategoryBox />
            <div className="HotTag">
              <h1 className="title">가장 핫한 보드게임</h1>
              <div className="tags">
                  {tags.map((tag, i) => {
                      return (<div className="tag">
                        <Button key={i} text={tag} size={"s36"} type={"default"}></Button>
                      </div>)
                  })}
              </div>
            </div>
          </div>
        }
      </div>
  );
};

export default Category;
