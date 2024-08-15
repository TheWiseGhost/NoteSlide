import React, { useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import { FaBell, FaUserCircle, FaBars, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BusinessAuth = () => {
  const user = localStorage.getItem("business_user");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/business_main");
    }
  }, []);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    setError(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = isSignUp
      ? "https://noteslidebackend.onrender.com/api/business_signup/"
      : "https://noteslidebackend.onrender.com/api/business_login/";
    const payload = isSignUp ? { email, name, password } : { email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        // Clear the form
        setEmail("");
        setName("");
        setPassword("");
        setError(null);
        if (isSignUp) {
          window.alert(
            "Successfully signed up, please check your email to verify your business account"
          );
        } else {
          localStorage.setItem("business_user", JSON.stringify(data.user));
          navigate("/business_main");
        }
      } else {
        setError(data.error);
        if (isSignUp) {
          window.alert("Email is already in use or name is taken");
        } else {
          window.alert("Wrong login information");
        }
        window.location.reload();
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Business | NoteSlide</title>
        <meta
          name="description"
          content="Partner with NoteSlide to reach a large academic audience of students and college learners. Advertise on our platform and connect with
          users seeking educational notes."
        />
        <link rel="canonical" href="https://note-slide.com/business" />
      </Helmet>
      <div className="flex min-h-screen ml-6">
        {/* Sidebar */}
        <div
          className={`z-50 fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ${
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

          {/* Auth */}
          <div className="wrapper h-screen pt-20">
            <div className="card-switch pt-0">
              <label className="switch">
                <input
                  type="checkbox"
                  className="toggle"
                  onChange={handleToggle}
                />
                <span className="slider"></span>
                <span className="card-side"></span>
                <div className="flip-card__inner">
                  <div className={`flip-card__front ${isSignUp ? "flip" : ""}`}>
                    <div className="title font-josefin">Business Log in</div>
                    <form className="flip-card__form" onSubmit={handleSubmit}>
                      <input
                        className="flip-card__input"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        className="flip-card__input"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {loading ? (
                        <div className="flex flex-row justify-center items-center space-x-2">
                          <div className="loader" />
                          <p className="font-outfit text-sm">
                            This may take a minute
                          </p>
                        </div>
                      ) : (
                        <button className="flip-card__btn" type="submit">
                          Let's Go!
                        </button>
                      )}
                    </form>
                  </div>
                  <div className={`flip-card__back ${!isSignUp ? "flip" : ""}`}>
                    <div className="title font-josefin">Business Sign up</div>
                    <form className="flip-card__form" onSubmit={handleSubmit}>
                      <input
                        className="flip-card__input"
                        name="name"
                        placeholder="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        className="flip-card__input"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        className="flip-card__input"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {loading ? (
                        <div className="flex flex-row justify-center items-center space-x-2">
                          <div className="loader" />
                          <p className="font-outfit text-sm">
                            This may take a minute
                          </p>
                        </div>
                      ) : (
                        <button className="flip-card__btn" type="submit">
                          Confirm!
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </label>
              {error && <div className="error-message">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessAuth;
