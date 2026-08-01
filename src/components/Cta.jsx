import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Cta() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: false, error: '' })

  const [fieldErrors, setFieldErrors] = useState({ name: '', email: '', message: '' })

  const validate = () => {
    const errors = { name: '', email: '', message: '' }
    let isValid = true

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.'
      isValid = false
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.'
      isValid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.'
      isValid = false
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.'
      isValid = false
    }

    if (!formData.message.trim()) {
      errors.message = 'Please write your message.'
      isValid = false
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.'
      isValid = false
    }

    setFieldErrors(errors)
    return isValid
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (fieldErrors[e.target.name]) {
      setFieldErrors(prev => ({ ...prev, [e.target.name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus({ loading: true, success: false, error: '' })

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        })
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, error: '' })
        setFormData({ name: '', email: '', message: '' })
        setFieldErrors({ name: '', email: '', message: '' })
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
                  <div className="hand-input-row-container">
                    <div className="hand-input-row">
                      <span className="input-hl-tag pink-hl">Name</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="hand-underline-input"
                      />
                    </div>
                    {fieldErrors.name && (
                      <span className="field-error-text">⚠️ {fieldErrors.name}</span>
                    )}
                  </div>

                  {/* Email Input Row */}
                  <div className="hand-input-row-container">
                    <div className="hand-input-row">
                      <span className="input-hl-tag yellow-hl">Your email</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="your-email@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="hand-underline-input"
                      />
                    </div>
                    {fieldErrors.email && (
                      <span className="field-error-text">⚠️ {fieldErrors.email}</span>
                    )}
                  </div>

                  {/* Message Input Row */}
                  <div className="hand-input-row-container">
                    <div className="hand-input-row">
                      <span className="input-hl-tag blue-hl">Your Message</span>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="I want to discuss you about ......."
                        value={formData.message}
                        onChange={handleChange}
                        className="hand-underline-textarea"
                      />
                    </div>
                    {fieldErrors.message && (
                      <span className="field-error-text">⚠️ {fieldErrors.message}</span>
                    )}
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
