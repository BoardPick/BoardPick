import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const Rank = ({gamedata}) => {

  return (
    <div className="Rank">
		<Swiper>
		{ gamedata && gamedata.map((data, i) => (
			<SwiperSlide key={i} className="swiper-slide-custom">
				<article className="thumImg">
					<img src={data.thumbnailUrl} alt="" />
				</article>
				<article className="thumName">
					<h1 className="num">{i + 1}</h1>
					<article className="text">
						<h1>{data.name}</h1>
						<p>{data.description}</p>
					</article>
				</article>
			</SwiperSlide>
		))}
		</Swiper>
    </div>
  );
};

export default Rank;
