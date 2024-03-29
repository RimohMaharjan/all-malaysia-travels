import React from "react";
import bgImg from "../../assets/images/tamicha-vision.jpg";
import { API_URL } from "../../constants";
import useFetch from "../../utils/useFetch";

const Vision = ({ visionRef }) => {
  const { data: vision, error: vision_error } = useFetch(`${API_URL}missions/`);

  return (
    <div
      ref={visionRef}
      className="snap-always snap-start md:h-screen relative"
    >
      <img
        className="absolute -z-10 h-screen w-screen object-cover blur-sm"
        src={require("../../assets/images/tamicha-vision.jpg")}
        alt="about"
      />

      <div className="md:grid grid-cols-3 place-items-center md:h-screen">
        <div className="text-white md:text-center md:border-l-8 py-5 md:pl-5">
          <h1 className="lg:text-5xl text-4xl font-medium mb-4">
            Your Vision,
          </h1>
          <p className="lg:text-5xl text-4xl font-extralight">Our Mission</p>
        </div>

        <div className="col-span-2">
          {vision ? (
            <div className="md:grid xl:grid-cols-2 grid-rows-2 2xl:gap-32 gap-10 md:w-[57vw] md:mx-auto md:space-y-0 space-y-16 font-extralight">
              {vision.map((item, index) => (
                <div className="text-white" key={index}>
                  <div className="flex items-center gap-4">
                    <h1 className="md:text-7xl text-5xl">{item.number_text}</h1>
                    <div className="w-full">
                      <h1 className="md:text-4xl text-xl border-b p-2">
                        {item.title}
                      </h1>
                      <p className="md:text-lg text-md p-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : vision_error ? (
            <p className="text-center">{vision_error}</p>
          ) : (
            <p className="text-center">loading</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vision;
