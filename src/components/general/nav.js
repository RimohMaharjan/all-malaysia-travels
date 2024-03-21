import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { IoMenuOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const Nav = ({
  homeRef,
  aboutRef,
  visionRef,
  repRef,
  promotionRef,
  prodsRef,
}) => {
  const { toggleMenu } = useContext(MenuContext);
  const { pathname } = useLocation();

  const scrollToTop = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMission = () => {
    visionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToRep = () => {
    repRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToBanner = () => {
    promotionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProducts = () => {
    prodsRef.current.scrollIntoView({ behavior: "smooth" });
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
      label: "Services",
      path: "/services",
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
    <nav
      className={`fixed w-screen bg-transparent-600 p-6 xl:px-32 lg:px-6 px-4 z-20 shadow-lg bg-[#f6f6f688]`}
    >
      <div className="mx-auto flex items-center justify-between mr-6">
        <div className="">
          <a href="/">
            <img
              className="md:h-20 h-20"
              alt="All Malaysia Travel logo"
              src={require("../../assets/images/malaysia-logo.png")}
            />
          </a>
        </div>

        <div className={`hidden lg:block text-black`}>
          <ul className="flex space-x-10">
            {navItems.map((item, index) => (
              <div key={index}>
                {pathname === "/" && item.scroll ? (
                  <p
                    onClick={item.scroll}
                    className={`cursor-pointer text-[15px] inline text-black`}
                  >
                    {item.label}
                  </p>
                ) : (
                  <a
                    href={item.path}
                    className={`cursor-pointer text-[15px] inline text-black`}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </ul>
        </div>

        <button
          onClick={toggleMenu}
          className={`text-4xl block lg:hidden text-black`}
        >
          <IoMenuOutline />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
