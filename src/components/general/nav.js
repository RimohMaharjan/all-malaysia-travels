import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = () => {
  const { toggleMenu } = useContext(MenuContext);

  // const [color, setColor] = useState(false);
  // const changeColor = () => {
  //   if (window.scrollY >= 10) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };

  // window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={`fixed w-screen bg-transparent-600 p-6 md:px-20 px-4 z-20 shadow-lg bg-[#f6f6f66c]`}
    >
      <div className="max-w-screen-2xl  mx-auto flex items-center justify-between">
        <div className="w-40">
          <a href="/">
            <img
              alt="octacore logo"
              src={require("../../assets/images/logo2.png")}
            />
          </a>
        </div>

        <div className={`hidden lg:block text-black`}>
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
          className={`text-4xl block lg:hidden text-black`}
        >
          <IoMenuOutline />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
