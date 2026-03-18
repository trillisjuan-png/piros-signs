const stats = [
  { num: '68', sup: '+', label: 'Years of sign expertise' },
  { num: '3', sup: 'rd', label: 'Generation family owned' },
  { num: '24', sup: '/7', label: 'Emergency repair service' },
  { num: 'UL', sup: '✓', label: 'Listed manufacturing shop' },
]

const points = [
  {
    n: '01',
    title: 'In-House Permitting Team',
    desc: 'We handle every permit from application to approval. Most competitors make you figure it out yourself.',
  },
  {
    n: '02',
    title: 'Licensed Electrical Contractor',
    desc: 'Fully licensed for electrical work in Missouri — no subcontracting for critical sign wiring.',
  },
  {
    n: '03',
    title: 'IBEW-Affiliated Craftsmen',
    desc: 'Proud members of IBEW Local 1, 309, 649 and Sign Painters Union 774. Union quality on every job.',
  },
  {
    n: '04',
    title: 'AI-Powered Lead Experience',
    desc: "The first sign company in St. Louis with a live AI advisor — get expert answers before talking to anyone.",
  },
  {
    n: '05',
    title: 'Concept-to-Completion',
    desc: 'Design, fabrication, permits, and installation all under one roof in Barnhart, MO.',
  },
]

export default function WhyPiros() {
  return (
    <section className="why-section" id="why">
      <div className="why-grid">
        <div className="why-left fade-in">
          <div className="section-tag">
            <div className="section-tag-line"></div>
            <span>The Piros Difference</span>
          </div>
          <h2 className="section-title">Why St. Louis<br />Trusts Us.</h2>
          <div className="why-stats">
            {stats.map((s) => (
              <div className="why-stat" key={s.label}>
                <div className="why-stat-num">{s.num}<span>{s.sup}</span></div>
                <div className="why-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-right fade-in" style={{ transitionDelay: '.15s' }}>
          <div className="why-points">
            {points.map((p) => (
              <div className="why-point" key={p.n}>
                <span className="why-num">{p.n}</span>
                <div className="why-point-text">
                  <strong>{p.title}</strong>
                  <span>{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
