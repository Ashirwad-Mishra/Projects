import React from 'react';
import { Complex } from './lib/complex';
import { ComplexInput } from './ui/ComplexInput';
import { Button } from './ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Alert } from './ui/Alert';

interface ComplexNumberCalculatorProps {
  complex1: { real: string; imag: string };
  complex2: { real: string; imag: string };
  operation: '+' | '-' | '*' | '/';
  result: Complex | null;
  error: string | null;
  onComplex1Change: (value: { real: string; imag: string }) => void;
  onComplex2Change: (value: { real: string; imag: string }) => void;
  onOperationChange: (op: '+' | '-' | '*' | '/') => void;
}

export const ComplexNumberCalculator: React.FC<ComplexNumberCalculatorProps> = ({
  complex1,
  complex2,
  operation,
  result,
  error,
  onComplex1Change,
  onComplex2Change,
  onOperationChange,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Input Complex Numbers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <ComplexInput
              label="First Complex Number (A)"
              value={complex1}
              onChange={onComplex1Change}
            />
            
            <ComplexInput
              label="Second Complex Number (B)"
              value={complex2}
              onChange={onComplex2Change}
            />
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Operation
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(['+', '-', '*', '/'] as const).map((op) => (
                  <Button
                    key={op}
                    variant={operation === op ? "primary" : "secondary"}
                    onClick={() => onOperationChange(op)}
                    className="text-lg"
                  >
                    {op}
                  </Button>
                ))}
              </div>
            </div>
            
            {error && (
              <Alert 
                title="Error" 
                description={error} 
                variant="destructive" 
              />
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="h-full">
        <CardHeader>
          <CardTitle>Result</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col h-full">
            <div className="flex-1 grid place-items-center">
              {result ? (
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold text-gray-800">
                    {result.toString()}
                  </div>
                  <div className="text-gray-600">
                    <div>Magnitude: {result.magnitude().toFixed(4)}</div>
                  </div>
                </div>
              ) : (
                <div className="text-gray-500 italic">
                  Enter complex numbers to calculate
                </div>
              )}
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium mb-2">Current Expression:</h3>
              <div className="bg-gray-50 rounded-lg p-4 font-mono">
                ({new Complex(
                  parseFloat(complex1.real) || 0, 
                  parseFloat(complex1.imag) || 0
                ).toString()}) 
                <span className="mx-2">{operation}</span>
                ({new Complex(
                  parseFloat(complex2.real) || 0, 
                  parseFloat(complex2.imag) || 0
                ).toString()}) 
                <span className="mx-2">=</span>
                {result ? result.toString() : '?'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};