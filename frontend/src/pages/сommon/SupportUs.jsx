import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

import styles from '../../styles/common/HeaderMod.module.css'

export default function SupportUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Support Us</h1>
        <p className="mb-4">Learn how you can support Ujob's mission...</p>
      </main>
      <Footer />
    </div>
  )
}

