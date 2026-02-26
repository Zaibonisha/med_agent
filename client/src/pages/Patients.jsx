import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles.css";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Demo data
    const demoPatients = [
      { id: 1, name: "Alice Smith", age: 28, gender: "Female" },
      { id: 2, name: "Bob Johnson", age: 34, gender: "Male" },
      { id: 3, name: "Clara Lee", age: 42, gender: "Female" },
    ];
    setPatients(demoPatients);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h1 className="page-title">Patients 👥</h1>
        <div className="page-card">
          {patients.length === 0 ? (
            <p>No patients found.</p>
          ) : (
            <table className="patients-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.age}</td>
                    <td>{p.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Patients;
