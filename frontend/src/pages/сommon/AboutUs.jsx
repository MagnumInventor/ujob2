import React from "react";
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-4">Ujob is dedicated to connecting talent with opportunities...</p>
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">Get in touch with us for any inquiries or support...</p>
      </main>
    </div>
      </main>
      <Footer />
    </div>
  )
}

