import { useState, useEffect } from 'react'
import ScrollReveal from './ScrollReveal'
import { FaAws, FaBrain, FaVrCardboard, FaShieldHalved, FaUserGraduate } from 'react-icons/fa6'

const CERTIFICATIONS = [
  {
    id: "cert-1",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    year: "2025",
    image: "/oracle-ai-certificate.webp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#EA4335">
        <path d="M16.2 3H7.8C3.5 3 0 6.5 0 10.8v2.4C0 17.5 3.5 21 7.8 21h8.4c4.3 0 7.8-3.5 7.8-7.8v-2.4C24 6.5 20.5 3 16.2 3zm4.2 10.2c0 2.3-1.9 4.2-4.2 4.2H7.8C5.5 17.4 3.6 15.5 3.6 13.2v-2.4c0-2.3 1.9-4.2 4.2-4.2h8.4c2.3 0 4.2 1.9 4.2 4.2v2.4z"/>
      </svg>
    )
  },
  {
    id: "cert-6",
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    year: "2025",
    image: "/aws-cloud-foundations-certificate.webp",
    icon: <FaAws size={26} color="#FF9900" />
  },
  {
    id: "cert-3",
    title: "AR/VR Immersive Technology Training & Project Program",
    issuer: "Aalgorix",
    year: "2025",
    image: "/ar-vr-certificate.webp",
    icon: <FaVrCardboard size={24} color="#4285F4" />
  },
  {
    id: "cert-4",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2026",
    image: "/cybersecurity-certificate.webp",
    icon: <FaShieldHalved size={24} color="#34A853" />
  },
  {
    id: "cert-2",
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    year: "2025",
    image: "/outskill-genai-certificate.webp",
    icon: <FaBrain size={24} color="#FBBC05" />
  },
  {
    id: "cert-5",
    title: "Soft Skills Course - Complete Professional Development",
    issuer: "GeeksforGeeks",
    year: "2025",
    image: "/soft-skills-certificate.webp",
    icon: <FaUserGraduate size={24} color="#AB47BC" />
  }
]

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null)

  // Preload all certificate images in background for instant popups
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
                  <div className="cert-icon-container">
                    {cert.icon}
                  </div>
                  <span className="cert-year-badge">{cert.year}</span>
                </div>
                
                <h3 
                  className={`cert-title-text ${cert.image ? 'clickable' : ''}`}
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
