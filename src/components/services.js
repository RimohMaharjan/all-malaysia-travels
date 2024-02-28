import React from "react";
import bgImg from "../assets/images/services.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from "../constants";
import useFetch from "../utils/useFetch";

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
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      <div
        className="bg-fixed bg-center bg-cover h-64 z-[-2]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h1 className="text-center pt-44 text-5xl text-white">Our services</h1>
      </div>

      {services ? (
        <div
          className="w-[85vw] mx-auto pt-20 space-y-8 text-red-900 border-b pb-10"
          style={{ borderBlockColor: "#D9D9D9" }}
        >
          {services.map((item, index) => (
            <>
              <h1 className="text-4xl font-bold">{item.title}</h1>
              <p className="font-light">{item.description}</p>

              <Slider {...settings}>
                <div
                  key={index}
                  className="grayscale hover:grayscale-0 hover:scale-110 transition active:scale-90"
                >
                  {item.service_images.map((service, index) => (
                    <a href={service.url} target="_blank" rel="noreferrer">
                      <img
                        className="md:max-h-16 max-h-12 inline object-contain mx-auto "
                        src={service.image}
                        alt="services"
                      />
                    </a>
                  ))}
                </div>
              </Slider>
            </>
          ))}
        </div>
      ) : services_error ? (
        <p className="text-center">{services_error}</p>
      ) : (
        <p className="text-center">loading</p>
      )}
    </div>
  );
};

export default Services;
