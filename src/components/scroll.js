import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="p-12">
          <h3 >1</h3>
        </div>
        <div className="p-12">
          <h3>2</h3>
        </div>
        <div className="p-12">
          <h3>3</h3>
        </div>
        <div className="p-12">
          <h3>4</h3>
        </div>
        <div className="p-12">
          <h3>5</h3>
        </div>
        <div className="p-12">
          <h3>6</h3>
        </div>
        <div className="p-12">
          <h3>7</h3>
        </div>
        <div className="p-12">
          <h3>8</h3>
        </div>
        <div className="p-12">
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
