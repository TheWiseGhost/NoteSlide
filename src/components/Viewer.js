import React, { useState, useEffect } from "react";
import ViewNote from "./ViewNote";
import ViewAd from "./ViewAd";
import { useParams } from "react-router-dom";

// Bot detection function
const isSearchBot = () => {
  if (typeof window === "undefined") return false; // For SSR safety
  const userAgent = navigator.userAgent.toLowerCase();
  const bots = [
    "googlebot",
    "bingbot",
    "yandex",
    "duckduckbot",
    "baiduspider",
    "facebot",
    "ia_archiver",
    "slurp",
  ];
  return bots.some((bot) => userAgent.includes(bot));
};

const Viewer = () => {
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const [isBot, setIsBot] = useState(false);

  useEffect(() => {
    setIsBot(isSearchBot());
  }, []);

  if (isBot) {
    // Directly show note for search bots
    return <ViewNote id={id} />;
  }

  // Original logic for regular users
  return (
    <>{show ? <ViewNote id={id} /> : <ViewAd setShow={setShow} id={id} />}</>
  );
};

export default Viewer;
