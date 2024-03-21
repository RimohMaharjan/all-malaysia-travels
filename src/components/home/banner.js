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
  // console.log(banner.length === 3);
  return (
    <div ref={promotionRef} className="slider-container snap-always snap-start">
      {banner ? (
        <div>
          {banner.length === 1 ? (
            <>
              {banner.map((item, index) => (
                <div key={index}>
                  <img
                    className="xl:max-h-screen w-screen place-self-center xl:object-cover object-contain"
                    src={item.image}
                    alt="banner"
                  />
                </div>
              ))}
            </>
          ) : (
            <Slider {...settings}>
              {banner.map((item, index) => (
                <div className="md:h-screen relative grid-imp" key={index}>
                  <img
                    className="md:hidden block h-screen w-screen object-cover absolute top-0 left-0 -z-10 blur-2xl grayscale-[40%]"
                    src={item.image}
                    alt="blurred background"
                  />
                  <img
                    className="xl:max-h-screen w-screen place-self-center xl:object-cover object-contain"
                    src={item.image}
                    alt="banner"
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      ) : banner_error ? (
        <p className="text-center">{banner_error}</p>
      ) : (
        <p className="text-center">loading</p>
      )}
    </div>
  );
};

export default Banner;
