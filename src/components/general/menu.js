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
  const pathname = window.location.pathname;

  const scrollToTop = () => {
    closeMenu();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToAbout = () => {
    closeMenu();
    window.scrollTo({
      top: 730,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollToMission = () => {
    closeMenu();
    window.scrollTo({
      top: 1320,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollToRep = () => {
    closeMenu();
    window.scrollTo({
      top: 2170,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollToBanner = () => {
    closeMenu();
    window.scrollTo({
      top: 2855,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollToProducts = () => {
    closeMenu();
    window.scrollTo({
      top: 3075,
      left: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    {
      label: "Home",
      path: "/",
      scroll: scrollToTop,
    },
    {
      label: "About us",
      path: "/",
      scroll: scrollToAbout,
    },
    {
      label: "Vision",
      path: "/",
      scroll: scrollToMission,
    },
    {
      label: "Representation",
      path: "/",
      scroll: scrollToRep,
    },
    {
      label: "Promotions",
      path: "/",
      scroll: scrollToBanner,
    },
    {
      label: "Contact",
      path: "/",
      scroll: scrollToProducts,
    },
  ];

  return (
    <div>
      <div className="mx-auto flex items-center justify-between">
        <div className="w-48 p-6">
          <a href="/">
            <img
            onClick={scrollToTop}
            className="h-16"
              alt="chariot logo"
              src={require("../../assets/images/logoBig.png")}
            />
          </a>
        </div>
        <button onClick={closeMenu} className="text-2xl mr-4">
          <RxCross1 />
        </button>
      </div>

      <div className="flex flex-col space-y-2 w-[80vw] mx-auto text-4xl pt-6">
      {pathname === "/" ? (
          <>
            {navItems.map((item, index) => (
              <p
                key={index}
                onClick={item.scroll}
                className="cursor-pointer text-[30px] pb-5 "
              >
                {item.label}
              </p>
            ))}
          </>
        ) : (
          <>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="cursor-pointer text-[30px] pb-5 block"
              >
                {item.label}
              </a>
            ))}
          </>
        )}
        <a href="/services" className="cursor-pointer text-[30px]">Services</a>
      </div>

      {footer ? (
        <div className="flex flex-col space-y-2 w-[80vw] mx-auto text-md pt-20">
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
