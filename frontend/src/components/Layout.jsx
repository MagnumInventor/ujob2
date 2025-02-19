// Layout.jsx

import React from 'react';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styles from '../styles/Layout.module.css';


export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
