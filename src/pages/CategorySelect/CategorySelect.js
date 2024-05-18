import { SearchContext } from "../../context/SearchContext.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { useState, useContext } from "react";
import SearchBar from "../../components/Search/SearchBar/SearchBar.js"
import SearchResult from "../../components/Search/SearchResult/SearchResult.js"
import OnSearch from "../../components/Search/OnSearch/OnSearch.js";
import CategoryTab from "../../components/CategoryTab/CategoryTab.js";

const CategorySelectArry = [
  {genre: "전략게임", onSelect: false},
  {genre: "롤플레잉", onSelect: false},
  {genre: "카드게임", onSelect: false},
  {genre: "협력게임", onSelect: false},
  {genre: "추리게임", onSelect: false},
  {genre: "베팅게임", onSelect: false},
  {genre: "마피아", onSelect: false},
  {genre: "기억력", onSelect: false},
  {genre: "순발력", onSelect: false},
  {genre: "기타게임", onSelect: false},
]

const CategorySelect = () => {
    const onSearch = useSelector((state) => state.onSearch);
    const searchResult = useSelector((state) => state.searchResult);
    const log = useContext(SearchContext);

  return (
    <div className="categorySelect">
        <SearchBar />
        { onSearch ? ( searchResult === false ? <OnSearch /> : <SearchResult keyworld={log.searchKeywold} />) : 
          <div className="selectResult">
            <div className="selectBtn">
            <Swiper>
              {CategorySelectArry.map((data, i) => (
                <SwiperSlide key={i} className="swiper-slide-category">
                  <CategoryTab genre={data.genre} type={data.genre === log.selectCategory ? "select" : ""}/>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          </div>
        }
      </div>
  );
};

export default CategorySelect;
