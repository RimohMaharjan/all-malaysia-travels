import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { RxCross1 } from "react-icons/rx";

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

    <div className="flex flex-col space-y-8 w-[80vw] mx-auto text-2xl pt-8">
          <a href="/">Home</a>
          <a href="!#">About Us</a>
          <a href="/clients">Services</a>
          <a href="!#">Representation</a>
          <a href="!#">Contact</a>
    </div>

    </div>
  );
}

export default Menu;
