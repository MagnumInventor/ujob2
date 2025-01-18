import Layout from '../../components/Layout';
import styles from '../../styles/home/Pricing.module.css';

export default function Pricing() {
  return (
    <Layout>
      <div className={styles.pricing}>
        <h1 className={styles.title}>Pricing</h1>
        <p className={styles.description}>
          Explore our pricing options for job seekers and employers. Find the plan that suits your needs.
        </p>
        {/* Add pricing plans here */}
      </div>
    </Layout>
  );
}
