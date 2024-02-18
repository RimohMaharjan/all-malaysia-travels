import React from "react";
import bgImg from "../assets/images/vision.png";

const Vision = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="md:grid grid-cols-3 place-items-center h-screen">
        <div className="text-white text-center border-l-8 p-4">
          <h1 className="md:text-5xl text-3xl font-bold mb-4">Your Vision,</h1>
          <p className="md:text-5xl text-3xl pb-4">Our Mission</p>
        </div>

        <div className="col-span-2 ">
          <div className="md:grid grid-cols-2 grid-rows-2 gap-32 w-[57vw] mx-auto md:space-y-0 space-y-16">
            <div className="text-white">
              <div className="flex items-center gap-4">
                <h1 className="md:text-7xl text-5xl">01</h1>
                <div>
                  <p className="md:text-3xl text-md border-b p-2">Values & purpose</p>
                </div>
              </div>
              <h1 className="md:text-md text-sm">“Where dreams meet destinations”</h1>
            </div>

            <div className="text-white ">
              <div className="flex items-center gap-4">
                <h1 className="md:text-7xl text-5xl">02</h1>
                <div>
                  <p className="md:text-3xl text-md border-b p-2">Why us?</p>
                </div>
              </div>
              <h1 className="md:text-md text-sm">“Dedicated to crafting personalized experiences”</h1>
            </div>

            <div className="text-white ">
              <div className="flex items-center gap-4">
                <h1 className="md:text-7xl text-5xl">03</h1>
                <div>
                  <p className="md:text-3xl text-md border-b p-2">What we do?</p>
                </div>
              </div>
              <h1 className="md:text-md text-sm">
                “Experienced travel specialists is here to turn your dreams into
                reality.”
              </h1>
            </div>

            <div className="text-white ">
              <div className="flex items-center gap-4">
                <h1 className="md:text-7xl text-5xl">04</h1>
                <div>
                  <p className="md:text-3xl text-md border-b p-2">Services</p>
                </div>
              </div>
              <h1 className="md:text-md text-sm">
                “Chariot also excels at other services such as Charters and
                reimetance.”
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
