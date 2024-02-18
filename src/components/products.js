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
    <div className="h-screen" style={{ backgroundColor: "#F6F6F6" }}>
      <h1
        className="text-center text-5xl pt-12 pb-16"
        style={{ color: "#711D1F" }}
      >
        <b>Our</b> products
      </h1>

      <div className="md:flex flex-row gap-24 place-content-center">
        {images.map((item) => (
          <div className="grayscale hover:grayscale-0">
            <img
              className="md:max-h-16 inline object-contain  hover:scale-110 transition active:scale-90"
              src={require(`../assets/images/${item.img}`)}
              alt={item.alt}
            />
            <h1 className="text-center text-xl">{item.heading}</h1>
          </div>
        ))}
      </div>

      <div className="pt-20">
        <div className="w-[85vw] mx-auto">
          <div className="text-4xl font-bold">Contact Us</div>

          <div class="grid md:grid-cols-2 gap-16 pt-8">
            <div class="">
              <label for="" class="block mb-2 text-sm">
                Full Name
              </label>
              <input
                type="text"
                id="text"
                class="shadow-sm  border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div class="mb-5">
              <label for="" class="block mb-2 text-sm">
                Country
              </label>
              <input
                type="text"
                id="text"
                class="shadow-sm  border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Enter your country"
                required
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-16">
            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm  border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Enter your email"
                required
              />
            </div>

            <div class="mb-5">
              <label for="" class="block mb-2 text-sm">
                Contact
              </label>
              <input
                type="number"
                id=""
                class="shadow-sm  border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Enter your contact information"
                required
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="mb-5">
              <label for="message" class="block mb-2 text-sm ">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                class="block p-2.5 w-[85vw] text-sm   rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
              ></textarea>
              <p className="text-xs">Max 500 characters</p>
            </div>
          </div>

          <button className="bg-transparent rounded-md py-2  px-6 border border-black">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
