import React from 'react'

const Representation = () => {

    let images = [
        {
            img: "chariot-gds.png",
            alt: "logo",
          },
          {
            img: "chariot-charters.png",
            alt: "logo",
          },
          {
            img: "chariot-remit.png",
            alt: "logo",
          },
          {
            img: "drukair-holidays.png",
            alt: "logo",
          },
        {
          img: "global.png",
          alt: "logo",
        },
        {
          img: "tamicha.png",
          alt: "logo",
        },
        {
          img: "home.png",
          alt: "logo",
        },
        {
            img: "home.png",
            alt: "logo",
          },
          {
            img: "home.png",
            alt: "logo",
          },
      ];

  return (
    <div>
        <div className="max-w-screen-2xl mx-auto lg:grid grid-cols-3 gap-16 min-h-screen 2xl:px-0 md:px-10 px-5">
          <div className="table md:pt-0 pt-[8vh]">
            <div className="md:table-cell align-middle text-red-900">
              <h1 className="md:text-6xl text-4xl font-bold">
                Representation
              </h1>

              <p className='md:text-xl text-md pt-4'>Our Valued Partners</p>
            </div>
          </div>

          <div className="col-span-2 md:py-0 py-12 mx-auto table">
            <div className="table-cell md:align-middle align-top">
              <div className="grid md:grid-cols-3 grid-cols-2 gap-x-10 gap-y-20 items-center justify-items-center">
                {images.map((item) => (
                  <img
                    className="md:max-h-20 max-h-20 inline object-contain "
                    src={require(`../assets/images/${item.img}`)}
                    alt={item.alt}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Representation