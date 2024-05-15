import { Swiper, SwiperSlide } from "swiper/react";
import { GameTabs } from "../../../../assets/data/gameTab";
import "swiper/css";
import ThumbNail from "../../../../components/ThumbNail/ThumbNail";
const RuleTab = () => {
  return (
    <div className="gameTab">
      {GameTabs.map((tab, i) => (
        <section className="gameVideo" key={i}>
          <h1 className="videoTit">{tab.videoTit}</h1>
          {tab.videoCon}
        </section>
      ))}
      <article className="gameVideo">
        <h1 className="videoTit">유사한 진행방식의 게임</h1>
        <div className="wrapper">
          <Swiper slidesPerView={3} className="mySwiper">
            <SwiperSlide>
              <ThumbNail
                type={"small"}
                // id={i}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ThumbNail
                type={"small"}
                // id={i}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ThumbNail
                type={"small"}
                // id={i}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ThumbNail
                type={"small"}
                // id={i}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ThumbNail
                type={"small"}
                // id={i}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ThumbNail
                type={"small"}
                // id={i}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </article>
    </div>
  );
};

export default RuleTab;
