import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content hero-grid">
                <div className="hero-text">
                    <h1 className="hero-title">Discover Your Style</h1>
                    <p className="hero-subtitle">
                        Explore our curated collection of high-quality products, designed to elevate your everyday.
                    </p>
                    <Link to="/products" className="hero-cta-button">Shop Now</Link>
                </div>
                <div className="hero-image-container">
                    <img 
                        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80" 
                        alt="Fashionable products" 
                        className="hero-image"
                    />
                </div>
            </div>
            <div className="hero-gradient-overlay"></div>
        </section>
    );
};

export default Hero;
