export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-slash"></div>
      <div className="hero-photos">
        <div className="hero-photo hp1"></div>
        <div className="hero-photo hp2"></div>
        <div className="hero-photo hp3"></div>
        <div className="hero-photo hp4"></div>
      </div>
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
