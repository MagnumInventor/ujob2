// App.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileProjectCatalogue from "./MobileProjectCatalogue";
import ProjectCatalogue from "./ProjectCatalogue";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import ServiceImpact from "./ServiceImpact";
import GetStarted from "./GetStarted";
import FutureProspects from "./FutureProspects";
import DonationAppeal from "./DonationAppeal";
import AdditionalInfo from "./AdditionalInfo";

const App = () => {
  const [data, setData] = useState(null);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <Header />
        <main>
          <Routes>
            <Route
              path="/projects"
              element={isMobile ? <MobileProjectCatalogue /> : <ProjectCatalogue />}
            />
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ServiceImpact />
                  <GetStarted />
                  <FutureProspects />
                  <DonationAppeal />
                  <AdditionalInfo />
                </>
              }
            />
            {/* Додайте інші маршрути тут за необхідності */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
