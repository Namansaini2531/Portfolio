import ScrollReveal from './ScrollReveal'

const QUOTES = [
  { 
    quote: '"Naman is a dedicated and hardworking person who approaches every project with commitment and professionalism."',
    name: 'Utkarsh Sinha',
    sub: 'Sergeant at Arms — Rotaract Club of GL Bajaj',
    tilt: 'tilt-l'
  },
  { 
    quote: '"It was a great experience working with Naman. He proved to be an amazing teammate and a very effective team lead during our project."',
    name: 'Ankush',
    sub: 'Product Engineering Intern — MarTechAdda',
    tilt: 'tilt-r'
  },
  { 
    quote: '"Exceptional grasp on Java DSA and quick adaptability with emerging Gen AI tools and full-stack development."',
    name: 'Deepanshu Aggarwal',
    sub: "GLBITM CSE '28",
    tilt: 'tilt-r'
  }
]

const getInitials = (name) => {
  if (!name) return ''
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

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
                  <div className="avatar-placeholder">
                    {getInitials(q.name)}
                  </div>
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
