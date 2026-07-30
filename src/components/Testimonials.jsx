const QUOTES = [
  { 
    name: 'Aditya Sharma', 
    role: 'Lead Engineer, MarTechAdda', 
    quote: 'Naman is an outstanding engineering intern. His full-stack skills and enthusiasm for AI/ML helped us deliver critical features ahead of schedule.', 
    tilt: 'tilt-l', 
    offset: false 
  },
  { 
    name: 'Prof. Rajan Gupta', 
    role: 'CS Department, GLBITM', 
    quote: 'An incredibly bright student. His project work on cybersecurity auditing showcased great research, implementation, and software engineering skills.', 
    tilt: 'tilt-r', 
    offset: true 
  },
  { 
    name: 'Sarah Jenkins', 
    role: 'VR Project Coordinator', 
    quote: 'Exceptional work on the VR training simulator. The integration of Meta Quest controllers was flawless and very well-documented.', 
    tilt: 'tilt-r', 
    offset: false 
  },
  { 
    name: 'Rotaract Club GL Bajaj', 
    role: 'Club Coordinator', 
    quote: 'Namans technical contributions to our club website and digital community outreach were vital. A highly collaborative and responsible team player.', 
    tilt: 'tilt-l', 
    offset: true 
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="test-head">
          Here&rsquo;s what mentors and teammates say about my work
          <span className="hand">Feedback!</span>
        </div>
        <div className="test-stack">
          {QUOTES.map((q, i) => (
            <div
              className={`quote-card ${q.tilt}`}
              style={q.offset ? { marginTop: 40 } : undefined}
              key={i}
            >
              <p>&ldquo;{q.quote}&rdquo;</p>
              <div className="quote-person">
                <div className="avatar"></div>
                <div>
                  <h5>{q.name}</h5>
                  <span>{q.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
