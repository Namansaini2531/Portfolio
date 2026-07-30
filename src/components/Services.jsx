const SERVICES = [
  { icon: '★', color: 'yellow', title: 'Full-Stack Dev' },
  { icon: '#', color: 'purple', title: 'Cybersecurity' },
  { icon: '♥', color: 'red', title: 'AR/VR Tech' },
  { icon: '✦', color: 'blue', title: 'AI & Gen AI' },
]

export default function Services() {
  const [a, b, c, d] = SERVICES

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

          <ServiceCard {...a} bordered description="Building robust web applications using Python, Java, React, and modern databases." />
          <ServiceCard {...b} bordered last description="Securing digital assets, auditing applications, and implementing cybersecurity best practices." />

          <div className="stat-cell" style={{ borderRight: '2px solid var(--line)' }}></div>
          <div className="svc learn row-border"><a href="https://www.linkedin.com/in/naman-saini-b19967333" target="_blank" rel="noreferrer">LinkedIn Profile →</a></div>
          <div className="svc learn row-border" style={{ borderRight: 'none' }}><a href="mailto:saininaman643@gmail.com">Contact Email →</a></div>

          <div className="stat-cell"></div>
          <ServiceCard {...c} description="Creating immersive training programs and interactive virtual reality experiences." />
          <ServiceCard {...d} last description="Integrating Generative AI, LLMs, Machine Learning, and Cloud foundations into solutions." />

          <div className="stat-cell" style={{ borderTop: '2px solid var(--line)' }}></div>
          <div className="svc learn" style={{ borderTop: '2px solid var(--line)' }}><a href="https://www.linkedin.com/in/naman-saini-b19967333" target="_blank" rel="noreferrer">Let's Connect →</a></div>
          <div className="svc learn" style={{ borderTop: '2px solid var(--line)', borderRight: 'none' }}><a href="mailto:saininaman643@gmail.com">Get in Touch →</a></div>
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
