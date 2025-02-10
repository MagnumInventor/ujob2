"use client"
//App.js
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { routes } from "./routes/routes"
import "./styles/globals.css"
import "./styles/common/LoadingScreen.css"

function App() {
  const [loading, setLoading] = useState(true)
  const [statusText, setStatusText] = useState("Loading")
  const [dotCount, setDotCount] = useState(0)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    const dotTimer = setInterval(() => {
      setDotCount((prevCount) => (prevCount + 1) % 4)
    }, 250)

    const statusTimer = setTimeout(() => {
      setStatusText("Started")
    }, 2750)

    // Generate particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${3 + Math.random() * 2}s`,
      animationDelay: `${Math.random() * 2}s`,
    }))
    setParticles(newParticles)

    return () => {
      clearTimeout(loadingTimer)
      clearInterval(dotTimer)
      clearTimeout(statusTimer)
    }
  }, [])

  return (
    <Router>
      <div className="app-container">
        {loading ? (
          <div className="loading-screen">
            <h1 className="title">
              <span className="letter">U</span>
              <span className="letter">j</span>
              <span className="letter">o</span>
              <span className="letter">b</span>
            </h1>
            <p className="status">
              {statusText}
              {".".repeat(dotCount)}
            </p>
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="particle"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDuration: particle.animationDuration,
                  animationDelay: particle.animationDelay,
                }}
              />
            ))}
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
  )
}

export default App

