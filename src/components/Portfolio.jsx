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
    label: 'WEB DEVELOPMENT',
    title: 'DBT-Aadhaar-Seeding-Awareness-Portal',
    tech: 'HTML, CSS, JavaScript',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
  },
  {
    label: 'DSA & System Design',
    title: 'Serverless File Storage System',
    tech: 'TBA',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'
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
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
