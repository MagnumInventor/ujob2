import React, { useState, useEffect } from 'react'; // Додано useState та useEffect
import styles from '../../styles/globals.css'; 
import '../../styles/common/HeaderMod.module.css'; 

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

import Hero from '../../components/landing/Hero';
import ServiceImpact from '../../components/landing/ServiceImpact';
import GetStarted from '../../components/landing/GetStarted';
import FutureProspects from '../../components/landing/FutureProspects';
import DonationAppeal from '../../components/landing/DonationAppeal';


export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <Header />
      <main>
        <Hero />
        <ServiceImpact />
        <GetStarted />
        <FutureProspects />
        <DonationAppeal />
      </main>
      <Footer />
    </div>
  )
}
