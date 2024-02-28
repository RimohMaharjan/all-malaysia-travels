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

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const { data: banner, error: banner_error } = useFetch(
    `${API_URL}promotional-banners/`
  );

  return (
    <div className="slider-container snap-always snap-start">
      {banner ? (
        <Slider {...settings}>
          {banner.map((item) => (
            <>
              <div>
                <img
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
