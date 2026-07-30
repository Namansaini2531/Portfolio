import ScrollReveal from './ScrollReveal'

export function SpikyStar({ className, size = 50, fill = "var(--pink-deep)", style }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ overflow: 'visible', ...style }}
    >
      <path
        d="M 50,5 L 60,30 L 80,20 L 70,40 L 95,50 L 70,60 L 80,80 L 60,70 L 50,95 L 40,70 L 20,80 L 30,60 L 5,50 L 30,40 L 20,20 L 40,30 Z"
        fill={fill}
        stroke="var(--line)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="about">
      {/* Pink star bottom-left of the hero section */}
      <SpikyStar className="hero-star-bottom-left" size={60} fill="var(--pink-deep)" />

      <div className="wrap hero-grid">
        <ScrollReveal translateY={30} baseRotation={-2} baseOpacity={0.2}>
          <div className="hero-content">
            <div className="sticky-note-left">
              {/* Smile Sun SVG */}
              <svg viewBox="0 0 100 100" width="56" height="56" style={{ color: 'var(--line)', fill: 'none' }}>
                <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="3" />
                <path d="M43,53 Q50,60 57,53" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <circle cx="41" cy="44" r="2.5" fill="currentColor" />
                <circle cx="59" cy="44" r="2.5" fill="currentColor" />
                <line x1="50" y1="8" x2="50" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="80" x2="50" y2="92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="8" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="80" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="20" y1="20" x2="29" y2="29" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="71" y1="71" x2="80" y2="80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="80" y1="20" x2="71" y2="29" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="29" y1="71" x2="20" y2="80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <h1 className="hero-title">
              I turn 💡 Ideas<br />
              into <span className="hl">Interfaces</span>
            </h1>
            <div className="btn-container">
              <a href="#portfolio" className="btn">See Portfolio</a>
              <div className="btn-sketch-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="4" y1="4" x2="16" y2="20" />
                  <line x1="10" y1="4" x2="22" y2="20" />
                  <line x1="16" y1="4" x2="22" y2="20" />
                </svg>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal translateY={30} baseRotation={2} baseOpacity={0.2}>
          <div className="hero-visual-container">
            <div className="mockup-label hand">
              <span>☺ NAMAN</span>
              <div className="curved-arrow">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M2,2 C10,2 14,8 14,14" />
                  <path d="M9,10 L14,15 L19,10" />
                </svg>
              </div>
            </div>

            <div className="mockup-wrapper">
              <div className="crop-mark top-left"></div>
              <div className="crop-mark top-right"></div>
              <div className="crop-mark bottom-left"></div>
              <div className="crop-mark bottom-right"></div>

              <div className="frame">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="bulb">💡</div>
                <div className="screen" style={{ overflow: 'hidden', padding: 0 }}>
                  <img src="/naman.jpg" alt="Naman Saini" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="mockup-name hand" style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255, 255, 255, 0.9)', padding: '2px 14px', borderRadius: '20px', border: '2.5px solid var(--line)', whiteSpace: 'nowrap', zIndex: 10 }}>Naman Saini</div>
                </div>
                <SpikyStar className="frame-star" size={54} fill="var(--red)" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
