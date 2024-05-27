import { useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ThumbNail from "../../components/ThumbNail/ThumbNail";
import { useSlidesPerView } from "../../common/util/useSliderPerView";
import { getBoardGameDetail } from "../../common/axios/api.js";
import { getCategorySelect } from "../../common/axios/categoryselect.js";
import GameVideo from "../GameVideo/GameVideo.js";
import { getSimilarBoardGame } from "../../common/axios/api.js";
import Loading from "../../components/Search/SearchResult/Loading/Loading.js";

const RuleTab = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const gameTabRef = useRef({});
  const [data, setData] = useState({});
  const [similarData, setSimilarData] = useState([]);
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
    const getSimilarData = async () => {
      if (!id) return;
      try {
        const similarData = await getSimilarBoardGame(id);
        setSimilarData(similarData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getSimilarData();
  }, [id]);

  return (
    <div className="gameTab" ref={gameTabRef}>
      <GameVideo data={data} />
      <article className="similar">
        <h1 className="videoTit">유사한 진행방식의 게임</h1>
        <div className="wrapper">
          {slidesPerView && (
            <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
              {similarData.map((game, i) => (
                <SwiperSlide
                  key={i}
                  onClick={() => {
                    navigate(`/category/${game.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <ThumbNail
                    type="small"
                    id={game.id}
                    img={game.imageUrl}
                    name={game.name}
                    info={game.description}
                    tags={game.tags}
                    picked={game.picked}
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
