import { useParams, Link, Navigate } from 'react-router-dom'
import { services } from '../data/services'

export default function ServicePage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/projects" replace />

  const currentIndex = services.findIndex((s) => s.slug === slug)
  const prev = services[currentIndex - 1]
  const next = services[currentIndex + 1]

  return (
    <>
      {/* Page Hero */}
      <div className="service-page-hero" style={{ backgroundImage: `url(${service.img})` }}>
        <div className="service-page-hero-overlay"></div>
        <div className="service-page-hero-content">
          <Link to="/projects" className="back-link">
            ← All Projects
          </Link>
          <div className="section-tag" style={{ marginTop: '16px' }}>
            <div className="section-tag-line"></div>
            <span>{service.desc}</span>
          </div>
          <h1 className="page-hero-title">{service.name}</h1>
          <p className="service-page-headline">{service.headline}</p>
        </div>
      </div>

      {/* Content */}
      <section className="service-page-body">
        <div className="service-page-grid">
          <div className="service-page-text">
            <div className="section-tag">
              <div className="section-tag-line"></div>
              <span>Overview</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>About This Service</h2>
            {service.body.split('\n\n').map((para, i) => (
              <p key={i} className="service-para">{para}</p>
            ))}
            <div className="service-page-actions">
              <Link to="/contact" className="btn btn-red">Get a Quote →</Link>
              <a href="tel:6364640200" className="btn btn-outline">Call (636) 464-0200</a>
            </div>
          </div>

          <div className="service-page-features">
            <div className="service-features-box">
              <h3 className="service-features-title">What's Included</h3>
              <ul className="service-features-list">
                {service.features.map((f) => (
                  <li key={f} className="service-feature-item">
                    <span className="service-feature-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="service-features-cta">
                <Link to="/contact" className="btn btn-red" style={{ width: '100%', justifyContent: 'center' }}>
                  Talk to Our AI Advisor →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <div className="service-page-nav">
        {prev ? (
          <Link to={`/projects/${prev.slug}`} className="service-page-nav-link">
            <span className="service-nav-dir">← Previous</span>
            <span className="service-nav-name">{prev.name}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={`/projects/${next.slug}`} className="service-page-nav-link service-page-nav-link-right">
            <span className="service-nav-dir">Next →</span>
            <span className="service-nav-name">{next.name}</span>
          </Link>
        ) : <div />}
      </div>
    </>
  )
}
