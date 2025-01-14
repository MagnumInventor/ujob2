import React from 'react';
import '../../styles/globals.css';

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Form from '../../components/auth/Registration';

function SafeComponent({ Component }) {
  try {
    return <Component />;
  } catch (error) {
    console.error(`Error in component: ${Component.name}`, error);
    return <div>Error in {Component.name}</div>;
  }
}

function Ent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <SafeComponent Component={Header} />
      <main>
        <SafeComponent Component={Form} />
      </main>
      <SafeComponent Component={Footer} />
    </div>
  );
}

export default Ent;

