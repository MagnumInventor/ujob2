import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

import styles from '../../styles/common/HeaderMod.module.css'

export default function SupportUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <Header />
      <div className={styles.supportUs}>
        <h1 className={styles.title}>Support Our Mission</h1>
        <p className={styles.description}>
          Your support helps us connect more talent with opportunities and empower the next generation of innovators.
        </p>
        <div className={styles.supportOptions}>
          <div className={styles.supportCard}>
            <h2>One-Time Donation</h2>
            <p>Make a one-time contribution to support our cause.</p>
            <button className={styles.donateButton}>Donate Now</button>
          </div>
          <div className={styles.supportCard}>
            <h2>Monthly Support</h2>
            <p>Become a recurring supporter to help us plan for the future.</p>
            <button className={styles.donateButton}>Become a Supporter</button>
          </div>
        </div>
        <div className={styles.monobankEmbed}>
          <h2>Quick Donation via Monobank</h2>
          <iframe
            src="https://send.monobank.ua/jar/6NXzCamYky"
            width="320"
            height="460"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}

