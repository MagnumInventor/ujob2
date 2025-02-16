import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={`${styles.logoText} glow`}>Ujob</Link>
      </div>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        <svg
          fill="currentColor"
          stroke="none"
          strokeWidth="0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 overflow-visible transition-transform ease duration-350 group-hover:rotate-45"
        >
          <path
            className="group-hover:transform group-hover:rotate-[112.5deg] group-hover:translate-x-[-27.2%] group-hover:translate-y-[-80.2%]"
            d="m3.45,8.83c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L14.71,2.08c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L3.84,8.75c-.13.05-.25.08-.38.08Z"
          ></path>
          <path
            className="group-hover:transform group-hover:rotate-[22.5deg] group-hover:translate-x-[15.5%] group-hover:translate-y-[-23%]"
            d="m2.02,17.13c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L21.6,6.94c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L2.4,17.06c-.13.05-.25.08-.38.08Z"
          ></path>
          <path
            className="group-hover:transform group-hover:rotate-[112.5deg] group-hover:translate-x-[-15%] group-hover:translate-y-[-149.5%]"
            d="m8.91,21.99c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31l11.64-4.82c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31l-11.64,4.82c-.13.05-.25.08-.38.08Z"
          ></path>
        </svg>
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/faqs">FAQ's</Link>
        <Link to="/support-us">Support Us</Link>
        <Link to="/pricing">Pricing</Link>
      </nav>
    </header>
  );
};

export default Header;


