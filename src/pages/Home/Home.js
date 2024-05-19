import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SearchContext } from "../../context/SearchContext.js";
import SearchBar from "../../components/Search/SearchBar/SearchBar";
import SearchResult from "../../components/Search/SearchResult/SearchResult.js";
import OnSearch from "../../components/Search/OnSearch/OnSearch.js";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import Rank from "../../components/ThumbNail/Rank/Rank";
import Banner from "../../components/Banner/Banner";
import ThumbNail from "../../components/ThumbNail/ThumbNail";
import Loading from "../../components/Search/SearchResult/Loading/Loading.js";
import { useSlidesPerView } from "../../common/util/useSliderPerView";
import { getSearchResult } from "../../common/axios/search.js";
import { getRankData } from "../../common/axios/rank.js";
import { getRecommandData } from "../../common/axios/recommand.js";

const Home = () => {
  const onSearch = useSelector((state) => state.onSearch);
  const log = useContext(SearchContext);
  const gameTabRef = useRef(null);
  const slidesPerView = useSlidesPerView(gameTabRef);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getSearchResult(log.searchKeyword);
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    if (onSearch) fetchData();
  }, [onSearch, log.searchKeyword]);

  const [rankData, setRankData] = useState(null);
  useEffect(() => {
    const fetchRankData = async () => {
      setLoading(true);
      try {
        const result = await getRankData();
        setRankData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchRankData();
  }, []);

  const [recommandData, setRecommandData] = useState(null);
  useEffect(() => {
    const fetchRecommandData = async () => {
      setLoading(true);
      try {
        const result = await getRecommandData();
        setRecommandData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchRecommandData();
  }, []);

  return (
    <div className="home">
      <SearchBar />
      {onSearch ? (
        <div>
          {loading ? (
            <Loading />
          ) : (
            <SearchResult gamedata={data} keyword={log.searchKeyword} />
          )}
        </div>
      ) : (
        <div>
          <Banner />
          <CategoryBox />

          <article className="recommand">
            <div className="title">
              <div className="firstline">
                <h1 className="name">'스위프'</h1>
                <h1>회원님이</h1>
              </div>
              <h2>관심 있어 할만한 보드게임</h2>
            </div>
            <div className="slide" ref={gameTabRef}>
              <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
                {recommandData &&
                  recommandData.map((r, i) => (
                    <SwiperSlide key={i}>
                      <ThumbNail
                        id={r.id}
                        img={r.imageUrl}
                        name={r.name}
                        info={r.description}
                        tags={r.tags}
                        type="small"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </article>

          <div className="pickRank">
            <div className="miniHeader">
              <h1 className="title">오늘의 보드P!CK 랭킹</h1>
              <p className="info">
                오늘 가장 많은 P!CK을 받은 게임들만 모아봤어요!
              </p>
            </div>
            <div className="rankGame">
              <Rank gamedata={rankData} />
            </div>
          </div>

          <div className="all-curation">
            {[...Array(3)].map((_, index) => (
              <article className="curation" key={index}>
                <div className="title">
                  <h1>#초보자도 쉽게 즐기는</h1>
                  <h2>보드게임</h2>
                </div>
                <div className="wrapper" ref={gameTabRef}>
                  <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
                    {[...Array(10)].map((_, i) => (
                      <SwiperSlide key={i}>
                        <ThumbNail type="small" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
