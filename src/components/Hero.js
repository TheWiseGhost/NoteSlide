import "../index.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col pb-20 md:pb-0 md:min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="w-full flex items-center justify-between p-4 px-8 md:px-20 pt-12 animate-floatDown">
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
              onClick={() => (window.location.href = "#whynoteslide")}
              className="text_button bg-white text-gray-700"
            >
              <span className="span-mother">
                <span>I</span>
                <span>n</span>
                <span>f</span>
                <span>o</span>
              </span>
              <span className="span-mother2">
                <span>I</span>
                <span>n</span>
                <span>f</span>
                <span>o</span>
              </span>
            </button>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => (window.location.href = "#reviews")}
              className="text_button bg-white text-gray-700"
            >
              <span className="span-mother">
                <span>R</span>
                <span>e</span>
                <span>v</span>
                <span>i</span>
                <span>e</span>
                <span>w</span>
                <span>s</span>
              </span>
              <span className="span-mother2">
                <span>R</span>
                <span>e</span>
                <span>v</span>
                <span>i</span>
                <span>e</span>
                <span>w</span>
                <span>s</span>
              </span>
            </button>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => (window.location.href = "#moneymap")}
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

      {/* Main Content */}
      <div className="text-center mt-12">
        <div className="mx-4 md:mx-0 text-5xl md:text-7xl flex flex-col text-center font-outfit font-semibold mb-8 animate-floatUp">
          <h1 className="leading-snug">
            Simply the Best Way to <br className="hidden md:block" /> Share
            Notes
          </h1>
        </div>
        <div className="flex flex-row justify-center space-x-16 mt-16 font-josefin">
          <div
            onClick={() => handleNavigation("/auth")}
            className="main w-28 px-8 text-xl animate-floatUp"
          >
            <span>Login</span>
          </div>
          <div
            className="wipe mt-2 py-3 px-6 text-xl animate-floatUp"
            style={{ cursor: "pointer" }}
            onClick={() => (window.location.href = "#whynoteslide")}
          >
            <span>Learn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
