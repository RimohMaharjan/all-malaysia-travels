import React from "react";
import HomePage from "../components/home/homePage";
import About from "../components/home/about";
import Vision from "../components/home/vision";
import Products from "../components/home/products";
import Footer from "../components/general/footer";
import { useRef } from "react";
import Representation from "../components/home/representation";
import Banner from "../components/home/banner";

const Home = () => {
  const scrollRef = useRef(null);

  return (
    <div
      className="md:h-screen md:snap-y md:snap-mandatory md:overflow-y-scroll"
      ref={scrollRef}
    >
      <HomePage />
      <About />
      <Vision />
      <Representation />
      <Banner />
      <Products />
      <div className="snap-always snap-start">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
