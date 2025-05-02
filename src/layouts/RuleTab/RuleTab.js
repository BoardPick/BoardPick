import { useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { useSlidesPerView } from "../../common/hooks/useSliderPerView";
import {
  getBoardGameDetail,
  getSimilarBoardGame,
} from "../../common/axios/api.js";
import ThumbNail from "../../components/ThumbNail/ThumbNail.js";
import GameVideo from "../GameVideo/GameVideo.js";
import GameSlide from "../../components/GameSlide/GameSlide.js";
import Loading from "../../components/Search/SearchResult/Loading/Loading.js";

const RuleTab = () => {
  const { id } = useParams();
  const gameTabRef = useRef({});
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [similarData, setSimilarData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const slidesPerView = useSlidesPerView(gameTabRef);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const gameData = await getBoardGameDetail(id);
        setData(gameData);

        const gameCategories = gameData.boardGameCategories;
        const similarGames = await getSimilarBoardGame(gameCategories, id);
        setSimilarData(similarGames);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGameData();
  }, [id]);

  return (
    <div className="gameTab">
      <GameVideo data={data} />

      <article className="similar">
        <h1 className="videoTit">유사한 진행방식의 게임</h1>
        <div className="wrapper">
          <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
            {similarData?.map((game, i) => (
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
        </div>
      </article>
    </div>
  );
};

export default RuleTab;
