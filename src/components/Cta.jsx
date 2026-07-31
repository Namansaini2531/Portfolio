import ScrollReveal from './ScrollReveal'

export default function Cta() {
  return (
    <section className="cta-wrap" id="hire">
      <div className="wrap">
        <ScrollReveal translateY={30} baseRotation={-1} baseOpacity={0.2}>
          <div className="cta-grid" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="cta-info" style={{ textAlign: 'center' }}>
              <h3>Open to full-time &amp; internship opportunities 🚀</h3>
              <p style={{ maxWidth: '640px', margin: '0 auto 28px' }}>
                I'm a CSE student at GLBITM (Class of '28) actively looking for <strong>SDE internships</strong> and <strong>entry-level roles</strong> in backend development, DevOps, or cybersecurity. Reach out directly via email or connect with me on LinkedIn!
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a 
                  href="mailto:saininaman643@gmail.com" 
                  className="btn inline-btn" 
                  style={{ background: 'var(--yellow)' }}
                >
                  ✉️ saininaman643@gmail.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/naman-saini-b19967333" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn inline-btn" 
                  style={{ background: 'var(--blue)', color: '#fff' }}
                >
                  View LinkedIn Profile ↗
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
