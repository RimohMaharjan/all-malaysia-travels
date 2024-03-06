import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
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

  const socials = [
    {
      link: "https://www.youtube.com/@TravelsChariot",
      icon: <AiOutlineYoutube />,
    },
    {
      link: "https://www.facebook.com/ChariotSG",
      icon: <FaFacebookF />,
    },
    {
      link: "https://twitter.com/ChariotSG",
      icon: <FaXTwitter />,
    },
    {
      link: "https://www.instagram.com/chariottravels/",
      icon: <FaInstagram />,
    },
  ];
  return (
    <div
      className={` bg-transparent-600 pt-12 pb-3 md:px-14 px-8 z-20 shadow-lg bg-[#393939] `}
    >
      <div className="md:grid xl:grid-cols-3 md:grid-cols-2 gap-5 justify-between border-b border-[#d9d9d960] md:space-y-0 space-y-6 pb-6 md:px-5">
        <a href="/">
          <img
            className="md:w-60 w-44"
            alt="chariot logo"
            src={require("../../assets/images/logoWhite.png")}
          />
        </a>

        <div className="flex items-center md:justify-center text-[#D9D9D9] space-x-8 md:text-2xl text-xl ">
          {socials.map((social, index) => (
            <Link
              key={index}
              to={social.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 md:p-[0.65rem] p-2 hover:bg-[#D9D9D9] hover:text-[#383838] hover:transition duration-300 ease-in-out"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {footer ? (
          <div className="text-[#D9D9D9] text-sm mb-2 xl:col-span-1 md:col-span-2 col-span-1">
            <div className="w-fit space-y-3 xl:float-right">
              <a
                className={`block md:text-md text-sm`}
                href={`tel: ${footer[2].description}`}
              >
                <FaPhoneAlt className="inline mr-2" />
                {footer[2].description}
              </a>
              <a
                className={`block md:text-md text-sm`}
                href={`mailto: ${footer[3].description}`}
              >
                <IoIosMail className="inline mr-2" />
                {footer[3].description}
              </a>
              <a
                className={`block md:text-md text-sm`}
                href={footer[5].description}
                target="_blank"
                rel="noreferrer"
              >
                <IoLocationSharp className="inline mr-2" />
                {footer[4].description}
              </a>
            </div>
          </div>
        ) : footer_error ? (
          <p className="text-center">{footer_error}</p>
        ) : (
          <p className="text-center">loading</p>
        )}
      </div>

      <div className="md:text-md text-sm text-center text-[#D9D9D9] pt-4 ">
        © {year} | Chariot Group | Developed by{" "}
        <a
          className="text-white hover:border-b"
          href="https://octacore.com.np/"
          target="_blank"
          rel="noreferrer"
        >
          Octacore Solutions
        </a>
      </div>
    </div>
  );
};

export default Footer;
