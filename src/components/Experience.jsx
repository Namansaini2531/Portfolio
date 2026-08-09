import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const EXPERIENCES = [
  {
    role: 'Product Engineering Intern',
    company: 'MarTechAdda',
    type: 'Full-time',
    duration: '15 Jun 2026 – 31 Jul 2026 · 1.5 mos',
    location: 'Remote',
    description: 'Contributing to product engineering and full-stack software development with a focus on scalable solutions and performance.',
    skills: ['Product Engineering', 'Full-Stack Development', 'Problem Solving'],
    certImg: '/martechadda-certificate.webp',
    certificateUrl: 'https://pooshti.martechadda.com/verify/CRTI-9421-L5HX',
    lorUrl: '/martechadda-lor.webp',
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
  const [activeModal, setActiveModal] = useState(null) // { type: 'cert' | 'lor', img: string, title: string, verifyUrl?: string }

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
              <div className="exp-card" style={{ position: 'relative' }}>
                <div className="exp-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1', minWidth: '220px' }}>
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

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    {(exp.certImg || exp.certificateUrl) && (
                      <button
                        onClick={() => {
                          if (exp.certImg) {
                            setActiveModal({
                              type: 'cert',
                              img: exp.certImg,
                              title: `Certificate of Internship — ${exp.company}`,
                              verifyUrl: exp.certificateUrl
                            })
                          } else if (exp.certificateUrl) {
                            window.open(exp.certificateUrl, '_blank')
                          }
                        }}
                        className="exp-cert-link"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 14px',
                          background: 'var(--yellow)',
                          color: '#000000',
                          fontWeight: '800',
                          fontSize: '0.85rem',
                          borderRadius: '8px',
                          border: '2px solid var(--line)',
                          boxShadow: '2px 2px 0 var(--line)',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                        View Certificate ↗
                      </button>
                    )}

                    {exp.lorUrl && (
                      <button
                        onClick={() => setActiveModal({
                          type: 'lor',
                          img: exp.lorUrl,
                          title: `Letter of Recommendation — ${exp.company}`
                        })}
                        className="exp-lor-btn"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 14px',
                          background: 'var(--pink)',
                          color: '#000000',
                          fontWeight: '800',
                          fontSize: '0.85rem',
                          borderRadius: '8px',
                          border: '2px solid var(--line)',
                          boxShadow: '2px 2px 0 var(--line)',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                        </svg>
                        Recommendation Letter ↗
                      </button>
                    )}
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

      {/* Document Modal (Certificate or LOR) */}
      {activeModal && (
        <div className="cert-modal-backdrop" onClick={() => setActiveModal(null)}>
          <div 
            className="cert-modal-content" 
            style={{ 
              maxWidth: activeModal.type === 'lor' ? '560px' : '820px', 
              width: '92%' 
            }} 
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cert-modal-close" onClick={() => setActiveModal(null)} aria-label="Close modal">
              &times;
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '16px', paddingRight: '44px' }}>
              <h3 className="cert-modal-title" style={{ margin: 0 }}>{activeModal.title}</h3>
              {activeModal.verifyUrl && (
                <a
                  href={activeModal.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-modal-verify-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    background: 'var(--yellow)',
                    color: '#000000',
                    fontWeight: '800',
                    fontSize: '0.85rem',
                    borderRadius: '8px',
                    border: '2px solid var(--line)',
                    boxShadow: '2px 2px 0 var(--line)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Verify Online ↗
                </a>
              )}
            </div>

            <div 
              className="cert-modal-img-wrapper no-scrollbar" 
              style={{ 
                maxHeight: '75vh', 
                overflowY: 'auto', 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none', 
                background: '#fff', 
                padding: '8px' 
              }}
            >
              <img 
                src={activeModal.img} 
                alt={activeModal.title} 
                className="cert-modal-img"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
