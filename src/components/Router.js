import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import AddNote from "./AddNote";
import AddAd from "./AddAd";
import BusinessPortal from "./BusinessPortal";
import AdManager from "./AdManager";
import Auth from "./Auth";
import BusinessAuth from "./BusinessAuth";
import Profile from "./Profile";
import FavoriteNotes from "./FavoriteNotes";
import BuyAdCredit from "./BuyAdCredit";
import VerifyEmail from "./VerifyEmail";
import VerifyBusiness from "./VerifyBusiness";
import PublicProfile from "./PublicProfile";
import FollowingNotes from "./FollowingNotes";
import Following from "./Following";
import HowMoneyNotes from "./blog/HowMoneyNotes";
import HowMoneyUs from "./blog/HowMoneyUs";
import Viewer from "./Viewer";
import HowCashOut from "./blog/HowCashOut";
import YTButNotes from "./blog/YTButNotes";

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/landing/" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/" element={<Auth />} />
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/upload/" element={<AddNote />} />
        <Route path="/view/:id/" element={<Viewer />} />
        <Route path="/business_main/" element={<BusinessPortal />} />
        <Route path="/business/" element={<BusinessAuth />} />
        <Route path="/uploadad/" element={<AddAd />} />
        <Route path="/admanager/" element={<AdManager />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/favorites/" element={<FavoriteNotes />} />
        <Route path="/following_notes/" element={<FollowingNotes />} />
        <Route path="/following/" element={<Following />} />
        <Route path="/buyadcredit/" element={<BuyAdCredit />} />
        <Route path="/verify/:token/" element={<VerifyEmail />} />
        <Route path="/verify_business/:token/" element={<VerifyBusiness />} />
        <Route path="/public_profile/:username/" element={<PublicProfile />} />

        <Route
          path="/blog/how-to-make-money-with-notes/"
          element={<HowMoneyNotes />}
        />
        <Route
          path="/blog/how-to-make-money-with-noteslide/"
          element={<HowMoneyUs />}
        />
        <Route path="/blog/how-to-cash-out/" element={<HowCashOut />} />
        <Route path="/blog/youtube-but-notes/" element={<YTButNotes />} />
      </Routes>
    </Router>
  );
};

export default MyRouter;
