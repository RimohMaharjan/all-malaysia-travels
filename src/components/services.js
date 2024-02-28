import React from "react";
import bgImg from "../assets/images/services.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from "../constants";
import useFetch from "../utils/useFetch";
import Footer from "../components/general/footer";

const Services = () => {
  const { data: services, error: services_error } = useFetch(
    `${API_URL}services/`
  );

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div
        className="grid place-content-center bg-fixed bg-center bg-cover h-64 z-[-2]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h1 className="pt-20 text-5xl text-white">Our services</h1>
      </div>

      {services ? (
        <div
          className="w-[85vw] mx-auto pt-20 text-red-900 border-b pb-20"
          style={{ borderBlockColor: "#D9D9D9" }}
        >
          {services.map((item, index) => (
            <div className="py-10 border-b-2 m-0" key={index}>
              <h1 className="text-4xl font-bold mb-5">{item.title}</h1>
              <p className="font-light mb-5">{item.description}</p>
              <Slider {...settings}>
                {item.service_images.map((product, index) => (
                  <div className="grayscale hover:grayscale-0 hover:scale-110 transition active:scale-90 pt-10">
                    <a
                      key={index}
                      href={product.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="2xl:h-16 h-20 inline object-contain mx-auto px-5"
                        src={product.image}
                        alt="services"
                      />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      ) : services_error ? (
        <p className="text-center min-h-[64.4vh]">{services_error}</p>
      ) : (
        <p className="text-center min-h-[64.4vh]">loading</p>
      )}
      <Footer />
    </div>
  );
};

export default Services;
