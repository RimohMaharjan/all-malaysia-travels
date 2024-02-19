import React from "react";

const About = () => {
  return (
    <div className="md:h-screen  flex">
      <div className="md:grid grid-cols-2 gap-4">
        <div
          className="flex flex-col justify-center text-black md:w-[35vw] w-[70vw] mx-auto"
          style={{ color: "#711D1F" }}
        >
          <h2 className="md:text-6xl text-3xl pb-4 md:pt-0 pt-6">
            <b>About</b> us
          </h2>
          <p className="md:text-lg text-sm text font-light">
            At Chariot, we understand that each traveler is unique, and we are
            dedicated to crafting personalized experiences that inspire and
            delight. Whether you're seeking a relaxing beach getaway, an
            exhilarating adventure, a romantic honeymoon, or a meticulously
            planned corporate retreat, our team of experienced travel
            specialists is here to turn your dreams into reality.
          </p>
        </div>

        <div className="flex items-center place-content-end">
          <img src={require("../assets/images/about.png")} />
        </div>
      </div>
    </div>
  );
};

export default About;
