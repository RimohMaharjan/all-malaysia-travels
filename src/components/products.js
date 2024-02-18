import React from "react";

const Products = () => {
  let images = [
    {
      img: "chariot-gds.png",
      alt: "gds",
      heading: "Chariot GDS",
    },
    {
      img: "chariot-remit.png",
      alt: "remit",
      heading: "Chariot Remit",
    },
    {
      img: "chariot-charters.png",
      alt: "charters",
      heading: "Chariot Charters",
    },
    {
      img: "tamicha.png",
      alt: "tamicha",
      heading: "Tamicha",
    },
    {
      img: "drukair-holidays.png",
      alt: "drukair",
      heading: "Drukair Holidays",
    },
  ];

  return (
    <div>
      <div>
        <h1
          className="text-center text-5xl pt-12 pb-12"
          style={{ color: "#711D1F" }}
        >
          <b>Our</b> products
        </h1>
      </div>
      <div className="flex flex-row gap-24 place-content-center">
        {images.map((item) => (
          <div>
            <img
              className="md:max-h-16 inline object-contain grayscale hover:grayscale-0 hover:scale-110 transition active:scale-90"
              src={require(`../assets/images/${item.img}`)}
              alt={item.alt}
            />
            <h1 className="text-center text-xl">{item.heading}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
