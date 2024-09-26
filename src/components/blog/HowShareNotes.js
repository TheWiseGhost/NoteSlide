import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar"; // Import Navbar component
import { useNavigate } from "react-router-dom";

const HowShareNotes = () => {
  const navigate = useNavigate();
  return (
    <HelmetProvider>
      <Helmet>
        <title>How to Share Your Notes</title>
        <meta name="description" content="How to Share Your Notes" />
        <meta
          name="keywords"
          content="make money, notes, cash out, student income"
        />
        <meta property="og:title" content="How to Make Money with Notes" />
        <meta
          property="og:description"
          content="How to Share Your Notes on NoteSlide to make the most money possible"
        />
        <meta
          property="og:url"
          content="https://note-slide/blog/how-share-notes"
        />
        <link
          rel="canonical"
          href="https://note-slide.com/blog/how-share-notes"
        />
      </Helmet>
      <Navbar />
      <div className="pt-16 w-3/5 mx-auto">
        {" "}
        {/* Padding to ensure content does not overlap with navbar */}
        <header className="mt-16 font-alata">
          <p className="font-nats text-gray-500 pb-4">STUDENT ESSENTIALS</p>
          <h1 className="text-5xl font-bold pb-4 leading-normal">
            How to Share Your Notes on NoteSlide for Max Profit
          </h1>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSey_dEMeFcUpECNtAL4KkdqZouKq0NYYjaoVXC_p4dj6B3CoyYCNjw9KZX4TlasoDzNmg&usqp=CAU"
            alt="Money with Notes"
            className="mt-4 mx-auto w-full"
          />
        </header>
        <div className="container mx-auto px-4 mt-8">
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold font-alata">
              Key Strategies
            </h2>

            <div className="space-y-6 pt-12">
              <a className="text-2xl font-josefin font-semibold">
                1. Upload Curiculum Based Material
              </a>
              <p className="text-lg">
                By sharing notes that come from a curiculum or a textbook or a
                larger centralized body, you instantly appeal to the auidence of
                that curiculum, which probably has a large userbase. An example
                would be AP Classes from CollegeBoard. Students across the world
                take these classes and would likely search for your notes if
                they have the same class. The approach allows you to connect to
                a specific but large niche at minimum effort.
              </p>
            </div>

            <div className="space-y-4 pt-12">
              <a className="text-2xl font-josefin font-semibold">
                2. Wonder what notes you would want
              </a>
              <p className="text-lg">
                Be your own audience is great advice for notesharers on
                NoteSlide. When trying to share notes, you most likely sent them
                to your friends and people like you. Thus, maybe the best notes
                for you to upload are notes that you (and people like you) would
                want and use. By being your own audience, you can create notes
                for yourself and make a targeted following of people just like
                you, making it easy to continously upload new notes.
              </p>
            </div>
          </section>
          <section className="pb-20">
            <h2 className="text-4xl font-alata font-semibold pt-32 pb-6">
              What does every successful one do?
            </h2>
            <ul className="list-disc mt-2 space-y-6 text-lg">
              <li>
                <p className="font-josefin text-xl">They just pump notes:</p>
                Since every single view will get you money, the most successful
                people are those that take advantage of the system and spam
                notes out, using one of the above strageties or their own.
                Either way, it's much easier to hit 1,000 views on 20 notes than
                20,000 views on 1 note. Experiment with what notes your audience
                wants and views.
              </li>
              <div
                className="wipe pt-2 pb-1 px-4 font-josefin text-lg w-fit"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/auth?redirect=upload")}
              >
                <span>Upload a Note</span>
              </div>
            </ul>
          </section>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default HowShareNotes;
