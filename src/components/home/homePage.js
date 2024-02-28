import React from "react";
import bgImg from "../../assets/images/home.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="snap-always snap-start bg-fixed bg-center bg-cover min-h-screen z-[-2]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="table min-h-screen">
        <div className="table-cell align-middle text-center w-[97vw]  mx-auto">
          <h1 className="md:text-7xl text-4xl text-white font-bold mb-4">
            Welcome to Chariot
          </h1>
          <p className="md:text-4xl text-lg text-white font-light  pb-4">
            Where dream meets destinations
          </p>
          <Link to="/services">
          <button className="md:text-lg text-md font-medium text-white py-2 px-4 border rounded hover:bg-red-900 ">
            Our Services
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;