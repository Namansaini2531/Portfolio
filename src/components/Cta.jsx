export default function Cta() {
  return (
    <section className="cta-wrap" id="hire">
      <div className="star pink" style={{ width: 44, height: 44, top: 10, right: '30%' }}></div>
      <div className="wrap">
        <div className="cta">
          <h3>Let&rsquo;s build something amazing together</h3>
          <p>
            Looking for a product engineering intern, software developer, or tech collaborator?
            <br />
            Send me an email or connect with me on LinkedIn!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '20px' }}>
            <a href="mailto:saininaman643@gmail.com" className="btn">Email Me</a>
            <a href="https://www.linkedin.com/in/naman-saini-b19967333" target="_blank" rel="noreferrer" className="btn" style={{ background: 'var(--yellow)' }}>LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
