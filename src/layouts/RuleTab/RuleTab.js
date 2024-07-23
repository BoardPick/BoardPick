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

const RuleTab = () => {
  const { id } = useParams();
  const gameTabRef = useRef({});
  const slidesPerView = useSlidesPerView(gameTabRef);
  const [data, setData] = useState({});
  const [similarData, setSimilarData] = useState([]);
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
    <div className="gameTab">
      <GameVideo data={data} />
      <GameSlide
        classNameBox={"similar"}
        classNameTit={"videoTit"}
        title={"유사한 진행방식의 게임"}
        slidesPerView={slidesPerView}
        games={similarData}
      />
    </div>
  );
};

export default RuleTab;
