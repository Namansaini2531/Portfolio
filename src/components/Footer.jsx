export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="wrap footer-content">
        {/* Main 3-column Grid */}
        <div className="footer-top-grid">
          {/* Column 1: Brand & Tagline */}
          <div className="footer-brand-col">
            <a href="#about" className="footer-logo">
              <div className="footer-logo-badge">
                <img src="/naman.jpg" alt="Naman" className="footer-logo-img" />
              </div>
              <span className="footer-logo-text">Naman</span>
            </a>
            <p className="footer-bio">
              Product Engineering Intern & Backend Developer passionate about building robust backend applications, Java DSA, and scalable systems.
            </p>
            <div className="footer-availability">
              <span className="availability-dot"></span>
              <span>Available for SDE Internships & Roles</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#portfolio">Projects</a></li>
              <li><a href="#testimonials">Endorsements</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#hire">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="footer-connect-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-social-buttons">
              <a 
                href="https://github.com/Namansaini2531" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-btn github"
                aria-label="GitHub Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/naman-saini-b19967333" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-btn linkedin"
                aria-label="LinkedIn Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a 
                href="mailto:saininaman643@gmail.com" 
                className="footer-social-btn email"
                aria-label="Send Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Email Me</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Row */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Naman
          </p>
          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
