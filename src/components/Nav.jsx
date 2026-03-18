import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const navRef = useRef(null)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

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
        <Link to="/" className="logo-text">Piros <em>Signs</em></Link>
      </div>
      <ul className="nav-links">
        <li><a href={isHome ? '#services' : '/#services'}>Services</a></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><a href={isHome ? '#why' : '/#why'}>Why Piros</a></li>
        <li><a href={isHome ? '#chatbot' : '/#chatbot'}>AI Advisor</a></li>
        <li><a href={isHome ? '#reviews' : '/#reviews'}>Reviews</a></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="nav-right">
        <a href="tel:6364640200" className="nav-phone">(636) 464-0200</a>
        <Link to="/contact" className="btn btn-red">Get a Quote</Link>
      </div>
    </nav>
  )
}
