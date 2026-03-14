import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle, sending, success, error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    try {
      const res = await fetch(form.action, {
        method: form.method || 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        }
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
    setTimeout(() => {
      setStatus('idle')
    }, 4000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="underline"></div>
        <p className="lead">Have questions or want to work together? Send me a message — I'm very responsive.</p>

        <div className="contact-wrapper">
          <div className="contact-left">
            <div className="contact-card">
              <i className="fas fa-phone contact-icon"></i>
              <div>
                <h4>Phone</h4>
                <p>+91 9430800618</p>
              </div>
            </div>

            <div className="contact-card">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <div>
                <h4>Location</h4>
                <p>Kishanganj, Bihar</p>
              </div>
            </div>

            <div className="contact-card">
              <i className="fas fa-envelope contact-icon"></i>
              <div>
                <h4>Email</h4>
                <p>rabina24@navurukul.org</p>
              </div>
            </div>

            <div className="contact-card contact-social-card">
                {/* removed duplicate social card here; LinkedIn and GitHub moved beside the send button */}
              </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" action="https://formspree.io/f/mldlvqzd" method="POST" onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <textarea name="message" placeholder="Your Message" required className="message-box" />

              <div className="form-actions">
                <button type="submit" className="btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send Message'}</button>

                {/* small link box next to the button */}
                <div className="small-link-box" aria-hidden>
                  <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>

                {status === 'success' && <span className="form-success">Message sent — thank you!</span>}
                {status === 'error' && <span className="form-error">Something went wrong. Try again later.</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
