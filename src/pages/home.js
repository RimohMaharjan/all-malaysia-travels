import React from "react";
import HomePage from "../components/homePage";
import About from "../components/about";
import Vision from "../components/vision";
import Products from "../components/products";
import Footer from "../components/footer";
import { useRef } from "react";
import Representation from "../components/representation";
import Banner from "../components/banner";

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
