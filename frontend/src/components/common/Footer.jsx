import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import styles from '../../styles/common/FooterMod.module.css'

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
          <p>Email: ujobua@gmail.com</p>
          <p>Гаряча лінія: +(38) 096-042-7745</p>
        </div>
        <div className={styles.legal}>
          <p>© 2025 Ujob - Всі права захищені</p>
          <a href="#">Політика конфіденційності</a>
          <a href="#">Умови використання</a>
        </div>
      </div>
    </footer>
  )
}



