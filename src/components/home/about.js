import React, { useState } from "react";
import { API_URL } from "../../constants";
import useFetch from "../../utils/useFetch";

const About = ({ aboutRef }) => {
  // fetching data
  const { data: about, error: about_error } = useFetch(
    `${API_URL}home-page-data/`
  );

  return (
    <div
      ref={aboutRef}
      className="md:snap-always md:snap-start md:min-h-screen grid md:grid-cols-2 place-items-center gap-4 px-5 py-10 relative"
    >
     <div
        className="md:flex md:flex-col justify-center text-black md:w-[35vw] mx-auto"
        
      >
        <h2 className="md:text-6xl text-4xl pb-4 md:pt-0 pt-6 text-[#B163A3]" >
          <b>About</b> us
        </h2>
        {about ? (
          <p className="md:text-lg text-sm text font-light">
            {about[0].description}
          </p>
        ) : about_error ? (
          <p className="text-center">{about_error}</p>
        ) : (
          <p className="text-center">loading</p>
        )}
      </div>

      <div className="md:block hidden">
        <img
          className="absolute right-0 bottom-0 w-[56vw]"
          src={require("../../assets/images/tamicha-about.png")}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
