import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div style={{ marginBottom: '16px' }}>
            <Link to="/">
              <img
                src="https://www.pirossigns.com/wp-content/uploads/2024/12/PirosSigns-LogoWeb-204w.jpg"
                alt="Piros Signs"
                className="footer-logo-img"
              />
            </Link>
          </div>
          <p className="footer-desc">
            Third-generation family sign company serving St. Louis, Columbia, and Jefferson City since 1957.
            Design, fabrication, permits, and installation under one roof.
          </p>
          <div className="footer-affiliations">
            {['IBEW Local 1', 'IBEW 309', 'WSA', 'ISA', 'UL Listed'].map((b) => (
              <span className="affil-badge" key={b}>{b}</span>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Projects</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link to={`/projects/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/#why">About Us</a></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href="/#reviews">Reviews</a></li>
            <li><a href="#">Service Area</a></li>
            <li><a href="#">Referrals</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:6364640200">(636) 464-0200</a></li>
            <li><span style={{ color: 'var(--muted)', fontSize: '14px' }}>Barnhart, MO</span></li>
            <li><span style={{ color: 'var(--muted)', fontSize: '14px' }}>Holts Summit, MO</span></li>
            <li><Link to="/contact">AI Sign Advisor</Link></li>
            <li><a href="tel:6364640200">Emergency Repair</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Piros Signs Inc. All rights reserved.</p>
        <span className="est">EST. 1957 · BARNHART, MO</span>
      </div>
    </footer>
  )
}
