import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ThumbNail from "../../components/ThumbNail/ThumbNail";
import { useSlidesPerView } from "../../common/util/useSliderPerView";
import { getBoardGameDetail } from "../../common/axios/api.js";
import GameVideo from "../GameVideo/GameVideo.js";

const RuleTab = () => {
  const { id } = useParams();
  const gameTabRef = useRef({});
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const slidesPerView = useSlidesPerView(gameTabRef);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBoardGameDetail(id);
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="gameTab" ref={gameTabRef}>
      <GameVideo data={data} />
      <article className="similar">
        <h1 className="videoTit">유사한 진행방식의 게임</h1>
        <div className="wrapper">
          {slidesPerView && (
            <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
              {[...Array(10)].map((_, i) => (
                <SwiperSlide key={i}>
                  <ThumbNail
                    type="small"
                    img={data.imageUrl}
                    name={data.name}
                    info={data.description}
                    tags={data.tags}
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
