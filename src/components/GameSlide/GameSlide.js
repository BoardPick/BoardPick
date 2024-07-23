import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSlidesPerView } from "../../common/util/useSliderPerView";
import { Swiper, SwiperSlide } from "swiper/react";

import ThumbNail from "../../components/ThumbNail/ThumbNail";
import "swiper/css";

const GameSlide = ({ classNameBox, classNameTit, title, games }) => {
  const navigate = useNavigate();
  const gameTabRef = useRef({});
  const slidesPerView = useSlidesPerView(gameTabRef);
  return (
    <article className={classNameBox} ref={gameTabRef}>
      <h1 className={classNameTit}>{title}</h1>
      <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
        {games.map((game, i) => (
          <SwiperSlide key={i} onClick={() => navigate(`/category/${game.id}`)}>
            <ThumbNail
              type="small"
              id={game.id}
              img={game.imageUrl}
              name={game.name}
              info={game.description}
              tags={game.tags}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default GameSlide;
