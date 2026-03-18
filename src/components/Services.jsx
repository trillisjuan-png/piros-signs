import { Link } from 'react-router-dom'
import { services } from '../data/services'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
)

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-header fade-in">
        <div className="section-tag">
          <div className="section-tag-line"></div>
          <span>What We Build</span>
        </div>
        <h2 className="section-title">Full-Service<br />Sign Solutions.</h2>
      </div>
      <div className="services-grid fade-in">
        {services.map((s) => (
          <Link to={`/projects/${s.slug}`} className="service-card" key={s.slug}>
            <img className="service-card-img" src={s.img} alt={s.name} />
            <div className="service-card-info">
              <div className="service-card-name">{s.name}</div>
              <div className="service-card-desc">{s.desc}</div>
            </div>
            <div className="service-card-arrow"><ArrowIcon /></div>
          </Link>
        ))}
      </div>
    </section>
  )
}
