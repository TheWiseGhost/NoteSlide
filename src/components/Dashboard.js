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
          content="Discover a huge library of free, user-uploaded notes relating to Math, science, literature, history, and many more subjects
           with NoteSlide. Built for students."
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
