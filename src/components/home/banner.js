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
        <>
          {banner.length === 1 ? (
            <>
              {banner.map((item, index) => (
                <a href={item.url} target="_blank" rel="noreferrer" key={index}>
                  <img
                    className="xl:max-h-screen w-screen place-self-center xl:object-cover object-contain"
                    src={item.image}
                    alt="banner"
                  />
                </a>
              ))}
            </>
          ) : (
            <Slider {...settings}>
              {banner.map((item, index) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  className="md:h-screen relative grid-imp"
                >
                  <img
                    className="md:block h-screen w-screen object-cover absolute top-0 left-0 -z-10 blur-2xl opacity-50"
                    src={item.image}
                    alt="blurred background"
                  />
                  <img
                    className="xl:max-h-screen w-screen place-self-center xl:object-cover object-contain"
                    src={item.image}
                    alt="banner"
                  />
                </a>
              ))}
            </Slider>
          )}
        </>
      ) : banner_error ? (
        <p className="text-center">{banner_error}</p>
      ) : (
        <p className="text-center">loading</p>
      )}
    </div>
  );
};

export default Banner;
