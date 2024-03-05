import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { RxCross1 } from "react-icons/rx";

function Menu() {

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
    <div>
      <div className="mx-auto flex items-center justify-between">
        <div className="h-28 w-80 p-6">
          <a href="/">
            <img
              onClick={scrollToTop}
              className="h-16"
              alt="chariot logo"
              src={require("../../assets/images/logoNew.png")}
            />
          </a>
        </div>
        <button onClick={closeMenu} className="text-2xl mr-8">
          <RxCross1 />
        </button>
      </div>

      <div className="flex flex-col space-y-2 w-[80vw] mx-auto text-4xl pt-6">
        {navItems.map((item, index) => (
          <div key={index}>
            {pathname === "/" && item.scroll ? (
              <p
                onClick={item.scroll}
                className="cursor-pointer text-[30px] pb-5 "
              >
                {item.label}
              </p>
            ) : (
              <a
                href={item.path}
                className="cursor-pointer text-[30px] pb-5 block"
              >
                {item.label}
              </a>
            )}
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default Menu;
