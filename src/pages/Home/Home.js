import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../../components/Search/SearchBar/SearchBar";
import OnSearch from "../../components/Search/OnSearch/OnSearch.js";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import Rank from "../../components/ThumbNail/Rank/Rank";
import Banner from "../../components/Banner/Banner";
import ThumbNail from "../../components/ThumbNail/ThumbNail";
import Loading from "../../components/Search/SearchResult/Loading/Loading.js";
import { useSlidesPerView } from "../../common/hooks/useSliderPerView";
import { getRankData } from "../../common/axios/rank.js";
import {
  getDuoData,
  getPlayersData,
  getDifficultyData,
} from "../../common/axios/recommand.js";
import { getRecsGame } from "../../common/axios/api.js";
import GameSlide from "../../components/GameSlide/GameSlide.js";

const Home = ({ logData }) => {
  const onSearch = useSelector((state) => state.onSearch);
  const gameTabRef = useRef({});
  const slidesPerView = useSlidesPerView(gameTabRef);
  const todayPickRef = useRef({});
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 랭킹 api 호출
  const [rankData, setRankData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const rankData = await getRankData();
        setRankData(rankData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 추천 api 호출
  const [recommandData, setRecommandData] = useState(null);
  const myPickData = JSON.parse(localStorage.getItem("pick")) || [];
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const recommandData = await getRecsGame(myPickData);
        setRecommandData(recommandData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 둘이서 하기 좋은 게임 api 호출
  const [duoData, setDuoData] = useState(null);
  const fetchDuoData = async () => {
    setLoading(true);
    try {
      const data = await getDuoData();
      setDuoData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useMemo(() => {
    fetchDuoData();
  }, []);

  // 초보자도 쉽게 즐기는 게임 api 호출
  const [easyData, setEasyData] = useState(null);
  const fetchEasyData = async () => {
    setLoading(true);
    try {
      const data = await getDifficultyData();
      setEasyData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useMemo(() => {
    fetchEasyData();
  }, []);

  // 단체가 하기 좋은 게임 api 호출
  const [teamData, setTeamData] = useState(null);
  const fetchTeamData = async () => {
    setLoading(true);
    try {
      const data = await getPlayersData();
      setTeamData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useMemo(() => {
    fetchTeamData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  // 리턴값
  return (
    <div className="home">
      <SearchBar />
      {loading ? (
        <Loading />
      ) : onSearch ? (
        <OnSearch />
      ) : (
        <div>
          <Banner />
          <CategoryBox />

          {/* 관심있어 할 만한 보드게임 */}
          {/* {!isLoggedIn ? ( */}
          <div>
            {recommandData && (
              <article className="recommand">
                <GameSlide
                  title={
                    <div className="title">
                      <div className="firstline">
                        <h1 className="name">
                          {logData ? logData.nickname : "사용자"}
                        </h1>
                        <h1>회원님이</h1>
                      </div>
                      <h2>관심 있어 할만한 보드게임</h2>
                    </div>
                  }
                  games={recommandData}
                />
              </article>
            )}
            {/* 오늘의 보드픽 랭킹 */}
            {rankData && (
              <div className="pickRank">
                <div className="miniHeader">
                  <h1 className="title">오늘의 보드P!CK 랭킹</h1>
                  <p className="info">
                    오늘 가장 많은 P!CK을 받은 게임들만 모아봤어요!
                  </p>
                </div>
                <div className="rankGame">
                  <div className="todayPick" ref={todayPickRef}>
                    <Swiper slidesPerView={1.3} spaceBetween={12}>
                      <SwiperSlide>
                        <Rank gamedata={rankData.slice(0, 5)} start={1} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Rank gamedata={rankData.slice(5, 10)} start={6} />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            )}
            {/* 큐레이션 */}
            <div className="all-curation">
              {duoData && (
                <article className="curation">
                  <GameSlide
                    title={
                      <div className="title">
                        <h1>#둘이서 하기 좋은</h1>
                        <h2>보드게임</h2>
                      </div>
                    }
                    games={duoData}
                  />
                </article>
              )}
              {easyData && (
                <article className="curation">
                  <GameSlide
                    title={
                      <div className="title">
                        <h1>#초보자도 쉽게 즐기는</h1>
                        <h2>보드게임</h2>
                      </div>
                    }
                    games={easyData}
                  />
                </article>
              )}
              {teamData && (
                <article className="curation">
                  <GameSlide
                    title={
                      <div className="title">
                        <h1>#단체가 하기 좋은</h1>
                        <h2>보드게임</h2>
                      </div>
                    }
                    games={teamData}
                  />
                </article>
              )}
            </div>
          </div>
          {/* ) : (
            //비로그인시
            <article className="recommand-visitor">
              <div className="title">
                <div className="firstline">
                  <h1 className="name">보드PICK</h1>
                  <h1>추천 보드게임</h1>
                </div>
              </div>
              <div className="slide" ref={gameTabRef}>
                <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
                  {TeamData &&
                    TeamData.map((r, i) => (
                      <SwiperSlide key={i}>
                        <ThumbNail
                          id={r.id}
                          img={r.imageUrl}
                          name={r.name}
                          info={r.description}
                          tags={r.tags}
                          picked={r.picked}
                          type="small"
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </article>
          )} */}
        </div>
      )}
    </div>
  );
};

export default Home;
