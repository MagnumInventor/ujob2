import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import styles from '../../styles/common/FooterMod.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <h2 className={styles.logo}>Ujob</h2>
            <p>Connecting talent with opportunities</p>
          </div>
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3>Company</h3>
              <a href="/about">About Us</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
            </div>
            <div className={styles.linkColumn}>
              <h3>Resources</h3>
              <a href="/faqs">FAQ's</a>
              <a href="/support-us">Support Us</a>
              <a href="/pricing">Pricing</a>
            </div>
            <div className={styles.linkColumn}>
              <h3>Legal</h3>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Twitter"><Twitter /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
          </div>
          <p className={styles.copyright}>© 2025 Ujob - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}



