import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const STATS = [
  { number: "500K+", label: "Reviews" },
  { number: "50K+",  label: "Products" },
  { number: "100K+", label: "Happy Customers" },
  { number: "4.8★",  label: "Avg. Rating" },
];

const VALUES = [
  {
    num: "01",
    title: "No Fake Energy",
    body: "Zero sponsored placements. Zero paid-for five-stars. Every review on Rated is from someone who actually copped the product.",
    tint: "#FDE8EE",
  },
  {
    num: "02",
    title: "Loud & Honest",
    body: "If a product slaps, we say so. If it flops, we say that louder. We don't do polite mediocrity.",
    tint: "#DFF0F7",
  },
  {
    num: "03",
    title: "Built Different",
    body: "We're a community of real people with real opinions — not an algorithm dressed up in corporate speak.",
    tint: "#FEF3C7",
  },
];

const WHAT_WE_DO = [
  { emoji: "🛡️", title: "Verified Reviews",   highlight: "99.9% Authentic",    body: "Every review is from a verified purchase. No bots, no fake accounts — just the real deal." },
  { emoji: "⭐",  title: "Smart Ratings",      highlight: "AI-Enhanced",        body: "Our system spots patterns humans miss — fake praise, astroturfing, planted negatives. All filtered out." },
  { emoji: "🎯",  title: "Advanced Filters",   highlight: "20+ Options",        body: "Filter by rating, size, vibe, who bought it, when — find exactly what you need, fast." },
  { emoji: "🌍",  title: "Global Drops",       highlight: "50+ Countries",      body: "Reviews from buyers worldwide. If it's selling anywhere, someone on Rated has thoughts about it." },
];

const About = () => {
  return (
    <div className="about-page">

      {/* ── HERO BAND ── */}
      <section className="about-hero-band">
        <div className="about-hero-inner">
          <div className="about-hero-left">
            <span className="about-eyebrow">★ Est. 2024</span>
            <h1 className="about-title">
              We Are<br />Rated
            </h1>
            <p className="about-hero-body">
              Bold fits. Honest reviews. A brand built by people who actually care 
              about what they wear — not just what looks good in an ad.
            </p>
            <div className="about-hero-ctas">
              <Link to="/products" className="btn-primary">Shop the Collection →</Link>
              <Link to="/signup" className="btn-outline about-outline-btn">Join the Community</Link>
            </div>
          </div>

          <div className="about-hero-right">
            <img
              src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2670&auto=format&fit=crop"
              alt="Rated brand campaign"
              className="about-hero-img"
            />
            {/* Floating sticker badges */}
            <div className="about-sticker about-sticker-1 badge-sticker badge-new">Real People ★</div>
            <div className="about-sticker about-sticker-2 badge-sticker badge-feature">No Cap ✦</div>
            <div className="about-sticker about-sticker-3 badge-sticker badge-hot">100% Legit 🍦</div>
          </div>
        </div>
      </section>

      {/* ── STATS TICKER BAND ── */}
      <section className="about-stats-band">
        {STATS.map((s, i) => (
          <div key={i} className="about-stat-block">
            <span className="about-stat-number">{s.number}</span>
            <span className="about-stat-label">{s.label}</span>
            {i < STATS.length - 1 && <span className="about-stat-divider">✦</span>}
          </div>
        ))}
      </section>

      {/* ── MISSION BAND (pink) ── */}
      <section className="about-mission-band">
        <div className="about-mission-inner">
          <div className="about-mission-label-col">
            <span className="about-section-label">Our Mission</span>
          </div>
          <div className="about-mission-text-col">
            <h2 className="about-section-title">
              In a world full of<br />
              sponsored BS —<br />
              we bring back truth.
            </h2>
            <p className="about-mission-body">
              Rated was born because we got tired of lying reviews, paid placements, 
              and influencer codes that mean nothing. We built the platform we 
              actually wanted to use: fast, honest, community-first.
            </p>
            <p className="about-mission-body">
              Whether you're buying your first graphic tee or your tenth sneaker drop — 
              you deserve to know what you're actually getting.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES BAND (cream) ── */}
      <section className="about-values-band">
        <div className="about-values-header">
          <h2 className="about-section-title">What We Stand For</h2>
        </div>
        <div className="about-values-grid">
          {VALUES.map((v) => (
            <div key={v.num} className="about-value-card" style={{ background: v.tint }}>
              <span className="about-value-num">{v.num}</span>
              <h3 className="about-value-title">{v.title}</h3>
              <p className="about-value-body">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT WE DO BAND (sky) ── */}
      <section className="about-features-band">
        <div className="about-features-header">
          <h2 className="about-section-title">What We Do</h2>
          <p className="about-features-sub">Built to be fast, honest, and actually useful.</p>
        </div>
        <div className="about-features-grid">
          {WHAT_WE_DO.map((f, i) => (
            <div key={i} className="about-feature-card">
              <span className="about-feature-emoji">{f.emoji}</span>
              <span className="badge-sticker badge-feature about-feature-badge">{f.highlight}</span>
              <h3 className="about-feature-title">{f.title}</h3>
              <p className="about-feature-body">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND (mustard) ── */}
      <section className="about-cta-band">
        <div className="about-cta-inner">
          <div className="about-cta-left">
            <h2 className="about-cta-title">
              Ready to cop<br />something real?
            </h2>
            <div className="about-cta-buttons">
              <Link to="/products" className="btn-primary">Browse Collection →</Link>
              <Link to="/signup" className="about-cta-secondary">Create Account ✦</Link>
            </div>
          </div>
          <div className="about-cta-right">
            <p className="about-cta-tagline">"Bold fits.<br />No apologies."</p>
            <p className="about-cta-sig">— The Rated Team</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;