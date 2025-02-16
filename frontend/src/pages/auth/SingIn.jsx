import React from 'react';
import Layout from '../../components/Layout';

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
      <div className={styles.register}>
        <SafeComponent Component={Form} />
      </div>
    </Layout>
  );
}

export default Ent;