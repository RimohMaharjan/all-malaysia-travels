import React, { useState } from "react";
import { API_URL } from "../../constants";
import useFetch from "../../utils/useFetch";

const About = ({ aboutRef }) => {
  // fetching data
  const { data: about, error: about_error } = useFetch(
    `${API_URL}home-page-data/`
  );

  const [showMore, setShowMore] = useState(false);

  return (
    <div
      ref={aboutRef}
      className="md:snap-always md:snap-start md:min-h-screen grid md:grid-cols-2 place-items-center gap-4 px-5 py-10 relative"
    >
      <div
        className="md:flex md:flex-col justify-center text-black md:w-[35vw] mx-auto"
        style={{ color: "#002D56" }}
      >
        <h2 className="md:text-6xl text-4xl pb-4 md:pt-0 pt-6">
          <b>About</b> us
        </h2>
        {about ? (
          <>
            <h6>
              {showMore ? (
                <p className="whitespace-pre-wrap md:text-lg text-sm text font-light pb-4">
                  {about[0].description}
                </p>
              ) : (
                <p className="whitespace-pre-wrap md:text-lg text-sm text font-light pb-4">
                  {about[0].description.substring(0, 300)} ....
                </p>
              )}
              <button
                className="bg-transparent hover:bg-[#002D56] text-[#002D56] hover:text-white py-1 px-3 border border-[#002D56] rounded"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show less" : "Show more"}
              </button>
            </h6>
          </>
        ) : about_error ? (
          <p className="text-center">{about_error}</p>
        ) : (
          <p className="text-center">loading</p>
        )}
      </div>

      <div className="md:block hidden">
        <img
          className="absolute right-0 bottom-0 w-[56vw]"
          src={require("../../assets/images/malaysia-about.png")}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
