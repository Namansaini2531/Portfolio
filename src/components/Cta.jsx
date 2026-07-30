import { useState } from 'react'

export default function Cta() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="cta-wrap" id="hire">
      <div className="star pink" style={{ width: 44, height: 44, top: 10, right: '30%' }}></div>
      <div className="wrap">
        <div className="cta-grid">
          <div className="cta-info">
            <h3>Let&rsquo;s build something amazing together</h3>
            <p>
              Looking for a product engineering intern, software developer, or tech collaborator?
              Send me a message directly using the form, or connect with me on LinkedIn!
            </p>
            <a href="https://www.linkedin.com/in/naman-saini-b19967333" target="_blank" rel="noreferrer" className="btn inline-btn" style={{ background: 'var(--yellow)' }}>
              Connect on LinkedIn
            </a>
          </div>

          <div className="cta-form-container">
            {status === 'success' ? (
              <div className="form-success">
                <h4>✓ Message Sent!</h4>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button onClick={() => setStatus('')} className="btn">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button type="submit" className="btn submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'error' && (
                  <p className="form-error">❌ Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
