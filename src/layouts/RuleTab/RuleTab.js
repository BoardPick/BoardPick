import { useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ThumbNail from "../../components/ThumbNail/ThumbNail";
import { useSlidesPerView } from "../../common/util/useSliderPerView";
import { getBoardGameDetail } from "../../common/axios/api.js";
import { getCategorySelect } from "../../common/axios/categoryselect.js";
import GameVideo from "../GameVideo/GameVideo.js";
import Loading from "../../components/Search/SearchResult/Loading/Loading.js";

const RuleTab = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const gameTabRef = useRef({});
  const [data, setData] = useState({});
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const slidesPerView = useSlidesPerView(gameTabRef);

  useEffect(() => {
    const fetchGameDetail = async () => {
      try {
        const gameData = await getBoardGameDetail(id);
        setData(gameData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGameDetail();
  }, [id]);

  useEffect(() => {
    if (!data.boardGameCategories || data.boardGameCategories.length === 0)
      return;

    const fetchCategoryData = async () => {
      setLoading(true);
      try {
        const categoryData = await getCategorySelect(
          data.boardGameCategories[0]
        );
        setCategoryData(categoryData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [data.boardGameCategories]);

  return (
    <div className="gameTab" ref={gameTabRef}>
      <GameVideo data={data} />
      <article className="similar">
        <h1 className="videoTit">유사한 진행방식의 게임</h1>
        <div className="wrapper">
          {slidesPerView && (
            <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
              {categoryData.map((game, i) => (
                <SwiperSlide
                  key={i}
                  onClick={() => navigate(`/category/${game.id}`)}
                >
                  <ThumbNail
                    type="small"
                    img={game.imageUrl}
                    name={game.name}
                    info={game.description}
                    tags={game.tags}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </article>
    </div>
  );
};

export default RuleTab;
