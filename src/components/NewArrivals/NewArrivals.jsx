import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartWishlist } from '../../context/CartWishlistContext';
import { getProducts } from '../../data/products';
import './NewArrivals.css';

const CARD_TINTS = ['#FDE8EE', '#DFF0F7', '#FAF7F0'];

function NewArrivals() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCartWishlist();

  useEffect(() => {
    setProducts(getProducts().slice(0, 3));
  }, []);

  if (products.length < 3) return null;

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <section className="new-arrivals-section">
      <div className="new-arrivals-header">
        <h2 className="section-mega-title">New In</h2>
        <Link to="/products" className="section-view-all">View All →</Link>
      </div>

      {/* Asymmetric: 1 large (60%) + 2 stacked (40%) */}
      <div className="new-arrivals-grid">

        {/* Large featured card */}
        <Link
          to={`/products/${products[0].id}`}
          className="na-card na-card-large"
        >
          <span className="na-badge badge-sticker badge-new">New ★</span>
          <div className="na-card-image-wrap" style={{ background: CARD_TINTS[0] }}>
            <img src={products[0].image} alt={products[0].title} className="na-card-image" />
            <button className="na-quick-add" onClick={(e) => handleQuickAdd(e, products[0])}>
              + Add to Bag
            </button>
          </div>
          <div className="na-card-info">
            <p className="na-card-title">{products[0].title}</p>
            <p className="na-card-price">${products[0].price.toFixed(2)}</p>
          </div>
        </Link>

        {/* Stacked small cards */}
        <div className="na-card-stack">
          {[products[1], products[2]].map((product, i) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="na-card na-card-small"
            >
              <span className={`na-badge badge-sticker ${i === 0 ? 'badge-hot' : 'badge-feature'}`}>
                {i === 0 ? 'Hot 🍦' : 'Pick ✦'}
              </span>
              <div className="na-card-image-wrap" style={{ background: CARD_TINTS[i + 1] }}>
                <img src={product.image} alt={product.title} className="na-card-image" />
                <button className="na-quick-add" onClick={(e) => handleQuickAdd(e, product)}>
                  + Add to Bag
                </button>
              </div>
              <div className="na-card-info">
                <p className="na-card-title">{product.title}</p>
                <p className="na-card-price">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
