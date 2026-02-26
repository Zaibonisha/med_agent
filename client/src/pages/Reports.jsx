import React, { useEffect, useState } from "react";
import ReportCard from "../components/ReportCard";
import RiskChart from "../components/RiskChart";
import Navbar from "../components/Navbar";

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const demoReports = [
      {
        id: 1,
        clinic_id: "C001",
        date: "2025-11-24",
        clinic_name: "Sunrise Clinic",
        region: "North",
        num_patients: 120,
        num_female: 70,
        num_male: 50,
        avg_age: 34.5,
        top_symptoms: "Fever, Cough",
        stock_shortage: false,
        last_risk: 0.75,
        notes: "No major issues"
      },
      {
        id: 2,
        clinic_id: "C002",
        date: "2025-11-23",
        clinic_name: "Greenfield Clinic",
        region: "South",
        num_patients: 90,
        num_female: 50,
        num_male: 40,
        avg_age: 29.2,
        top_symptoms: "Headache, Nausea",
        stock_shortage: true,
        last_risk: 0.92,
        notes: "Shortage of painkillers"
      }
    ];

    setReports(demoReports);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="page-container">
        <h1 className="page-title">Top Risk Reports ⚠️</h1>

        <div className="page-card">
          <RiskChart data={reports} width={500} height={250} />
        </div>

        <div className="report-wrapper">
          {reports.map(r => <ReportCard key={r.id} report={r} />)}
        </div>
      </div>
    </div>
  );
};

export default Reports;
