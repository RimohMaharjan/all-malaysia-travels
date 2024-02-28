import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { RxCross1 } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { API_URL } from "../../constants";
import useFetch from "../../utils/useFetch";

function Menu() {
  const { data: footer, error: footer_error } = useFetch(
    `${API_URL}home-page-data/`
  );

  const { closeMenu } = useContext(MenuContext);
  return (
    <div>
      <div className="mx-auto flex items-center justify-between  gap-28">
        <div className="w-48 p-6">
          <a href="/">
            <img
              alt="octacore logo"
              src={require("../../assets/images/logo2.png")}
            />
          </a>
        </div>
        <button onClick={closeMenu} className="text-2xl mr-4">
          <RxCross1 />
        </button>
      </div>

      <div className="flex flex-col space-y-8 w-[80vw] mx-auto text-4xl pt-8">
        <a href="/">Home</a>
        <a href="!#">About Us</a>
        <a href="!#">Vision</a>
        <a href="!#">Representation</a>
        <a href="!#">Contact</a>
        <a href="/services">Services</a>
      </div>

      {footer ? (
        <div className="flex flex-col space-y-2 w-[80vw] mx-auto text-md pt-40">
          {footer && (
            <>
              <a className={` text-md`} href={`tel: ${footer[2].description}`}>
                <FaPhoneAlt className="inline mr-2" />
                {footer[2].description}
              </a>
              <a
                className={`text-md `}
                href={footer[5].description}
                target="_blank"
                rel="noreferrer"
              >
                <IoLocationSharp className="inline mr-2" />
                {footer[4].description}
              </a>
              <a
                className={`text-md`}
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
}

export default Menu;
