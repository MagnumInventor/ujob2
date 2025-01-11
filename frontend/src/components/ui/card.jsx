// components/ui/Card.jsx
import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
      <div className="bg-gray-100 p-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export { Card, CardContent };  // Оновлений експорт

