import React from "react";
import { API_URL } from "../constants";
import useFetch from "../utils/useFetch";

const About = () => {
  // fetching data
  const { data: about, error: about_error } = useFetch(
    `${API_URL}home-page-data/`
  );

  return (
    <div className="snap-always snap-start min-h-screen md:grid grid-cols-2 place-items-center gap-4">
      <div
        className="flex flex-col justify-center text-black md:w-[35vw] w-[70vw] mx-auto"
        style={{ color: "#711D1F" }}
      >
        <h2 className="md:text-6xl text-3xl pb-4 md:pt-0 pt-6">
          <b>About</b> us
        </h2>
        {about && (
          <p className="md:text-lg text-sm text font-light">
            {about[0].description}
          </p>
        )}
      </div>

      <div className="place-items-end">
        <img src={require("../assets/images/about.png")} />
      </div>
    </div>
  );
};

export default About;
