import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.socialLinks}>
          <a href="#" aria-label="Facebook"><Facebook /></a>
          <a href="#" aria-label="Twitter"><Twitter /></a>
          <a href="#" aria-label="Instagram"><Instagram /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin /></a>
        </div>
        <div className={styles.contact}>
          <p>Contact: info@ujob.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className={styles.legal}>
          <p>© 2025 Ujob - All Rights Reserved</p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

