// components/ui/Accordion.jsx
import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b">
      <button
        onClick={onToggle}
        className="w-full text-left py-3 px-4 bg-gray-200 hover:bg-gray-300 focus:outline-none"
      >
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white shadow-md rounded-md">
      {React.Children.map(children, (child, index) => 
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () => handleToggle(index),
        })
      )}
    </div>
  );
};

export { Accordion, AccordionItem };
