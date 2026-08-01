import { useState, useEffect } from 'react'
import ScrollReveal from './ScrollReveal'

const CERTIFICATIONS = [
  {
    id: "cert-1",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    year: "2025",
    image: "/oracle-ai-certificate.webp",
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
    image: "/outskill-genai-certificate.webp",
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
    image: "/ar-vr-certificate.webp",
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
    image: "/cybersecurity-certificate.webp",
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
    image: "/soft-skills-certificate.webp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#AB47BC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    id: "cert-6",
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    year: "2025",
    image: "/aws-cloud-foundations-certificate.webp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
      </svg>
    )
  }
]

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null)

  // Preload all certificate images in the background so modal popups are instant
  useEffect(() => {
    CERTIFICATIONS.forEach(cert => {
      if (cert.image) {
        const img = new Image()
        img.src = cert.image
      }
    })
  }, [])

  return (
    <section className="cert-section" id="certifications">
      <div className="wrap">
        
        {/* Section Title */}
        <ScrollReveal baseOpacity={0.15} enableBlur={true} blurStrength={6}>
          <div className="cert-header">
            <span className="cert-badge">CREDENTIALS &amp; CERTIFICATIONS</span>
            <h2 className="cert-main-title">
              VERIFIED <span className="hl-cert">ACHIEVEMENTS</span>
            </h2>
            <p className="cert-subtitle">
              Professional industry certifications, cloud credentials, and specialized engineering training.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="cert-grid">
          {CERTIFICATIONS.map((cert, index) => (
            <ScrollReveal 
              key={cert.id} 
              baseRotation={index % 2 === 0 ? -1.5 : 1.5} 
              translateY={30} 
              baseOpacity={0.2}
            >
              <div 
                className={`cert-card ${cert.image ? 'has-modal-trigger' : ''}`}
                onClick={() => cert.image && setActiveCert(cert)}
              >
                <div className="cert-card-top">
                  <div className="cert-icon-wrapper">
                    {cert.icon}
                  </div>
                  <span className="cert-year-tag">{cert.year}</span>
                </div>
                
                <h3 
                  className="cert-title"
                  title={cert.image ? "Click to view certificate" : ""}
                >
                  {cert.title}
                </h3>
                
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
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      {activeCert && (
        <div className="cert-modal-backdrop" onClick={() => setActiveCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setActiveCert(null)} aria-label="Close modal">
              &times;
            </button>
            <h3 className="cert-modal-title">{activeCert.title}</h3>
            <div className="cert-modal-img-wrapper">
              <img 
                src={activeCert.image} 
                alt={activeCert.title} 
                className="cert-modal-img"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
