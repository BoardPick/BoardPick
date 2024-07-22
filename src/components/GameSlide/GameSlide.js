import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import ThumbNail from "../../components/ThumbNail/ThumbNail";
import "swiper/css";

const GameSlide = ({ className, slidesPerView, title, games }) => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className={className}>{title}</h1>
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
    </>
  );
};

export default GameSlide;
