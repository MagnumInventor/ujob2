// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes/routes';
import './styles/globals.css';
import './styles/common/LoadingScreen.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="background: linear-gradient(135deg, #0e0614, #182737, #27527d, #43668b, #7297bd) !important">
        {loading ? (
          <div className="loading-screen">
            <p className="animated-text">Ujob loading</p>
          </div>
        ) : (
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
