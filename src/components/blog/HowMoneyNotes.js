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
          content="Learn how to turn your notes into a source of income in 2024. Explore popular apps and learn tips for success."
        />
        <meta
          name="keywords"
          content="make money, notes, academic notes, selling notes, student income"
        />
        <meta property="og:title" content="How to Make Money with Notes" />
        <meta
          property="og:description"
          content="Learn how to turn your notes into a source of income in 2024. Explore popular apps and learn tips for success."
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
                share their notes. Users can view notes after watching an Ad,
                letting creators earn the ad revenue and users get free notes.
                This is great for students looking to quickly make money,
                especially since there are no creator applications or
                requirements.
              </p>
              <div className="flex flex-row space-x-12 pt-6">
                <div className="w-full">
                  <h1 className="text-xl font-josefin">Pros</h1>
                  <ul className="list-disc mt-2">
                    <li>Ability to build a loyal following</li>
                    <li>
                      Easy to use and set up without much (Allows you to make
                      money on your very first view)
                    </li>
                    <li>Full Transperancy with views to pay ratio</li>
                  </ul>
                </div>
                <div className="w-full">
                  <h1 className="text-xl font-josefin">Cons</h1>
                  <ul className="list-disc mt-2">
                    <li>Small starter pay for creators</li>
                    <li>
                      New platform as of 2024 so userbase needs growth before
                      creators can make Youtube like revenue.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-20">
              <a className="text-2xl font-josefin font-semibold">
                2. StudySoup
              </a>
              <p className="text-lg">
                StudySoup allows students to sell their class notes and study
                guides. The platform also offers tutoring services, making it a
                comprehensive academic tool.
              </p>
              <div className="flex flex-row space-x-12 pt-6">
                <div className="w-full">
                  <h1 className="text-xl font-josefin">Pros</h1>
                  <ul className="list-disc mt-2">
                    <li>Get direct payments for your notes</li>
                    <li>
                      Suited to different educational material other than notes
                    </li>
                  </ul>
                </div>
                <div className="w-full">
                  <h1 className="text-xl font-josefin">Cons</h1>
                  <ul className="list-disc mt-2">
                    <li>Users are forced through a paywall</li>
                    <li>
                      A small audience (as is the nature of a paid-per-view
                      platform)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-20">
              <a className="text-2xl font-josefin font-semibold">3. Stuvia</a>
              <p className="text-lg">
                Stuvia offers a marketplace for academic notes, flashcards, and
                study guides. It focuses on high-quality content and detailed
                notes.
              </p>
              <div className="flex flex-row space-x-12 pt-6">
                <div className="w-full">
                  <h1 className="text-xl font-josefin">Pros</h1>
                  <ul className="list-disc mt-2">
                    <li>Marketplace style that some may prefer</li>
                    <li>Geared towards high-quality and very niche notes</li>
                  </ul>
                </div>
                <div className="w-full">
                  <h1 className="text-xl font-josefin">Cons</h1>
                  <ul className="list-disc mt-2">
                    <li>
                      Very hard to break into the marketplace without ads and
                      extensive
                    </li>
                    <li>
                      Paywalls and scammers have made users apprehensive of
                      using the site
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
                <p className="font-josefin text-xl">Quality Over Quantity:</p>{" "}
                Focus on creating detailed, clear, and well-organized notes.
                Ultimately, the top 5% of notes will get 95% of audience. It's
                crucial that you stay focused on your notes and make it be at
                the top of it's niche, even if the niche is small.
              </li>
              <li>
                <p className="font-josefin text-xl">Market Research:</p>{" "}
                Understand what’s in demand and look for popular topics. Start
                off by posting on Free platforms and understanding your note's
                performace before moving onto paid platforms
              </li>
              <li>
                <p className="font-josefin text-xl">Promotion:</p> Use social
                media, student forums, and campus groups to promote your notes.
                Try to build a following or a group that can boost your notes
                and validate your credibilty.
              </li>
              <li>
                <p className="font-josefin text-xl">Regular Updates:</p> Keep
                your notes updated and relevant to current course material.
                Connect with new students and ask them to provide feedback and
                small updates they made
              </li>
            </ul>
          </section>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default HowMoneyNotes;
