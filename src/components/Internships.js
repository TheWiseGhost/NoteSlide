import React, { useState } from "react";
import Navbar from "./blog/Navbar";

const pages = [
  { name: "About", key: "about" },
  { name: "Key Information", key: "key-info" },
  { name: "Sales Internship", key: "sales-internship" },
  { name: "Marketing Internship", key: "marketing-internship" },
];

const About = () => {
  return (
    <div className="flex flex-col pl-6">
      <h1 className="font-outfit text-black font-medium text-5xl">
        What is NoteSlide's Internships
      </h1>
      <p className="font-nats pt-6 text-gray-900 text-lg leading-10 pr-20">
        NoteSlide is a startup aiming to help students around the world share
        their notes for free, without any paywalls or restrictions. Imagine
        YouTube but with notes instead. Plus, users can make money off of their
        notes too! The platform is currently in early stages as we try to grow
        the userbase.
      </p>

      <p className="font-nats pt-6 text-gray-900 text-lg leading-10 pr-20">
        We offer multiple internships to students ranging from high school
        students to graduates to help people gain a deeper understanding of what
        work at a startup is like and how to move quickly in the business world.
        At a startup like NoteSlide, interns will get more opportunities to
        showcase their skills and create significant impact within the company.
        Plus, promotions and pay from these internships are available. Navigate
        to one of the other tabs to understand some key information or apply
        now!
      </p>
    </div>
  );
};

const KeyInfo = () => {
  return (
    <div className="flex flex-col pl-6">
      <h1 className="font-outfit text-black font-medium text-5xl">
        Key Information
      </h1>
      <p className="font-nats pt-6 text-gray-900 text-lg leading-10 pr-20">
        Anybody can apply, we do not disrcimate based on race or gender. We also
        do not participate in diversity initiatives or any outside influences to
        choose our candidates.
      </p>

      <p className="font-nats pt-4 text-gray-900 text-lg leading-10 pr-20">
        High School students are also welcome to apply, not just college and
        graduate students. We offer plenty of ways for anyone to learn and gain
        something from this internship
      </p>

      <p className="font-nats pt-4 text-gray-900 text-lg leading-10 pr-20">
        Workload is weekly and remote. However, the amount expected from an
        intern is minimum and we largely expect interns to do what they think
        they are capable of. Our pay and promotions are performance based so we
        will reward your hard work but understand if you have to slack some
        weeks.
      </p>

      <p className="font-nats pt-4 text-gray-900 text-lg leading-10 pr-20">
        This is an experience internship designed to be a resume booster. Do not
        expect the pay to be significant. You can be promoted to a Manager
        position within NoteSlide, which brings more pay, but interns should not
        expect to make a living wage. Again, pay is based on performance.
      </p>

      <p className="font-nats pt-4 text-gray-900 text-lg leading-10 pr-20">
        We offer letters of rec and free training so if you are struggling or
        need help with something, please feel free to ask. We are more than
        happy to go the extra mile to help our team.
      </p>
    </div>
  );
};

const Sales = () => {
  return (
    <div className="flex flex-col pl-6 font-nats pr-20 text-gray-900">
      <h1 className="font-outfit text-black font-medium text-5xl">
        Sales Internship
      </h1>

      <h2 className="pt-6 text-2xl">Who?</h2>
      <p className="pt-2">
        Internship for high school and college students looking for experience
        and a resume booster. We provide letters of recommendation, free
        training, connections, and pay from commissions (so it's technically a
        paid internship). We are flexible to your needs. If you want to become a
        fully paid employee, once you meet performance requirements (expanded
        upon below), then you can become a Sales Manager.
      </p>

      <h2 className="pt-6 text-2xl">Job Summary</h2>
      <p className="pt-2">
        <strong>NoteSlide</strong> (
        <a href="https://note-slide.com" target="_blank">
          note-slide.com
        </a>
        ) is a platform allowing users to share notes with their friends and
        across the globe. A Sales Intern is expected to contact potential
        businesses with the opportunity to buy Ad Credit on NoteSlide. Once an
        intern reaches a certain number of sales (which they will receive a
        commission for), they can be promoted to Sales Manager. Training will be
        provided to help interns make proper outreaches and contacts. We
        encourage high school students to apply. We write letters of
        recommendation and can help with other academic needs.
      </p>

      <h2 className="pt-6 text-2xl">Responsibilities</h2>
      <ul className="pt-2">
        <li>Contact at least 5 businesses per week</li>
        <li>Contact the manager at least once a week with a report</li>
      </ul>

      <h2 className="pt-6 text-2xl">Skills</h2>
      <ul className="pt-2">
        <li>Public Speaking</li>
        <li>Email Writing</li>
        <li>Sales</li>
        <li>Note: We do provide free training to grow skils</li>
      </ul>

      <h2 className="pt-6 text-2xl">Pay</h2>
      <p>$1.00 - $100.00 per week</p>

      <div className="pt-10">
        <div
          className="wipe pt-2 pb-1 px-4 font-josefin text-lg w-fit"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdBiMteHH5MmgBqvaCF8QnloYvp8H04uWX8yPDCcBCDjORFqA/viewform?usp=header"
            );
          }}
        >
          <span>Apply Now</span>
        </div>
      </div>
    </div>
  );
};

