import ScrollReveal from './ScrollReveal'

const QUOTES = [
  { 
    quote: '"It was a great experience working with Naman. He proved to be an amazing teammate and a very effective team lead during our project."',
    name: 'Ankush',
    sub: 'Product Engineering Intern — MarTechAdda',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80',
    tilt: 'tilt-l'
  },
  { 
    quote: '"Naman is a dedicated and hardworking person who approaches every project with commitment and professionalism."',
    name: 'Utkarsh Sinha',
    sub: 'Sergeant at Arms — Rotaract Club of GL Bajaj',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=80&h=80',
    tilt: 'tilt-r'
  },
  { 
    quote: '"Exceptional grasp on Java DSA and quick adaptability with emerging Gen AI tools and full-stack development."',
    name: 'Peer Collaborator',
    sub: "GLBITM CSE '28",
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=80&h=80',
    tilt: 'tilt-r'
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="wrap">
        <ScrollReveal baseOpacity={0.15} enableBlur={true} blurStrength={6}>
          <div className="endorsement-title-row">
            <h2 className="endorsement-main-title">
              <span className="endorsement-badge">ENDORSEMENTS</span>{' '}
              HERE&rsquo;S WHAT MY <span className="hl-peers">PEERS & LEADS</span> SAY ✍️
            </h2>
            <p className="endorsement-subtitle">
              Feedback from Product Lead, Rotaract club members, and academic collaborators.
            </p>
          </div>
        </ScrollReveal>

        <div className="test-stack">
          {QUOTES.map((q, i) => (
            <ScrollReveal key={i} baseRotation={i % 2 === 0 ? -4 : 4} translateY={40} baseOpacity={0.2} blurStrength={6}>
              <div className={`quote-card sticky-note-card ${q.tilt}`}>
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
