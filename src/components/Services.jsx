const ArrowIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
)

const services = [
  { name: 'Channel Letters', desc: 'Illuminated · Front-lit · Halo-lit', bg: 'sc-bg1', icon: '⬡' },
  { name: 'Cabinet Signs', desc: 'Single · Double-face · Backlit', bg: 'sc-bg2', icon: '▣' },
  { name: 'Monument Signs', desc: 'Brick · Stone · Aluminum', bg: 'sc-bg3', icon: '◆' },
  { name: 'Pylon Signs', desc: 'High-rise · Multi-tenant · Freeway', bg: 'sc-bg4', icon: '▲' },
  { name: 'Digital Signs & Scoreboards', desc: 'LED · Full-color · Daktronics partner', bg: 'sc-bg5', icon: '▶' },
  { name: '24/7 Sign Repair', desc: 'Emergency service · All makes', bg: 'sc-bg6', icon: '⚡' },
  { name: 'Custom Fabrication', desc: 'UL-listed shop · Certified welders', bg: 'sc-bg7', icon: '✦' },
  { name: 'Permitting & Installation', desc: 'In-house permits · Licensed electrical', bg: 'sc-bg8', icon: '⊕' },
]

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
          <div className="service-card" key={s.name}>
            <div className={`service-card-img ${s.bg}`}>{s.icon}</div>
            <div className="service-card-info">
              <div className="service-card-name">{s.name}</div>
              <div className="service-card-desc">{s.desc}</div>
            </div>
            <div className="service-card-arrow"><ArrowIcon /></div>
          </div>
        ))}
      </div>
    </section>
  )
}
