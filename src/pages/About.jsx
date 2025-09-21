import React from "react";
import { 
  FaShieldAlt, 
  FaStar, 
  FaFilter, 
  FaUsers, 
  FaHeart, 
  FaRocket, 
  FaAward, 
  FaCheckCircle,
  FaGlobe,
  FaMobileAlt,
  FaShoppingCart,
  FaThumbsUp
} from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <FaAward className="badge-icon" />
            <span>Trusted by 100,000+ Users</span>
          </div>
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">Rated</span>
          </h1>
          <p className="hero-subtitle">
            Your trusted destination for honest product reviews, smart purchasing decisions, and authentic community experiences. We're redefining transparency in online shopping with cutting-edge technology and genuine user insights.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Reviews</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100K+</div>
              <div className="stat-label">Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8★</div>
              <div className="stat-label">Rating</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-cards">
            <div className="floating-card card-1">
              <FaStar className="card-icon" />
              <span>Verified Reviews</span>
            </div>
            <div className="floating-card card-2">
              <FaShieldAlt className="card-icon" />
              <span>Secure Platform</span>
            </div>
            <div className="floating-card card-3">
              <FaUsers className="card-icon" />
              <span>Community Driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="section-title">
              <FaRocket className="title-icon" />
              Our Mission
            </h2>
            <p className="mission-description">
              To empower users with real, verified reviews that help them make better product decisions. 
              At Rated, we believe that community-driven feedback is more powerful than paid advertising.
              We're building a platform where authenticity meets innovation.
            </p>
            <div className="mission-features">
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>100% Authentic Reviews</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>AI-Powered Quality Control</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>Community-Driven Insights</span>
              </div>
            </div>
          </div>
          <div className="mission-visual">
            <div className="mission-card">
              <div className="card-header">
                <FaHeart className="header-icon" />
                <span>Built with Love</span>
              </div>
              <div className="card-content">
                <p>Every feature is designed with our users in mind, creating an experience that's both powerful and delightful.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">
          <FaAward className="title-icon" />
          What We Offer
        </h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-container">
              <FaShieldAlt className="feature-icon" />
            </div>
            <h3>Verified Reviews</h3>
            <p>
              All reviews on Rated are submitted by real users with our advanced verification system. 
              No bots, no fluff — just authentic experiences you can trust.
            </p>
            <div className="feature-highlight">
              <span>99.9% Authenticity Rate</span>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-container">
              <FaStar className="feature-icon" />
            </div>
            <h3>Smart Ratings</h3>
            <p>
              Our intelligent rating system aggregates user sentiment, product quality, and market trends 
              to help you quickly assess what's truly worth your investment.
            </p>
            <div className="feature-highlight">
              <span>AI-Enhanced Accuracy</span>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-container">
              <FaFilter className="feature-icon" />
            </div>
            <h3>Advanced Filtering</h3>
            <p>
              Easily filter reviews by star rating, sentiment, keywords, user demographics, and purchase history 
              to find exactly what matters most to you.
            </p>
            <div className="feature-highlight">
              <span>20+ Filter Options</span>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-container">
              <FaMobileAlt className="feature-icon" />
            </div>
            <h3>Mobile Optimized</h3>
            <p>
              Seamless experience across all devices with our responsive design. 
              Review products, read insights, and make decisions on the go.
            </p>
            <div className="feature-highlight">
              <span>Lightning Fast</span>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-container">
              <FaUsers className="feature-icon" />
            </div>
            <h3>Community Driven</h3>
            <p>
              Join a vibrant community of smart shoppers who share honest opinions and help each other 
              make better purchasing decisions every day.
            </p>
            <div className="feature-highlight">
              <span>Active Community</span>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-container">
              <FaGlobe className="feature-icon" />
            </div>
            <h3>Global Reach</h3>
            <p>
              Access reviews and insights from users worldwide. Our platform supports multiple languages 
              and currencies for a truly global shopping experience.
            </p>
            <div className="feature-highlight">
              <span>50+ Countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rated Section */}
      <section className="why-rated-section">
        <div className="why-rated-content">
          <div className="why-rated-text">
            <h2 className="section-title">
              <FaThumbsUp className="title-icon" />
              Why Choose Rated?
            </h2>
            <p className="why-rated-description">
              In a world full of sponsored content and fake testimonials, Rated brings back trust through 
              community voice. Whether you're buying gadgets, fashion, or daily essentials — we're here 
              to help you choose better with confidence.
            </p>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-number">01</div>
                <div className="benefit-content">
                  <h4>Transparency First</h4>
                  <p>No hidden sponsorships or paid placements</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">02</div>
                <div className="benefit-content">
                  <h4>Smart Technology</h4>
                  <p>AI-powered insights and quality control</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">03</div>
                <div className="benefit-content">
                  <h4>User-Centric Design</h4>
                  <p>Every feature designed with your needs in mind</p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-rated-visual">
            <div className="trust-indicators">
              <div className="trust-item">
                <FaShieldAlt className="trust-icon" />
                <span>SSL Secured</span>
              </div>
              <div className="trust-item">
                <FaCheckCircle className="trust-icon" />
                <span>GDPR Compliant</span>
              </div>
              <div className="trust-item">
                <FaHeart className="trust-icon" />
                <span>Privacy First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Make Smarter Purchases?</h2>
          <p>Join thousands of users who trust Rated for honest product reviews</p>
          <div className="cta-buttons">
            <button className="cta-primary">
              <FaShoppingCart className="button-icon" />
              Start Shopping
            </button>
            <button className="cta-secondary">
              <FaUsers className="button-icon" />
              Join Community
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="footer-content">
          <p>Built with trust, transparency, and cutting-edge technology in mind.</p>
          <div className="signature">
            <FaHeart className="heart-icon" />
            <span>– The Rated Team</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;