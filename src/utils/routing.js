import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "../pages/home";

// for testing
import Playground from "../pages/playground/playground";

// import NotFound from "../pages/notFound";

import ToTop from "./scrollToTop";

const Routing = () => {
  return (
    <Router>
      <ToTop />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/playground" element={<Playground />} />

        {/* default routes for invalid links */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default Routing;
