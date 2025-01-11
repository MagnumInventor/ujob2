// components/ui/Accordion.jsx
import React, { useState } from 'react';

const Accordion = ({ children, className = '' }) => {
  return <div className={`accordion ${className}`}>{children}</div>;
};

const AccordionItem = ({ children, className = '' }) => {
  return <div className={`accordion-item ${className}`}>{children}</div>;
};

const AccordionTrigger = ({ children, className = '', onClick }) => {
  return (
    <button
      className={`accordion-trigger p-4 bg-gray-200 text-left w-full rounded-t-lg hover:bg-gray-300 focus:outline-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const AccordionContent = ({ children, className = '', isOpen }) => {
  return (
    <div
      className={`accordion-content p-4 bg-gray-100 ${isOpen ? 'block' : 'hidden'} ${className}`}
    >
      {children}
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

