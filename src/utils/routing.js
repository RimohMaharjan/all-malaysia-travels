import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useRef } from "react";

import Home from "../pages/home";
import Services from "../pages/services";

// for testing
// import Playground from "../pages/playground/playground";

import NotFound from "../pages/notFound";

import ToTop from "./scrollToTop";
import Nav from "../components/general/nav";

const Routing = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const visionRef = useRef(null);
  const repRef = useRef(null);
  const promotionRef = useRef(null);
  const prodsRef = useRef(null);

  const MainLayout = ({ children }) => {
    return (
      <>
        <Nav
          homeRef={homeRef}
          aboutRef={aboutRef}
          visionRef={visionRef}
          repRef={repRef}
          promotionRef={promotionRef}
          prodsRef={prodsRef}
        />
        <ToTop />
        {children}
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainLayout>
              <Home
                homeRef={homeRef}
                aboutRef={aboutRef}
                visionRef={visionRef}
                repRef={repRef}
                promotionRef={promotionRef}
                prodsRef={prodsRef}
              />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />

        {/* default routes for invalid links */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routing;
