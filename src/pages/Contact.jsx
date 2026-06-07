import React, { useState } from "react";
import "./Contact.css";

const CHANNELS = [
  { emoji: "📩", label: "Email Us",       value: "hello@rated.co",      sub: "Reply within 24hrs" },
  { emoji: "💬", label: "DM Us",          value: "@rated.co",            sub: "Instagram & TikTok" },
  { emoji: "📦", label: "Order Issues",   value: "orders@rated.co",     sub: "Returns & tracking" },
  { emoji: "🤝", label: "Collabs",        value: "collabs@rated.co",    sub: "Brand & creator deals" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      {/* ── HEADER BAND ── */}
      <section className="contact-header-band">
        <div className="contact-header-inner">
          <div className="contact-header-left">
            <span className="contact-eyebrow">★ Get In Touch</span>
            <h1 className="contact-title">
              Talk<br />To Us
            </h1>
            <p className="contact-header-body">
              Got a question, a collab idea, or just want to say the tee goes hard?
              We're here for it. No bots, no auto-replies — actual humans.
            </p>
          </div>
          <div className="contact-header-right">
            {/* Floating sticker panels */}
            <div className="contact-stickers">
              <div className="contact-sticker-card" style={{ background: '#FDE8EE' }}>
                <span className="badge-sticker badge-new">Fast Reply ★</span>
                <p className="contact-sticker-body">We respond within 24 hours. Usually way sooner.</p>
              </div>
              <div className="contact-sticker-card" style={{ background: '#DFF0F7' }}>
                <span className="badge-sticker badge-hot">Real Humans 🍦</span>
                <p className="contact-sticker-body">No AI auto-replies. Just the Rated crew.</p>
              </div>
              <div className="contact-sticker-card" style={{ background: '#FEF3C7' }}>
                <span className="badge-sticker badge-feature">Open to Collabs ✦</span>
                <p className="contact-sticker-body">Creator? Brand? Let's talk.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHANNELS BAND (near-black) ── */}
      <section className="contact-channels-band">
        {CHANNELS.map((c, i) => (
          <div key={i} className="contact-channel-block">
            <span className="contact-channel-emoji">{c.emoji}</span>
            <div className="contact-channel-info">
              <p className="contact-channel-label">{c.label}</p>
              <p className="contact-channel-value">{c.value}</p>
              <p className="contact-channel-sub">{c.sub}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── FORM BAND (cream) ── */}
      <section className="contact-form-band">
        <div className="contact-form-inner">

          <div className="contact-form-left">
            <h2 className="contact-form-title">Send a Message</h2>
            <p className="contact-form-sub">
              Fill it in, hit send. We'll get back to you with something worth reading.
            </p>
          </div>

          <div className="contact-form-right">
            {submitted ? (
              <div className="contact-success">
                <span className="contact-success-emoji">🍦</span>
                <h3 className="contact-success-title">Message Received!</h3>
                <p className="contact-success-body">
                  We got it. The Rated crew will hit you back within 24 hours.
                  In the meantime — go shop.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                >
                  Send Another →
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className="contact-input"
                      placeholder="What do we call you?"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className="contact-input"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact-label" htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    className="contact-input"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label className="contact-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="contact-input contact-textarea"
                    placeholder="Say everything. We're listening."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="contact-submit btn-primary">
                  Send It →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ BAND (mustard) ── */}
      <section className="contact-faq-band">
        <h2 className="contact-faq-title">Quick Answers</h2>
        <div className="contact-faq-grid">
          {[
            { q: "How long does shipping take?",  a: "Standard 3–5 business days. Express 1–2 days. Free on orders over $50." },
            { q: "Can I return my order?",         a: "Yes — 30-day returns on everything unworn with tags on. No questions asked." },
            { q: "Do you do international?",       a: "Currently US & UK. More regions dropping soon. Sign up for the list to know first." },
            { q: "How do I track my order?",       a: "You'll get a tracking link by email as soon as your order ships." },
          ].map((faq, i) => (
            <div key={i} className="contact-faq-card">
              <p className="contact-faq-q">{faq.q}</p>
              <p className="contact-faq-a">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Contact;