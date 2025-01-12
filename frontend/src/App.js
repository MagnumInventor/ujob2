import React from 'react';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Hero from './components/landing/Hero';
import ServiceImpact from './components/landing/ServiceImpact';
import GetStarted from './components/landing/GetStarted';
import FutureProspects from './components/landing/FutureProspects';
import DonationAppeal from './components/landing/DonationAppeal';
import AdditionalInfo from './components/landing/AdditionalInfo';

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
    SafeComponent(Header),
    React.createElement('main', null,
      SafeComponent(Hero),
      SafeComponent(ServiceImpact),
      SafeComponent(GetStarted),
      SafeComponent(FutureProspects),
      SafeComponent(DonationAppeal),
      SafeComponent(AdditionalInfo)
    ),
    SafeComponent(Footer)
  );
}

export default App;


