import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles.css";

const Settings = () => {
  const [username, setUsername] = useState("user123");
  const [email, setEmail] = useState("user@example.com");
  const [message, setMessage] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    setMessage("Settings saved successfully!");
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h1 className="page-title">Settings ⚙️</h1>
        <div className="page-card w-96">
          {message && <p className="mb-4 text-green-600">{message}</p>}
          <form onSubmit={handleSave} className="flex flex-col gap-4">
            <label>
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="modern-input w-full"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="modern-input w-full"
              />
            </label>

            <button className="modern-btn">Save Settings</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
