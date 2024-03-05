import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from "../../constants";
import useFetch from "../../utils/useFetch";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Banner = ({ promotionRef }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const { data: banner, error: banner_error } = useFetch(
    `${API_URL}promotional-banners/`
  );

  return (
    <div ref={promotionRef} className="slider-container snap-always snap-start">
      {banner ? (
        <Slider {...settings}>
          {banner.map((item, index) => (
            <>
              <div>
                <img
                key={index}
                  className="md:h-screen w-screen xl:object-cover object-contain"
                  src={item.image}
                  alt="banner"
                />
              </div>
            </>
          ))}
        </Slider>
      ) : banner_error ? (
        <p className="text-center">{banner_error}</p>
      ) : (
        <p className="text-center">loading</p>
      )}
    </div>
  );
};

export default Banner;