const Marketing = () => {
  return (
    <div className="flex flex-col pl-6 font-nats pr-20 text-gray-900">
      <h1 className="font-outfit text-black font-medium text-5xl">
        Marketing Internship
      </h1>

      <h2 className="pt-6 text-2xl">Who?</h2>
      <p className="pt-2">
        Internship for high school and college students looking for experience
        and a resume booster - We provide letters of rec, free training,
        connections, a small amount of pay (so it's technically a paid
        internship), and are flexible to your needs. If you want to become a
        fully paid employee, once you meet performance requirements (expanded
        upon down below) then you can become a Marketing Manager.
      </p>

      <h2 className="pt-6 text-2xl">Job Summary</h2>
      <p className="pt-2">
        <strong>NoteSlide</strong> (
        <a href="https://note-slide.com" target="_blank">
          note-slide.com
        </a>
        ) is a platform allowing users to share notes with their friends and
        across the globe. A Marketing Intern is expected to make 1-3 videos per
        week to help promote the brand and gain more users. Once an intern
        reaches a certain number of views of their video and/or gets enough
        users signed up from these videos and/or their referrals, they can be
        promoted to Marketing Manager. Training will be provided to help interns
        make videos. We encourage high school and college students to apply. We
        write letters of recommendation and can help with other academic needs.
      </p>

      <h2 className="pt-6 text-2xl">Responsibilities</h2>
      <ul className="pt-2">
        <li>Make at least one video per week</li>
        <li>Gain a certain amount of views per week from videos</li>
        <li>Share the company with new people to help gain users</li>
        <li>Contact the manager at least once a week with a report</li>
      </ul>

      <h2 className="pt-6 text-2xl">Skills</h2>
      <ul className="pt-2">
        <li>Knowledge of social media trends</li>
        <li>Video editing software skills like CapCut and ElevenLabs</li>
      </ul>

      <h2 className="pt-6 text-2xl">Pay</h2>
      <p>$1.00 - $100.00 per week</p>

      <div className="pt-10">
        <div
          className="wipe pt-2 pb-1 px-4 font-josefin text-lg w-fit"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLScVm3nQwhGCrmCU5oesAwIoxT1-d6ZHilDzglupeMyVoXbwCw/viewform?usp=header"
            );
          }}
        >
          <span>Apply Now</span>
        </div>
      </div>
    </div>
  );
};

const SidebarNavigation = () => {
  const [activePage, setActivePage] = useState("about");

  return (
    <div className="flex min-h-screen pb-12">
      {/* Sidebar */}
      <div className="w-1/5 border-r-2 border-gray-200 p-4 flex flex-col gap-4 font-outfit pl-12 pt-6">
        {pages.map((page) => (
          <button
            key={page.key}
            onClick={() => setActivePage(page.key)}
            className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg"
          >
            <span
              className={`w-3 h-3 rounded-full ${
                activePage === page.key ? "bg-yellow-300" : "bg-gray-300"
              }`}
            ></span>
            {page.name}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-6">
        {activePage === "about" && <About />}
        {activePage === "key-info" && <KeyInfo />}
        {activePage === "sales-internship" && <Sales />}
        {activePage === "marketing-internship" && <Marketing />}
      </div>
    </div>
  );
};

const Internships = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="h-fit pt-28">
        <SidebarNavigation />
      </div>
    </div>
  );
};

export default Internships;
