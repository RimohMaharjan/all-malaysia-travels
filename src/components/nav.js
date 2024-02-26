import React, { useState, useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = () => {
  const { toggleMenu } = useContext(MenuContext);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={`fixed w-screen bg-transparent-600 p-6 md:px-20 px-4 z-20 ${
        color ? "shadow-lg bg-[#F6F6F6]" : ""
      }`}
    >
      <div className="max-w-screen-2xl  mx-auto flex items-center justify-between">
        <div className="w-40">
          <a href="/">
            <img
              alt="octacore logo"
              src={
                color
                  ? require("../assets/images/logo2.png")
                  : require("../assets/images/logo.png")
              }
            />
          </a>
        </div>

        <div
          className={`hidden lg:block ${color ? "text-black" : "text-white"}`}
        >
          <ul className="flex space-x-12">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="!#">About Us</Link>
            </li>
            <li>
              <Link to="!#">Vision</Link>
            </li>
            <li>
              <Link to="!#">Representation</Link>
            </li>
            <li>
              <Link to="!#">Contact</Link>
            </li> */}
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>

        <button
          onClick={toggleMenu}
          className={`text-3xl block lg:hidden ${
            color ? "text-black" : "text-white"
          }`}
        >
          <IoMenuOutline />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
