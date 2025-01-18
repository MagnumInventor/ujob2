import Layout from '../../components/Layout';
import styles from '../../styles/home/Services.module.css';

import React, { useState } from 'react';
import { Briefcase, Users, Rocket, Book } from 'lucide-react';

export default function Services() {
  return (
    <Layout>
      <div className={styles.services}>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.description}>
          We offer a range of services to help connect talent with opportunities and empower businesses to find the right people.
        </p>
        <div className={styles.servicesList}>
          <div className={styles.serviceItem}>
            <Briefcase className={styles.serviceIcon} />
            <h2 className={styles.serviceName}>Job Matching</h2>
            <p className={styles.serviceDescription}>
              Our AI-powered algorithm matches job seekers with the most suitable job opportunities based on their skills, experience, and preferences.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Users className={styles.serviceIcon} />
            <h2 className={styles.serviceName}>Talent Acquisition</h2>
            <p className={styles.serviceDescription}>
              We help businesses find and attract top talent through our extensive network and advanced recruiting tools.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Rocket className={styles.serviceIcon} />
            <h2 className={styles.serviceName}>Career Development</h2>
            <p className={styles.serviceDescription}>
              Access resources, workshops, and mentorship programs to boost your career growth and professional development.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Book className={styles.serviceIcon} />
            <h2 className={styles.serviceName}>Skills Training</h2>
            <p className={styles.serviceDescription}>
              Enhance your skillset with our curated online courses and training programs tailored to industry demands.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

