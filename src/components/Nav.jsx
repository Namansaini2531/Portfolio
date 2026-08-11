import { useState, useEffect } from 'react'

export default function Nav({ currentPath = typeof window !== 'undefined' ? window.location.pathname : '/' }) {
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

  useEffect(() => {
    const handleCustomToggle = (e) => {
      if (e.detail?.theme) {
        setTheme(e.detail.theme)
      } else {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
      }
    }
    window.addEventListener('theme-toggle', handleCustomToggle)
    return () => window.removeEventListener('theme-toggle', handleCustomToggle)
  }, [])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
    window.dispatchEvent(new Event('theme-change'))
  }

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleNavClick = (e, target) => {
    closeMenu()

    if (target === '/resources') {
      e.preventDefault()
      if (window.location.pathname !== '/resources') {
        window.history.pushState({}, '', '/resources')
        window.dispatchEvent(new Event('popstate'))
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (window.location.pathname === '/resources') {
      e.preventDefault()
      window.history.pushState({}, '', '/' + target)
      window.dispatchEvent(new Event('popstate'))
      setTimeout(() => {
        const el = document.querySelector(target)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        else window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 50)
    }
  }

  const isResources = currentPath === '/resources' || (typeof window !== 'undefined' && window.location.pathname === '/resources')

  return (
    <header className="site-header">
      <div className="nav-container">
        {/* Left Side: Logo */}
        <a href={isResources ? "/" : "#about"} className="logo-group" onClick={(e) => handleNavClick(e, '#about')}>
          <div className="logo-badge" style={{ background: 'var(--yellow)', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2.5px solid var(--line)', boxShadow: '2px 2px 0 var(--line)', color: 'var(--line)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="7 8 3 12 7 16" />
              <line x1="14" y1="4" x2="10" y2="20" />
              <polyline points="17 8 21 12 17 16" />
            </svg>
          </div>
          <div className="logo-text-wrapper">
            <span className="logo-name">Naman</span>
          </div>
        </a>

        {/* Center: Navigation Links (Desktop + Mobile Drawer) */}
        <nav className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a>
          <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>Projects</a>
          <a
            href="/resources"
            className={`nav-link-resources ${isResources ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, '/resources')}
          >
            Resources
          </a>
          <a href="#hire" onClick={(e) => handleNavClick(e, '#hire')}>Contact</a>
        </nav>

        {/* Right Side: Actions + Hamburger Button */}
        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            <span>{theme === 'light' ? '☾' : '☀️'}</span>
          </button>

          <a href="/Naman_Resume.pdf" target="_blank" rel="noreferrer" className="resume-btn" title="View Naman's Resume (PDF)">
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
