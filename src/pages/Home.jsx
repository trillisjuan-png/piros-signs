import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import ChatbotSection from '../components/ChatbotSection'
import Services from '../components/Services'
import WhyPiros from '../components/WhyPiros'
import Reviews from '../components/Reviews'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <ChatbotSection />
      <Services />
      <WhyPiros />
      <Reviews />
      <CTA />
    </>
  )
}
