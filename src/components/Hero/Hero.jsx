import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Short delay so browser paints before animation fires
    const t1 = setTimeout(() => {
      if (imgRef.current) imgRef.current.classList.add('hero-img-visible');
    }, 80);

    const t2 = setTimeout(() => {
      if (titleRef.current) titleRef.current.classList.add('title-slam');
    }, 220);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section className="hero-section">
      {/* Full-bleed background image */}
      <div className="hero-image-wrapper">
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2670&auto=format&fit=crop"
          alt="Shop the drop campaign"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content — slightly off-center left */}
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          Shop<br />The<br />Drop
        </h1>

        {/* USP pills styled as sticker tags */}
        <div className="hero-usps">
          <span className="usp-pill usp-pink">Free Shipping ✦</span>
          <span className="usp-pill usp-sky">New Drops Weekly 🍦</span>
          <span className="usp-pill usp-mustard">Easy Returns ★</span>
        </div>

        <Link to="/products" className="hero-cta">
          Browse Collection →
        </Link>
      </div>
    </section>
  );
};

export default Hero;
