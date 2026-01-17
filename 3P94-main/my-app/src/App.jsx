import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ No BrowserRouter here!
import Navbar from "./components/Navbar.jsx";
import Home from "./page/Home.jsx";
import Search from "./page/Search.jsx";
import Agents from "./page/Agents.jsx";
import Messages from "./page/Messages.jsx";
import Profile from "./page/Profile.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes> {/* ✅ Ensure Routes is used without BrowserRouter */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
