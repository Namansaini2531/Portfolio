import ScrollReveal from './ScrollReveal'

const EXPERIENCES = [
  {
    role: 'Product Engineering Intern',
    company: 'MarTechAdda',
    type: 'Full-time',
    duration: 'Jun 2026 – Present · 2 mos',
    location: 'Remote',
    description: 'Contributing to product engineering and full-stack software development with a focus on scalable solutions and performance.',
    skills: ['Product Engineering', 'Full-Stack Development', 'Problem Solving'],
    logoBg: '#3b82f6',
    initials: 'MTA'
  },
  {
    role: 'Member',
    company: 'Rotaract Club of GL Bajaj',
    type: 'Full-time',
    duration: 'Aug 2025 – Present · 1 yr',
    location: 'Greater Noida · On-site',
    description: 'The Rotaract Club of GL Bajaj is an institution-based service club for young adults at the GL Bajaj Institute of Technology and Management in Greater Noida.',
    skills: ['Soft Skills and Communication', 'Leadership', 'Event Planning'],
    logoBg: '#f43f5e',
    initials: 'RC'
  }
]

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="wrap">
        <ScrollReveal baseOpacity={0.15} enableBlur={true} blurStrength={6}>
          <div className="exp-header">
            <span className="exp-badge">CAREER & COMMUNITY</span>
            <h2 className="exp-main-title">
              PROFESSIONAL <span className="hl-exp">EXPERIENCE</span> 💼
            </h2>
            <p className="exp-subtitle">
              My industry internship roles, leadership positions, and organizational contributions.
            </p>
          </div>
        </ScrollReveal>

        <div className="exp-list">
          {EXPERIENCES.map((exp, index) => (
            <ScrollReveal key={index} translateY={30} baseOpacity={0.2} blurStrength={5}>
              <div className="exp-card">
                <div className="exp-card-header">
                  <div className="exp-logo-badge" style={{ backgroundColor: exp.logoBg }}>
                    {exp.initials}
                  </div>
                  <div className="exp-title-group">
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-info">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-dot">•</span>
                      <span className="exp-type">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <div className="exp-meta-row">
                  <div className="exp-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>{exp.duration}</span>
                  </div>
                  <div className="exp-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {exp.description && (
                  <p className="exp-description">{exp.description}</p>
                )}

                {exp.skills && exp.skills.length > 0 && (
                  <div className="exp-skills">
                    <div className="exp-skills-label">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3h12l4 6-10 12L2 9z"></path>
                      </svg>
                      <span>Skills & Attributes:</span>
                    </div>
                    <div className="exp-skill-tags">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="exp-skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
