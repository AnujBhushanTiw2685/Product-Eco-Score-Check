import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart.js

// PieChart component
const PieChart = ({ productData }) => {
  const chartRef = useRef(null); // Reference for the canvas element

  useEffect(() => {
    // Get the context of the canvas
    const ctx = chartRef.current.getContext("2d");

    // If there is an existing chart, destroy it before creating a new one
    if (window.chartInstance) {
      window.chartInstance.destroy();
    }

    // Create a new chart
    window.chartInstance = new Chart(ctx, {
      type: "pie", // Chart type
      data: {
        labels: ["Carbon Footprint", "Water Usage", "Energy Efficiency", "Recyclability"],
        datasets: [
          {
            label: "Product Lifecycle Insights",
            data: [
              productData.carbonFootprint,
              productData.waterUsage,
              productData.energyEfficiency,
              productData.recyclability,
            ],
            backgroundColor: ["#ff6f61", "#f9c74f", "#90be6d", "#43aa8b"], // Pie section colors
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true, // Make it responsive for different screen sizes
        plugins: {
          legend: {
            position: "top", // Position the legend at the top
          },
          tooltip: {
            callbacks: {
              // Custom tooltip callback to show the value of each section
              label: function (tooltipItem) {
                return `${tooltipItem.raw} units`; // Showing the unit for each section
              },
            },
          },
        },
      },
    });
  }, [productData]); // Recreate the chart whenever productData changes

  return <canvas ref={chartRef} id="lifecycle-chart" width="400" height="400"></canvas>;
};

export default PieChart;
