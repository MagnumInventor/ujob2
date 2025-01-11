// components/ui/Button.jsx
import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-6 py-2 rounded-md font-semibold text-white transition duration-200';
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500',
    secondary: 'bg-gray-500 hover:bg-gray-600 focus:ring-2 focus:ring-gray-500',
    danger: 'bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500',
    outline: 'bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-2 focus:ring-blue-500',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
