import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionBanner.css';

const CollectionBanner = () => {
  return (
    <section className="collection-banner">
      <div className="cb-content">
        <div className="cb-left">
          <span className="cb-label">★ The Drop</span>
          <h2 className="cb-title">This Season's Biggest Fits</h2>
          <p className="cb-sub">
            Bold graphics. Loud colours. Gear that speaks before you do.
            Built for the streets, worn everywhere.
          </p>
          <Link to="/products" className="cb-cta">
            Shop the Collection →
          </Link>
        </div>
        <div className="cb-right">
          <img
            src="https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=1287&auto=format&fit=crop"
            alt="Collection campaign"
            className="cb-image"
          />
        </div>
      </div>
    </section>
  );
};

export default CollectionBanner;
