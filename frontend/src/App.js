import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/globals.css'; 
import './styles/commom/LoadingScreen.css'; 

import Landing from './pages/сommon/LandingPage';

function App() {
  const [loading, setLoading] = useState(true);

  // Імітуємо завантаження
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 секунди
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white flex items-center justify-center">
        {loading ? (
          <div className="loading-screen">
            <p className="animated-text">Ujob loading</p>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/landing" replace />} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
