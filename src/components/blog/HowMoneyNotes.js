import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar"; // Import Navbar component

const HowMoneyNotes = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>How to Make Money with Notes</title>
        <meta
          name="description"
          content="Learn how to turn your valuable academic notes into a source of income. Explore popular apps and tips for success."
        />
        <meta
          name="keywords"
          content="make money, notes, academic notes, selling notes, student income"
        />
        <meta property="og:title" content="How to Make Money with Notes" />
        <meta
          property="og:description"
          content="Learn how to turn your valuable academic notes into a source of income. Explore popular apps and tips for success."
        />
        <meta
          property="og:url"
          content="https://note-slide/blog/how-to-make-money-with-notes"
        />
        <link
          rel="canonical"
          href="https://note-slide.com/blog/how-to-make-money-with-notes"
        />
      </Helmet>
      <Navbar />
      <div className="pt-16 w-3/5 mx-auto">
        {" "}
        {/* Padding to ensure content does not overlap with navbar */}
        <header className="mt-16 font-alata">
          <p className="font-nats text-gray-500 pb-4">STUDENT ESSENTIALS</p>
          <h1 className="text-5xl font-bold pb-4">
            How to Make Money with Notes
          </h1>
          <img
            src="https://cdn.lynda.com/course/373782/373782-636247511734821922-16x9.jpg"
            alt="Money with Notes"
            className="mt-4 mx-auto"
          />
        </header>
        <div className="container mx-auto px-4 mt-8">
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold font-alata">
              Popular Apps for Exchanging Notes
            </h2>

            <div className="space-y-6 pt-8">
              <a className="text-2xl font-josefin font-semibold">
                1. NoteSlide
              </a>
              <p className="text-lg">
                NoteSlide is a platform designed for students to upload and
                share their notes. Users can browse, purchase, or download
                notes, making it a versatile marketplace for academic content.
              </p>
              <div className="flex flex-row space-x-12 pt-6">
                <div>
                  <h1 className="text-xl text-center font-josefin">Pros</h1>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Easy to use and set up, wide audience, secure payment
                      methods.
                    </li>
                    <li>
                      Easy to use and set up, wide audience, secure payment
                      methods.
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-xl text-center font-josefin">Cons</h1>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Easy to use and set up, wide audience, secure payment
                      methods.
                    </li>
                    <li>
                      Easy to use and set up, wide audience, secure payment
                      methods.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <a className="text-2xl font-josefin font-semibold">
                1. NoteSlide
              </a>
              <p className="text-lg">
                NoteSlide is a platform designed for students to upload and
                share their notes. Users can browse, purchase, or download
                notes, making it a versatile marketplace for academic content.
              </p>
              <div className="flex flex-row space-x-12 pt-6">
                <div>
                  <h1 className="text-xl text-center font-josefin">Pros</h1>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Easy to use and set up, wide audience, secure payment
                      methods.
                    </li>
                    <li>
                      Easy to use and set up, wide audience, secure payment
                      methods.
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-xl text-center font-josefin">Cons</h1>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Easy to use and set up, wide audience, secure payment
                      methods.
                    </li>
                    <li>
                      Easy to use and set up, wide audience, secure payment
                      methods.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <a className="text-2xl font-josefin font-semibold">
                1. NoteSlide
              </a>
              <p className="text-lg">
                NoteSlide is a platform designed for students to upload and
                share their notes. Users can browse, purchase, or download
                notes, making it a versatile marketplace for academic content.
              </p>
              <div className="flex flex-row space-x-12 pt-6">
                <div>
                  <h1 className="text-xl text-center font-josefin">Pros</h1>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Easy to use and set up, wide audience, secure payment
                      methods.
                    </li>
                    <li>
                      Easy to use and set up, wide audience, secure payment
                      methods.
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-xl text-center font-josefin">Cons</h1>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Easy to use and set up, wide audience, secure payment
                      methods.
                    </li>
                    <li>
                      Easy to use and set up, wide audience, secure payment
                      methods.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="pb-20">
            <h2 className="text-4xl font-alata font-semibold pt-32 pb-12">
              Tips for Success in Selling Notes
            </h2>
            <ul className="list-disc mt-2 space-y-12 text-lg">
              <li>
                <strong className="font-josefin text-xl">
                  Quality Over Quantity:
                </strong>{" "}
                Focus on creating detailed, clear, and well-organized notes.
              </li>
              <li>
                <strong className="font-josefin text-xl">
                  Market Research:
                </strong>{" "}
                Understand what’s in demand and look for popular topics.
              </li>
              <li>
                <strong className="font-josefin text-xl">Promotion:</strong> Use
                social media, student forums, and campus groups to promote your
                notes.
              </li>
              <li>
                <strong className="font-josefin text-xl">
                  Regular Updates:
                </strong>{" "}
                Keep your notes updated and relevant to current course material.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default HowMoneyNotes;
