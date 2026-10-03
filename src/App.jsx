import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/react"
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

  useEffect(() => {
    if (isResources) {
      document.title = "Developer Resources & Blueprints | Naman Saini"
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute('content', "Curated developer resources, backend blueprints, system design cheat sheets, and code templates by Naman Saini.")
      }
      const canonical = document.querySelector('link[rel="canonical"]')
      if (canonical) {
        canonical.setAttribute('href', 'https://namansaini2531.dev/resources')
      }
    } else {
      document.title = "Naman Saini (namansaini2531) — Software Developer & Product Engineer"
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute('content', "Naman Saini (namansaini2531) — Product Engineering Intern & Backend Developer. Explore my portfolio, projects, software engineering experience, skills, and system architecture.")
      }
      const canonical = document.querySelector('link[rel="canonical"]')
      if (canonical) {
        canonical.setAttribute('href', 'https://namansaini2531.dev/')
      }
    }
  }, [isResources])
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
      <SpeedInsights />
    </>
  )
}

