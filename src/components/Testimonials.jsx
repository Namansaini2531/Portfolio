const QUOTES = [
  { 
    quote: '"Naman demonstrated remarkable problem-solving ability and engineering dedication during his internship at MarTechAdda."',
    name: 'Product Team Lead',
    sub: 'MarTechAdda Engineering',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80',
    tilt: 'tilt-l'
  },
  { 
    quote: '"Design & clean code that connects everyone! Naman brings great energy to team projects and community initiatives."',
    name: 'Rotaract Executive',
    sub: 'Rotaract Club of GL Bajaj',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=80&h=80',
    tilt: 'tilt-r'
  },
  { 
    quote: '"Exceptional grasp on Java DSA and quick adaptability with emerging Gen AI tools and full-stack development."',
    name: 'Peer Collaborator',
    sub: "GLBITM CSE '28",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80',
    tilt: 'tilt-l'
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="wrap">
        <div className="endorsement-title-row">
          <h2 className="endorsement-main-title">
            <span className="endorsement-badge">ENDORSEMENTS</span>{' '}
            HERE&rsquo;S WHAT MY <span className="hl-peers">PEERS & LEADS</span> SAY ✍️
          </h2>
          <p className="endorsement-subtitle">
            Feedback from Product Lead, Rotaract club members, and academic collaborators.
          </p>
        </div>

        <div className="test-stack">
          {QUOTES.map((q, i) => (
            <div className={`quote-card sticky-note-card ${q.tilt}`} key={i}>
              <div className="tape-strip"></div>
              <div className="quote-mark">99</div>
              <p className="hand">{q.quote}</p>
              <div className="quote-divider"></div>
              <div className="quote-person">
                <img src={q.avatar} alt={q.name} className="avatar" />
                <div>
                  <h5>{q.name}</h5>
                  <span>{q.sub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
