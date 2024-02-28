import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "../pages/home";

// for testing
import Playground from "../pages/playground/playground";

// import NotFound from "../pages/notFound";

import ToTop from "./scrollToTop";
import Services from "../components/services";
import Nav from "../components/general/nav";
import Banner from "../components/home/banner";

const Routing = () => {
  return (
    <Router>
      <Nav />
      <ToTop />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/banner" element={<Banner />} />
        <Route exact path="/playground" element={<Playground />} />

        {/* default routes for invalid links */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default Routing;
