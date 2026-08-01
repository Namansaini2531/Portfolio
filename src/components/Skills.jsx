import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import { 
  FaJava, 
  FaPython, 
  FaJsSquare, 
  FaHtml5, 
  FaGitAlt, 
  FaAws, 
  FaBrain, 
  FaShieldAlt,
  FaTerminal,
  FaVrCardboard,
  FaCode,
  FaSitemap,
  FaLaptopCode,
  FaRocket
} from 'react-icons/fa'
import { SiGoogle } from 'react-icons/si'

const CATEGORIES = [
  'All',
  'Languages',
  'DSA & Problem Solving',
  'Tools & Platforms',
  'Gen AI & Tech'
]

// Custom Clean SVG Icons for Brand Logos without dependency overhead
const OracleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#f80000">
    <path d="M16.2 3H7.8C3.5 3 0 6.5 0 10.8s3.5 7.8 7.8 7.8h8.4c4.3 0 7.8-3.5 7.8-7.8S20.5 3 16.2 3zm-.2 12.2H8c-2.4 0-4.4-2-4.4-4.4S5.6 6.4 8 6.4h8c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4z"/>
  </svg>
)

const SKILLS = [
  { name: 'Java', category: 'Languages', level: 'Proficient', icon: <FaJava style={{ color: '#e76f51', fontSize: '24px' }} /> },
  { name: 'Python', category: 'Languages', level: 'Intermediate', icon: <FaPython style={{ color: '#3776ab', fontSize: '24px' }} /> },
  { name: 'C++', category: 'Languages', level: 'Intermediate', icon: <FaCode style={{ color: '#00599c', fontSize: '24px' }} /> },
  { name: 'JavaScript', category: 'Languages', level: 'Intermediate', icon: <FaJsSquare style={{ color: '#f7df1e', fontSize: '24px' }} /> },
  { name: 'HTML5 & CSS3', category: 'Languages', level: 'Proficient', icon: <FaHtml5 style={{ color: '#e34f26', fontSize: '24px' }} /> },
  { name: 'Data Structures & Algorithms', category: 'DSA & Problem Solving', level: 'Intermediate (Java)', icon: <FaSitemap style={{ color: '#2a9d8f', fontSize: '24px' }} /> },
  { name: 'Problem Solving & Logic', category: 'DSA & Problem Solving', level: 'Proficient', icon: <FaBrain style={{ color: '#e91e63', fontSize: '24px' }} /> },
  { name: 'Git & GitHub', category: 'Tools & Platforms', level: 'Proficient', icon: <FaGitAlt style={{ color: '#f05032', fontSize: '24px' }} /> },
  { name: 'Visual Studio Code', category: 'Tools & Platforms', level: 'Daily Driver', icon: <FaLaptopCode style={{ color: '#007acc', fontSize: '24px' }} /> },
  { name: 'Antigravity', category: 'Tools & Platforms', level: 'Proficient', icon: <SiGoogle style={{ color: '#4285f4', fontSize: '24px' }} /> },
  { name: 'Oracle Cloud Infrastructure', category: 'Tools & Platforms', level: 'Certified Associate', icon: <OracleIcon /> },
  { name: 'AWS', category: 'Tools & Platforms', level: 'Familiar', icon: <FaAws style={{ color: '#ff9900', fontSize: '24px' }} /> },
  { name: 'Gen AI Tools & Prompt Engineering', category: 'Gen AI & Tech', level: 'Hands-on', icon: <FaTerminal style={{ color: '#9c27b0', fontSize: '24px' }} /> },
  { name: 'AR/VR Immersive Tech', category: 'Gen AI & Tech', level: 'Trained', icon: <FaVrCardboard style={{ color: '#00bcd4', fontSize: '24px' }} /> },
  { name: 'Cybersecurity Fundamentals', category: 'Gen AI & Tech', level: 'Certified', icon: <FaShieldAlt style={{ color: '#4caf50', fontSize: '24px' }} /> }
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredSkills = activeCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeCategory)

  return (
    <section className="skills-section" id="skills">
      <div className="wrap">
        <ScrollReveal baseOpacity={0.15} enableBlur={true} blurStrength={6}>
          <div className="skills-header">
            <div className="skills-title-row">
              <span className="tech-badge">TECHNICAL PROFICIENCY</span>
              <h2 className="skills-main-title">
                SKILLS & <span className="hl-toolkit">TOOLKIT</span>
              </h2>
            </div>
            <p className="skills-subtitle">
              Core programming languages, data structures & algorithm mastery, developer tools & Gen AI workflow tools.
            </p>
          </div>
        </ScrollReveal>

        {/* Filters */}
        <div className="skills-filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal key={skill.name} baseRotation={index % 2 === 0 ? -2 : 2} translateY={35} baseOpacity={0.2} blurStrength={5}>
              <div className="skill-card">
                <div className="skill-card-top">
                  <div className="skill-icon-badge">{skill.icon}</div>
                  <span className="skill-category-badge">{skill.category}</span>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-divider"></div>
                <div className="skill-card-bottom">
                  <span className="skill-level-label">Level:</span>
                  <span className="skill-level-badge">{skill.level}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
