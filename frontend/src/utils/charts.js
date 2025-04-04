import { Line, Bar, Pie } from "react-chartjs-2";

export const generateBarChartData = (labels, data) => ({
  labels,
  datasets: [
    {
      label: "Performance",
      data,
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
  ],
});

export const generatePieChartData = (labels, data) => ({
  labels,
  datasets: [
    {
      data,
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
});
