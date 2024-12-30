//dummy sale chart for the Features section
import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
const SaleChart = () => {

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.getContext("2d");
      const data = {
        labels: [
          "2024-04-01",
          "2024-04-02",
          "2024-04-03",
          "2024-04-04",
          "2024-04-05",
          "2024-04-06",
          "2024-04-07",
          "2024-04-08",
          "2024-04-09",

        ],
        datasets: [
          {
            label: "Total Completed Orders",
            data: [
              5, 20, 28, 25, 22, 38, 30, 25, 40
            ],
            fill: false,
            borderColor: "#FFCC99",
            tension: 0.4,
          },
          {
            label: "Recovered Cart",
            data: [
              2, 25, 23, 20, 38, 22, 35, 28, 40
            ],
            fill: false,
            borderColor: "#1F78B4",
            tension: 0.4,
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: "white",
            },
          },
          x: {
            ticks: {
              color: "white",
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "white",
            },
          },
        },
      };

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(ctx, {
        type: "line",
        data,
        options,
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-sm" style={{ color: "white" }}>
        Store Performance
      </h2>
      <div className="flex flex-col">
      <div>
        <h1 className="font-bold text-lg">$25,040</h1>
        <p className="text-xs">Revenue from Orders for April</p>
      </div>
      <div className="p-4">
      <canvas ref={chartRef} />
      </div>
      </div>
    </div>
  );
};

export default SaleChart;
