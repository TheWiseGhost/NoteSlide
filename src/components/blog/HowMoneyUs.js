import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar"; // Import Navbar component
import { useNavigate } from "react-router-dom";

const HowMoneyUs = () => {
  const navigate = useNavigate();
  return (
    <HelmetProvider>
      <Helmet>
        <title>How to Make Money with NoteSlide</title>
        <meta
          name="description"
          content="Learn how to make money from your notes quickly using NoteSlide."
        />
        <meta name="keywords" content="Notes, Money, Students, Income, Easy" />
        <meta property="og:title" content="How to Make Money with Notes" />
        <meta
          property="og:description"
          content="Learn how to make money using NoteSlide "
        />
        <meta
          property="og:url"
          content="https://note-slide/blog/how-to-make-money-with-noteslide"
        />
        <link
          rel="canonical"
          href="https://note-slide.com/blog/how-to-make-money-with-noteslide"
        />
      </Helmet>
      <Navbar />
      <div className="pt-16 w-3/5 mx-auto">
        {" "}
        {/* Padding to ensure content does not overlap with navbar */}
        <header className="mt-16 font-alata">
          <p className="font-nats text-gray-500 pb-4">STUDENT ESSENTIALS</p>
          <h1 className="text-5xl font-bold pb-4 leading-normal">
            How to Make Money with NoteSlide
          </h1>
          <img
            src="https://www.marketplace.org/wp-content/uploads/2023/04/USdollar.jpg?fit=2800%2C1866"
            alt="Money with Notes"
            className="mt-4 mx-auto"
          />
        </header>
        <div className="container mx-auto px-4 mt-8">
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold font-alata">
              The Simple Steps
            </h2>

            <div className="space-y-6 pt-12">
              <a className="text-2xl font-josefin font-semibold">
                1. Convert everything to PDFs before uploading
              </a>
              <p className="text-lg">
                NoteSlide is known to prefer PDFs in their algorithm, so be sure
                to do this. You can convert images to PDFs on their site. Once
                you upload a note, you will make money straight away, one of the
                benefits of NoteSlide
              </p>
            </div>

            <div className="space-y-4 pt-12">
              <a className="text-2xl font-josefin font-semibold">
                2. Upload anything and everything
              </a>
              <p className="text-lg">
                Since every single view will get you money (yes, even for
                completely new users), it's pretty sound to assume that quantity
                is recommended. Although quality is required to build a
                following and hit the front page of NoteSlide, those looking to
                make a buck as quick as possible should just dump their Google
                Drive.
              </p>
            </div>

            <div className="space-y-4 pt-12">
              <a className="text-2xl font-josefin font-semibold">
                3. Build a following
              </a>
              <p className="text-lg">
                Although quantity will get you the first few bucks, the truth is
                all the big players of any platform have a huge following. If
                you want your notes to reach thousands, you have to ask more
                people to follow you and boost your account. To start off, you
                can get your friends to follow and add "follow me" prompts in
                your notes.
              </p>
            </div>
          </section>
          <section className="pb-20">
            <h2 className="text-4xl font-alata font-semibold pt-32 pb-12">
              The Most Important Thing
            </h2>
            <ul className="list-disc mt-2 space-y-6 text-lg">
              <li>
                <p className="font-josefin text-xl">Just Get Started:</p>
                While it can make you nervous to try something new and expose
                your work to others, it's taking the first step that makes all
                the fear go away. With the ability to make money with the very
                first view, NoteSlide offers an easy way to make money off your
                notes, without any credit card or personal info required.
                Ultimately, that's it. Just dive right in.
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

export default HowMoneyUs;
