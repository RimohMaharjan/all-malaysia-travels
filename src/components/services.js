import React from "react";
import bgImg from "../assets/images/services.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from "../constants";
import useFetch from "../utils/useFetch";

const Services = () => {
  let texts = [
    {
      heading: "Travel",
      text: "At Chariot Travels, we are dedicated to providing an array of premium travel services that cater to the unique desires and preferences of our clients. From tailor-made vacation packages and seamless booking experiences to personalized itinerary planning and attentive customer support, our commitment to excellence ensures that every journey is nothing short of extraordinary. An adventurous expedition and our comprehensive range of travel services is designed to turn your travel aspirations into reality, creating unforgettable memories along the way.",
    },
    {
      heading: "Hotel",
      text: "At our hotel, we pride ourselves on delivering exceptional services that cater to the diverse needs of our guests. From luxurious accommodations and world-class dining to attentive concierge assistance and state-of-the-art amenities, our commitment to excellence ensures that every aspect of your stay is nothing short of extraordinary. Whether you're seeking relaxation, adventure, or seamless business travel, our range of services is designed to elevate your experience and create lasting memories.",
    },
    {
      heading: "Remittance",
      text: "At our remittance, we are dedicated to providing reliable and efficient remittance services that cater to the diverse needs of our clients. Our commitment to excellence ensures secure and timely money transfers, competitive exchange rates, and personalized assistance to meet the financial needs of our customers. Sending money to support your loved ones, conducting business transactions, or managing international payments, our comprehensive range of remittance services is designed to provide peace of mind and convenience, allowing you to stay connected with your global financial commitments.",
    },
  ];

  const { data: products, error: products_error } = useFetch(
    `${API_URL}products/`
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

      {texts.map((item) => (
        <div
          className="w-[85vw] mx-auto pt-20 space-y-8 text-red-900 border-b pb-10"
          style={{ borderBlockColor: "#D9D9D9" }}
        >
          <h1 className="text-4xl font-bold">{item.heading}</h1>
          <p className="font-light">{item.text}</p>
          {products ? (
            <Slider {...settings}>
              {products.map((item, index) => (
                <div
                  key={index}
                  className="grayscale hover:grayscale-0 hover:scale-110 transition active:scale-90"
                >
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <img
                      className="md:max-h-16 max-h-12 inline object-contain mx-auto "
                      src={item.logo}
                    />
                  </a>
                </div>
              ))}
            </Slider>
          ) : products_error ? (
            <p className="text-center">{products_error}</p>
          ) : (
            <p className="text-center">loading</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Services;
