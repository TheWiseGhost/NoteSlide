import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const WhyNoteSlide = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 min-h-screen mx-auto w-5/6 md:w-2/3" id="whynoteslide">
      <h2 className="text-5xl pb-16 pt-12 text-center font-semibold font-outfit">
        Why Note Slide?
      </h2>

      <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-16 w-full self-center">
        {/* First Column */}
        <div className="relative font-outfit py-8 px-8 shadow-lg border-2 border-black w-full justify-center text-center items-center rounded-md">
          <div className="triangle -left-0.5 -top-0.5"></div>
          <p className="mb-2 text-3xl text-black">
            <span className="text-green-500">$$$ </span>for Work You Already Did
          </p>
          <div
            className="wipe py-3 px-8 text-xl mt-8"
            style={{ cursor: "pointer" }}
            onClick={() => (window.location.href = "#moneymap")}
          >
            <span className="font-josefin">How?</span>
          </div>
        </div>

        {/* Second Column */}
        <div className="relative font-outfit py-8 px-8 shadow-lg border-2 border-black w-full justify-center text-center items-center rounded-md">
          <div className="triangle rotate-90 -right-0.5 -top-0.5"></div>
          <p className="mb-2 text-3xl text-black">
            A huge library of notes - for free
          </p>
          <div
            className="wipe py-3 px-6 text-xl mt-8"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/auth")}
          >
            <span className="font-josefin">Sign Up</span>
          </div>
        </div>
      </div>

      <p className="mt-20 text-4xl font-outfit text-gray-600 text-center">
        Come On, It's a No Brainer
      </p>
    </div>
  );
};

export default WhyNoteSlide;
