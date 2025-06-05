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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
          </svg>
          Complex Plane Visualization
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <ComplexPlane points={points} size={400} />
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
            {points.map((point) => (
              <div
                key={point.label}
                className="flex items-center space-x-2 p-3 bg-white rounded-lg border"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill={point.color}
                >
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <div>
                  <span className="font-medium">{point.label}:</span> 
                  {" "}
                  <span className="font-mono">
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