import { useEffect, useRef } from 'react'

export default function Nav() {
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return
      if (window.scrollY > 80) {
        navRef.current.classList.add('nav-scrolled')
      } else {
        navRef.current.classList.remove('nav-scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav ref={navRef}>
      <div className="nav-left">
        <div className="logo-mark"><span>PS</span></div>
        <a href="#" className="logo-text">Piros <em>Signs</em></a>
      </div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#why">Why Piros</a></li>
        <li><a href="#chatbot">AI Advisor</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-right">
        <a href="tel:6364640200" className="nav-phone">(636) 464-0200</a>
        <a href="#chatbot" className="btn btn-red">Get a Quote</a>
      </div>
    </nav>
  )
}
