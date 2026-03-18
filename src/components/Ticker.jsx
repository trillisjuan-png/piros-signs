const items = [
  'Channel Letters', 'Cabinet Signs', 'Monument Signs', 'Pylon Signs',
  'Digital Scoreboards', 'LED Electronic Signs', '24/7 Sign Repair',
  'Custom Fabrication', 'Permitting Services', 'High-Rise Installation',
]

export default function Ticker() {
  // Duplicate for seamless loop
  const all = [...items, ...items]
  return (
    <div className="ticker">
      <div className="ticker-track">
        {all.map((item, i) => (
          <span className="ticker-item" key={i}>
            {item}<span className="ticker-dot"></span>
          </span>
        ))}
      </div>
    </div>
  )
}
