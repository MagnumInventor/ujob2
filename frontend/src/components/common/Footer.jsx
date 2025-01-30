import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import styles from '../../styles/common/FooterMod.module.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <h2 className={styles.logo}>Ujob</h2>
            <p>Поєднуємо талант з можливостями</p>
          </div>
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3>Меню</h3>
        <Link to="/about">Про проєкт</Link>
        <Link to="/services">Продукт</Link>
        <Link to="/faqs">Часті запитання</Link>
        <Link to="/support-us">Підтримка проєкту</Link>
        <Link to="/pricing">Тарифи</Link>
            </div>
            <div className={styles.linkColumn}>
              <h3>Інформація</h3>
              <a href="/faqs">FAQ's</a>
              <a href="/support-us">Хід розробки</a>
              <a href="/pricing">Тарифи</a>
            </div>
            <div className={styles.linkColumn}>
              <h3>Юридична складова</h3>
              <a href="/privacy">Політика конфіденційності</a>
              <a href="/terms">Умови використання</a>
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
          <p className={styles.copyright}>© 2025 Ujob - Всі права захищені</p>
        </div>
      </div>
    </footer>
  )
}



