import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Projects() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-content">
          <div className="section-tag">
            <div className="section-tag-line"></div>
            <span>Our Work</span>
          </div>
          <h1 className="page-hero-title">Projects</h1>
          <p className="page-hero-sub">
            68 years of fabrication, installation, and craftsmanship across St. Louis,
            Columbia, and Jefferson City.
          </p>
        </div>
      </div>

      <section className="projects-grid-section">
        <div className="projects-grid">
          {services.map((s) => (
            <Link to={`/projects/${s.slug}`} className="project-card" key={s.slug}>
              <div className="project-card-img">
                <img src={s.img} alt={s.name} />
              </div>
              <div className="project-card-overlay">
                <div className="project-card-info">
                  <div className="project-card-name">{s.name}</div>
                  <div className="project-card-desc">{s.desc}</div>
                </div>
                <div className="project-card-arrow">
                  <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>Ready to Start<br />Your Project?</h2>
            <p>Talk to our AI advisor or reach out directly to Chris or David.</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-white">Get in Touch →</Link>
            <a href="tel:6364640200" className="btn btn-red-outline">📞 (636) 464-0200</a>
          </div>
        </div>
      </section>
    </>
  )
}
