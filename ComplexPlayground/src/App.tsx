import React, { useState, useEffect } from 'react';
import { Complex } from './components/lib/complex';
import { ComplexNumberCalculator } from './components/ComplexNumberCalculator';
import { ComplexVisualization } from './components/ComplexVisualization';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs';

function App() {
  // Input states
  const [complex1, setComplex1] = useState({ real: '3', imag: '2' });
  const [complex2, setComplex2] = useState({ real: '1', imag: '4' });
  const [operation, setOperation] = useState<'+' | '-' | '*' | '/'>('+');
  
  // Result state
  const [result, setResult] = useState<Complex | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Parse input values to numbers
  const parseComplex = (value: { real: string; imag: string }): Complex | null => {
    const real = parseFloat(value.real);
    const imag = parseFloat(value.imag);
    
    if (isNaN(real) {
      setError("Please enter a valid number for the real part");
      return null;
    }
    
    if (isNaN(imag)) {
      setError("Please enter a valid number for the imaginary part");
      return null;
    }
    
    return new Complex(real, imag);
  };

  // Perform the selected operation
  const calculate = () => {
    setError(null);
    
    const c1 = parseComplex(complex1);
    const c2 = parseComplex(complex2);
    
    if (!c1 || !c2) return;
    
    try {
      switch (operation) {
        case '+': setResult(c1.add(c2)); break;
        case '-': setResult(c1.subtract(c2)); break;
        case '*': setResult(c1.multiply(c2)); break;
        case '/': setResult(c1.divide(c2)); break;
      }
    } catch (err) {
      setError((err as Error).message);
      setResult(null);
    }
  };

  // Calculate on initial load and when inputs change
  useEffect(() => {
    calculate();
  }, [complex1, complex2, operation]);

  // Prepare points for visualization
  const visualizationPoints = [
    {
      real: parseFloat(complex1.real) || 0,
      imag: parseFloat(complex1.imag) || 0,
      label: "A",
      color: "#3b82f6"
    },
    {
      real: parseFloat(complex2.real) || 0,
      imag: parseFloat(complex2.imag) || 0,
      label: "B",
      color: "#ef4444"
    }
  ];

  if (result) {
    visualizationPoints.push({
      real: result.real,
      imag: result.imag,
      label: "Result",
      color: "#10b981"
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Complex Number Calculator
          </h1>
          <p className="text-gray-600">
            Perform operations and visualize complex numbers on the complex plane
          </p>
        </header>

        <Tabs defaultValue="calculator">
          <TabsList>
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="visualization">Visualization</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator">
            <ComplexNumberCalculator
              complex1={complex1}
              complex2={complex2}
              operation={operation}
              result={result}
              error={error}
              onComplex1Change={setComplex1}
              onComplex2Change={setComplex2}
              onOperationChange={setOperation}
            />
          </TabsContent>

          <TabsContent value="visualization">
            <ComplexVisualization points={visualizationPoints} />
          </TabsContent>
        </Tabs>

        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>
            Complex Number Calculator • Built with React, TypeScript, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;