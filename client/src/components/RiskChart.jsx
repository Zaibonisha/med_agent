import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RiskChart = ({ data, width = 600, height = 300 }) => {
  const chartData = {
    labels: data.map(d => d.date),
    datasets: [{
      label: "Risk Score",
      data: data.map(d => d.last_risk),
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1
    }]
  };

  const options = {
    maintainAspectRatio: false, // allows custom width/height
    scales: {
      y: {
        min: 0,
        max: 1
      }
    }
  };
  
  return <div style={{ width: `${width}px`, height: `${height}px` }}>
    <Line data={chartData} options={options} />
  </div>;
};

export default RiskChart;
