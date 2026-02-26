import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import UploadCSV from "./pages/UploadCSV";
import ChatBot from "./pages/ChatBot";
import Patients from "./pages/Patients";
import Settings from "./pages/Settings";
import Clinics from "./pages/Clinics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/upload" element={<UploadCSV />} />
      <Route path="/chat" element={<ChatBot />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/clinics" element={<Clinics />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
