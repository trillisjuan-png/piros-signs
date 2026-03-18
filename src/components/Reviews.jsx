const StarIcon = () => (
  <svg className="star" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const reviews = [
  {
    text: 'Mike M. and the team at Piro\'s were so great to work with. They are very responsive, communicate clearly, helped us visualize ideas, navigated permitting, and quickly installed our sign to hit our deadline.',
    author: 'Aimée Farmer',
    badge: 'Verified Google Review',
  },
  {
    text: 'The company, its staff, and its support has been nothing short of FANTASTIC! Professional, knowledgeable, and a pleasure to do business with. 5 STARS, 100% Satisfied, HIGHEST LEVEL of RECOMMENDATION.',
    author: 'Ken Gontarz',
    badge: 'Covenant of Grace Church',
  },
  {
    text: 'Piros Signs has the knowledge and experience in both fabrication and installation to produce great quality work. Very professional but with a small family owned business feel that makes you feel like your business matters.',
    author: 'Michelle Miller',
    badge: 'Verified Google Review',
  },
]

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="section-header centered fade-in">
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <div className="section-tag-line"></div>
          <span>Google Reviews</span>
        </div>
        <h2 className="section-title">What Our Clients Say.</h2>
      </div>
      <div className="reviews-grid fade-in">
        {reviews.map((r) => (
          <div className="review-card" key={r.author}>
            <div className="review-stars">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="review-text">{r.text}</p>
            <div className="review-author">{r.author}</div>
            <div className="review-badge"><span>{r.badge}</span></div>
          </div>
        ))}
      </div>
    </section>
  )
}
