'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import styles from '../../styles/common/Header.module.css'

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
        <span className="text-3xl font-bold glow">Ujob</span>
      </div>
      <nav className={styles.nav}>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#contact">Contact</Link>
      </nav>
      <Button className={styles.cta}>Get Started</Button>
    </header>
  )
}

