import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Toolbar from './components/Toolbar'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Certifications from './components/Certifications'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Resources from './components/Resources'

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => 
    typeof window !== 'undefined' ? window.location.pathname : '/'
  )

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handleLocationChange)
    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  const isResources = currentPath === '/resources' || (typeof window !== 'undefined' && window.location.hash === '#resources')

  return (
    <>
      <Nav currentPath={currentPath} />
      {isResources ? (
        <Resources />
      ) : (
        <>
          <Hero />
          <Toolbar />
          <Skills />
          <Experience />
          <Portfolio />
          <Testimonials />
          <Certifications />
          <Cta />
        </>
      )}
      <Footer />
      <Analytics />
    </>
  )
}

