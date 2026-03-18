import { useState, useEffect } from 'react'

const PHOTOS = [
  { src: 'https://www.pirossigns.com/wp-content/uploads/2024/12/piros-1920w-1024x768.jpg', label: 'Bridgestone Arena' },
  { src: 'https://www.pirossigns.com/wp-content/uploads/2024/12/Piros-Signs-Company-1920w.jpg', label: 'Scoreboard' },
  { src: 'https://www.pirossigns.com/wp-content/uploads/2024/12/BarnesJewishWeb-768x576-1920w.jpg', label: 'Barnes Jewish Hi-Rise' },
  { src: 'https://www.pirossigns.com/wp-content/uploads/2024/12/Horseshoe-Casino-LED-Pylon-Sign-St.-Louis-MO-2880w-1024x1024.jpg', label: 'Horseshoe Casino Pylon' },
  { src: 'https://www.pirossigns.com/wp-content/uploads/2024/12/Imos-Piros-Signs-1920w.jpg', label: "Imo's Pizza" },
  { src: 'https://www.pirossigns.com/wp-content/uploads/2024/12/Fenton-Logistics-768x576-1920w.jpg', label: 'Fenton Logistics Park' },
  { src: 'https://www.pirossigns.com/wp-content/uploads/2024/12/Piros-Signs-Digital-2880w.jpg', label: 'Digital Signs' },
  { src: 'https://www.pirossigns.com/wp-content/uploads/2024/12/StAgnesWeb-768x576-1920w.jpg', label: 'St. Agnes Monument Sign' },
]

function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current)
      setFading(true)
      setCurrent((c) => (c + 1) % PHOTOS.length)
      setTimeout(() => { setPrev(null); setFading(false) }, 800)
    }, 3500)
    return () => clearInterval(timer)
  }, [current])

  return (
    <div className="hero-slideshow">
      {prev !== null && (
        <div className="hero-slide hero-slide-exit">
          <img src={PHOTOS[prev].src} alt={PHOTOS[prev].label} />
        </div>
      )}
      <div className={`hero-slide ${fading ? 'hero-slide-enter' : ''}`}>
        <img src={PHOTOS[current].src} alt={PHOTOS[current].label} />
      </div>
      <div className="hero-slide-dots">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            className={`hero-slide-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-slash"></div>
      <HeroSlideshow />
      <div className="hero-content">
        <div className="ai-badge">
          <div className="pulse"></div>
          <span>Now featuring <strong>AI Sign Advisor</strong> — instant answers, no wait</span>
        </div>
        <div className="hero-tag">
          <div className="hero-tag-line"></div>
          <span>St. Louis · Columbia · Jefferson City</span>
        </div>
        <h1>
          We Make<br />
          <span className="line2">St. Louis</span>
          <span className="line3">Stand Out.</span>
        </h1>
        <p className="hero-sub">
          Third-generation sign experts. <strong>68 years</strong> of fabrication, installation, and repair.
          From channel letters to scoreboards — design, permits, and install all under one roof.
        </p>
        <div className="hero-actions">
          <a href="#chatbot" className="btn btn-red">Talk to Our AI Sign Advisor →</a>
          <a href="tel:6364640200" className="btn btn-outline">Call (636) 464-0200</a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <span className="stat-num">68<span>+</span></span>
          <span className="stat-label">Years in Business</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-num">3<span>rd</span></span>
          <span className="stat-label">Generation Family Owned</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-num">24<span>/7</span></span>
          <span className="stat-label">Emergency Sign Repair</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-num">5<span>★</span></span>
          <span className="stat-label">Google Rating</span>
        </div>
      </div>
    </section>
  )
}
