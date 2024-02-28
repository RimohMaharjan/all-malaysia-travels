import React from "react";
import HomePage from "../components/home/homePage";
import About from "../components/home/about";
import Vision from "../components/home/vision";
import Products from "../components/home/products";
import Footer from "../components/general/footer";
import Representation from "../components/home/representation";
import Banner from "../components/home/banner";

const Home = ({
  homeRef,
  aboutRef,
  visionRef,
  repRef,
  promotionRef,
  prodsRef,
}) => {
  return (
    <div className="md:h-screen md:snap-y md:snap-mandatory md:overflow-y-scroll">
      <HomePage homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Vision visionRef={visionRef} />
      <Representation repRef={repRef} />
      <Banner promotionRef={promotionRef} />
      <Products prodsRef={prodsRef} />
      <div className="snap-always snap-start">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
