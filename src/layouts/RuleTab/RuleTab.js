import { useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useSlidesPerView } from "../../common/util/useSliderPerView";
import {
  getBoardGameDetail,
  getSimilarBoardGame,
} from "../../common/axios/api.js";

import GameVideo from "../GameVideo/GameVideo.js";
import GameSlide from "../../components/GameSlide/GameSlide.js";
import Loading from "../../components/Search/SearchResult/Loading/Loading.js";
import { useSimilarData } from "../../common/util/useAxios.js";

const RuleTab = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const {
    data: similarData,
    loading: similarLoading,
    error: similarError,
  } = useSimilarData(id);

  if (similarLoading) return <Loading />;
  if (similarError) return console.log(similarError);

  return (
    <div className="gameTab">
      <GameVideo data={data} />
      <GameSlide
        classNameBox={"similar"}
        classNameTit={"videoTit"}
        title={"유사한 진행방식의 게임"}
        games={similarData}
      />
    </div>
  );
};

export default RuleTab;
