import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>Welcome to Rated</h1>
      <p className="intro">
        Rated is your trusted destination to explore honest product reviews, make confident purchases, and share your experience with the world. We’re redefining transparency in online shopping.
      </p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          To empower users with real, verified reviews that help them make better product decisions.
          At Rated, we believe that community-driven feedback is more powerful than paid advertising.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Offer</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Verified Reviews</h3>
            <p>
              All reviews on Rated are submitted by real users. No bots, no fluff — just real experiences.
            </p>
          </div>
          <div className="value-card">
            <h3>Smart Ratings</h3>
            <p>
              Our rating system aggregates user sentiment and product quality to help you quickly assess what's worth it.
            </p>
          </div>
          <div className="value-card">
            <h3>Interactive Filtering</h3>
            <p>
              Easily filter reviews by star rating, sentiment, or keywords to find what matters most to you.
            </p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>Why Rated?</h2>
        <p>
          In a world full of sponsored content and fake testimonials, Rated brings back trust through community voice.
          Whether you're buying gadgets, fashion, or daily essentials — we're here to help you choose better.
        </p>
      </div>

      <div className="about-footer">
        Built with trust and transparency in mind.  
        <div className="signature">– The Rated Team</div>
      </div>
    </div>
  );
};

export default About;