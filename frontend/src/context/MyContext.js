// src/context/MyContext.js

import React, { createContext, useState } from 'react';

// Створюємо контекст, ініціалізуємо його зі значенням null
export const MyContext = createContext(null);

// Створюємо компонент-провайдер для надання значення контексту
export const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Some value'); // Це значення, яке ми будемо передавати

  return (
    // Провайдер передає значення контексту
    <MyContext.Provider value={{ value, setValue }}>
      {children}  {/* Всі компоненти всередині MyProvider матимуть доступ до контексту */}
    </MyContext.Provider>
  );
};
