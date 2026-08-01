import { useState, useEffect } from 'react'

export default function Nav() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  const [menuOpen, setMenuOpen] = useState(false)

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

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="nav-container">
        {/* Left Side: Logo */}
        <a href="#about" className="logo-group" onClick={closeMenu}>
          <div className="logo-badge" style={{ background: 'var(--line)', width: '34px', height: '34px', borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--line)' }}>
            <img src="/naman.jpg" alt="Naman" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="logo-text-wrapper">
            <span className="logo-name">Naman</span>
          </div>
        </a>

        {/* Center: Navigation Links (Desktop + Mobile Drawer) */}
        <nav className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#portfolio" onClick={closeMenu}>Projects</a>
          <a href="#hire" onClick={closeMenu}>Contact</a>
        </nav>

        {/* Right Side: Actions + Hamburger Button */}
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

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className={`hamburger-btn ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
