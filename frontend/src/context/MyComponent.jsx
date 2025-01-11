// src/components/MyComponent.jsx

import React, { useContext } from 'react';
import { MyContext } from './MyContext';  // Імпортуємо контекст

const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);  // Використовуємо контекст для отримання значень

  return (
    <div>
      <h1>{value}</h1>  {/* Виводимо значення з контексту */}
      <button onClick={() => setValue('New value')}>Change Value</button>  {/* Кнопка для зміни значення */}
    </div>
  );
};

export default MyComponent;
