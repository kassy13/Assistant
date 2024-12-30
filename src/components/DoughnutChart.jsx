import React, { useEffect, useRef, useState } from 'react';

const DoughnutChart = ({ value, size = 200, strokeWidth = 20, text, strokeColor }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);
  const circleRef = useRef(null);

  const safeValue = isNaN(value) ? 0 : value;

  useEffect(() => {
    const progressOffset = ((100 - safeValue) / 100) * circumference;
    setOffset(progressOffset);
  }, [circumference, safeValue]);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={strokeColor || 'transparent'}
          strokeWidth={strokeWidth}
        />
        <circle
          ref={circleRef}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#319F43" 
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      <div className="absolute text-center">
        <span className={text}>
          {safeValue}%
        </span>
      </div>
    </div>
  );
};

export default DoughnutChart;
