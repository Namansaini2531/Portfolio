import ScrollReveal from './ScrollReveal'

const PROJECTS = [
  {
    label: 'Internship Project',
    title: 'Customer Relationship Management (CRM) Software',
    tech: 'React, Node.js, Express, REST APIs',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  },
  {
    label: 'Internship Project',
    title: 'Billing Software',
    tech: 'React, TypeScript, Zustand, Tailwind',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80'
  },
  {
    label: 'Web Development',
    title: 'DBT-Aadhaar-Seeding-Awareness-Portal',
    tech: 'HTML, CSS, JavaScript',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    link: 'https://github.com/Namansaini2531/DBT-Aadhaar-Seeding-Awareness-Portal'
  },
  {
    label: 'DSA & System Design',
    title: 'Serverless File Storage System',
    tech: 'TBA',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    upcoming: true
  }
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="star pink" style={{ width: 44, height: 44, top: 20, right: '6%', transform: 'rotate(18deg)' }}></div>
      <div className="wrap">
        <ScrollReveal baseOpacity={0.15} enableBlur={true} blurStrength={6}>
          <div className="portfolio-header">
            <div className="portfolio-badge">PROJECTS</div>
            <h2>
              FEATURED <span className="hl-portfolio">WORKS</span> <span className="tile-icon">✦</span>
            </h2>
            <p className="portfolio-subtitle">
              A showcase of software engineering, web applications, and system design projects.
            </p>
          </div>
        </ScrollReveal>
        <div className="port-grid">
          {PROJECTS.map((p, i) => {
            const CardContent = (
              <>
                <div className="port-thumb" style={{ position: 'relative', padding: 0, aspectRatio: '16/9', overflow: 'hidden' }}>
                  {p.upcoming ? (
                    <div style={{ width: '100%', height: '100%', minHeight: '180px', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '36px' }}>🚀</span>
                      <span style={{ fontSize: '15px', fontWeight: '800', color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>Coming Soon</span>
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>In Development</span>
                    </div>
                  ) : (
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                  <span className="port-badge" style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--yellow)', border: '2px solid var(--line)', borderRadius: '20px', padding: '2px 10px', fontSize: '11px', fontWeight: 'bold', color: '#141414', boxShadow: '2px 2px 0 var(--line)' }}>
                    {p.label}
                  </span>
                </div>
                <div className="port-meta">
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.tech}</p>
                  </div>
                  <div className="go">↗</div>
                </div>
              </>
            )

            return (
              <ScrollReveal 
                key={i} 
                baseRotation={i % 2 === 0 ? -3 : 3} 
                translateY={50} 
                baseOpacity={0.2} 
                blurStrength={6}
              >
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer" className="port-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    {CardContent}
                  </a>
                ) : (
                  <div className="port-card">
                    {CardContent}
                  </div>
                )}
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
