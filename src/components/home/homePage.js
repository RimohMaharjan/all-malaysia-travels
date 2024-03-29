import React from "react";
import bgImg from "../../assets/images/tamicha-homepage.jpg"
import { Link } from "react-router-dom";
import { API_URL } from "../../constants";
import useFetch from "../../utils/useFetch";

const HomePage = ({ homeRef }) => {
  // fetching data
  const { data } = useFetch(`${API_URL}home-page-data/`);

  return (
    <div
      ref={homeRef}
      className="snap-always snap-start bg-fixed bg-center bg-cover min-h-screen z-[-2]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="table min-h-screen">
        <div className="table-cell align-middle text-center w-[97vw]  mx-auto">
          <h1 className="md:text-7xl text-4xl text-white font-bold mb-4">
            Welcome to Tamicha
          </h1>
          {data && (
            <p className="md:text-2xl text-md text-white font-light text-center pb-4">
              {data[1].description}
            </p>
          )}

          <Link to="/services">
            <button className="md:text-md text-sm font-medium text-white py-2 px-4 border rounded hover:bg-[#466C45] ">
              Our Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
