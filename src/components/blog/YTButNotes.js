import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar"; // Import Navbar component
import { useNavigate } from "react-router-dom";

const YTButNotes = () => {
  const navigate = useNavigate();
  return (
    <HelmetProvider>
      <Helmet>
        <title>Youtube but for Notes? - NoteSlide</title>
        <meta
          name="description"
          content="The YouTube clone platform allowing students to make money"
        />
        <meta name="keywords" content="Notes, Money, Students, Income, Easy" />
        <meta property="og:title" content="YouTube but make money with Notes" />
        <meta
          property="og:description"
          content="The YouTube clone platform allowing students to make money"
        />
        <meta
          property="og:url"
          content="https://note-slide/blog/youtube-but-notes"
        />
        <link
          rel="canonical"
          href="https://note-slide.com/blog/youtube-but-notes"
        />
      </Helmet>
      <Navbar />
      <div className="pt-16 w-3/5 mx-auto">
        {" "}
        {/* Padding to ensure content does not overlap with navbar */}
        <header className="mt-16 font-alata">
          <p className="font-nats text-gray-500 pb-4">STUDENT ESSENTIALS</p>
          <h1 className="text-5xl font-bold pb-4 leading-normal">
            A YouTube clone centered on Notes
          </h1>
          <img
            src="https://musicpromotion.club/assets/blog/img/youtube-monetization-how-to-make-money-from-youtube-videos.jpg?v=1"
            alt="Money with Notes"
            className="mt-4 mx-auto"
          />
        </header>
        <div className="container mx-auto px-4 mt-8">
          <section className="space-y-4">
            <h2 className="text-4xl font-semibold font-alata">
              How Does It Work
            </h2>

            <div className="space-y-6 pt-8">
              <a className="text-2xl font-josefin font-semibold">
                1. Replacing videos with notes
              </a>
              <p className="text-lg">
                NoteSlide is platform just like youtube, but full of notes
                instead of videos. Other than users uploading a PDF instead of a
                video, there is very little differences between the two. Both
                are centered around Ad Revenue and have a follower system and
                creator platform. Neither has a messaging aspect.
              </p>
            </div>

            <div className="space-y-4 pt-12">
              <a className="text-2xl font-josefin font-semibold">2. Why?</a>
              <p className="text-lg">
                NoteSlide was founded by a 16 year old kid who wanted a better
                way to share notes. However, the idea quickly bloomed into a
                platform when he took the same principles of YouTube and applied
                them to his platform. Giving creators the opportunity to earn
                money from their notes in a transperant and friendly way,
                NoteSlide aimed to get rid of problems posed by other
                note-sharing platforms that abused users and were shady about
                payouts and earnings.
              </p>
            </div>

            <div className="space-y-4 pt-12">
              <a className="text-2xl font-josefin font-semibold">
                3. Did it work?
              </a>
              <p className="text-lg">
                NoteSlide's success is yet to be determined. Since the platform
                is incredibly small, only time will tell if the platform can go
                viral like YouTube and reach the millions of students and
                note-takers around the world.
              </p>
            </div>
          </section>
          <section className="pb-20">
            <h2 className="text-4xl font-alata font-semibold pt-24 pb-12">
              Want to Jump In?
            </h2>
            <ul className="list-disc mt-2 space-y-6 text-lg">
              <li>
                <p className="font-josefin text-xl">
                  NoteSlide is ready for you:
                </p>
                NoteSlide has zero creator applications and allows users to make
                money instantly off a newly created account. If you're
                interested, taking 5 minutes to upload some of your old notes
                off a Google Drive could be worth it.
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

export default YTButNotes;
