'use client'

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom'
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
        <Link to="/" className={`${styles.logoText} glow`}>Ujob</Link>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/faqs">FAQ's</Link>
        <Link to="/support-us">Support Us</Link>
        <Link to="/pricing">Pricing</Link>
      </nav>
      <div className={styles.actions}>
        <Link to="/login" className="btn btn-primary">Get Started</Link>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}





