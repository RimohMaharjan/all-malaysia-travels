import React ,{useState} from "react";

const Nav = () => {

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
    <nav className={`fixed w-screen bg-transparent-600 p-6 z-20 ${
      color ? "shadow-lg bg-[#232323]" : ""
      }`}>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="w-40">
          <a href="/">
            <img
              alt="octacore logo"
              src={require("../assets/images/logo.png")}
            />
          </a>
        </div>
        <div className=" space-x-12 text-white">
          <a href="/">Home</a>
          <a href="!#">About Us</a>
          <a href="/clients">Services</a>
          <a href="!#">Representation</a>
          <a href="!#">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav