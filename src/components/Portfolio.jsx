const PROJECTS = [
  { 
    label: 'Internship Project', 
    title: 'Customer Relationship Management (CRM) Software', 
    tech: 'React, Node.js, Express, REST APIs',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
  },
  { 
    label: 'Internship Project', 
    title: 'Billing Software', 
    tech: 'React, TypeScript, Zustand, Tailwind',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80'
  },
  { 
    label: 'Security', 
    title: 'Cybersecurity Vulnerability Audit Tool', 
    tech: 'Python, Bash, Network Sec, Pentesting',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
  },
  { 
    label: 'Gen AI & Cloud', 
    title: 'Gen AI Smart Suite Application', 
    tech: 'Oracle Cloud, LLMs, LangChain, APIs',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    upcoming: true
  }
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="star pink" style={{ width: 44, height: 44, top: 20, right: '6%', transform: 'rotate(18deg)' }}></div>
      <div className="wrap">
        <h2>
          <u>My Portfolio</u> <span className="tile-icon"></span>
        </h2>
        <div className="port-grid">
          {PROJECTS.map((p, i) => (
            <div className="port-card" key={i}>
              <div className="port-thumb" style={{ position: 'relative', padding: 0 }}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
