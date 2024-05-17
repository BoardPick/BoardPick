import { Swiper } from "swiper/react";
import SearchBar from "../../components/Search/SearchBar/SearchBar";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import Rank from "../../components/ThumbNail/Rank/Rank";
import Banner from "../../components/Banner/Banner"

const Home = () => {

  return <div className="home">
    <SearchBar />
    <Banner />
    <CategoryBox />

    {/* 오늘의 보드픽 랭킹 */}
    <div className="pickRank">
      <div className="miniHeader">
        <h1 className="title">오늘의 보드P!CK 랭킹</h1>
        <p className="info">오늘 가장 많은 P!CK을 받은 게임들만 모아봤어요!</p>
      </div>
      <div className="rankGame">
        <Rank />
      </div>
    </div>
        

  </div>;
};

export default Home;
