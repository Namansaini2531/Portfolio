import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Cta() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: false, error: '' })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: '' })

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, error: '' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ loading: false, success: false, error: data.error || 'Something went wrong. Please try again later.' })
      }
    } catch (err) {
      console.error(err)
      setStatus({ loading: false, success: false, error: 'Unable to reach the server. Please try again later.' })
    }
  }

  return (
    <section className="cta-canvas-section" id="hire">
      <div className="wrap">
        <ScrollReveal translateY={30} baseRotation={-1} baseOpacity={0.2}>
          <div className="contact-canvas-grid">
            
            {/* Left Side: Handwritten Callout */}
            <div className="contact-left-col">
              <div className="contact-pink-badge">
                Contact here
              </div>

              {/* Curved Arrow SVG */}
              <div className="curved-arrow-wrapper">
                <svg width="45" height="55" viewBox="0 0 50 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 5 Q 35 25, 25 50" />
                  <polyline points="18 42, 25 52, 32 44" />
                </svg>
              </div>

              <p className="contact-hand-text">
                Have a project idea?<br />
                just say me <strong>Hi.</strong>
              </p>
            </div>

            {/* Right Side: Highlighted Underline Input Form */}
            <div className="contact-right-col">
              {status.success ? (
                <div className="contact-success-msg">
                  🎉 Message sent successfully! I'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-hand-form">
                  {/* Name Input Row */}
                  <div className="hand-input-row">
                    <span className="input-hl-tag pink-hl">Name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Zainab Nisa"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="hand-underline-input"
                    />
                  </div>

                  {/* Email Input Row */}
                  <div className="hand-input-row">
                    <span className="input-hl-tag yellow-hl">Your email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="zainab123@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="hand-underline-input"
                    />
                  </div>

                  {/* Message Input Row */}
                  <div className="hand-input-row">
                    <span className="input-hl-tag blue-hl">Your Message</span>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="I want to discuss you about ......."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="hand-underline-textarea"
                    />
                  </div>

                  {status.error && (
                    <div className="contact-error-msg">
                      ⚠️ {status.error}
                    </div>
                  )}

                  {/* Send Button */}
                  <div className="contact-btn-row">
                    <button type="submit" disabled={status.loading} className="contact-black-btn">
                      {status.loading ? 'Sending...' : 'Send Here'}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
