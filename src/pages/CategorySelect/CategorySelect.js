import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

import SearchBar from "../../components/Search/SearchBar/SearchBar.js";
import OnSearch from "../../components/Search/OnSearch/OnSearch.js";
import CategorySelectBtn from "../../components/CategorySelectBtn/CategorySelectBtn.js";
import ThumbNail from "../../components/ThumbNail/ThumbNail.js";
import Loading from "../../components/Search/SearchResult/Loading/Loading.js";
import { getCategorySelect } from "../../common/axios/categoryselect.js";
import { useSlidesPerView } from "../../common/hooks/useSliderPerView";

const CategorySelectArry = [
  { id: 0, genre: "전략게임", onSelect: false },
  { id: 1, genre: "롤플레잉", onSelect: false },
  { id: 2, genre: "카드게임", onSelect: false },
  { id: 3, genre: "협력게임", onSelect: false },
  { id: 4, genre: "추리게임", onSelect: false },
  { id: 5, genre: "배팅게임", onSelect: false },
  { id: 6, genre: "마피아", onSelect: false },
  { id: 7, genre: "기억력", onSelect: false },
  { id: 8, genre: "순발력", onSelect: false },
  { id: 9, genre: "기타게임", onSelect: false },
];

const CategorySelect = () => {
  const onSearch = useSelector((state) => state.onSearch);
  // const log = useContext(SearchContext);
  // const selectCategory = useSelector((state) => state.selectCategory);
  // const dispatch = useDispatch();
  const { name } = useParams();
  const categoryTabRef = useRef({});

  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log(name);
      setLoading(true);
      try {
        const categoryData = await getCategorySelect(name);
        setCategoryData(categoryData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  // log.selectCategory와 일치하는 요소를 먼저 가져오기
  const selectedCategory = CategorySelectArry.filter((d) => d.genre === name);
  // log.selectCategory와 일치하지 않는 나머지 요소들을 가져오기
  const otherCategories = CategorySelectArry.filter((d) => d.genre !== name);
  // 선택된 요소를 맨 앞으로 배치하고 나머지를 뒤에 추가한 새로운 배열 생성
  const sortedCategories = selectedCategory.concat(otherCategories);

  if (loading) return <Loading />;

  return (
    <div className="categorySelect">
      <SearchBar />
      {loading ? (
        <Loading />
      ) : onSearch ? (
        <OnSearch />
      ) : (
        <div className="selectResult">
          <div className="selectBtn" ref={categoryTabRef}>
            <Swiper
              slidesPerView={3.3}
              spaceBetween={8}
              breakpoints={{ 520: { slidesPerView: 5 } }}
            >
              {sortedCategories.map((d, i) => (
                <SwiperSlide key={i} className="swiper-slide-category">
                  <CategorySelectBtn
                    genre={d.genre}
                    type={d.genre === name ? "select" : ""}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="categoryThumbNail">
            {categoryData &&
              categoryData.map((dd, i) => {
                return (
                  <ThumbNail
                    key={i}
                    id={dd.id}
                    img={dd.imageUrl}
                    name={dd.name}
                    info={dd.description}
                    tags={dd.tags}
                    picked={dd.picked}
                    type="big"
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySelect;
