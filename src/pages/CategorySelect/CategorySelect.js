import { SearchContext } from "../../context/SearchContext.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { useState, useContext, useEffect } from "react";
import SearchBar from "../../components/Search/SearchBar/SearchBar.js"
import SearchResult from "../../components/Search/SearchResult/SearchResult.js"
import OnSearch from "../../components/Search/OnSearch/OnSearch.js";
import CategorySelectBtn from "../../components/CategorySelectBtn/CategorySelectBtn.js";
import ThumbNail from "../../components/ThumbNail/ThumbNail.js";
import Loading from "../../components/Search/SearchResult/Loading/Loading.js";
import { getCategorySelect } from "../../common/axios/categoryselect.js";
import { getSearchResult } from "../../common/axios/search.js";

const CategorySelectArry = [
  {id: 0, genre: "전략게임", onSelect: false},
  {id: 1, genre: "롤플레잉", onSelect: false},
  {id: 2, genre: "카드게임", onSelect: false},
  {id: 3, genre: "협력게임", onSelect: false},
  {id: 4, genre: "추리게임", onSelect: false},
  {id: 5, genre: "베팅게임", onSelect: false},
  {id: 6, genre: "마피아", onSelect: false},
  {id: 7, genre: "기억력", onSelect: false},
  {id: 8, genre: "순발력", onSelect: false},
  {id: 9, genre: "기타게임", onSelect: false},
]

const CategorySelect = ({selectCategory}) => {
    const onSearch = useSelector((state) => state.onSearch);
    const searchResult = useSelector((state) => state.searchResult);
    const log = useContext(SearchContext);
  
    const [searchData, setSearchData] = useState(null);
    const [categoryData, setCategoryData] = useState(null);
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
    }, [log.searchKeywold, searchResult]);
  
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const categoryData = await getCategorySelect(selectCategory);
          setCategoryData(categoryData);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [selectCategory]);

  return (
    <div className="categorySelect">
        <SearchBar />
        { onSearch ? ( searchResult === false ? <OnSearch /> : ( loading ? <Loading /> : <SearchResult gamedata={searchData} keyworld={log.searchKeywold}/>)) :
          <div className="selectResult">
            <div className="selectBtn">
            <Swiper>
              {CategorySelectArry.map((d, i) => (
                <SwiperSlide key={i} className="swiper-slide-category">
                  <CategorySelectBtn genre={d.genre} type={d.genre === log.selectCategory ? "select" : ""}/>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="ResultThumbNail">
              {categoryData && categoryData.map((dd, i) => {
                return (<div className="thumbnail" key={i}>
                            <ThumbNail img={dd.imageUrl} name={dd.name} info={dd.description} type="big" />
                        </div>)
              })}
            </div>
            </div>
          </div>
        }
      </div>
  );
};

export default CategorySelect;
