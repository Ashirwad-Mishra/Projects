import React, { useState } from 'react';

interface ComplexPoint {
  real: number;
  imag: number;
  label: string;
  color: string;
}

interface ComplexPlaneProps {
  points: ComplexPoint[];
  size?: number;
}

export const ComplexPlane: React.FC<ComplexPlaneProps> = ({ points, size = 300 }) => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const maxMagnitude = Math.max(
    1,
    ...points.map((p) => Math.sqrt(p.real ** 2 + p.imag ** 2))
  );
  const scale = size / (maxMagnitude * 2.5);

  const toCanvasCoords = (real: number, imag: number): [number, number] => {
    const x = size / 2 + real * scale;
    const y = size / 2 - imag * scale;
    return [x, y];
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="border rounded-lg bg-white"
      >
        {/* Axes */}
        <line x1={0} y1={size/2} x2={size} y2={size/2} stroke="#ddd" strokeWidth={1} />
        <line x1={size/2} y1={0} x2={size/2} y2={size} stroke="#ddd" strokeWidth={1} />

        {/* Grid lines */}
        {Array.from({ length: 5 }).map((_, i) => {
          const pos = (size / 4) * (i + 1);
          return (
            <g key={i}>
              <line x1={pos} y1={0} x2={pos} y2={size} stroke="#eee" strokeWidth={0.5} />
              <line x1={0} y1={pos} x2={size} y2={pos} stroke="#eee" strokeWidth={0.5} />
            </g>
          );
        })}

        {/* Points */}
        {points.map((point, index) => {
          const [x, y] = toCanvasCoords(point.real, point.imag);
          return (
            <g
              key={index}
              onMouseEnter={() => setHoveredPoint(index)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <circle
                cx={x}
                cy={y}
                r={6}
                fill={point.color}
                stroke="#fff"
                strokeWidth={1.5}
              />
              {(hoveredPoint === index || points.length === 1) && (
                <text
                  x={x + 10}
                  y={y - 10}
                  fill={point.color}
                  fontWeight="bold"
                  fontSize="12"
                >
                  {point.label} ({point.real}, {point.imag}i)
                </text>
              )}
            </g>
          );
        })}
      </svg>

      <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-xs">
        Scale: 1 unit = {(1 / scale).toFixed(2)}px
      </div>
    </div>
  );
};