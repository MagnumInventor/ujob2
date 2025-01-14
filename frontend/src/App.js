import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Routes and Route
import { router } from './routes/routes';
import './styles/globals.css'; 
import './styles/common/LoadingScreen.css'; 

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
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
            {/* Replace the RouterProvider with Routes and Route */}
            {router.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;

