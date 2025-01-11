// components/ui/Button.jsx
import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      className={`btn p-2 rounded-md transition-all duration-300 ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };

