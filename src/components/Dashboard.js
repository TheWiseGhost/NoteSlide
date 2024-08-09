import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoteView from "./NoteView";
import "../index.css";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Notes | NoteSlide</title>
        <meta
          name="description"
          content="Discover a huge library of free, user-uploaded notes with NoteSlide. Perfect for students and college learners, explore and share valuable information to boost your studies. Join NoteSlide today for easy access to notes and resources tailored to your academic needs. View Math, science, literature, history, and many more subject notes uploaded by students across the USA and the globe."
        />
        <link rel="canonical" href="https://noteslide.netlify.app/dashboard" />
      </Helmet>
      <div>
        <NoteView />
      </div>
    </>
  );
};

export default Dashboard;
