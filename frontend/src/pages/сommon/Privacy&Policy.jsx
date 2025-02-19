import React from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/home/PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: May 1, 2023</p>
        
        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>Welcome to Ujob. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          <p>We collect personal information that you provide to us, such as:</p>
          <ul>
            <li>Name, email address, and contact information</li>
            <li>Professional experience and educational background</li>
            <li>Job preferences and career goals</li>
            <li>Any other information you choose to provide</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Match you with potential job opportunities or candidates</li>
            <li>Communicate with you about our services</li>
            <li>Analyze and improve our website and services</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Information Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Employers or job seekers, as appropriate for our services</li>
            <li>Service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section className={styles.section}>
          <h2>6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data. To exercise these rights, please contact us using the information provided below.</p>
        </section>

        <section className={styles.section}>
          <h2>7. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
        </section>

        <section className={styles.section}>
          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: privacy@ujob.com</p>
          <p>Address: 123 Ujob Street, Kyiv, Ukraine 01001</p>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
