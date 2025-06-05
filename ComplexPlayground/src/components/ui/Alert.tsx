import React from 'react';

interface AlertProps {
  title: string;
  description: string;
  variant?: 'default' | 'destructive';
}

export const Alert: React.FC<AlertProps> = ({ 
  title, 
  description, 
  variant = 'default' 
}) => {
  const variants = {
    default: 'bg-blue-50 border-blue-500 text-blue-700',
    destructive: 'bg-red-50 border-red-500 text-red-700'
  };

  return (
    <div className={`border-l-4 p-4 ${variants[variant]}`}>
      <div className="font-medium">{title}</div>
      <div>{description}</div>
    </div>
  );
};