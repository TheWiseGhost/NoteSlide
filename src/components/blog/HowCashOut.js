import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar"; // Import Navbar component
import { useNavigate } from "react-router-dom";

const HowCashOut = () => {
  const navigate = useNavigate();
  return (
    <HelmetProvider>
      <Helmet>
        <title>How to Cash Out Your Money from NoteSlide</title>
        <meta
          name="description"
          content="How to Cash Out Your Money from NoteSlide"
        />
        <meta
          name="keywords"
          content="make money, notes, cash out, student income"
        />
        <meta property="og:title" content="How to Make Money with Notes" />
        <meta
          property="og:description"
          content="How to Cash Out Your Money from NoteSlide"
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
          <h1 className="text-5xl font-bold pb-4 leading-normal">
            How to Cash Out Your Money from NoteSlide
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
                1. Reach $20
              </a>
              <p className="text-lg">
                Users are required to make at least $20 on the platform before
                cashing out. This is about 10,000 views on the platform as of
                August 2024, but NoteSlide has promised to try and get the
                number down as far as 2,500 views by 2025 once they get more
                advertisers. Either way, you must reach $20 of balance to cash
                out.
              </p>
            </div>

            <div className="space-y-4 pt-12">
              <a className="text-2xl font-josefin font-semibold">
                2. Contact Them
              </a>
              <p className="text-lg">
                NoteSlide is a relatively new platform so they don't have the
                best payment infrastructure. Instead, they prefer if you just
                email them like a friend and then follow their instructions to
                recieve a payment. NoteSlide is working on building better
                payment infrastructure and apologizes to any users for the
                inconvient process. <br /> <br />
                You can reach NoteSlide through Gmail - noteslilde@gmail.com
                (the typo is on purpose, ask the founders not me why its named
                this way)
                <br />
                <br />
                Or you can contact them on X through -{" "}
                <a
                  href="https://x.com/note_slide"
                  className="underline"
                  target="_blank"
                >
                  https://x.com/note_slide
                </a>
              </p>
            </div>
          </section>
          <section className="pb-20">
            <h2 className="text-4xl font-alata font-semibold pt-32 pb-12">
              Not at $20 yet?
            </h2>
            <ul className="list-disc mt-2 space-y-6 text-lg">
              <li>
                <p className="font-josefin text-xl">
                  Just Start Pumping Notes:
                </p>
                Since every single view will get you money (yes, even for
                completely new users), it's pretty sound to assume that quantity
                is recommended. Although quality is required to build a
                following and hit the front page of NoteSlide, those looking to
                make a buck as quick as possible should just dump their Google
                Drive. Ulimately, just let time take its course and the views
                will come eventually.
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

export default HowCashOut;
