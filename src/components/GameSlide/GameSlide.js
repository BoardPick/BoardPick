import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSlidesPerView } from "../../common/hooks/useSliderPerView";
import { Swiper, SwiperSlide } from "swiper/react";

import ThumbNail from "../../components/ThumbNail/ThumbNail";
import "swiper/css";

const GameSlide = ({ boldTitle, title, games }) => {
  const navigate = useNavigate();
  const gameTabRef = useRef({});
  const slidesPerView = useSlidesPerView(gameTabRef);

  return (
    <article className="gameSlide" ref={gameTabRef}>
      <h1 className="contentTit">
        <strong>{boldTitle}</strong>
        <span>{title}</span>
      </h1>
      <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
        {games &&
          games?.map((game, i) => (
            <SwiperSlide
              key={i}
              onClick={() => navigate(`/category/${game.id}`)}
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
    </article>
  );
};

export default GameSlide;
