import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      filler: {
        propagate: false,
      },
    },
    interaction: {
      intersect: false,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: "#67676A66",
        // not 'fontColor:' anymore
        font: {
          size: 10,
        },
        beginAtZero: true,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: "#67676A66",
        // not 'fontColor:' anymore
        font: {
          size: 10,
        },
        beginAtZero: true,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: 100, max: 500 })),
      backgroundColor: "#6641AA",
      barThickness: 9,
      borderRadius: 16,
      borderSkipped: false,
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        bottomLeft: 10,
        bottomRight: 10,
      },
      tension: 0.4,
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: 100, max: 500 })),
      backgroundColor: "#FF9800",
      barThickness: 9,
      borderRadius: 16,
      borderSkipped: false,
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        bottomLeft: 10,
        bottomRight: 10,
      },
      tension: 0.4,
    },
    {
      label: "Dataset 3",
      data: labels.map(() => faker.number.int({ min: 100, max: 500 })),
      backgroundColor: "#59E703DB",
      barThickness: 9,
      //   borderRadius: 16,
      borderSkipped: false,
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        bottomLeft: 10,
        bottomRight: 10,
      },
      tension: 0.4,
    },
  ],
};

const StackedbarChart = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "290px",
        background: "rgba(47, 50, 125, 0.02)",
      }}
    >
      <Bar options={options} data={data} />
    </div>
  );
};

export default StackedbarChart;
