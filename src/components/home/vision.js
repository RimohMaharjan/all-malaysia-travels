import React from "react";
import bgImg from "../../assets/images/vision.png";
import { API_URL } from "../../constants";
import useFetch from "../../utils/useFetch";

const Vision = () => {
  const { data: vision, error: vision_error } = useFetch(`${API_URL}missions/`);

  return (
    <div
      className="snap-always snap-start md:h-screen bg-no-repeat bg-cover px-5 py-14"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="md:grid grid-cols-3 place-items-center md:h-screen">
        <div className="text-white md:text-center md:border-l-8 py-4 md:pt-0 pl-5">
          <h1 className="md:text-5xl text-3xl font-medium mb-4">
            Your Vision,
          </h1>
          <p className="md:text-5xl font-extralight text-3xl pb-4">
            Our Mission
          </p>
        </div>

        <div className="col-span-2 ">
          {vision ? (
            <div className="md:grid grid-cols-2 grid-rows-2 gap-32 md:w-[57vw] md:mx-auto md:space-y-0 space-y-16 font-extralight">
              {vision.map((item) => (
                <>
                  <div className="text-white">
                    <div className="flex items-center gap-4">
                      <h1 className="md:text-7xl text-5xl">
                        {item.number_text}
                      </h1>
                      <div>
                        <p className="md:text-3xl text-xl border-b p-2">
                          {item.title}
                        </p>
                      </div>
                    </div>
                    <h1 className="md:text-lg text-md">{item.description}</h1>
                  </div>
                </>
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
