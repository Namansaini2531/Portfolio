const SERVICES = [
  { icon: '★', color: 'yellow', title: 'Backend Dev in Spring Boot' },
  { icon: '#', color: 'purple', title: 'Cybersecurity' },
]

export default function Services() {
  const [a, b] = SERVICES

  return (
    <section className="services" id="services">
      <div className="wrap">
        <h2 className="section-head">
          Engineering solutions <span className="hand">﹏</span> that drive impact
        </h2>

        <div className="services-table">
          <div className="stat-cell row-border">
            <div>
              <div className="num">CSE'28</div>
              <div className="label">GLBITM Student</div>
            </div>
            <div>
              <div className="num">2+</div>
              <div className="label">Professional Roles</div>
            </div>
          </div>

          <ServiceCard {...a} bordered description="Building robust web applications using Java, Spring Boot, Microservices, and modern databases." />
          <ServiceCard {...b} bordered last description="Securing digital assets, auditing applications, and implementing cybersecurity best practices." />

          <div className="stat-cell" style={{ borderRight: '2px solid var(--line)' }}></div>
          <div className="svc learn row-border"><a href="https://www.linkedin.com/in/naman-saini-b19967333" target="_blank" rel="noreferrer">LinkedIn Profile →</a></div>
          <div className="svc learn row-border" style={{ borderRight: 'none' }}><a href="mailto:saininaman643@gmail.com">Contact Email →</a></div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, color, title, bordered, last, description }) {
  return (
    <div className={`svc ${bordered ? 'row-border' : ''}`} style={last ? { borderRight: 'none' } : undefined}>
      <div className={`icon-badge ${color}`}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
