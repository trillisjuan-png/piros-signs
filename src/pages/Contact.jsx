import { useState } from 'react'
import ChatbotSection from '../components/ChatbotSection'

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', phone: '', email: '', signType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire to email / CRM
    setSubmitted(true)
  }

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-content">
          <div className="section-tag">
            <div className="section-tag-line"></div>
            <span>Get in Touch</span>
          </div>
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-sub">
            Start with our AI advisor for instant answers, or fill out the form and
            Chris or David will follow up personally.
          </p>
        </div>
      </div>

      {/* AI Advisor */}
      <ChatbotSection />

      {/* Contact Form */}
      <section className="contact-form-section" id="form">
        <div className="contact-form-inner">
          <div className="contact-form-left">
            <div className="section-tag">
              <div className="section-tag-line"></div>
              <span>Prefer a Form?</span>
            </div>
            <h2 className="section-title">Send Us a Message.</h2>
            <p className="section-body">
              Fill out the form and someone from our team will get back to you — usually the same day.
            </p>
            <div className="contact-info-items">
              <div className="contact-info-item">
                <span className="contact-info-label">Phone</span>
                <a href="tel:6364640200" className="contact-info-value">(636) 464-0200</a>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">St. Louis Shop</span>
                <span className="contact-info-value">Barnhart, MO</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Mid-Missouri Office</span>
                <span className="contact-info-value">Holts Summit, MO</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Emergency Repair</span>
                <span className="contact-info-value">24 / 7 Service</span>
              </div>
            </div>
          </div>

          <div className="contact-form-right">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">✓</div>
                <h3>Message Received</h3>
                <p>Thanks — we'll be in touch shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Business Name</label>
                    <input className="form-input" name="business" value={form.business} onChange={handleChange} placeholder="Acme Co." />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input className="form-input" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(314) 000-0000" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Type of Sign</label>
                  <select className="form-input form-select" name="signType" value={form.signType} onChange={handleChange}>
                    <option value="">Select a service…</option>
                    <option>Channel Letters</option>
                    <option>Cabinet Signs</option>
                    <option>Monument Signs</option>
                    <option>Pylon Signs</option>
                    <option>Digital Signs & Scoreboards</option>
                    <option>Sign Repair</option>
                    <option>Custom Fabrication</option>
                    <option>Permitting & Installation</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Tell us about your project</label>
                  <textarea className="form-input form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Describe your sign project, timeline, location…" rows={5} />
                </div>
                <button type="submit" className="btn btn-red" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
