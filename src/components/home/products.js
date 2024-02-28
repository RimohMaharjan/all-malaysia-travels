import React from "react";
import { API_URL } from "../../constants";
import useFetch from "../../utils/useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "./contactForm";

const Products = () => {
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
    <div
      className="snap-always snap-start pt-10 px-5"
      style={{ backgroundColor: "#F6F6F6" }}
    >
      <h1
        className="md:text-center md:text-5xl text-4xl md:pt-20 pb-16"
        style={{ color: "#711D1F" }}
      >
        <b>Our</b> products
      </h1>
      {/* products */}
      <div className="overflow-x-hidden">
        {products ? (
          <Slider {...settings}>
            {products.map((item, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 hover:scale-110 transition active:scale-90"
              >
                <a href={item.url} target="_blank" rel="noreferrer">
                  <img
                    className="inline object-contain mx-auto h-20 px-5"
                    src={item.logo}
                    alt="products"
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

      {/* form */}
      <div className="w-[85vw] mx-auto md:pt-20 pt-12">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <ContactForm />
      </div>

      {/* location */}
      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d498.59720814210306!2d103.857979!3d1.3086513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19e1d186e02d%3A0x2242714927df7e83!2sJalan%20Besar%20Plaza!5e0!3m2!1sen!2snp!4v1708320121399!5m2!1sen!2snp"
        height="300"
        style={{ width: "85vw", paddingBottom: "30px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Products;
