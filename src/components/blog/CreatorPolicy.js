import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar"; // Import Navbar component
import { useNavigate } from "react-router-dom";

const CreatorPolicy = () => {
  const navigate = useNavigate();
  return (
    <HelmetProvider>
      <Helmet>
        <title>NoteSlide - Creator Policy</title>
        <meta
          name="description"
          content="The policy for how creators can make money with NoteSlide"
        />
        <meta name="keywords" content="Notes, Money, Students, Income, Easy" />
        <meta property="og:title" content="YouTube but make money with Notes" />
        <meta
          property="og:description"
          content="The policy for how creators can make money with NoteSlide"
        />
        <meta
          property="og:url"
          content="https://note-slide/blog/creator-policy/"
        />
        <link
          rel="canonical"
          href="https://note-slide.com/blog/creator-policy/"
        />
      </Helmet>
      <Navbar />
      <div className="pt-16 w-3/5 mx-auto">
        {" "}
        {/* Padding to ensure content does not overlap with navbar */}
        <header className="mt-16 font-alata">
          <p className="font-nats text-gray-500 pb-4">STUDENT ESSENTIALS</p>
          <h1 className="text-5xl font-bold pb-4 leading-normal">
            NoteSlide's Creator Policy
          </h1>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDX4IHcciwY67GbIMuOXOOV2Dtxp3eh7l-OA&s"
            alt="noteslide"
            className="mt-4 mx-auto w-full"
          />
        </header>
        <div className="container mx-auto px-4 mt-8">
          <section className="space-y-4">
            <h2 className="text-4xl font-semibold font-alata">
              The Basic Details
            </h2>

            <div className="space-y-6 pt-8">
              <a className="text-2xl font-josefin font-semibold">
                1. Who can be a creator
              </a>
              <p className="text-lg">
                NoteSlide allows anyone to be a creator after signing up for an
                account with an email. There are no other details required and
                once the account is created, the user can start posting notes
                right away. Unlike other platforms, NoteSlide is unique due to
                ...
              </p>
            </div>

            <div className="space-y-4 pt-12">
              <a className="text-2xl font-josefin font-semibold">
                2. Who makes money?
              </a>
              <p className="text-lg">
                Absolutely everyone who posts makes money on the platform. The
                rate is different depending on the followers, but a creator can
                make money off their every first view. Thus, NoteSlide allows
                everyone to profit on the platform without any barriers like
                personal details or a lengthy application or an age requirement
                or a minimum follower count or (you get the point).
              </p>
            </div>

            <div className="space-y-4 pt-12">
              <a className="text-2xl font-josefin font-semibold">
                3. How much do creators make
              </a>
              <p className="text-lg">
                NoteSlide's currently pays new creators about $1 per 500 views,
                which is solid considering how small the platform is. Moreover,
                NoteSlide plans to scale the platform with investments that
                allow creators to make $1 per 100 views. Currently NoteSlide is
                offering a 3x boost for instantly first 1,000 creators so it
                might be worth just making an account.
              </p>
            </div>
          </section>
          <section className="pb-20">
            <h2 className="text-4xl font-alata font-semibold pt-24 pb-12">
              Ready to become a creator?
            </h2>
            <ul className="list-disc mt-2 space-y-6 text-lg">
              <li>
                <p className="font-josefin text-xl">
                  Get the 3x Boost in 30 seconds:
                </p>
                As previously mentioned, NoteSlide has zero creator applications
                and allows users to make money instantly off a newly created
                account. You can sign up with just your email today.
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

export default CreatorPolicy;
