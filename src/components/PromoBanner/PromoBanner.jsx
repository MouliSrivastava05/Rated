import React from 'react';
import './PromoBanner.css';

function PromoBanner() {
  return (
    <div className="promo-banner-container">
      <div className="promo-banner-content">
        <h2 className="promo-title">Limited Time Offer!</h2>
        <p className="promo-text">Get 20% off all electronics this week.</p>
        <button className="shop-now-button">Shop Now</button>
      </div>
    </div>
  );
}

export default PromoBanner; 