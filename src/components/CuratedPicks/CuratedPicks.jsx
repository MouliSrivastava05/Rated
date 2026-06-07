import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useCartWishlist } from '../../context/CartWishlistContext';
import { getProducts } from '../../data/products';
import './CuratedPicks.css';

const PICKS_CONFIG = [
  { tint: '#FEF3C7', badge: 'badge-feature', badgeText: 'Featured ✦' },
  { tint: '#FDE8EE', badge: 'badge-new',     badgeText: 'New ★'      },
  { tint: '#DFF0F7', badge: 'badge-hot',     badgeText: 'Hot 🍦'     },
];

function CuratedPicks() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCartWishlist();

  useEffect(() => {
    setProducts(getProducts().slice(4, 7));
  }, []);

  if (products.length < 3) return null;

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <section className="curated-section">
      <div className="curated-header">
        <h2 className="section-mega-title">Curated Picks</h2>
        <Link to="/products" className="section-view-all">See All →</Link>
      </div>

      <div className="curated-grid">
        {products.map((product, i) => {
          const { tint, badge, badgeText } = PICKS_CONFIG[i];
          return (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="cp-card"
            >
              {/* Badge — absolutely positioned */}
              <span className={`cp-badge badge-sticker ${badge}`}>{badgeText}</span>

              {/* Image zone — colored bg here only */}
              <div className="cp-image-wrap" style={{ background: tint }}>
                <img src={product.image} alt={product.title} className="cp-image" />
                <button className="na-quick-add" onClick={(e) => handleQuickAdd(e, product)}>
                  + Add to Bag
                </button>
              </div>

              {/* Info strip — always cream, always 80px */}
              <div className="cp-card-info">
                <p className="cp-card-title">{product.title}</p>
                <p className="cp-card-price">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default CuratedPicks;
