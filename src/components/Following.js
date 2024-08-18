import React, { useState, useEffect } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import GroupIcon from "@mui/icons-material/Group";
import { FaBell, FaUserCircle, FaBars, FaSearch } from "react-icons/fa";
import { IconUserCircle } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Following = () => {
  const [following, setFollowing] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true); // State to track loading state
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchUrl =
          "https://noteslidebackend.onrender.com/api/user_following/";

        const response = await fetch(fetchUrl, {
          method: "POST",
          body: JSON.stringify({ user_id: user.id }),
        });

        const data = await response.json();
        console.log(data);
        setFollowing(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching notes:", error);
        setLoading(false); // Ensure loading state is updated on error as well
      }
    };

    fetchNotes();
  }, []);

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
        <div className="flex items-center justify-between pt-8 bg-white pr-4 md:p-4 md:pt-8 sticky top-0 z-50">
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
          <div className="flex flex-row items-center flex-1 justify-center">
            <div className="flex items-center rounded-2xl border border-black w-2/3 md:w-2/5">
              <form
                onSubmit={() => {
                  handleNavigation("/dashboard");
                }}
                className="w-full"
              >
                <input
                  type="text"
                  className="px-4 w-full py-2 rounded-2xl focus:outline-2"
                  placeholder="Search..."
                />
                <button type="submit" className="hidden">
                  Search
                </button>
              </form>
            </div>
            <FaSearch
              onClick={() => {
                handleNavigation("/dashboard");
              }}
              className="cursor-pointer w-6 h-6 text-gray-700 mx-2 md:mx-4"
            />
          </div>
          <div className="flex items-center space-x-2 md:space-x-4 md:mr-12">
            <div className="w-10 h-10 hidden md:flex rounded-full items-center justify-end">
              <TipsAndUpdatesOutlinedIcon
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

        {/* Following */}
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
            <>
              {isSmallScreen ? (
                <>
                  <h1 className="font-josefin text-gray-800 text-center w-full justify-center text-3xl pb-2 pt-8">
                    Following
                  </h1>
                  <div
                    className={`mr-0 ${
                      sidebarOpen ? "ml-24 mr-0" : "ml-12"
                    } pb-20 min-h-screen bg-white flex flex-col space-y-2`}
                    //   style={{ gap: "48px" }} // Add gap between items
                  >
                    {following.length > 0 ? (
                      <>
                        {following.map((user, index) => (
                          <>
                            <div
                              key={index}
                              className="flex flex-row w-full h-20 items-center justify-between p-4 rounded-lg "
                            >
                              <div className="flex flex-row items-center">
                                {/* User Circle Icon */}
                                <IconUserCircle className="h-10 w-10 text-blue-500 mr-4" />

                                {/* User Name */}
                                <span className="flex-1 text-lg font-medium">
                                  {user.username}
                                </span>
                              </div>

                              {/* View Button */}
                              <div
                                className="wipe pt-2 pb-1 px-4 font-josefin text-md w-fit mr-6"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  handleNavigation(
                                    `/public_profile/${user.username}/`
                                  )
                                }
                              >
                                <span>View</span>
                              </div>
                            </div>
                          </>
                        ))}
                      </>
                    ) : (
                      <div className="w-full h-60 flex justify-center items-center text-center">
                        <p className="font-outfit text-gray-700">
                          You are currently not following anyone
                        </p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div
                  className={`mr-0 mt-8 ${
                    sidebarOpen ? "ml-24 mr-0" : "ml-12"
                  } pt-6 pb-20 min-h-screen bg-white flex flex-wrap`}
                  style={{ gap: "48px" }} // Add gap between items
                >
                  {following.length > 0 ? (
                    <>
                      {following.map((user, index) => (
                        <>
                          <div
                            key={index}
                            className="flex flex-row w-fit h-20 items-center p-4 rounded-lg "
                          >
                            {/* User Circle Icon */}
                            <IconUserCircle className="h-10 w-10 text-blue-500 mr-4" />

                            {/* User Name */}
                            <span className="flex-1 text-lg font-medium mr-8">
                              {user.username}
                            </span>

                            {/* View Button */}
                            <div
                              className="wipe pt-2 pb-1 px-4 font-josefin text-md w-fit"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                handleNavigation(
                                  `/public_profile/${user.username}/`
                                )
                              }
                            >
                              <span>View</span>
                            </div>
                          </div>
                        </>
                      ))}
                    </>
                  ) : (
                    <div className="w-full h-60 flex justify-center items-center text-center">
                      <p className="font-outfit text-gray-700">
                        You are currently not following anyone
                      </p>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Following;
