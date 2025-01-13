'use client'

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Link from 'next/link'
import styles from '../../styles/common/HeaderMod.module.css'
import Enter from '../../pages/сommon/Enter';

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
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#faqs">FAQ's</Link>
        <Link href="#support-us">Support Us</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="#services">Services</Link>
      </nav>
      <div className={styles.actions}>
      <Link to="/Enter" className="btn btn-primary">Почати</Link>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

