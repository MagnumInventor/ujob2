import React from 'react';
import styles from '../../components/auth/Form.module.css';

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Form from '../../components/auth/Registration';

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
        <h1 className={styles.title}>Register</h1>
        <SafeComponent Component={Form} />
      </div>
    </Layout>
  );
}

export default Ent;