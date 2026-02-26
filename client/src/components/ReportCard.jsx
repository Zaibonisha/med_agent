import React from "react";

const ReportCard = ({ report }) => (
  <div className="border p-4 rounded shadow mb-4">
    <h3 className="font-bold">{report.clinic_name} ({report.clinic_id})</h3>
    <p>Date: {report.date}</p>
    <p>Patients: {report.num_patients} | Female: {report.num_female} | Male: {report.num_male}</p>
    <p>Avg Age: {report.avg_age}</p>
    <p>Top Symptoms: {report.top_symptoms}</p>
    <p>Stock Shortage: {report.stock_shortage ? "Yes" : "No"}</p>
    <p>Risk Score: {report.last_risk}</p>
  </div>
);

export default ReportCard;
