'use client'

import { useState, useEffect } from 'react'
// import Link from 'next/link'
import styles from '../../styles/common/HeaderMod.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={`${styles.logoText} glow`}>Ujob</span>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#faqs">FAQ's</a>
        <a href="#support-us">Support Us</a>
        <a href="#pricing">Pricing</a>
        <a href="#services">Services</a>
      </nav>
      <div className={styles.actions}>
        <a href="#" className="btn btn-primary">Почати</a>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

