import "../../index.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="fixed top- w-full bg-white">
      <nav className="w-full flex items-center justify-between p-4 px-8 md:px-12 pt-8 sticky shadow-lg shadow-gray-200">
        <div className="flex flex-row justify-center w-fit items-center space-x-2 md:space-x-4">
          <img
            src="/images/NoteSlideLogo.png"
            className="w-10"
            alt="NoteSlide Logo"
          />
          <div className="text-2xl text-black font-bold md:font-semibold font-nats">
            Note Slide
          </div>
        </div>
        <div className="flex flex-row items-center space-x-0 md:space-x-12 text-xl font-outfit">
          <div className="hidden md:flex space-x-12">
            <button
              style={{ cursor: "pointer" }}
              onClick={() => handleNavigation("/")}
              className="text_button bg-white text-gray-700"
            >
              <span className="span-mother">
                <span>H</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
              </span>
              <span className="span-mother2">
                <span>H</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
              </span>
            </button>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => handleNavigation("/auth")}
              className="text_button bg-white text-gray-700"
            >
              <span className="span-mother">
                <span>L</span>
                <span>o</span>
                <span>g</span>
                <span>i</span>
                <span>n</span>
              </span>
              <span className="span-mother2">
                <span>L</span>
                <span>o</span>
                <span>g</span>
                <span>i</span>
                <span>n</span>
              </span>
            </button>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => handleNavigation("/upload")}
              className="text_button bg-white text-green-500"
            >
              <span className="span-mother">
                <span>$</span>
                <span>$</span>
                <span>$</span>
              </span>
              <span className="span-mother2">
                <span>$</span>
                <span>$</span>
                <span>$</span>
              </span>
            </button>
          </div>
          <div
            className="wipe pt-2 pb-1 px-4 font-josefin text-lg w-fit"
            style={{ cursor: "pointer" }}
            onClick={() => handleNavigation("/dashboard")}
          >
            <span>See Notes</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
