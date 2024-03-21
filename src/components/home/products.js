import React from "react";
import { API_URL } from "../../constants";
import useFetch from "../../utils/useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "./contactForm";

const Products = ({ prodsRef }) => {
  const { data: products, error: products_error } = useFetch(
    `${API_URL}products/`
  );

  const settings = {
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
      ref={prodsRef}
      className="snap-always snap-start pt-10 px-5"
      style={{ backgroundColor: "#F6F6F6" }}
    >
      <h1
        className="md:text-center md:text-5xl text-4xl md:pt-20 pb-16"
        style={{ color: "#002D56" }}
      >
        <b>Our</b> products
      </h1>
      {/* products */}
      <div className="products-banner">
        {products ? (
          <Slider {...settings}>
            {products.map((item, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 hover:scale-110 transition active:scale-90"
              >
                <a href={item.url} target="_blank" rel="noreferrer">
                  <img
                    className="inline object-contain mx-auto h-20  px-5"
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
      <div className="w-[85vw] mx-auto">
        <iframe
          title="location"
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8073853766737!2d101.70711949999999!3d3.1454777999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3629e10e2f65%3A0x12074b23e73eb5fe!2s9%2C%20Tengkat%20Tong%20Shin%2C%20Bukit%20Bintang%2C%2050200%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2snp!4v1711004496309!5m2!1sen!2snp"
          }
          height="300"
          style={{ width: "85vw", paddingBottom: "30px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Products;
