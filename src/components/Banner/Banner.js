import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImg1 from "../../assets/image/banner/banner1.svg";
import BannerImg2 from "../../assets/image/banner/banner2.svg";
import BannerImg3 from "../../assets/image/banner/banner3.svg";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: false,
  };

  return (
    <section className="section">
      <Slider {...settings}>
        <div className="banner">
          <img src={BannerImg1} alt="banner1" />
        </div>
        <div className="banner">
          <img src={BannerImg2} alt="banner2" />
        </div>
        <div className="banner">
          <img src={BannerImg3} alt="banner3" />
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
