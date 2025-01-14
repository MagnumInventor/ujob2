import React, { useState, useEffect } from 'react'; // Додано useState та useEffect
import { Link } from 'react-router-dom'; // Додано Link для навігації
import '../../styles/globals.css'; 

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

import Hero from '../../components/landing/Hero';
import ServiceImpact from '../../components/landing/ServiceImpact';
import GetStarted from '../../components/landing/GetStarted';
import FutureProspects from '../../components/landing/FutureProspects';
import DonationAppeal from '../../components/landing/DonationAppeal';
import AdditionalInfo from '../../components/landing/AdditionalInfo';

export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      {/* Header */}
      <header className={`fixed w-full z-10 ${isScrolled ? 'bg-blue-800 shadow-md' : 'bg-transparent'} transition-all`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="logo">
            <span className="text-2xl font-bold glow">Ujob</span>
          </div>
          <nav className={`nav ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
            <a href="#about" className="px-4 py-2 hover:text-blue-300">About</a>
            <a href="#contact" className="px-4 py-2 hover:text-blue-300">Contact</a>
            <a href="#faqs" className="px-4 py-2 hover:text-blue-300">FAQ's</a>
            <a href="#support-us" className="px-4 py-2 hover:text-blue-300">Support Us</a>
            <a href="#pricing" className="px-4 py-2 hover:text-blue-300">Pricing</a>
            <a href="#services" className="px-4 py-2 hover:text-blue-300">Services</a>
          </nav>
          <div className="actions flex items-center">
            <Link to="/Enter" className="btn btn-primary px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700">
              Почати
            </Link>
            <button
              className="menu-toggle ml-4 flex flex-col space-y-1 md:hidden"
              onClick={toggleMenu}
            >
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <ServiceImpact />
        <GetStarted />
        <FutureProspects />
        <DonationAppeal />
        <AdditionalInfo />
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-center py-4">
        <p className="text-sm">© 2025 Ujob. All rights reserved.</p>
      </footer>
    </div>
  );
}
