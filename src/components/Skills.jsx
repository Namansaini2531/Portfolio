import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const CATEGORIES = [
  'All',
  'Languages',
  'DSA & Problem Solving',
  'Tools & Platforms',
  'Gen AI & Tech'
]

const SKILLS = [
  { name: 'Java', category: 'Languages', level: 'Proficient', icon: '☕' },
  { name: 'Python', category: 'Languages', level: 'Intermediate', icon: '🐍' },
  { name: 'C++', category: 'Languages', level: 'Intermediate', icon: '⚛️' },
  { name: 'JavaScript', category: 'Languages', level: 'Proficient', icon: '📜' },
  { name: 'HTML5 & CSS3', category: 'Languages', level: 'Proficient', icon: '🌐' },
  { name: 'Data Structures & Algorithms', category: 'DSA & Problem Solving', level: 'Proficient (Java)', icon: '📊' },
  { name: 'Problem Solving & Logic', category: 'DSA & Problem Solving', level: 'Advanced', icon: '💡' },
  { name: 'Git & GitHub', category: 'Tools & Platforms', level: 'Proficient', icon: '🐙' },
  { name: 'Visual Studio Code', category: 'Tools & Platforms', level: 'Daily Driver', icon: '💻' },
  { name: 'IntelliJ IDEA', category: 'Tools & Platforms', level: 'Daily Driver', icon: '☕' },
  { name: 'Oracle Cloud Infrastructure', category: 'Tools & Platforms', level: 'Certified Associate', icon: '☁️' },
  { name: 'AWS', category: 'Tools & Platforms', level: 'Familiar', icon: '📡' },
  { name: 'Gen AI Tools & Prompt Engineering', category: 'Gen AI & Tech', level: 'Hands-on', icon: '✨' },
  { name: 'AR/VR Immersive Tech', category: 'Gen AI & Tech', level: 'Trained', icon: '🥽' },
  { name: 'Cybersecurity Fundamentals', category: 'Gen AI & Tech', level: 'Certified', icon: '🛡️' }
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
          {filteredSkills.map(skill => (
            <div className="skill-card" key={skill.name}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
