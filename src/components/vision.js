import React from "react";
import bgImg from "../assets/images/vision.png";

const Vision = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="md:grid grid-cols-3 place-items-center min-h-screen">
        <div className="text-white text-center border-l-8 p-4">
          <h1 className="md:text-5xl text-2xl font-bold mb-4">Your Vision,</h1>
          <p className="md:text-5xl  text-sm  pb-4">Our Mission</p>
        </div>

        <div className="col-span-2 ">
          <div className="md:grid grid-cols-2 grid-rows-2 gap-32 w-[57vw] mx-auto">
            <div className="text-white">
              <div className="flex items-center gap-4">
                <h1 className="text-7xl">01</h1>
                <div>
                  <p className="text-3xl border-b p-2">Values & purpose</p>
                </div>
              </div>
              <h1>“Where dreams meet destinations”</h1>
            </div>

            <div className="text-white ">
              <div className="flex items-center gap-4">
                <h1 className="text-7xl">02</h1>
                <div>
                  <p className="text-3xl border-b p-2">Why us?</p>
                </div>
              </div>
              <h1>“Dedicated to crafting personalized experiences”</h1>
            </div>

            <div className="text-white ">
              <div className="flex items-center gap-4">
                <h1 className="text-7xl">03</h1>
                <div>
                  <p className="text-3xl border-b p-2">What we do?</p>
                </div>
              </div>
              <h1>
                “Experienced travel specialists is here to turn your dreams into
                reality.”
              </h1>
            </div>

            <div className="text-white ">
              <div className="flex items-center gap-4">
                <h1 className="text-7xl">04</h1>
                <div>
                  <p className="text-3xl border-b p-2">Services</p>
                </div>
              </div>
              <h1>
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
