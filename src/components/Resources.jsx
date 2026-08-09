export default function Resources() {
  return (
    <div className="resources-page-container wrap" style={{ paddingTop: '80px', paddingBottom: '120px', minHeight: '75vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* Main Headline */}
      <div className="resources-header">
        <h1 className="resources-title">
          Big Surprise <span className="highlight-yellow">Incoming!</span> 🎁
        </h1>
        <p className="resources-subtitle">
          I'm crafting a comprehensive, standalone external website dedicated to curated developer resources, backend blueprints, system design cheat sheets, and code templates.
        </p>
      </div>

      {/* Status Progress Bar Card */}
      <div className="resources-status-card">
        <div className="status-header">
          <div className="status-info">
            <span className="status-label">DEV STATUS:</span>
            <span className="status-value">🧪 Finalizing Content & Portal Engine</span>
          </div>
          <div className="status-percentage">40% COMPLETE</div>
        </div>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: '40%' }}></div>
        </div>
      </div>
    </div>
  )
}
