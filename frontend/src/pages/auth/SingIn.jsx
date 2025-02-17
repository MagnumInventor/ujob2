import React from 'react';
import Form from '../../components/auth/Login';
import Layout from '../../components/SmallLayout';

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
    <Layout>
      <div>
        <SafeComponent Component={Form} />
      </div>
    </Layout>
  );
}

export default Ent;