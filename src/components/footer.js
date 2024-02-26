import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="p-8 text-white flex place-content-center items-end" style={{ backgroundColor: "#393939" }}>
      <div className=" md:text-xs text-md md:pr-16 pr-0 ">
        <h1>© 2024 | Chariot Travels | Developed by Octacore Solutions</h1>
      </div>

      <div className="md:flex  gap-20">
        <a className={`md:text-md text-xs`} href={`tel: (+65) 6388 8883`}>
          <FaPhoneAlt className="inline mr-2" />
          (+65) 6388 8883
        </a>
        <a
          className={`md:text-md text-xs`}
          href={`https://www.google.com/maps/dir//101+Kitchener+Rd,+Singapore+208511/@1.3087183,103.8579379,20z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31da19e1d186e02d:0x2242714927df7e83!2m2!1d103.8580162!2d1.3087498?entry=ttu`}
          target="_blank"
          rel="noreferrer"
        >
          <IoLocationSharp className="inline mr-2" />
          101 Kitchener Road #03-38 Jalan Besar Plaza, Singapore 208511,
        </a>
        <a className={`md:text-md text-xs`} href={`mailto: enquiry@chariot.com.sg`}>
          <IoIosMail className="inline mr-2" />
          enquiry@chariot.com.sg
        </a>
      </div>
    </div>
  );
};

export default Footer;
