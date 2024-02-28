import React from "react";
import { API_URL } from "../../constants";
import useFetch from "../../utils/useFetch";

const Representation = () => {
  const { data: partners, error: partners_error } = useFetch(
    `${API_URL}partners/`
  );

  return (
    <div className="snap-always snap-start max-w-screen-2xl mx-auto lg:grid grid-cols-3 md:min-h-screen 2xl:px-0 md:px-20 px-5">
      <div className="table">
        <div className="md:table-cell align-middle text-red-900 pt-12">
          <h1 className="2xl:text-6xl xl:text-5xl text-4xl font-bold">
            Representation
          </h1>
          <p className="md:text-xl text-lg pt-4">Our Valued Partners</p>
        </div>
      </div>

      <div className="col-span-2 md:py-0 py-12 mx-auto table">
        <div className="table-cell md:align-middle align-top">
          {partners ? (
            <div className="grid md:grid-cols-3 grid-cols-2 xl:gap-x-32 gap-4 items-center justify-items-center ">
              {partners.map((item) => (
                <a href={item.url} target="_blank" rel="noreferrer">
                  <img
                    className="inline object-contain md:h-auto h-32"
                    src={item.logo}
                    alt={item.alt}
                  />
                </a>
              ))}
            </div>
          ) : partners_error ? (
            <p className="text-center">{partners_error}</p>
          ) : (
            <p className="text-center">loading</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Representation;
