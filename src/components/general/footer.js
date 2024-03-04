import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { API_URL } from "../../constants";
import useFetch from "../../utils/useFetch";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { data: footer, error: footer_error } = useFetch(
    `${API_URL}home-page-data/`
  );

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className={` bg-transparent-600 p-10  z-20 shadow-lg bg-[#393939] `}>
      <div className="md:flex justify-between border-b-2  md:space-y-0 space-y-6 pb-6 ">
        <div className="md:mr-48 mr-0">
          <a href="/">
            <img
              className="md:w-60 w-44"
              alt="chariot logo"
              src={require("../../assets/images/logoWhite.png")}
            />
          </a>
        </div>

        <div className="flex items-center  text-white space-x-8 md:text-2xl text-xl ">
          <Link
          className="rounded-full border-2 p-2 hover:bg-white hover:text-black"
            to="https://www.youtube.com/@TravelsChariot"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </Link>

          <Link
          className="rounded-full border-2 p-2 hover:bg-white hover:text-black"
            to="https://www.facebook.com/ChariotSG"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </Link>

          <Link
          className="rounded-full border-2 p-2 hover:bg-white hover:text-black"
            to="https://twitter.com/ChariotSG"
            target="_blank"
            rel="noreferrer"
          >
           <FaXTwitter />
          </Link>

          <Link
          className="rounded-full border-2 p-2 hover:bg-white hover:text-black"
            to="https://www.instagram.com/chariottravels/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </Link>
        </div>

        {footer ? (
          <div className="text-white text-sm mb-2 md:space-y-2 space-y-2">
            {footer && (
              <>
                <div>
                  <a
                    className={`md:text-md text-sm`}
                    href={`tel: ${footer[2].description}`}
                  >
                    <FaPhoneAlt className="inline mr-2" />
                    {footer[2].description}
                  </a>
                </div>
                <div>
                  <a
                    className={`md:text-md text-sm`}
                    href={footer[5].description}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLocationSharp className="inline mr-2" />
                    {footer[4].description}
                  </a>
                </div>
                <div>
                  <a
                    className={`md:text-md text-sm`}
                    href={`mailto: ${footer[3].description}`}
                  >
                    <IoIosMail className="inline mr-2" />
                    {footer[3].description}
                  </a>
                </div>
              </>
            )}
          </div>
        ) : footer_error ? (
          <p className="text-center">{footer_error}</p>
        ) : (
          <p className="text-center">loading</p>
        )}
      </div>

      <div className="md:text-md text-sm text-center text-white pt-6 ">
        <h1>© {year} | Chariot Ventures Group | Developed by Octacore Solutions</h1>
      </div>
    </div>
  );
};

export default Footer;
