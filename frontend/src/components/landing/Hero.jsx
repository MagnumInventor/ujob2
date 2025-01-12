// src/components/landing/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section className="hero min-h-screen bg-blue-800 text-white flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-xl mb-8">We provide the best solutions for your business.</p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
        Get Started
      </button>
    </section>
  );
}

export default Hero;

