import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setMobileMenuOpen(false); // close menu on mobile
  };

  return (
    <nav className="top-navbar">
      <h2 className="nav-title">AI Clinic</h2>

      {/* Desktop & Mobile buttons */}
      <div className={`nav-actions ${mobileMenuOpen ? "open" : ""}`}>
        <button className="nav-btn" onClick={() => handleNavigate("/dashboard")}>
          Dashboard
        </button>

        <button className="nav-btn" onClick={() => handleNavigate("/chat")}>
          ChatBot
        </button>

        <button className="nav-btn" onClick={() => handleNavigate("/reports")}>
          Reports
        </button>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.clear();
            handleNavigate("/login");
          }}
        >
          Logout
        </button>
      </div>

      {/* Hamburger icon */}
      <button
        className="hamburger"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
