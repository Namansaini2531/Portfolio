const TOOLS = ['Python', 'Java', 'React', 'AR/VR', 'Gen AI', 'Full Stack', 'Cybersecurity']

export default function Toolbar() {
  return (
    <div className="toolbar">
      <div className="toolbar-track">
        {TOOLS.concat(TOOLS).map((tool, i) => (
          <span key={i}>{tool}</span>
        ))}
      </div>
    </div>
  )
}
