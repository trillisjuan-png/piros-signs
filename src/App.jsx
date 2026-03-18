import './App.css'
import { useScrollFade } from './hooks/useScrollFade'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import ChatbotSection from './components/ChatbotSection'
import Services from './components/Services'
import WhyPiros from './components/WhyPiros'
import Reviews from './components/Reviews'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useScrollFade()

  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <ChatbotSection />
      <Services />
      <WhyPiros />
      <Reviews />
      <CTA />
      <Footer />
    </>
  )
}

export default App
