import React from 'react'
import HomePage from '../components/homePage'
import About from '../components/about'
import Vision from '../components/vision'
import Products from '../components/products'
import Footer from '../components/footer'
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

const Home = () => {

    const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });

  return (
      
    <div ref={scrollRef} >
    
      <HomePage />
      <About />
      <Vision />
      <Products />
      <Footer />
    </div>
  )
}

export default Home