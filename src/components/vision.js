import React from "react";
import bgImg from "../assets/images/vision.png";

const Vision = () => {
  let texts = [
    {
      number: "01",
      heading: "Values & purpose",
      description: "“Where dreams meet destinations”",
    },
    {
      number: "02",
      heading: "Why us?",
      description: "“Dedicated to crafting personalized experiences”",
    },
    {
      number: "03",
      heading: "What we do?",
      description: "“Experienced travel specialists is here to turn your dreams into reality.”",
    },
    {
      number: "04",
      heading: "Services",
      description: "“Chariot also excels at other services such as Charters and reimetance.”",
    },
  ];

  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="md:grid grid-cols-3 place-items-center h-screen">
        <div className="text-white text-center border-l-8 p-4 md:pt-0 pt-12">
          <h1 className="md:text-5xl text-3xl font-medium mb-4">
            Your Vision,
          </h1>
          <p className="md:text-5xl font-extralight text-3xl pb-4">
            Our Mission
          </p>
        </div>

        <div className="col-span-2 ">
          <div className="md:grid grid-cols-2 grid-rows-2 gap-32 w-[57vw] mx-auto md:space-y-0 space-y-16 font-extralight">
            {texts.map((item) => (
              <>
                <div className="text-white">
                  <div className="flex items-center gap-4">
                    <h1 className="md:text-7xl text-5xl">{item.number}</h1>
                    <div>
                      <p className="md:text-3xl text-md border-b p-2">
                        {item.heading}
                      </p>
                    </div>
                  </div>
                  <h1 className="md:text-md text-sm">{item.description}</h1>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
