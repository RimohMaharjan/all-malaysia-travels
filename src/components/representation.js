import React from "react";
import { API_URL } from "../constants";
import useFetch from "../utils/useFetch";

const Representation = () => {
  const { data: partners, error: partners_error } = useFetch(
    `${API_URL}partners/`
  );

  return (
    <div className="max-w-screen-2xl mx-auto lg:grid grid-cols-3  md:min-h-screen 2xl:px-0 md:px-10 px-5">
      <div className="table">
        <div className="md:table-cell align-middle text-red-900 pt-12">
          <h1 className="md:text-6xl text-4xl font-bold">Representation</h1>

          <p className="md:text-xl text-md pt-4">Our Valued Partners</p>
        </div>
      </div>

      <div className="col-span-2 md:py-0 py-12 mx-auto table">
        <div className="table-cell md:align-middle align-top">
          {partners ? (
            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-32 gap-4 items-center justify-items-center">
              {partners.map((item) => (
                <img
                  className="md:max-h-56   max-h-32 inline object-contain "
                  src={item.logo}
                  alt={item.alt}
                />
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
