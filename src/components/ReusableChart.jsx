import React, { useRef, useEffect, useState, useMemo } from "react";

const SmoothAreaChart = ({ stroke, body, bottom, dashboardData }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 300 });
  const data = dashboardData?.chart?.sent || [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  const getYAxisLabels = (maxValue) => {
    const minLabels = 8;
    const maxLabels = 10;

    if (maxValue < 11) {
      return Array.from({ length: 6 }, (_, i) => i * 2);
    }
    const buffer = maxValue * 0.1;
    const adjustedMaxValue = Math.ceil(maxValue + buffer);

    const step = Math.ceil(adjustedMaxValue / maxLabels);
    const adjustedStep = Math.ceil(step / 10) * 10;

    const labels = [];
    for (let i = 0; i <= adjustedMaxValue; i += adjustedStep) {
      labels.push(i);
    }

    if (!labels.includes(0)) {
      labels.unshift(0);
    }

    while (labels.length < minLabels) {
      labels.push(labels[labels.length - 1] + adjustedStep);
    }

    return labels.slice(0, maxLabels);
  };

  const maxDataValue = Math.max(...data);
  const yAxisLabels = useMemo(
    () => getYAxisLabels(maxDataValue),
    [maxDataValue]
  );

  const xAxisLabels = useMemo(
    () =>
      dashboardData?.chart?.labels || [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    [dashboardData]
  );

  const [animatedData, setAnimatedData] = useState(data);

  // Resize handler useEffect
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation effect
  useEffect(() => {
    //setAnimatedData(new Array(data.length).fill(0));

    const animate = () => {
      setAnimatedData((prev) => {
        const newData = prev.map((value, index) =>
          value < data[index]
            ? value + Math.ceil((data[index] - value) / 10)
            : data[index]
        );
        if (newData.every((value, index) => value >= data[index])) {
          return data;
        }
        return newData;
      });
    };

    const animationInterval = setInterval(animate, 50);
    return () => clearInterval(animationInterval);
  }, [data]);

  // Canvas drawing effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const { width, height } = dimensions;
    const ratio = window.devicePixelRatio || 1;

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(ratio, ratio);

    ctx.clearRect(0, 0, width, height);
    drawChart(ctx, animatedData, yAxisLabels, xAxisLabels, width, height);
  }, [dimensions, animatedData, yAxisLabels, xAxisLabels]);

  const drawChart = (ctx, data, yAxisLabels, xAxisLabels, width, height) => {
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    const maxDataValue = Math.max(...yAxisLabels);
    const minDataValue = 0; // Set minDataValue to 0 for the Y-axis
    const xStep = chartWidth / (data.length - 1);
    const yScale = chartHeight / (maxDataValue - minDataValue);

    const transformY = (value) =>
      height - padding - (value - minDataValue) * yScale;

    const drawDottedLines = () => {
      ctx.setLineDash([2, 4]);
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 0.5;

      yAxisLabels.forEach((label) => {
        const y = transformY(label);
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
      });

      ctx.setLineDash([]);
    };

    const drawSmoothCurve = (points) => {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i === 0 ? i : i - 1];
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = points[i + 2 === points.length ? i + 1 : i + 2];

        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;

        // If the current point is zero, smoothly transition to the next point
        if (p1.y === transformY(minDataValue)) {
          ctx.lineTo(p2.x, p2.y);
        } else {
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
        }
      }

      ctx.strokeStyle = stroke || "#06F0FF";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Close the path, ensuring the curve stays on zero if necessary
      ctx.lineTo(width - padding, height - padding);
      ctx.lineTo(padding, height - padding);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(
        0,
        padding,
        0,
        height - padding
      );
      gradient.addColorStop(0, body || "rgba(6, 240, 255, 0.5)");
      gradient.addColorStop(1, bottom || "rgba(6, 240, 255, 0.1)");

      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const points = data.map((value, index) => ({
      x: padding + index * xStep,
      y: transformY(value),
    }));

    drawDottedLines();
    drawSmoothCurve(points);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "12px Arial";
    ctx.textAlign = "right";
    yAxisLabels.forEach((label) => {
      const y = transformY(label);
      ctx.fillText(label, padding - 10, y);
    });

    ctx.textAlign = "center";
    xAxisLabels.forEach((label, index) => {
      const x = padding + index * xStep;
      ctx.fillText(label, x, height - padding + 20);
    });
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#091324] max-h-[320px] min-h-[300px] pl-4 rounded-md w-full h-full"
    >
      <canvas ref={canvasRef} className="animate-draw" />
    </div>
  );
};

export default SmoothAreaChart;
