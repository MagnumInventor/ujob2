import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="mb-4">We offer a range of services to help connect talent with opportunities...</p>
      </main>
      <Footer />
    </div>
  )
}

