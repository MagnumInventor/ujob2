import Layout from "../../components/Layout"
import styles from "../../styles/home/TermsOfUse.module.css"

const TermsOfUse = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Use</h1>
        <p className={styles.lastUpdated}>Last updated: May 1, 2023</p>

        <section className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Ujob's website and services, you agree to be bound by these Terms of Use. If you do
            not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Description of Service</h2>
          <p>
            Ujob provides an online platform connecting job seekers with employers. We do not guarantee employment or
            hiring and are not responsible for the actions of users on our platform.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account information and for all activities
            that occur under your account. You must immediately notify us of any unauthorized use of your account.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service for any unlawful purpose</li>
            <li>Post inaccurate, defamatory, or offensive content</li>
            <li>Impersonate any person or entity</li>
            <li>Interfere with or disrupt the service or servers</li>
            <li>Attempt to gain unauthorized access to any part of the service</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Intellectual Property</h2>
          <p>
            All content on Ujob, including text, graphics, logos, and software, is the property of Ujob or its content
            suppliers and is protected by copyright laws.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Limitation of Liability</h2>
          <p>
            Ujob is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from
            your use of or inability to use the service.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your account and access to the service at our sole discretion,
            without notice, for conduct that we believe violates these Terms of Use or is harmful to other users, us, or
            third parties, or for any other reason.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Changes to Terms</h2>
          <p>
            We may modify these Terms of Use at any time. Your continued use of the service after any such changes
            constitutes your acceptance of the new Terms of Use.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Governing Law</h2>
          <p>
            These Terms of Use are governed by and construed in accordance with the laws of Ukraine, without regard to
            its conflict of law principles.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Contact Information</h2>
          <p>If you have any questions about these Terms of Use, please contact us at:</p>
          <p>Email: legal@ujob.com</p>
          <p>Address: 123 Ujob Street, Kyiv, Ukraine 01001</p>
        </section>
      </div>
    </Layout>
  )
}

export default TermsOfUse

