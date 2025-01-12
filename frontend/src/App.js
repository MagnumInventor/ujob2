import React from 'react';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Hero from './components/landing/Hero';
import ServiceImpact from './components/landing/ServiceImpact';
import GetStarted from './components/landing/GetStarted';
import FutureProspects from './components/landing/FutureProspects';
import DonationAppeal from './components/landing/DonationAppeal';
import AdditionalInfo from './components/landing/AdditionalInfo';

function Home() {
  return React.createElement(
    'div',
    { className: 'min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white' },
    React.createElement(Header, null),
    React.createElement(
      'main',
      null,
      React.createElement(Hero, null),
      React.createElement(ServiceImpact, null),
      React.createElement(GetStarted, null),
      React.createElement(FutureProspects, null),
      React.createElement(DonationAppeal, null),
      React.createElement(AdditionalInfo, null)
    ),
    React.createElement(Footer, null)
  );
}

export default Home;

