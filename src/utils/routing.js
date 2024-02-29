import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useRef } from "react";

import Home from "../pages/home";

// for testing
// import Playground from "../pages/playground/playground";

import NotFound from "../pages/notFound";

import ToTop from "./scrollToTop";
import Services from "../components/services";
import Nav from "../components/general/nav";

const Routing = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const visionRef = useRef(null);
  const repRef = useRef(null);
  const promotionRef = useRef(null);
  const prodsRef = useRef(null);

  return (
    <Router>
      <Nav
        homeRef={homeRef}
        aboutRef={aboutRef}
        visionRef={visionRef}
        repRef={repRef}
        promotionRef={promotionRef}
        prodsRef={prodsRef}
      />
      <ToTop />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              homeRef={homeRef}
              aboutRef={aboutRef}
              visionRef={visionRef}
              repRef={repRef}
              promotionRef={promotionRef}
              prodsRef={prodsRef}
            />
          }
        />
        <Route exact path="/services" element={<Services />} />
        {/* <Route exact path="/playground" element={<Playground />} /> */}

        {/* default routes for invalid links */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routing;
