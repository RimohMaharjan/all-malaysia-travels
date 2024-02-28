import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { API_URL } from "../../constants";
import useFetch from "../../utils/useFetch";

const Footer = () => {
  const { data: footer, error: footer_error } = useFetch(
    `${API_URL}home-page-data/`
  );

  return (
    <div
      className="p-8 text-white flex place-content-center items-end"
      style={{ backgroundColor: "#393939" }}
    >
      <div className=" md:text-xs text-md md:pr-16 pr-0 ">
        <h1>© 2024 | Chariot Travels | Developed by Octacore Solutions</h1>
      </div>

      {footer ? (
        <div className="md:flex hidden gap-20">
          {footer && (
            <>
              <a
                className={`md:text-md text-xs`}
                href={`tel: ${footer[2].description}`}
              >
                <FaPhoneAlt className="inline mr-2" />
                {footer[2].description}
              </a>
              <a
                className={`md:text-md text-xs`}
                href={footer[5].description}
                target="_blank"
                rel="noreferrer"
              >
                <IoLocationSharp className="inline mr-2" />
                {footer[4].description}
              </a>
              <a
                className={`md:text-md text-xs`}
                href={`mailto: ${footer[3].description}`}
              >
                <IoIosMail className="inline mr-2" />
                {footer[3].description}
              </a>
            </>
          )}
        </div>
      ) : footer_error ? (
        <p className="text-center">{footer_error}</p>
      ) : (
        <p className="text-center">loading</p>
      )}
    </div>
  );
};

export default Footer;
