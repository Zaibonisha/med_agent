import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles.css";

const Sidebar = () => {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/login";
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">AI Clinic</h2>

      <ul className="sidebar-menu">

        <li className={location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li className={location.pathname === "/clinics" ? "active" : ""}>
          <Link to="/clinics">Clinics</Link>
        </li>

        <li className={location.pathname === "/patients" ? "active" : ""}>
          <Link to="/patients">Patients</Link>
        </li>

        {/* ✅ Chatbot link */}
        <li className={location.pathname === "/chat" ? "active" : ""}>
          <Link to="/chat">Chatbot</Link>
        </li>

        {/* ✅ Reports link */}
        <li className={location.pathname === "/reports" ? "active" : ""}>
          <Link to="/reports">Reports</Link>
        </li>

        <li className={location.pathname === "/settings" ? "active" : ""}>
          <Link to="/settings">Settings</Link>
        </li>

        <li className={location.pathname === "/upload" ? "active" : ""}>
          <Link to="/upload">Upload CSV</Link>
        </li>



      </ul>

      {/* Small clean logout button */}
      <div className="sidebar-footer">
        <div className="logout-item" onClick={handleLogout}>
          <span className="logout-icon">🚪</span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
