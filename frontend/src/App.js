"use client"
//App.js
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { routes } from "./routes/routes"
import "./styles/globals.css"
import "./styles/common/LoadingScreen.css"
import "./styles/ui/ujobanimation.css"

function App() {
  const [loading, setLoading] = useState(true)
  const [statusText, setStatusText] = useState("Loading")
  const [dotCount, setDotCount] = useState(0)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false)
    }, 2120)

    const dotTimer = setInterval(() => {
      setDotCount((prevCount) => (prevCount + 1) % 4)
    }, 250)

    const statusTimer = setTimeout(() => {
      setStatusText("Started")
    }, 1550)

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
<div className="loader">
  <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
    <defs className="s-xJBuHA073rTt" xmlns="http://www.w3.org/2000/svg">
      <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="b">
        <stop className="s-xJBuHA073rTt" stopColor="#00E0ED"></stop>
        <stop className="s-xJBuHA073rTt" stopColor="#0077B6" offset="1"></stop>
      </linearGradient>
      <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0" id="c">
        <stop className="s-xJBuHA073rTt" stopColor="#00C9C8"></stop>
        <stop className="s-xJBuHA073rTt" stopColor="#005F73" offset="1"></stop>
        <animateTransform
          repeatCount="indefinite"
          keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
          keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
          dur="8s"
          values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
          type="rotate"
          attributeName="gradientTransform"
        ></animateTransform>
      </linearGradient>
      <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="d">
        <stop className="s-xJBuHA073rTt" stopColor="#00B4D8"></stop>
        <stop className="s-xJBuHA073rTt" stopColor="#023E8A" offset="1"></stop>
      </linearGradient>
    </defs>
  </svg>
  {/* U */}
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block letter-animation">
    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#b)" d="M 4,4 h 4.6230469 v 25.919922 c -0.00276,11.916203 9.8364941,21.550422 21.7500001,21.296875 11.616666,-0.240651 21.014356,-9.63894 21.253906,-21.25586 a 2.0002,2.0002 0 0 0 0,-0.04102 V 4 H 56.25 v 25.919922 c 0,14.33873 -11.581192,25.919922 -25.919922,25.919922 a 2.0002,2.0002 0 0 0 -0.0293,0 C 15.812309,56.052941 3.998433,44.409961 4,29.919922 Z" className="dash" id="u" pathLength="360"></path>
  </svg>
  {/* J */}
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ "--rotation-duration": "0ms", "--rotation-direction": "normal" }} viewBox="0 0 64 64" height="64" width="64" className="inline-block letter-animation">
    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#d)" d="M 32,4 v 48 c 0,6.627 -5.373,12 -12,12 h -8 v -8 h 8 c 2.209,0 4,-1.791 4,-4 V 4 Z" className="dash" id="j" pathLength="360"></path>
  </svg>
  {/* O */}
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ "--rotation-duration": "0ms", "--rotation-direction": "normal" }} viewBox="0 0 64 64" height="64" width="64" className="inline-block letter-animation">
    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="10" stroke="url(#c)" d="M 32 32
        m 0 -27
        a 27 27 0 1 1 0 54
        a 27 27 0 1 1 0 -54" className="spin" id="o" pathLength="360"></path>
  </svg>
  <div className="w-2"></div>
  {/* B */}
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ "--rotation-duration": "0ms", "--rotation-direction": "normal" }} viewBox="0 0 64 64" height="64" width="64" className="inline-block letter-animation">
    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#b)" d="M 4,4 h 24 c 8.837,0 16,7.163 16,16 s -7.163,16 -16,16 h -8 v 16 h -8 V 4 Z m 24,24 c 4.418,0 8,-3.582 8,-8 s -3.582,-8 -8,-8 h -8 v 16 h 8 Z m 0,16 c 4.418,0 8,-3.582 8,-8 s -3.582,-8 -8,-8 h -8 v 16 h 8 Z" className="dash" id="b" pathLength="360"></path>
  </svg>
</div>
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

