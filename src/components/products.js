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
    <div className="" style={{ backgroundColor: "#F6F6F6" }}>
      <h1
        className="text-center text-5xl pt-12 pb-16"
        style={{ color: "#711D1F" }}
      >
        <b>Our</b> products
      </h1>

      <div className="md:flex flex-row gap-24 md:w-[70vw] w-[45vw] mx-auto md:space-y-0 space-y-12">
        {images.map((item, index) => (
          <div
            key={index}
            className=" grayscale hover:grayscale-0 hover:scale-110 transition active:scale-90"
          >
            <img
              className="md:max-h-16 max-h-12 inline object-contain  "
              src={require(`../assets/images/${item.img}`)}
              alt={item.alt}
            />
            <h1 className=" text-center md:text-xl text-md font-medium ">{item.heading}</h1>
          </div>
        ))}
      </div>

      <div className="w-[85vw] mx-auto md:pt-20 pt-12">
        <h1 className="text-4xl font-bold">Contact Us</h1>

        <div className="md:grid md:grid-cols-2 gap-12 pt-8">
          <div className="mb-5">
            <label htmlFor="" className="block mb-2 text-sm">
              Full Name
            </label>
            <input
              type="text"
              id="text"
              className="shadow-sm  border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="" className="block mb-2 text-sm">
              Country
            </label>
            <input
              type="text"
              id="text"
              className="shadow-sm  border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Enter your country"
              required
            />
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 gap-12">
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm  border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="" className="block mb-2 text-sm">
              Contact
            </label>
            <input
              type="number"
              id=""
              className="shadow-sm  border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Enter your contact information"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-5">
            <label htmlFor="message" className="block mb-2 text-sm ">
              Message
            </label>
            <textarea
              id="message"
              rows="2"
              className="block p-2.5 w-[85vw] text-sm   rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            ></textarea>
            <p className="text-xs">Max 500 characters</p>
          </div>
        </div>

        <button className="bg-transparent rounded-md py-2  px-6 border border-black mb-12">
          Submit
        </button>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d498.59720814210306!2d103.857979!3d1.3086513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19e1d186e02d%3A0x2242714927df7e83!2sJalan%20Besar%20Plaza!5e0!3m2!1sen!2snp!4v1708320121399!5m2!1sen!2snp"
          height="300"
          style={{ width: "85vw", paddingBottom: "30px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Products;
