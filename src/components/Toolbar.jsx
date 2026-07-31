import LogoLoop from './LogoLoop'
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
  FaLaptopCode
} from 'react-icons/fa'

const OracleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#f80000">
    <path d="M16.2 3H7.8C3.5 3 0 6.5 0 10.8s3.5 7.8 7.8 7.8h8.4c4.3 0 7.8-3.5 7.8-7.8S20.5 3 16.2 3zm-.2 12.2H8c-2.4 0-4.4-2-4.4-4.4S5.6 6.4 8 6.4h8c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4z"/>
  </svg>
)

const IntellijIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect width="22" height="22" rx="4" fill="#000000"/>
    <path d="M4 18h7v2H4z" fill="#FFF"/>
    <path d="M13 6h7v2h-7z" fill="#FFF"/>
    <path d="M6 8l4 8M18 16l-4-8" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const SKILL_ITEMS = [
  { node: <div className="toolbar-item"><FaJava style={{ color: '#e76f51', fontSize: '22px' }} /> <span>Java</span></div> },
  { node: <div className="toolbar-item"><FaPython style={{ color: '#3776ab', fontSize: '22px' }} /> <span>Python</span></div> },
  { node: <div className="toolbar-item"><FaCode style={{ color: '#00599c', fontSize: '22px' }} /> <span>C++</span></div> },
  { node: <div className="toolbar-item"><FaJsSquare style={{ color: '#f7df1e', fontSize: '22px' }} /> <span>JavaScript</span></div> },
  { node: <div className="toolbar-item"><FaHtml5 style={{ color: '#e34f26', fontSize: '22px' }} /> <span>HTML5 &amp; CSS3</span></div> },
  { node: <div className="toolbar-item"><FaSitemap style={{ color: '#2a9d8f', fontSize: '22px' }} /> <span>Data Structures &amp; Algorithms</span></div> },
  { node: <div className="toolbar-item"><FaGitAlt style={{ color: '#f05032', fontSize: '22px' }} /> <span>Git &amp; GitHub</span></div> },
  { node: <div className="toolbar-item"><OracleIcon /> <span>Oracle Cloud Infrastructure</span></div> },
  { node: <div className="toolbar-item"><FaAws style={{ color: '#ff9900', fontSize: '22px' }} /> <span>AWS</span></div> },
  { node: <div className="toolbar-item"><FaTerminal style={{ color: '#9c27b0', fontSize: '22px' }} /> <span>Gen AI Tools &amp; Prompt Engineering</span></div> },
  { node: <div className="toolbar-item"><FaVrCardboard style={{ color: '#00bcd4', fontSize: '22px' }} /> <span>AR/VR Immersive Tech</span></div> },
  { node: <div className="toolbar-item"><FaShieldAlt style={{ color: '#4caf50', fontSize: '22px' }} /> <span>Cybersecurity Fundamentals</span></div> }
]

export default function Toolbar() {
  return (
    <div className="toolbar">
      <LogoLoop
        logos={SKILL_ITEMS}
        speed={80}
        direction="left"
        logoHeight={36}
        gap={54}
        pauseOnHover={false}
        hoverSpeed={undefined}
        scaleOnHover={false}
        fadeOut={true}
        fadeOutColor="var(--ink)"
        ariaLabel="Skills marquee ticker"
      />
    </div>
  )
}
