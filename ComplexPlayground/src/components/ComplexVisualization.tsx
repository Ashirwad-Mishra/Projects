import React from 'react';
import { ComplexPlane } from './ui/ComplexPlane';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';

interface ComplexVisualizationProps {
  points: {
    real: number;
    imag: number;
    label: string;
    color: string;
  }[];
}

export const ComplexVisualization: React.FC<ComplexVisualizationProps> = ({ points }) => {
  return (
    <Card className="visualization-card">
      <CardHeader>
        <div className="visualization-header">
          <CardTitle>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="icon" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
            </svg>
            Complex Plane Visualization
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="visualization-body">
          <ComplexPlane points={points} size={400} />
          
          <div className="points-grid">
            {points.map((point) => (
              <div
                key={point.label}
                className="point-card"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="point-icon" 
                  viewBox="0 0 20 20" 
                  fill={point.color}
                >
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <div>
                  <span className="point-label">{point.label}:</span> 
                  {" "}
                  <span className="point-value">
                    {point.real.toFixed(2)} + {point.imag.toFixed(2)}i
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
