const PROJECTS = [
  { thumbClass: 'thumb-a', label: 'MarTechAdda Intern Project', type: 'Product Engineering', tech: 'React, Node.js, Python, Full Stack Dev' },
  { thumbClass: 'thumb-b', label: 'Cybersecurity Vulnerability Audit Tool', type: 'Security Auditing', tech: 'Python, Bash, Network Sec, Penetration Audit' },
  { thumbClass: 'thumb-c', label: 'Immersive AR/VR Training Simulator', type: 'AR/VR Tech', tech: 'C#, Unity, Meta Quest Integration' },
  { thumbClass: 'thumb-d', label: 'Gen AI Smart Suite Application', type: 'Generative AI', tech: 'Oracle Cloud, LLMs, LangChain, API Integration' },
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
          {PROJECTS.map((p) => (
            <div className="port-card" key={p.label}>
              <div className={`port-thumb ${p.thumbClass}`}>{p.label}</div>
              <div className="port-meta">
                <div>
                  <h4>{p.type}</h4>
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
