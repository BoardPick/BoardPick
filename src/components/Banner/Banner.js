import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImg1 from "../../assets/image/banner/banner1.svg";
import BannerImg2 from "../../assets/image/banner/banner2.svg";
import BannerImg3 from "../../assets/image/banner/banner3.svg";
import { useNavigate } from 'react-router-dom';


const Banner = () => {
  const navigate = useNavigate();

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
          <img src={BannerImg1} alt="banner1" onClick={() => {navigate("/Category/36");}}/>
        </div>
        <div className="banner">
          <img src={BannerImg2} alt="banner2" onClick={() => {navigate("/Category/32");}}/>
        </div>
        <div className="banner">
          <img src={BannerImg3} alt="banner3" onClick={() => {navigate("/Category/46");}}/>
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
