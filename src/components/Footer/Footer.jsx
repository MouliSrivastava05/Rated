import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Top band — logo + tagline */}
      <div className="footer-top">
        <Link to="/" className="footer-logo">Rated</Link>
        <p className="footer-tagline">Bold fits. No apologies.</p>
      </div>

      {/* Middle — newsletter + nav links */}
      <div className="footer-mid">
        <div className="footer-newsletter">
          <label htmlFor="footer-email" className="footer-newsletter-label">
            Join the list. Get the drops first.
          </label>
          <div className="newsletter-row">
            <input
              type="email"
              id="footer-email"
              className="footer-email-input"
              placeholder="your@email.com"
            />
            <button className="footer-subscribe-btn">Subscribe →</button>
          </div>
        </div>

        <nav className="footer-nav">
          <Link to="/products">Collection</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/wishlist">Saved</Link>
        </nav>
      </div>

      {/* Bottom — social + copyright */}
      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} Rated. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill">
            Instagram
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-pill">
            TikTok
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-pill">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
