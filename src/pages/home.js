import React from 'react'
import Nav from '../components/nav'
import HomePage from '../components/homePage'
import About from '../components/about'
import Vision from '../components/vision'

const Home = () => {
  return (
    <div>
      <Nav />
      <HomePage />
      <About />
      <Vision />
    </div>
  )
}

export default Home