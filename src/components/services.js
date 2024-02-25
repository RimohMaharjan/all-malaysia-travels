import React from "react";
import bgImg from "../assets/images/services.png";

const Services = () => {
  return (
    <div>
      <div
        className="bg-fixed bg-center bg-cover h-64 z-[-2]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h1 className="text-center pt-44 text-5xl text-white">Our services</h1>
      </div>
      <div className="w-[85vw] mx-auto pt-20 space-y-8 text-red-900">
        <h1 className="text-4xl font-bold">Hotel</h1>
        <p className="font-light">
          At our hotel, we pride ourselves on delivering exceptional services
          that cater to the diverse needs of our guests. From luxurious
          accommodations and world-class dining to attentive concierge
          assistance and state-of-the-art amenities, our commitment to
          excellence ensures that every aspect of your stay is nothing short of
          extraordinary. Whether you're seeking relaxation, adventure, or
          seamless business travel, our range of services is designed to elevate
          your experience and create lasting memories.
        </p>
        <p className="md:text-3xl text-xl border-b p-2" style={{borderBlockColor: "#D9D9D9"}}></p>
      </div>
    </div>
  );
};

export default Services;
