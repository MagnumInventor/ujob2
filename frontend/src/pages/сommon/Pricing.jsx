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
        <div className={styles.pricingPlans}>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Basic</h2>
            <p className={styles.planPrice}>$0</p>
            <ul className={styles.planFeatures}>
              <li>Create a profile</li>
              <li>Browse job listings</li>
              <li>Apply to 5 jobs per month</li>
            </ul>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Pro</h2>
            <p className={styles.planPrice}>$19.99/mo</p>
            <ul className={styles.planFeatures}>
              <li>All Basic features</li>
              <li>Unlimited job applications</li>
              <li>Priority support</li>
              <li>Resume review</li>
            </ul>
            <button className="btn btn-primary">Upgrade to Pro</button>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Enterprise</h2>
            <p className={styles.planPrice}>Custom</p>
            <ul className={styles.planFeatures}>
              <li>All Pro features</li>
              <li>Customized solutions</li>
              <li>Dedicated account manager</li>
              <li>API access</li>
            </ul>
            <button className="btn btn-primary">Contact Sales</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

