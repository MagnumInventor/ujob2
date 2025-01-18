import React from "react";
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

import Layout from '../../components/Layout';
import styles from '../../styles/globals.css';

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.description}>
          Ujob is dedicated to connecting talent with opportunities, empowering the next generation of innovators and businesses.
        </p>
        <div className={styles.socialEmbed}>
          <h2>Follow Us</h2>
          <div className={styles.embedContainer}>
            <iframe
              src="https://www.instagram.com/ujob/embed"
              width="320"
              height="440"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
            ></iframe>
            <iframe
              src="https://www.tiktok.com/@ujob"
              width="320"
              height="740"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
