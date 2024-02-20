import React from "react";
import bgImg from "../assets/images/home.png";

const HomePage = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover relative min-h-screen z-[-2]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="table min-h-screen">
        <div className="table-cell align-middle text-center w-[97vw]  mx-auto">
          <h1 className="md:text-7xl text-3xl text-white font-bold mb-4">
            Welcome to Chariot
          </h1>
          <p className="md:text-3xl text-lg text-white font-light  pb-4">
            Where dream meets destinations
          </p>
          <button className="md:text-lg text-md font-medium bg-transparent hover:black text-white hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
