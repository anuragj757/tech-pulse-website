import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import TechStack from './components/TechStack'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <TechStack />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
