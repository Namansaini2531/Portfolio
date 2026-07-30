const CERTIFICATIONS = [
  {
    id: "cert-1",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    year: "2025",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    id: "cert-2",
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    year: "2025",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FBBC05" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  },
  {
    id: "cert-3",
    title: "AR/VR Immersive Technology Training & Project Program",
    issuer: "Aalgorix",
    year: "2025",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="12" r="3" />
        <path d="M6 15h12M12 9v3" />
      </svg>
    )
  },
  {
    id: "cert-4",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2026",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 11l2 2 4-4" />
      </svg>
    )
  },
  {
    id: "cert-5",
    title: "Soft Skills Course - Complete Professional Development",
    issuer: "GeeksforGeeks",
    year: "2025",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A142F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    )
  },
  {
    id: "cert-6",
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    year: "2026",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v8M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        <path d="M22 19c-1-2-4-3-10-3s-9 1-10 3" />
      </svg>
    )
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="wrap">
        
        {/* Section Title */}
        <div className="endorsement-title-row" style={{ marginBottom: '50px' }}>
          <h2 className="endorsement-main-title">
            <span className="endorsement-badge" style={{ background: 'var(--yellow)', transform: 'rotate(1.5deg)' }}>CREDENTIALS</span>{' '}
            CERTIFICATIONS & <span className="hl-peers" style={{ background: 'var(--blue)' }}>BADGES</span>
          </h2>
          <p className="endorsement-subtitle">
            Industry recognized certifications in Artificial Intelligence, Cloud, Cybersecurity, and Immersive Tech.
          </p>
        </div>

        {/* Grid */}
        <div className="cert-grid">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-card-top">
                <div className="cert-icon-container">
                  {cert.icon}
                </div>
                <span className="cert-year-badge">{cert.year}</span>
              </div>
              
              <h3 className="cert-title-text">{cert.title}</h3>
              
              <div className="cert-divider"></div>
              
              <div className="cert-card-bottom">
                <span className="cert-issuer-text">{cert.issuer}</span>
                <span className="cert-verified-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
