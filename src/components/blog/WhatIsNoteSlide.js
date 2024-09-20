import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar"; // Import Navbar component
import { useNavigate } from "react-router-dom";

const WhatIsNoteSlide = () => {
  const navigate = useNavigate();
  return (
    <HelmetProvider>
      <Helmet>
        <title>What is NoteSlide</title>
        <meta
          name="description"
          content="What is noteslide? All about note-slide.com AKA NoteSlide"
        />
        <meta name="keywords" content="Notes, Money, Students, Income, Easy" />
        <meta property="og:title" content="What is NoteSlide" />
        <meta
          property="og:description"
          content="What is noteslide? All about note-slide.com AKA NoteSlide"
        />
        <meta
          property="og:url"
          content="https://note-slide/blog/what-is-noteslide/"
        />
        <link
          rel="canonical"
          href="https://note-slide.com/blog/what-is-noteslide/"
        />
      </Helmet>
      <Navbar />
      <div className="pt-16 w-3/5 mx-auto">
        {" "}
        {/* Padding to ensure content does not overlap with navbar */}
        <header className="mt-16 font-alata">
          <p className="font-nats text-gray-500 pb-4">STUDENT ESSENTIALS</p>
          <h1 className="text-5xl font-bold pb-4 leading-normal">
            What is NoteSlide?
          </h1>
          <img
            src="https://vivaldi.com/wp-content/uploads/note-taking-apps-980x551.png"
            alt="noteslide"
            className="mt-4 mx-auto"
          />
        </header>
        <div className="container mx-auto px-4 mt-8">
          <section className="space-y-4">
            <h2 className="text-4xl font-semibold font-alata">
              The Quick Breakdown
            </h2>

            <div className="space-y-6 pt-8">
              <a className="text-2xl font-josefin font-semibold">
                1. A Platform made by a Student for a Student
              </a>
              <p className="text-lg">
                NoteSlide is platform just like youtube, but full of notes
                instead of videos. The platform was made a by a high school
                student who wanted a better way to share notes with his friends.
                NoteSlide's majority of users are students, but a few do use the
                platform for other uses such as storing copies of their old
                notes.
              </p>
            </div>

            <div className="space-y-4 pt-12">
              <a className="text-2xl font-josefin font-semibold">
                2. But I can make Money?
              </a>
              <p className="text-lg">
                NoteSlide is built upon an ad revenue business model where
                businesses pay for their ads to be on the platform. This allows
                creators to make money on the platform in a transperant and easy
                to understand constant rate per view. This rate is about $1 per
                500 views.
              </p>
            </div>

            <div className="space-y-4 pt-12">
              <a className="text-2xl font-josefin font-semibold">
                3. How does it beat the Competition?
              </a>
              <p className="text-lg">
                NoteSlide's main competition is platforms like Studocu, which
                uses a different business model to distribute notes: upfront
                payment for notes. Other platforms use a marketplace to allow
                creators to sell their notes. NoteSlide takes a unqiue approach
                that is more friendly and easy to break into. Ulimately, the
                users will decide which platform they prefer.
              </p>
            </div>
          </section>
          <section className="pb-20">
            <h2 className="text-4xl font-alata font-semibold pt-24 pb-12">
              Want to join NoteSlide?
            </h2>
            <ul className="list-disc space-y-6 text-lg">
              <li>
                <p className="font-josefin text-2xl pb-2">
                  NoteSlide is offering a creator boost for its first 10,000
                  users:
                </p>
                NoteSlide is allowing the first 10,000 creators to make 3x the
                amount of a regular creator. If you are interested, creating an
                account and claiming the 3x lifetime boost could be worth it,
                even valuable in the future if NoteSlide becomes a large
                platform.
              </li>
              <div
                className="wipe pt-2 pb-1 px-4 font-josefin text-lg w-fit"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/auth/")}
              >
                <span>Make an Account</span>
              </div>
            </ul>
          </section>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default WhatIsNoteSlide;
