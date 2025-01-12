import React from 'react';

import Hero from './components/landing/Hero';
import GetStarted from './components/landing/GetStarted';

function SafeComponent(Component) {
  try {
    return React.createElement(Component, null);
  } catch (error) {
    console.error(`Error in component: ${Component.name}`, error);
    return React.createElement('div', null, `Error in ${Component.name}`);
  }
}

function App() {
  return React.createElement(
    'div',
    { className: 'min-h-screen' },
    SafeComponent(Hero),
    SafeComponent(GetStarted)
  );
}

export default App;



