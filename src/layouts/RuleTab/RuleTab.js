import { useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSlidesPerView } from "../../common/hooks/useSliderPerView";
import {
  getBoardGameDetail,
  getSimilarBoardGame,
} from "../../common/axios/api.js";
import GameVideo from "../GameVideo/GameVideo.js";
import GameSlide from "../../components/GameSlide/GameSlide.js";

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
        <GameSlide title={"유사한 진행방식의 게임"} games={similarData} />
      </article>
    </div>
  );
};

export default RuleTab;
