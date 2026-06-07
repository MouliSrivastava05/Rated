import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/products';
import './FeaturedCat.css';

// Alternating pill colors
const PILL_COLORS = [
  { bg: '#F5B8CC', color: '#1A1209' },  // pink
  { bg: '#1A1209', color: '#FAF7F0' },  // near-black
  { bg: '#A8D8EA', color: '#1A1209' },  // sky
  { bg: '#FAF7F0', color: '#1A1209' },  // cream
];

function FeaturedCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(CATEGORIES);
  }, []);

  return (
    <section className="featcat-section">
      <div className="featcat-header">
        <h2 className="section-mega-title">Shop by Vibe</h2>
      </div>

      <div className="featcat-pills">
        {categories.map((cat, index) => {
          const style = PILL_COLORS[index % PILL_COLORS.length];
          return (
            <Link
              key={cat}
              to={`/products?category=${cat}`}
              className="featcat-pill"
              style={{ '--pill-bg': style.bg, '--pill-color': style.color }}
            >
              {cat}
            </Link>
          );
        })}
        {/* Bonus "All Products" pill */}
        <Link
          to="/products"
          className="featcat-pill"
          style={{ '--pill-bg': '#F2C83E', '--pill-color': '#1A1209' }}
        >
          All Products ★
        </Link>
      </div>
    </section>
  );
}

export default FeaturedCategories;
