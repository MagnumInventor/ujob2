import React from 'react';

import styles from '../../styles/registration/registration.module.css';
import Form from '../../components/auth/Registration';
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
      <div className={styles.register}>
        <SafeComponent Component={Form} />
      </div>
    </Layout>
  );
}

export default Ent;