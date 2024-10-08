import React from "react";
import { ReactTyped } from "react-typed";
import "../index.css";

const Reviews = () => {
  return (
    <div
      className="flex flex-col items-center pt-16 min-h-screen bg-white p-4"
      id="reviews"
    >
      <h1 className="text-center text-4xl mb-12 font-outfit font-semibold">
        Join the best platform to gain info for{" "}
        <span>
          <ReactTyped
            strings={[
              "Students",
              "Writers",
              "Developers",
              "Scholars",
              "Researchers",
            ]}
            typeSpeed={100}
            loop
            backSpeed={80}
            cursorChar="|"
            showCursor={true}
            backDelay={2000}
          />
        </span>
      </h1>
      <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-20 mb-4 w-5/6 md:w-3/5 mx-auto">
        <div className="relative border-2 border-black p-4 py-6 rounded shadow-md w-full md:w-4/5 mx-auto text-center">
          <div className="triangle -left-0.5 -top-0.5"></div>
          <div className="text-3xl pb-2 text-black font-bold mb-2">★★★★★</div>
          <p className="text-neutral-800 text-2xl font-outfit mx-4">
            “Visiting daily in just my second week”
          </p>
        </div>
        <div className="relative border-2 border-black p-4 py-6 rounded shadow-md w-full md:w-4/5 mx-auto text-center">
          <div className="triangle rotate-90 -right-0.5 -top-0.5"></div>
          <div className="text-3xl pb-2 font-bold mb-2">★★★★★</div>
          <p className="text-neutral-800 text-2xl font-outfit mx-4">
            “Learned so much in just minutes!”
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 md:space-x-16 mb-4 mt-8">
        <div className="flex items-center w-1/5">
          <img
            src="/images/GoogleReviews.png"
            alt="Google Reviews"
            className="w-full pt-6 mr-2"
          />
        </div>
        <div
          className="flex wipe items-center py-4 px-4 md:px-6 text-xl mt-6"
          style={{ cursor: "pointer" }}
          onClick={() => (window.location.href = "#")}
        >
          <span className="font-outfit text-center">Get Notes</span>
        </div>
        <div className="flex items-center w-1/5">
          <img
            src="/images/Trustpilot.png"
            alt="Trustpilot Rating"
            className="w-full pt-6 mr-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
