import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles.css";

const Clinics = () => {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    const demoClinics = [
      { id: 1, name: "Sunrise Clinic", region: "North", patients: 120 },
      { id: 2, name: "Greenfield Clinic", region: "South", patients: 90 },
      { id: 3, name: "Maple Health", region: "East", patients: 75 },
    ];
    setClinics(demoClinics);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h1 className="page-title">Clinics 🏥</h1>
        <div className="page-card">
          {clinics.length === 0 ? (
            <p>No clinics found.</p>
          ) : (
            <ul className="clinics-list">
              {clinics.map((c) => (
                <li key={c.id} className="clinic-item">
                  <strong>{c.name}</strong> — {c.region} — {c.patients} patients
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clinics;
