import React from 'react'
import Nav from '../components/nav'
import HomePage from '../components/homePage'
import About from '../components/about'
import Vision from '../components/vision'
import Products from '../components/products'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
      <Nav />
      <HomePage />
      <About />
      <Vision />
      <Products />
      {/* <Footer /> */}
    </div>
  )
}

export default Home