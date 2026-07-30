import { useState, useEffect } from 'react'

export default function Nav() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="site-header">
      <div className="nav-container">
        {/* Left Side: Logo */}
        <a href="#about" className="logo-group">
          <div className="logo-badge" style={{ background: 'var(--line)', width: '32px', height: '32px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'var(--yellow)', fontSize: '18px', fontWeight: 'bold' }}>✦</span>
          </div>
          <div className="logo-text-wrapper">
            <span className="logo-name" style={{ borderBottom: '2px dashed var(--line)', paddingBottom: '2px' }}>Naman</span>
          </div>
        </a>

        {/* Center: Navigation Links */}
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Projects</a>
          <a href="#about">Timeline</a>
          <a href="#about" className="nav-wavy">Certifications</a>
          <a href="#hire">Contact</a>
        </nav>

        {/* Right Side: Actions */}
        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            <span>{theme === 'light' ? '☾' : '☀️'}</span>
          </button>
          <a href="https://www.linkedin.com/in/naman-saini-b19967333" target="_blank" rel="noreferrer" className="resume-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}
