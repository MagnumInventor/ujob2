import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import styles from '../../styles/common/FooterMod.module.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSections}>
        <div className={styles.section}>
          <h3>Для працівників</h3>
          <Link href="/publish-resume">Опублікувати резюме</Link>
          <Link href="/find-company">Знайти компанію</Link>
          <Link href="/worker-career">Твоя кар'єра</Link>
          <Link href="/user-ai-support">Підтримка ШІ</Link>
        </div>
        <div className={styles.section}>
          <h3>Про нас</h3>
          <a href="/pricing">Ціни</a>
          <a href="/services">Послуги</a>
        </div>
        <div className={styles.section}>
          <h3>Для компаній</h3>
          <Link href="/publish-vacancy">Опублікувати вакансію</Link>
          <Link href="/find-worker">Знайти працівника</Link>
          <Link href="/company-ai-support">Підтримка ШІ</Link>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <h2 className={styles.logo}>Ujob</h2>
            <p>З'єднуємо таланти з можливостями</p>
          </div>
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3>Компанія</h3>
              <a href="/about">Про нас</a>
              <a href="/contact">Контакти</a>
            </div>
            <div className={styles.linkColumn}>
              <h3>Ресурси</h3>
              <a href="/faqs">Поширені запитання</a>
              <a href="/support-us">Підтримайте нас</a>
            </div>
            <div className={styles.linkColumn}>
              <h3>Юридична інформація</h3>
              <a href="/privacy">Політика конфіденційності</a>
              <a href="/terms">Умови використання</a>
            </div>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
          <p className={styles.copyright}>© 2025 Ujob - Усі права захищені</p>
        </div>
      </div>
    </footer>
  );
}


