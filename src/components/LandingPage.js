import React from "react";
import Hero from "./Hero";
import WhyNoteSlide from "./WhyNoteSlide";
import "../index.css";
import Reviews from "./Reviews";
import MoneyMap from "./MoneyMap";
import Testimonials from "./Testimonials";
import FinalCall from "./FinalCall";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <WhyNoteSlide />
      <Reviews />
      <MoneyMap />
      <Testimonials />
      <FinalCall />
    </div>
  );
};

export default LandingPage;
