import React from "react";
import Hero from "./Hero";
import WhyNoteSlide from "./WhyNoteSlide";
import "../index.css";
import Reviews from "./Reviews";
import MoneyMap from "./MoneyMap";
import Testimonials from "./Testimonials";
import FinalCall from "./FinalCall";
import { Helmet } from "react-helmet-async";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>NoteSlide</title>
        <meta
          name="description"
          content="The home page of NoteSlide. Learn more about NoteSlide and how to get free notes + make money off of your notes here."
        />
        <link rel="canonical" href="https://noteslide.netlify.app/" />
      </Helmet>
      <div>
        <Hero />
        <WhyNoteSlide />
        <Reviews />
        <MoneyMap />
        <Testimonials />
        <FinalCall />
      </div>
    </>
  );
};

export default LandingPage;
