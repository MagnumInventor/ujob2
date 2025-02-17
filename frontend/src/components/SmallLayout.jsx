// SmallLayout.jsx

import React from 'react';

import Header from '../components/common/MiniHeader';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}