import { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import ThumbNail from "../../components/ThumbNail/ThumbNail";
import OnSearch from "../../components/Search/OnSearch/OnSearch";
import NoneResult from "../../components/Search/SearchResult/noneResult/NoneResult";
import SearchBar from "../../components/Search/SearchBar/SearchBar";
import Loading from "../../components/Search/SearchResult/Loading/Loading";
import { SearchContext } from "../../context/SearchContext";
import { getSearchResult } from "../../common/axios/search";

const SearchResult = () => {
  const log = useContext(SearchContext);
  const onSearch = useSelector((state) => state.onSearch);

  // 검색 api 호출
  const [searchData, setSearchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const searchData = await getSearchResult(log.searchKeywold);
        setSearchData(searchData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [log.searchKeywold]);

  if (loading) return <Loading />;

  return (
    <div className="searchResult">
      <SearchBar />
      {loading ? (
        <Loading />
      ) : (onSearch ? (<OnSearch />) : (searchData.length == 0 ? (
        <NoneResult value={log.searchKeywold} />
      ) : (
        <div className="Result">
          <div className="message">
            <div className="texts">
              <div className="heads">
                <h1 className="values">'{log.searchKeywold}'</h1>
                <h1 className="h1s">에 대한 검색결과에요!</h1>
              </div>
            </div>
          </div>
          <div className="ResultThumbNail">
            {searchData &&
              searchData.map((data, i) => {
                return (
                  <div className="thumbnail" key={i}>
                    <ThumbNail
                      id={data.id}
                      img={data.imageUrl}
                      name={data.name}
                      info={data.description}
                      tags={data.tags}
                      picked={data.picked}
                      type="big"
                    />
                  </div>
                );
            })}
          </div>
        </div>))
      )}
    </div>
  );
};

export default SearchResult;
