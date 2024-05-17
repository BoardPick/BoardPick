import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const Rank = () => {

  return (
    <div className="Rank">
		<Swiper>
		{[...Array(2)].map((_, i) => (
			<SwiperSlide key={i} className="swiper-slide-custom">
				<article className="thumImg">
					<img src="http://placehold.it/39X46" alt="" />
				</article>
				<article className="thumName">
					<h1 className="num">{i + 1}</h1>
					<article className="text">
						<h1>보드게임 타이틀</h1>
						<p>보드게임 설명 텍스트 영역입니다.</p>
					</article>
				</article>
			</SwiperSlide>
		))}
		</Swiper>
    </div>
  );
};

export default Rank;
