import React, { useState, useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { IoMenuOutline } from "react-icons/io5";

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
      className={`fixed w-screen bg-transparent-600 p-6 z-20 ${
        color ? "shadow-lg bg-[#F6F6F6]" : ""
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
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
        
        <div className=" space-x-12 text-black hidden lg:block">
          <a href="/">Home</a>
          <a href="!#">About Us</a>
          <a href="/clients">Services</a>
          <a href="!#">Representation</a>
          <a href="!#">Contact</a>
        </div>
       
        <button onClick={toggleMenu} className="text-3xl text-white block lg:hidden">
          <IoMenuOutline />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
