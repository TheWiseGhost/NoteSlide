import React, { useState, useEffect } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import GroupIcon from "@mui/icons-material/Group";
import { FaBars, FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BuyAdCredit = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("business_user"));

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    if (!user) {
      navigate("/business");
    }
  }, []);

  const createCheckout = async (prod_id) => {
    try {
      const response = await fetch(
        "https://noteslidebackend.onrender.com/api/create_checkout_session/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product_id: prod_id,
            user_id: user?.id, // Pass the user ID from localStorage or state
          }),
        }
      );

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe checkout
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <div className="flex h-screen ml-6">
      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ${
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
      <div className="flex flex-col flex-1 overflow-auto">
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

        {/* Main */}
        <div className="p-4 overflow-auto">
          <h1 className="text-2xl font-josefin lg:text-4xl font-bold text-center mb-8">
            Buy Ad Credit for Business
          </h1>
          <div className="flex flex-wrap justify-center gap-16">
            <AdCreditCard
              title={"Test"}
              text={"Get your feet wet"}
              price={"5"}
              loading={loading}
              handleBuy={() => createCheckout("prod_RP9cgLnuHCyOSC")}
            />
            <AdCreditCard
              title={"Starter"}
              text={"First campaign?"}
              price={"20"}
              loading={loading}
              handleBuy={() => createCheckout("prod_RP9cMQUI1XUd1R")}
            />
            <AdCreditCard
              title={"Regular"}
              text={"Standard Budget to Grow"}
              price={"50"}
              loading={loading}
              handleBuy={() => createCheckout("prod_RP9clgg2F0STZa")}
            />
            <AdCreditCard
              title={"Business"}
              text={"Spend Money to Make Money"}
              price={"100"}
              loading={loading}
              handleBuy={() => createCheckout("prod_RP9bMSBsL7kw2C")}
            />
            <AdCreditCard
              title={"Baller"}
              text={"The Money Machine that keeps printing"}
              price={"500"}
              loading={loading}
              handleBuy={() => createCheckout("prod_RP9bqqcFCSxzGv")}
            />
            <AdCreditCard
              title={"Millionare"}
              text={"There's no stopping you from going to the top"}
              price={"1500"}
              loading={loading}
              handleBuy={() => createCheckout("prod_RP9b8t7JTmE4G5")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AdCreditCard = ({ title, text, price, loading, handleBuy }) => {
  return (
    <div className="relative flex flex-col bg-white border-2 border-black">
      <div className="triangle -left-0.5 -top-0.5"></div>
      <div className="px-6 py-8 sm:p-10 sm:pb-6">
        <div className="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 className="text-lg font-nats font-medium tracking-tighter text-gray-600 lg:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-md text-outfit text-gray-500">{text}</p>
          </div>
          <div className="mt-6">
            <p>
              <span className="text-5xl font-outfit font-light tracking-tight text-black">
                ${price}
              </span>
              <span className="text-base font-medium text-gray-500">
                {" "}
                /monthly{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex px-6 pb-8 sm:px-8 justify-center">
        {loading ? (
          <div className="loader"></div>
        ) : (
          <button
            aria-describedby="tier-company"
            className="items-center font-nats justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
            onClick={() => handleBuy()}
          >
            Get started
          </button>
        )}
      </div>
    </div>
  );
};

export default BuyAdCredit;
