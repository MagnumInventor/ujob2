import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/LandingPage";
import About from "./pages/AboutUs";
import Contact from "./pages/SupportUs";
import axios from 'axios';

import Header from './components/Header'
import Hero from './components/Hero'
import ServiceImpact from './components/landing/ServiceImpact'
import GetStarted from './components/landing/GetStarted'
import FutureProspects from './components/landing/FutureProspects'
import DonationAppeal from './components/landing/DonationAppeal'
import AdditionalInfo from './components/landing/AdditionalInfo'
import Footer from './components/landing/Footer'

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/data')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
          <Header />
          <main>
            <Hero />
            <ServiceImpact />
            <GetStarted />
            <FutureProspects />
            <DonationAppeal />
            <AdditionalInfo />
          </main>
          <Footer />
        </div>
      )
};

