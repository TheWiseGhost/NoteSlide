import React, { useState, useEffect, useRef } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import GroupIcon from "@mui/icons-material/Group";
import { FaBell, FaUserCircle, FaBars, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const NoteView = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearchTerm, setActiveSearchTerm] = useState("");
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const iconRef = useRef(null);
  const [popupPosition, setPopupPosition] = useState({ left: "0%" });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (iconRef.current) {
        const { left, width } = iconRef.current.getBoundingClientRect();
        setPopupPosition({ left: left + width / 2 });
      }
      setShowPopup(true);
    }, 2000);

    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true); // Ensure loading state is set when fetching data
      try {
        let response;
        if (searchTerm) {
          response = await fetch(
            `https://noteslidebackend.onrender.com/api/search_notes/?search=${encodeURIComponent(
              searchTerm
            )}`
          );
        } else {
          response = await fetch(
            "https://noteslidebackend.onrender.com/api/notes/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ user_id: user ? user.id : null }),
            }
          );
        }
        const data = await response.json();
        setNotes(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching notes:", error);
        setLoading(false); // Ensure loading state is updated on error as well
      }
    };

    fetchNotes();
  }, [activeSearchTerm]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleNoteClick = (id) => {
    if (!user) {
      navigate(`/auth?redirect=view/${id}`);
    } else {
      navigate(`/view/${id}`);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShare = async (url, text) => {
    const shareData = {
      title: "NoteSlide",
      text: text,
      url: url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
        fallbackToClipboard(shareData.url);
      }
    } else {
      fallbackToClipboard(shareData.url);
    }
  };

  const fallbackToClipboard = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Share Link copied");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className="flex min-h-screen ml-6">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0 w-28" : "-translate-x-32 w-0"
        }`}
      >
        <div className="flex flex-col items-center mt-28 space-y-8">
          <HomeIcon
            onClick={() => handleNavigation("/dashboard")}
            className="w-1/2 text-gray-700 cursor-pointer"
          />
          <CloudUploadIcon
            onClick={() => handleNavigation("/upload")}
            className="w-1/2 text-gray-700 cursor-pointer"
          />
          <GroupIcon
            onClick={() => handleNavigation("/following_notes")}
            className="w-1/2 text-gray-700 cursor-pointer"
          />
          <BookmarkIcon
            onClick={() => handleNavigation("/favorites")}
            className="w-1/2 text-gray-700 cursor-pointer"
          />
          <BusinessCenterIcon
            onClick={() => handleNavigation("/business")}
            className="w-1/2 text-gray-700 cursor-pointer"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <div className="flex items-center justify-between bg-white pt-8 pr-4 md:p-4 md:pt-8 sticky top-0 z-50">
          <div className="flex items-center">
            <FaBars
              className="w-8 h-8 text-gray-700 cursor-pointer"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
            <img
              src="/images/NoteSlideLogo.png"
              className="w-8 ml-4 md:ml-8"
              alt="NoteSlide Logo"
            />
            <button
              onClick={() => handleNavigation("/dashboard")}
              className="ml-2 hidden md:block font-nats text-2xl font-semibold text-neutral-800"
            >
              Note Slide
            </button>
          </div>
          <div className="flex flex-row items-center flex-1 justify-center ml-0 md:ml-12">
            <div className="flex items-center rounded-2xl border border-black w-2/3 md:w-2/5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setActiveSearchTerm(searchTerm);
                }}
                className="w-full"
              >
                <input
                  type="text"
                  className="px-4 w-full py-2 rounded-2xl focus:outline-2"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button type="submit" className="hidden">
                  Search
                </button>
              </form>
            </div>
            <FaSearch
              onClick={() => {
                setActiveSearchTerm(searchTerm);
              }}
              className="cursor-pointer w-6 h-6 text-gray-700 mx-2 md:mx-4"
            />
          </div>
          <div className="flex items-center space-x-2 md:space-x-4 md:mr-12">
            <div>
              <div className="w-6 h-6 pr-2 md:mr-0 flex rounded-full items-center justify-end">
                <GroupAddOutlinedIcon
                  ref={iconRef}
                  onClick={() => {
                    handleShare(
                      `https://note-slide.com/auth/?referral=${user.id}`,
                      `${user.name} invited you to NoteSlide`
                    );
                  }}
                  className="text-gray-900 hover:cursor-pointer cursor-pointer"
                />
              </div>
              {showPopup && (
                <motion.div
                  className="absolute bg-gray-800 text-white p-2 rounded"
                  initial={{ opacity: 0, translateY: -10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: "85%", // Position the box directly below the icon
                    left: `${popupPosition.left - 90}px`, // Set x position based on icon's position
                  }}
                >
                  {/* Triangle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-800"></div>
                  Share for $0.25!
                </motion.div>
              )}
            </div>
            <div className="w-10 h-10 hidden md:flex rounded-full items-center justify-end">
              <ChatOutlinedIcon
                onClick={() => {
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSeq_g58sbOCDxyyfY5-mCDt1PpFvNErzFtQFDFZzg9BA3mpqA/viewform",
                    "_blank"
                  );
                }}
                className="w-10 h-10 text-gray-700 hover:cursor-pointer cursor-pointer"
              />
            </div>

            <div className="w-12 h-10 hidden md:flex items-center justify-center">
              <FaBell className="w-6 h-6 text-gray-700" />
              <div className="font-outfit relative top-0 mb-3 right-0 w-5 h-5 bg-red-500 text-white text-xs font-bold flex items-center justify-center rounded-full">
                <p>{user?.notifs}</p>
              </div>
            </div>

            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <FaUserCircle
                onClick={() => handleNavigation("/profile")}
                className="w-6 h-6 text-gray-700 hover:cursor-pointer cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="flex flex-col">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-2xl pt-40 font-outfit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="200px"
                  width="200px"
                  viewBox="0 0 200 200"
                  class="pencil"
                >
                  <defs>
                    <clipPath id="pencil-eraser">
                      <rect height="30" width="30" ry="5" rx="5"></rect>
                    </clipPath>
                  </defs>
                  <circle
                    transform="rotate(-113,100,100)"
                    stroke-linecap="round"
                    stroke-dashoffset="439.82"
                    stroke-dasharray="439.82 439.82"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    r="70"
                    class="pencil__stroke"
                  ></circle>
                  <g transform="translate(100,100)" class="pencil__rotate">
                    <g fill="none">
                      <circle
                        transform="rotate(-90)"
                        stroke-dashoffset="402"
                        stroke-dasharray="402.12 402.12"
                        stroke-width="30"
                        stroke="hsl(223,90%,50%)"
                        r="64"
                        class="pencil__body1"
                      ></circle>
                      <circle
                        transform="rotate(-90)"
                        stroke-dashoffset="465"
                        stroke-dasharray="464.96 464.96"
                        stroke-width="10"
                        stroke="hsl(223,90%,60%)"
                        r="74"
                        class="pencil__body2"
                      ></circle>
                      <circle
                        transform="rotate(-90)"
                        stroke-dashoffset="339"
                        stroke-dasharray="339.29 339.29"
                        stroke-width="10"
                        stroke="hsl(223,90%,40%)"
                        r="54"
                        class="pencil__body3"
                      ></circle>
                    </g>
                    <g
                      transform="rotate(-90) translate(49,0)"
                      class="pencil__eraser"
                    >
                      <g class="pencil__eraser-skew">
                        <rect
                          height="30"
                          width="30"
                          ry="5"
                          rx="5"
                          fill="hsl(223,90%,70%)"
                        ></rect>
                        <rect
                          clip-path="url(#pencil-eraser)"
                          height="30"
                          width="5"
                          fill="hsl(223,90%,60%)"
                        ></rect>
                        <rect
                          height="20"
                          width="30"
                          fill="hsl(223,10%,90%)"
                        ></rect>
                        <rect
                          height="20"
                          width="15"
                          fill="hsl(223,10%,70%)"
                        ></rect>
                        <rect
                          height="20"
                          width="5"
                          fill="hsl(223,10%,80%)"
                        ></rect>
                        <rect
                          height="2"
                          width="30"
                          y="6"
                          fill="hsla(223,10%,10%,0.2)"
                        ></rect>
                        <rect
                          height="2"
                          width="30"
                          y="13"
                          fill="hsla(223,10%,10%,0.2)"
                        ></rect>
                      </g>
                    </g>
                    <g
                      transform="rotate(-90) translate(49,-30)"
                      class="pencil__point"
                    >
                      <polygon
                        points="15 0,30 30,0 30"
                        fill="hsl(33,90%,70%)"
                      ></polygon>
                      <polygon
                        points="15 0,6 30,0 30"
                        fill="hsl(33,90%,50%)"
                      ></polygon>
                      <polygon
                        points="15 0,20 10,10 10"
                        fill="hsl(223,10%,10%)"
                      ></polygon>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          ) : (
            <div
              className={`mr-0 mt-8 ${
                sidebarOpen ? "ml-32 mr-0" : "ml-12"
              } pt-6 pb-20 min-h-screen bg-white flex flex-wrap`}
              style={{ gap: "48px" }} // Add gap between items
            >
              {notes.map((note) => (
                <NoteCard
                  key={note._id}
                  note={note}
                  onClick={() => handleNoteClick(note._id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const NoteCard = ({ note, onClick }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const controls = useAnimation();

  const formatTextWithHyphens = (text, chunkSize = 15) => {
    // Split the text by spaces
    const segments = text.split(" ");

    // Map over segments and format only those that are long enough
    const formattedSegments = segments.map((segment) => {
      if (segment.length >= chunkSize) {
        return segment.split("").reduce((acc, char, index) => {
          if (index > 0 && index % chunkSize === 0) {
            acc += "-";
          }
          acc += char;
          return acc;
        }, "");
      }
      return segment;
    });

    // Join segments back with spaces
    return formattedSegments.join(" ");
  };

  return (
    <motion.div
      onClick={onClick}
      style={{
        flex: isSmallScreen ? "0 1 90%" : "0 1 calc(25% - 48px)",
        minWidth: isSmallScreen ? "" : "200px",
        zIndex: 1, // Ensure it's above the background card
      }}
      className="relative cursor-pointer bg-zinc-300 h-60"
      onHoverStart={() => controls.start({ x: 0, y: 0 })}
      onHoverEnd={() => controls.start({ x: -10, y: -10 })}
    >
      <motion.div
        className="w-full absolute border-4 h-60 border-zinc-600 bg-white p-5 flex flex-col justify-center items-center transition-all duration-100 ease-linear"
        animate={controls}
        initial={{ x: -10, y: -10 }}
      >
        <h3 className="text-center text-xl md:text-2xl font-medium font-outfit mb-2">
          {formatTextWithHyphens(note?.title || "")}
        </h3>
        <p className="text-center mb-1 font-outfit">{note?.username}</p>

        <div className="flex flex-row w-full mx-4 items-end mb-1 mt-auto">
          <div className="flex flex-row items-center justify-start w-1/2 space-x-0">
            <div className="flex w-1/2 mr-5">
              <span className="flex items-center ">
                <VisibilityIcon fontSize="small" />
                <span className="ml-1 font-outfit">{note?.views}</span>
              </span>
            </div>
            <div className="items-center w-1/2 flex">
              <span className="flex items-center">
                <ThumbUpAltIcon fontSize="small" />
                <span className="ml-1 font-outfit">{note?.likes}</span>
              </span>
            </div>
          </div>
          <div className="items-end w-1/2 justify-end flex pt-3">
            <p className="text-center flex font-outfit">{note?.created_at}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NoteView;
