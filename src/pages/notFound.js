import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="text-center">
        <img
          className="lg:w-[20vw] w-[50vw] pb-5"
          src={require("../assets/images/404.png")}
          alt="404"
        />
        <h1 className="text-4xl pb-5">Page Not Found.</h1>
        <p className="pb-5 text-center">That page doesn't seem to exist.</p>
        <a href="/" className="button-primary font-bold">
          Go Home ➔
        </a>
      </div>
    </div>
  );
};

export default NotFound;
