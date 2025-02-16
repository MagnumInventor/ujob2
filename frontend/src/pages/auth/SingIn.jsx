import React from 'react';
import Form from '../../components/auth/Login';

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
      <div>
        <SafeComponent Component={Form} />
      </div>
  );
}

export default Ent;