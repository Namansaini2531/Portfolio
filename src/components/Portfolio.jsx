import ScrollReveal from './ScrollReveal'

const PROJECTS = [
  {
    label: 'Internship Project',
    title: 'Customer Relationship Management (CRM) Software',
    tech: 'React, Node.js, Express, REST APIs',
    image: '/mta-crm-ss.webp'
  },
  {
    label: 'Internship Project',
    title: 'Billing Software',
    tech: 'React, TypeScript, Zustand, Tailwind',
    image: '/ledgerly-billing.webp'
  },
  {
    label: 'Web Development',
    title: 'DBT-Aadhaar-Seeding-Awareness-Portal',
    tech: 'HTML, CSS, JavaScript',
    image: '/dbt-portal.webp',
    link: 'https://direct-bt.vercel.app',
    github: 'https://github.com/Namansaini2531/DBT-Aadhaar-Seeding-Awareness-Portal'
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
            return (
              <ScrollReveal
                key={i}
                baseRotation={i % 2 === 0 ? -3 : 3}
                translateY={50}
                baseOpacity={0.2}
                blurStrength={6}
              >
                <div className="port-card" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                  <div className="port-thumb" style={{ position: 'relative', padding: 0, aspectRatio: '16/9', overflow: 'hidden' }}>
                    {p.upcoming ? (
                      <div style={{ width: '100%', height: '100%', minHeight: '180px', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '36px' }}>🚀</span>
                        <span style={{ fontSize: '15px', fontWeight: '800', color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>Coming Soon</span>
                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>In Development</span>
                      </div>
                    ) : p.link ? (
                      <a href={p.link} target="_blank" rel="noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                        <img src={p.image} alt={p.title} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </a>
                    ) : (
                      <img src={p.image} alt={p.title} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    )}
                    <span className="port-badge" style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--yellow)', border: '2px solid var(--line)', borderRadius: '20px', padding: '2px 10px', fontSize: '11px', fontWeight: 'bold', color: '#141414', boxShadow: '2px 2px 0 var(--line)' }}>
                      {p.label}
                    </span>
                  </div>
                  <div className="port-meta">
                    <div>
                      <h4>
                        {p.link ? (
                          <a href={p.link} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                            {p.title}
                          </a>
                        ) : (
                          p.title
                        )}
                      </h4>
                      <p>{p.tech}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      {p.github && (
                        <a 
                          href={p.github} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="go" 
                          title="View GitHub Repository"
                          aria-label={`GitHub repository for ${p.title}`}
                          style={{ background: '#141414', color: '#fff', textDecoration: 'none', transition: 'transform 0.15s ease' }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {p.link && (
                        <a 
                          href={p.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="go" 
                          title="Live Demo"
                          aria-label={`Live demo for ${p.title}`}
                          style={{ textDecoration: 'none' }}
                        >
                          ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
