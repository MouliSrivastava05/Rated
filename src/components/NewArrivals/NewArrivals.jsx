import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaRegHeart, FaEye } from 'react-icons/fa';
import { useCartWishlist } from '../../context/CartWishlistContext';
import './NewArrivals.css';

function NewArrivals() {
  const [products, setProducts] = useState([]);
  const { addToCart, toggleLike, isLiked } = useCartWishlist();

  useEffect(() => {
    // Fetch all products
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        // Sort by ID in descending order to get newest (assuming higher ID means newer)
        const newestProducts = data.sort((a, b) => b.id - a.id);
        // Take the first few, e.g., 4
        setProducts(newestProducts.slice(0, 4));
      });
  }, []);

  return (
    <section className="new-arrivals-section">
      <div className="new-arrivals-header">
        <h2 className="new-arrivals-title">New Arrivals</h2>
        <a href="/products?sort=newest" className="new-arrivals-viewall">View All</a>
      </div>
      <div className="new-arrivals-grid">
        {products.map((product, idx) => (
          <article key={product.id} className={`new-arrivals-card animate-fadein`} style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}>
            <span className="new-arrivals-badge">New</span>
            <img src={product.image} alt={product.title} />
            <div className="new-arrivals-card-info">
              <h3 className="new-arrivals-card-title">{product.title}</h3>
              <p className="new-arrivals-card-price">${product.price.toFixed(2)}</p>
              <div className="new-arrivals-card-actions">
                <Link to={`/products/${product.id}`} className="card-action-btn view-details-btn" title="View Details">
                  <FaEye />
                </Link>
                <button className="card-action-btn add-to-cart-btn" onClick={() => addToCart(product)} title="Add to Cart">
                  <FaShoppingCart />
                </button>
                <button className="card-action-btn wishlist-btn" onClick={() => toggleLike(product)} title="Add to Wishlist">
                  {isLiked(product.id) ? <FaHeart className="wishlist-icon liked" /> : <FaRegHeart className="wishlist-icon" />}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals; 