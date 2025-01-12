'use client'

import { useState, useEffect } from 'react'
// import Link from 'next/link'
import styles from './HeaderMod.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={`${styles.logoText} glow`}>Ujob</span>
      </div>
      <a href="#" className="btn btn-primary">Get Started</a>
    </header>
  )
}

