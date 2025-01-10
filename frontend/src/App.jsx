import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/LandingPage";
import About from "./pages/AboutUs";
import Contact from "./pages/SupportUs";
import axios from 'axios';

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/api/data')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Головна</Link></li>
                    <li><Link to="/about">Про нас</Link></li>
                    <li><Link to="/contact">Контакти</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
