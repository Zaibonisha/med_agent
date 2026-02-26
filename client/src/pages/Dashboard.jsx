import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles.css";

const Dashboard = () => {
  const totalClinics = 5;
  const totalPatients = 450;
  const highRiskReports = 2;

  return (
    <div className="layout">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard */}
      <div className="dashboard">
        <h1 className="dashboard-title">Hi, Nisha 👋</h1>
        <p className="dashboard-sub">Here is your clinic performance overview.</p>

        {/* Stats Row */}
        <div className="stats-row">

          <div className="stat-card">
            <div className="stat-icon yellow">🏥</div>
            <div>
              <h3>Total Clinics</h3>
              <p className="stat-value">{totalClinics}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon blue">👨‍⚕️</div>
            <div>
              <h3>Total Patients</h3>
              <p className="stat-value">{totalPatients}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon red">⚠️</div>
            <div>
              <h3>High Risk Reports</h3>
              <p className="stat-value">{highRiskReports}</p>
            </div>
          </div>

        </div>

        {/* Recent Patients Table */}
        <div className="table-card">
          <h2 className="section-title">Recent Patients</h2>

          <table className="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Clinic</th>
                <th>Status</th>
                <th>Risk Level</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Sarah Connor</td>
                <td>MediCare Cape Town</td>
                <td><span className="badge green">Active</span></td>
                <td><span className="badge green">Low</span></td>
              </tr>

              <tr>
                <td>Michael Smith</td>
                <td>Sunrise Clinic</td>
                <td><span className="badge yellow">Pending</span></td>
                <td><span className="badge yellow">Medium</span></td>
              </tr>

              <tr>
                <td>Linda Brown</td>
                <td>Wellness Hub</td>
                <td><span className="badge red">Inactive</span></td>
                <td><span className="badge red">High</span></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
