import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GameTabs } from "../../assets/data/gameTab";
import "swiper/css";
import ThumbNail from "../../components/ThumbNail/ThumbNail";
import { useSlidesPerView } from "../../common/util/useSliderPerView";

const RuleTab = () => {
  const gameTabRef = useRef(null);
  const slidesPerView = useSlidesPerView(gameTabRef);

  return (
    <div className="gameTab" ref={gameTabRef}>
      {GameTabs.map((tab, i) => (
        <section className="gameVideo" key={i}>
          <h1 className="videoTit">{tab.videoTit}</h1>
          <div className="videoWrap">
            <iframe
              src={tab.videoCon}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      ))}
      <article className="similar">
        <h1 className="videoTit">유사한 진행방식의 게임</h1>
        <div className="wrapper">
          {slidesPerView && (
            <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
              {[...Array(10)].map((_, i) => (
                <SwiperSlide key={i}>
                  <ThumbNail type="small" />
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
