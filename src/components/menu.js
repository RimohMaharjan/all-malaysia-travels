import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { RxCross1 } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

function Menu() {
  const { closeMenu } = useContext(MenuContext);
  return (
    <div>
      <div className="  mx-auto flex items-center justify-between  gap-28">
        <div className="w-48 p-6">
          <a href="/">
            <img
              alt="octacore logo"
              src={require("../assets/images/logo2.png")}
            />
          </a>
        </div>
        <button onClick={closeMenu} className="text-2xl mr-4">
          <RxCross1 />
        </button>
      </div>

    <div className="flex flex-col space-y-8 w-[80vw] mx-auto text-3xl pt-8">
          <a href="/">Home</a>
          <a href="!#">About Us</a>
          <a href="!#">Vision</a>
          <a href="!#">Representation</a>
          <a href="!#">Contact</a>
          <a href="/services">Services</a>
    </div>
    
    <div className="flex flex-col space-y-2 w-[80vw] mx-auto text-md pt-40">
    <a className={`text-md`} href={`tel: (+65) 6388 8883`}>
          <FaPhoneAlt className="inline mr-2" />
          (+65) 6388 8883
        </a>
        <a
          className={`text-md`}
          href={`https://www.google.com/maps/dir//101+Kitchener+Rd,+Singapore+208511/@1.3087183,103.8579379,20z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31da19e1d186e02d:0x2242714927df7e83!2m2!1d103.8580162!2d1.3087498?entry=ttu`}
          target="_blank"
          rel="noreferrer"
        >
          <IoLocationSharp className="inline mr-2" />
          101 Kitchener Road #03-38 Jalan Besar Plaza, Singapore 208511,
        </a>
        <a className={`text-md`} href={`mailto: enquiry@chariot.com.sg`}>
          <IoIosMail className="inline mr-2" />
          enquiry@chariot.com.sg
        </a>
    </div>

    </div>
  );
}

export default Menu;
