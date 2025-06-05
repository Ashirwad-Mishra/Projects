import React from 'react';

interface ComplexInputProps {
  label: string;
  value: { real: string; imag: string };
  onChange: (value: { real: string; imag: string }) => void;
}

export const ComplexInput: React.FC<ComplexInputProps> = ({ label, value, onChange }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="grid grid-cols-2 gap-2">
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Real part"
        value={value.real}
        onChange={(e) => onChange({ ...value, real: e.target.value })}
        type="number"
      />
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Imaginary part"
        value={value.imag}
        onChange={(e) => onChange({ ...value, imag: e.target.value })}
        type="number"
      />
    </div>
  </div>
);