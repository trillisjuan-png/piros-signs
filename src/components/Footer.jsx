export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div className="logo-mark"><span>PS</span></div>
            <span className="logo-text">Piros <em style={{ color: 'var(--red)', fontStyle: 'normal' }}>Signs</em></span>
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
          <h4>Services</h4>
          <ul>
            {['Channel Letters', 'Cabinet Signs', 'Monument Signs', 'Pylon Signs', 'Digital Signs', 'Sign Repair'].map((s) => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            {['About Us', 'Projects', 'Reviews', 'Service Area', 'Referrals'].map((s) => (
              <li key={s}><a href="#">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:6364640200">(636) 464-0200</a></li>
            <li><a href="#">Barnhart, MO</a></li>
            <li><a href="#">Holts Summit, MO</a></li>
            <li><a href="#chatbot">AI Sign Advisor</a></li>
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
