import React from "react";
import HomePage from "../components/homePage";
import About from "../components/about";
import Vision from "../components/vision";
import Products from "../components/products";
import Footer from "../components/footer";
import { useRef } from "react";
import Representation from "../components/representation";

const Home = () => {
  const scrollRef = useRef(null);

  return (
    <div
      className="h-screen snap-y snap-mandatory overflow-y-scroll"
      ref={scrollRef}
    >
      <HomePage />
      <About />
      <Vision />
      <Representation />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
